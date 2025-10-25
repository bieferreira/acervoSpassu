<?php
namespace App\Core;

class Logger {
    private const LOG_PATH = __DIR__ . '/../../logs/';
    private const ERROR_LOG = 'error.log';
    private const ACCESS_LOG = 'access.log';

    public function __construct() {
        if (!is_dir(self::LOG_PATH)) {
            mkdir(self::LOG_PATH, 0777, true);
        }
    }

    public function error($message, $context = []) {
        $this->log('ERROR', $message, $context, self::ERROR_LOG);
    }

    public function info($message, $context = []) {
        $this->log('INFO', $message, $context, self::ACCESS_LOG);
    }

    private function log($level, $message, $context, $file) {
        $date = date('Y-m-d H:i:s');
        $contextStr = json_encode($context);
        $logMessage = "[{$date}] [{$level}] {$message} {$contextStr}\n";
        
        file_put_contents(self::LOG_PATH . $file, $logMessage, FILE_APPEND);
    }
}