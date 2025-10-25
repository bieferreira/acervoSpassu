<?php
namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;

use App\Core\Container;
use App\Core\Validator;
use App\Models\Entities\Livro;
use App\Models\Repositories\LivroRepository;
use Exception;

class LivroController {
    private $repository;
    private $request;
    private $response;
    private $logger;

    public function __construct() {
        $this->repository = new LivroRepository();
        $this->request = new Request();
        $this->response = new Response();
    }

    public function index() {
        try {
            $livros = $this->repository->findAll();
            require_once __DIR__ . '/../Views/livro/grid.php';
        } catch (Exception $e) {
            $this->response->setError($e->getMessage())->send();
        }
    }

    public function create() {
        try {
            require_once __DIR__ . '/../views/livro/form.php';
        } catch (Exception $e) {
            $this->response->setError($e->getMessage())->send();
        }
    }

    public function store() {
        try {
            $data = $this->request->getBody();
            $data = $this->request->sanitizeInput($data);

            $livro = new Livro();
            $livro->setTitulo($data['titulo']);
            $livro->setEditora($data['editora']);
            $livro->setEdicao($data['edicao']);
            $livro->setAnoPublicacao($data['anopublicacao']);
            $livro->setValor(str_replace(['.', ','], ['', '.'], $data['valor']));

            if ($this->repository->save($livro)) {
                $this->response->json([
                    'success' => true,
                    'message' => 'Livro salvo com sucesso!'
                ])->send();
            }
        } catch (Exception $e) {
            $this->response->setError($e->getMessage())->send();
        }
    }

    public function edit($id) {
        try {
            $livro = $this->repository->findById($id);
            if (!$livro) {
                throw new Exception("Livro não encontrado");
            }
            require_once __DIR__ . '/../views/livro/form.php';
        } catch (Exception $e) {
            $this->response->setError($e->getMessage())->send();
        }
    }

    public function update($id) {
        try {
            $data = $this->request->getBody();
            $data = $this->request->sanitizeInput($data);

            $livro = $this->repository->findById($id);
            if (!$livro) {
                throw new Exception("Livro não encontrado");
            }

            $livro->setTitulo($data['titulo']);
            $livro->setEditora($data['editora']);
            $livro->setEdicao($data['edicao']);
            $livro->setAnoPublicacao($data['anopublicacao']);
            $livro->setValor(str_replace(['.', ','], ['', '.'], $data['valor']));

            if ($this->repository->save($livro)) {
                $this->response->json([
                    'success' => true,
                    'message' => 'Livro atualizado com sucesso!'
                ])->send();
            }
        } catch (Exception $e) {
            $this->response->setError($e->getMessage())->send();
        }
    }

    public function delete($id) {
        try {
            if ($this->repository->delete($id)) {
                $this->response->json([
                    'success' => true,
                    'message' => 'Livro excluído com sucesso!'
                ])->send();
            }
        } catch (Exception $e) {
            $this->response->setError($e->getMessage())->send();
        }
    }
}