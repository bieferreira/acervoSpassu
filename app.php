<?php
return [
    'app' => [
        'name' => 'Acervo SPASSU',
        'version' => '1.0.0',
        'debug' => true,
        'timezone' => 'America/Sao_Paulo',
    ],
    
    'database' => [
        'host' => getenv('MYSQL_HOST') ?: 'localhost',
        'dbname' => getenv('MYSQL_DBNAME') ?: 'acervo_spassu',
        'user' => getenv('MYSQL_USER') ?: 'root',
        'password' => getenv('MYSQL_PASSWORD') ?: '',
        'charset' => 'utf8mb4',
    ],
    
    'security' => [
        'session_lifetime' => 7200, // 2 hours
        'csrf_token_lifetime' => 3600, // 1 hour
    ],
    
    'logging' => [
        'path' => __DIR__ . '/../logs',
        'level' => 'debug',
    ],
    
    'views' => [
        'path' => __DIR__ . '/../app/views',
        'cache' => __DIR__ . '/../cache/views',
    ]
];