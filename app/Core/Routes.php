<?php
namespace App\Core;

use App\Controllers\LivroController;
use App\Controllers\AutorController;
use App\Controllers\AssuntoController;

class Routes {
    public static function register(Router $router) {
        // Rota principal
        $router->get('/', function() {
            header('Location: /livros');
            exit;
        });

        // Rotas para Livros
        $router->get('/livros', [LivroController::class, 'index']);
        $router->get('/livros/novo', [LivroController::class, 'create']);
        $router->post('/livros', [LivroController::class, 'store']);
        $router->get('/livros/{id}', [LivroController::class, 'show']);
        $router->get('/livros/{id}/editar', [LivroController::class, 'edit']);
        $router->put('/livros/{id}', [LivroController::class, 'update']);
        $router->delete('/livros/{id}', [LivroController::class, 'delete']);

        // Rotas para Autores
        $router->get('/autores', [AutorController::class, 'index']);
        $router->get('/autores/novo', [AutorController::class, 'create']);
        $router->post('/autores', [AutorController::class, 'store']);
        $router->get('/autores/{id}', [AutorController::class, 'show']);
        $router->get('/autores/{id}/editar', [AutorController::class, 'edit']);
        $router->put('/autores/{id}', [AutorController::class, 'update']);
        $router->delete('/autores/{id}', [AutorController::class, 'delete']);

        // Rotas para Assuntos
        $router->get('/assuntos', [AssuntoController::class, 'index']);
        $router->get('/assuntos/novo', [AssuntoController::class, 'create']);
        $router->post('/assuntos', [AssuntoController::class, 'store']);
        $router->get('/assuntos/{id}', [AssuntoController::class, 'show']);
        $router->get('/assuntos/{id}/editar', [AssuntoController::class, 'edit']);
        $router->put('/assuntos/{id}', [AssuntoController::class, 'update']);
        $router->delete('/assuntos/{id}', [AssuntoController::class, 'delete']);

        // Rota 404 - Não encontrado
        $router->notFound(function() {
            header("HTTP/1.0 404 Not Found");
            require __DIR__ . '/../views/errors/404.php';
        });
    }
}