<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\Core\Container;
use App\Core\Router;
use App\Core\Routes;

// Iniciar sessão
session_start();

// Configurar timezone
date_default_timezone_set('America/Sao_Paulo');

// Registrar dependências
Container::register();

// Criar instância do Router
$router = new Router();

// Registrar rotas
Routes::register($router);

// Resolver a rota atual
try {
    // Simular métodos PUT e DELETE via POST
    $requestMethod = $_SERVER['REQUEST_METHOD'];
    if ($requestMethod === 'POST') {
        if (isset($_POST['_method'])) {
            $requestMethod = strtoupper($_POST['_method']);
        }
    }

    $router->resolve(
        $_SERVER['REQUEST_URI'],
        $requestMethod
    );
} catch (Exception $e) {
    if (getenv('APP_DEBUG')) {
        throw $e;
    }
    
    header("HTTP/1.0 500 Internal Server Error");
    require __DIR__ . '/app/views/errors/500.php';
}