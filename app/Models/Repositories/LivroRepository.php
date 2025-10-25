<?php
namespace App\Models\Repositories;

use PDO;
use PDOException;
use App\Core\Database;
use App\Models\Entities\Livro;

class LivroRepository {
    private $db;
    private $table = 'Livro';

    public function __construct() {
        $this->db = Database::getInstance()->getConnection();
    }

    public function findAll() {
        $sql = "SELECT * FROM {$this->table} WHERE Excluido = 0";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        
        $livros = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $livros[] = new Livro($row);
        }
        return $livros;
    }

    public function findById($id) {
        $sql = "SELECT * FROM {$this->table} WHERE CodL = :id AND Excluido = 0";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        
        if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            return new Livro($row);
        }
        return null;
    }

    public function save(Livro $livro) {
        if ($livro->getCodL()) {
            return $this->update($livro);
        }
        return $this->insert($livro);
    }

    private function insert(Livro $livro) {
        $sql = "INSERT INTO {$this->table} (Titulo, Editora, Edicao, AnoPublicacao, Valor, CodU_Inclusao, DataU_Inclusao) 
                VALUES (:titulo, :editora, :edicao, :anopublicacao, :valor, :codu_inclusao, :datau_inclusao)";
        
        $stmt = $this->db->prepare($sql);
        $this->bindLivroParams($stmt, $livro);
        $stmt->bindValue(':codu_inclusao', CODUINCLUSAO);
        $stmt->bindValue(':datau_inclusao', date('Y-m-d H:i:s'));
        
        if ($stmt->execute()) {
            return $this->db->lastInsertId();
        }
        return false;
    }

    private function update(Livro $livro) {
        $sql = "UPDATE {$this->table} SET 
                Titulo = :titulo,
                Editora = :editora,
                Edicao = :edicao,
                AnoPublicacao = :anopublicacao,
                Valor = :valor,
                CodU_Alteracao = :codu_alteracao,
                DataU_Alteracao = :datau_alteracao
                WHERE CodL = :codl";
        
        $stmt = $this->db->prepare($sql);
        $this->bindLivroParams($stmt, $livro);
        $stmt->bindValue(':codl', $livro->getCodL());
        $stmt->bindValue(':codu_alteracao', CODUINCLUSAO);
        $stmt->bindValue(':datau_alteracao', date('Y-m-d H:i:s'));
        
        return $stmt->execute();
    }

    private function bindLivroParams($stmt, Livro $livro) {
        $stmt->bindValue(':titulo', $livro->getTitulo());
        $stmt->bindValue(':editora', $livro->getEditora());
        $stmt->bindValue(':edicao', $livro->getEdicao());
        $stmt->bindValue(':anopublicacao', $livro->getAnoPublicacao());
        $stmt->bindValue(':valor', $livro->getValor());
    }

    public function delete($id) {
        $sql = "UPDATE {$this->table} SET 
                Excluido = 1,
                CodU_Exclusao = :codu_exclusao,
                DataU_Exclusao = :datau_exclusao
                WHERE CodL = :id";
        
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(':id', $id);
        $stmt->bindValue(':codu_exclusao', CODUINCLUSAO);
        $stmt->bindValue(':datau_exclusao', date('Y-m-d H:i:s'));
        
        return $stmt->execute();
    }
}