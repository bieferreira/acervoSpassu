<?php
require '../controller/controller.php';

const HOST = 'AcervoSpassuMysql';
const BANCODADOS = 'acervodigital';
const USUARIOBANCODADOS = 'root';
const SENHABANCODADOS = '4c3rv0Sp4ssu';

const EXCLUIDO = '0';
const PAGINAINICIAL = 1;
const REGISTROSPORPAGINA = 10;
const CODUINCLUSAO = 'INCLUSAO';
const CODUALTERACAO = 'ALTERACAO';
const MIGRATION = 'Migration';

try {

    if (HOST != 'AcervoSpassuMysql') {
        throw new InvalidArgumentException("Verifique o HOST de conexão");
    }

    if (empty(HOST) || empty(BANCODADOS) || empty(USUARIOBANCODADOS) || empty(SENHABANCODADOS)) {
        throw new InvalidArgumentException("Parametros de coxexão não informado");
    }

    $pdo = new PDO("mysql:host=".HOST.";dbname=".BANCODADOS."", USUARIOBANCODADOS, SENHABANCODADOS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $excluido = EXCLUIDO;
    $page = isset($_GET['page']) ? (int)$_GET['page'] : PAGINAINICIAL;
    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : REGISTROSPORPAGINA;
    $offset = ($page - 1) * $limit;
    
} catch (PDOException $e) {
    
    setLogSistema(mensagemErro : "Erro de banco de dados: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
    setMenssageError(mensagemPrincipal : "Não foi possível conectar ao banco de dados.", mensagemSecundaria : "Por favor, tente novamente mais tarde.");
    die();

} catch (InvalidArgumentException $e) {
    
    setLogSistema(mensagemErro : "Erro de argumento inválido: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
    setMenssageError(mensagemPrincipal : "Não foi possível conectar ao banco de dados.", mensagemSecundaria : $e->getMessage());
    die();

} catch (Exception $e) {

    setLogSistema(mensagemErro : "Erro de exceção: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
    setMenssageError(mensagemPrincipal : "Não foi possível conectar ao banco de dados.", mensagemSecundaria : $e->getMessage());
    die();
}

?>
