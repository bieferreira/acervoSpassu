<?php
namespace App\Core;

class Response {
    private $statusCode = 200;
    private $headers = [];
    private $content;

    public function setStatusCode($code) {
        $this->statusCode = $code;
        return $this;
    }

    public function addHeader($name, $value) {
        $this->headers[$name] = $value;
        return $this;
    }

    public function redirect($url) {
        header('Location: ' . $url);
        exit;
    }

    public function json($data) {
        $this->addHeader('Content-Type', 'application/json');
        $this->content = json_encode($data);
        return $this;
    }

    public function setContent($content) {
        $this->content = $content;
        return $this;
    }

    public function send() {
        http_response_code($this->statusCode);
        
        foreach ($this->headers as $name => $value) {
            header("$name: $value");
        }

        echo $this->content;
        exit;
    }

    public function setError($message, $code = 400) {
        return $this->setStatusCode($code)->json([
            'error' => true,
            'message' => $message
        ]);
    }
}