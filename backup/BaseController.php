<?php
namespace App\Core;

abstract class BaseController {
    protected $request;
    protected $response;
    protected $logger;
    protected $validator;

    public function __construct() {
        $this->request = Container::get('Request');
        $this->response = Container::get('Response');
        $this->logger = Container::get('Logger');
    }

    protected function validate(array $data, array $rules) {
        $this->validator = new Validator($data);
        
        foreach ($rules as $field => $fieldRules) {
            foreach ($fieldRules as $rule => $params) {
                if (is_numeric($rule)) {
                    $rule = $params;
                    $params = [];
                }
                
                if (method_exists($this->validator, $rule)) {
                    $this->validator->$rule($field, ...(array)$params);
                }
            }
        }

        if ($this->validator->hasErrors()) {
            throw new \Exception($this->validator->getFirstError());
        }

        return true;
    }

    protected function render($view, $data = []) {
        extract($data);
        require_once __DIR__ . "/../views/{$view}.php";
    }

    protected function jsonResponse($data, $status = 200) {
        $this->response->setStatusCode($status)->json($data)->send();
    }

    protected function errorResponse($message, $status = 400) {
        $this->logger->error($message);
        $this->response->setError($message, $status)->send();
    }
}