<?php
namespace App\Core;

class Validator {
    private $errors = [];
    private $data;

    public function __construct(array $data) {
        $this->data = $data;
    }

    public function required($field, $message = null) {
        if (empty($this->data[$field])) {
            $this->errors[$field] = $message ?? "O campo {$field} é obrigatório";
        }
        return $this;
    }

    public function numeric($field, $message = null) {
        if (!empty($this->data[$field]) && !is_numeric(str_replace(['.', ','], ['', '.'], $this->data[$field]))) {
            $this->errors[$field] = $message ?? "O campo {$field} deve ser numérico";
        }
        return $this;
    }

    public function minLength($field, $length, $message = null) {
        if (!empty($this->data[$field]) && strlen($this->data[$field]) < $length) {
            $this->errors[$field] = $message ?? "O campo {$field} deve ter no mínimo {$length} caracteres";
        }
        return $this;
    }

    public function maxLength($field, $length, $message = null) {
        if (!empty($this->data[$field]) && strlen($this->data[$field]) > $length) {
            $this->errors[$field] = $message ?? "O campo {$field} deve ter no máximo {$length} caracteres";
        }
        return $this;
    }

    public function year($field, $message = null) {
        if (!empty($this->data[$field])) {
            $year = (int)$this->data[$field];
            $currentYear = (int)date('Y');
            if ($year < 1800 || $year > $currentYear) {
                $this->errors[$field] = $message ?? "O ano deve estar entre 1800 e {$currentYear}";
            }
        }
        return $this;
    }

    public function hasErrors() {
        return !empty($this->errors);
    }

    public function getErrors() {
        return $this->errors;
    }

    public function getFirstError() {
        return reset($this->errors);
    }
}