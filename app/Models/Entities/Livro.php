<?php
namespace App\Models\Entities;

class Livro {
    private $codL;
    private $titulo;
    private $editora;
    private $edicao;
    private $anoPublicacao;
    private $valor;
    private $autores = [];
    private $assuntos = [];

    public function __construct(array $data = []) {
        $this->hydrate($data);
    }

    public function hydrate(array $data) {
        if (isset($data['CodL'])) $this->codL = $data['CodL'];
        if (isset($data['Titulo'])) $this->titulo = $data['Titulo'];
        if (isset($data['Editora'])) $this->editora = $data['Editora'];
        if (isset($data['Edicao'])) $this->edicao = $data['Edicao'];
        if (isset($data['AnoPublicacao'])) $this->anoPublicacao = $data['AnoPublicacao'];
        if (isset($data['Valor'])) $this->valor = $data['Valor'];
    }

    // Getters
    public function getCodL() { return $this->codL; }
    public function getTitulo() { return $this->titulo; }
    public function getEditora() { return $this->editora; }
    public function getEdicao() { return $this->edicao; }
    public function getAnoPublicacao() { return $this->anoPublicacao; }
    public function getValor() { return $this->valor; }
    public function getAutores() { return $this->autores; }
    public function getAssuntos() { return $this->assuntos; }

    // Setters
    public function setTitulo($titulo) { $this->titulo = $titulo; }
    public function setEditora($editora) { $this->editora = $editora; }
    public function setEdicao($edicao) { $this->edicao = $edicao; }
    public function setAnoPublicacao($ano) { $this->anoPublicacao = $ano; }
    public function setValor($valor) { $this->valor = $valor; }
    
    public function addAutor($autor) {
        $this->autores[] = $autor;
    }

    public function addAssunto($assunto) {
        $this->assuntos[] = $assunto;
    }

    public function toArray() {
        return [
            'CodL' => $this->codL,
            'Titulo' => $this->titulo,
            'Editora' => $this->editora,
            'Edicao' => $this->edicao,
            'AnoPublicacao' => $this->anoPublicacao,
            'Valor' => $this->valor
        ];
    }
}