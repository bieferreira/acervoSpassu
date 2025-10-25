<?php
namespace App\Core;

class Router {
    private $routes = [];
    private $params = [];
    private $notFoundCallback;

    public function get($path, $callback) {
        return $this->addRoute('GET', $path, $callback);
    }

    public function post($path, $callback) {
        return $this->addRoute('POST', $path, $callback);
    }

    public function put($path, $callback) {
        return $this->addRoute('PUT', $path, $callback);
    }

    public function delete($path, $callback) {
        return $this->addRoute('DELETE', $path, $callback);
    }

    private function addRoute($method, $path, $callback) {
        // Converter o padrão de rota em uma expressão regular
        $pattern = $this->convertPatternToRegex($path);
        
        $this->routes[] = [
            'method' => $method,
            'pattern' => $pattern,
            'callback' => $callback
        ];

        return $this;
    }

    private function convertPatternToRegex($pattern) {
        // Converter parâmetros nomeados como {id} em grupos de captura (?P<id>[^/]+)
        return '#^' . preg_replace('/\{([a-zA-Z][a-zA-Z0-9]*)\}/', '(?P<$1>[^/]+)', $pattern) . '$#';
    }

    public function notFound($callback) {
        $this->notFoundCallback = $callback;
    }

    public function resolve($requestUri, $requestMethod) {
        // Remover query string e trailing slash
        $requestUri = parse_url($requestUri, PHP_URL_PATH);
        $requestUri = rtrim($requestUri, '/');
        $requestUri = empty($requestUri) ? '/' : $requestUri;

        foreach ($this->routes as $route) {
            if ($route['method'] !== $requestMethod) {
                continue;
            }

            if (preg_match($route['pattern'], $requestUri, $matches)) {
                // Filtrar apenas os parâmetros nomeados
                $params = array_filter($matches, function($key) {
                    return !is_numeric($key);
                }, ARRAY_FILTER_USE_KEY);

                $this->params = $params;
                return $this->executeCallback($route['callback']);
            }
        }

        if ($this->notFoundCallback) {
            return call_user_func($this->notFoundCallback);
        }

        header("HTTP/1.0 404 Not Found");
        echo "404 Not Found";
        exit;
    }

    private function executeCallback($callback) {
        if (is_array($callback)) {
            [$controllerClass, $method] = $callback;
            
            if (!class_exists($controllerClass)) {
                throw new \Exception("Controller {$controllerClass} não encontrado");
            }

            $controller = new $controllerClass();
            
            if (!method_exists($controller, $method)) {
                throw new \Exception("Método {$method} não encontrado em {$controllerClass}");
            }

            return call_user_func_array([$controller, $method], $this->params);
        }

        return call_user_func_array($callback, $this->params);
    }

    public function getParams() {
        return $this->params;
    }
}