<?php
namespace App\Core;

class Container {
    private static $container = [];

    public static function set($key, $value) {
        self::$container[$key] = $value;
    }

    public static function get($key) {
        if (!isset(self::$container[$key])) {
            throw new \Exception("Dependência não encontrada: {$key}");
        }
        return self::$container[$key];
    }

    public static function register() {
        // Registrar dependências comuns
        self::set('Database', Database::getInstance());
        self::set('Request', new Request());
        self::set('Response', new Response());
        self::set('Logger', new Logger());
    }
}