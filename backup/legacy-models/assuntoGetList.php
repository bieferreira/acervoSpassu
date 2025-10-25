<?php

require 'conexaoDataBase.php';

try {

    if (!isset($excluido) || (strlen($excluido) < 1 && strlen($excluido) > 11)) {
        throw new InvalidArgumentException($erroValorExclusao);
    }

    $sql = "SELECT * FROM ".MIGRATION."Assunto WHERE Excluido = :excluido ORDER BY Descricao LIMIT :limit OFFSET :offset";
    $sqlPdo = $pdo->prepare($sql);
    $sqlPdo->bindParam(':excluido', $excluido, PDO::PARAM_INT);
    $sqlPdo->bindParam(':limit', $limit, PDO::PARAM_INT);
    $sqlPdo->bindParam(':offset', $offset, PDO::PARAM_INT);
    $sqlPdo->execute();
    $retornoPdo = $sqlPdo->fetchAll(PDO::FETCH_ASSOC);

    $totalSql = "SELECT COUNT(*) as total FROM ".MIGRATION."Assunto WHERE Excluido = :excluido";
    $totalPdo = $pdo->prepare($totalSql);
    $totalPdo->bindParam(':excluido', $excluido, PDO::PARAM_INT);
    $totalPdo->execute();
    $total = $totalPdo->fetch(PDO::FETCH_ASSOC)['total'];
    $totalPages = ceil($total / $limit);
    
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