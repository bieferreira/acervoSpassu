<?php
class Request {
    private $params;
    private $method;
    private $body;

    public function __construct() {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->params = $_GET;
        $this->body = $_POST;

        if ($this->method === 'POST') {
            $this->validateCsrfToken();
        }
    }

    public function getMethod() {
        return $this->method;
    }

    public function getParam($key, $default = null) {
        return $this->params[$key] ?? $default;
    }

    public function getBody($key = null, $default = null) {
        if ($key === null) {
            return $this->body;
        }
        return $this->body[$key] ?? $default;
    }

    private function validateCsrfToken() {
        if (!isset($_POST['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
            throw new Exception("Token CSRF inválido");
        }
    }

    public function sanitizeInput($input) {
        if (is_array($input)) {
            return array_map([$this, 'sanitizeInput'], $input);
        }
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }
}