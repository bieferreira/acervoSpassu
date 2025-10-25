<?php
namespace App\Core;

use PDO;
use PDOException;
use Exception;


class Database {
    private static $instance = null;
    private $pdo;

    private function __construct() {
        // Carrega as configurações do banco de dados
        $config = require __DIR__ . '/../../config/app.php';
        $db = $config['database'];
        try {
            $this->pdo = new PDO(
                "mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'],
                $db['user'],
                $db['password'],
                array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . ($db['charset'] ?? 'utf8'))
            );
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            throw new Exception("Erro de conexão com o banco de dados: " . $e->getMessage());
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->pdo;
    }
}