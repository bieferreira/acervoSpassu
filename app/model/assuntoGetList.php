<?php
require 'conexaoDataBase.php';

$excluido = EXCLUIDO;

try {

    if (!isset($excluido) || (strlen($excluido) < 1 && strlen($excluido) > 11)) {
        throw new InvalidArgumentException($erroValorExclusao);
    }

    $sql = "SELECT * FROM Assunto WHERE Excluido = :excluido ORDER BY Descricao";
    $sqlPdo = $pdo->prepare($sql);
    $sqlPdo->bindParam(':excluido', $excluido);
    $sqlPdo->execute();
    $retornoPdo = $sqlPdo->fetchAll(PDO::FETCH_ASSOC);
    
} catch (PDOException $e) {
    
    setLogSistema(mensagemErro : "Erro de banco de dados: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
    setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum assunto.", mensagemSecundaria : "Por favor, tente novamente mais tarde.");
    redirecionaPrincipal();
    die();

} catch (InvalidArgumentException $e) {
    
    setLogSistema(mensagemErro : "Erro de argumento inválido: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
    setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum assunto.", mensagemSecundaria : $e->getMessage());
    redirecionaPrincipal();
    die();

} catch (Exception $e) {

    setLogSistema(mensagemErro : "Erro de exceção: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
    setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum assunto.", mensagemSecundaria : $e->getMessage());
    redirecionaPrincipal();
    die();
}

?>