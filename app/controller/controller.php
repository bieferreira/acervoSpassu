<?php
session_start();

// Gera um token dinâmico
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

/**
 * Recupera token CSRF da sessão
 * 
 * @param string $_SESSION['csrf_token'] var session token CSRF 
 * 
 * @return string retorna token CSRF da session
 */
function getCsrfToken() {
    return $_SESSION['csrf_token'];
}

/**
 * Verifica token CSRF da sessão
 * 
 * @param string $token var entrada local token CSRF 
 * 
 * @return string retorna true false da validação hash_equals Verifica se o token é igual ao armazenado na sessão
 */
function verifyCsrfToken($token) {
    return hash_equals($_SESSION['csrf_token'], $token);
}


/**
 * Apresenta mensagem de erro 
 * 
 * @param string $mensagemPrincipal mensagem Principal a ser exibida
 * @param string $mensagemSecundaria mensagem Secundaria a ser exibida
 * 
 */
function setMenssageError($mensagemPrincipal, $mensagemSecundaria) {
    echo "<h3 style='color:red'>Erro: $mensagemPrincipal</h3>";
    echo "<p style='color:red'>$mensagemSecundaria</p>";
    // error_log("Erro ao inserir autor no banco de dados: " . $e->getMessage()); // Descomente se necessário
    //die();
}

/**
 * Controla dinamicamente a visualização ou não da mensagem de erro escrita no iframe
 */
function setIframeMensagemErro() {
    echo "<script>
    parent.document.getElementById('iframeManter').classList.toggle('iframe-grid-off');
    setTimeout(() => { parent.document.getElementById('iframeManter').classList.toggle('iframe-grid-off'); }, '5000');
    </script>";
}

/**
 * Redireciona automaticamente para aplicação principal.php após 5 segundos
 */
function redirecionaPrincipal($destino = '../../principal.html') {
    echo "<script>setTimeout(() => { parent.window.location.href='". $destino ."'; }, '5000');</script>";
}

/**
 * (AINDA NÃO IMPLEMENTADO) Registra o log de erro do sistema
 * 
 * @param string $mensagemErro mensagem a ser registrada
 * @param string $arquivoErro dados do arquivo do erro
 * @param string $linhaErro dados da linha do erro
 * @param string $mapearOrigemErro dados para rastrear a origem do erro
 * 
 */
function setLogSistema($mensagemErro, $arquivoErro, $linhaErro, $mapearOrigemErro) {
    return true;
}


$erroValorExclusao = "Valor exclusão não informado corretamente";
$erroCampoNumerico = "Valor chave registro não informado ou não é numérico";
$erroValorUsuario = "Valor usuário não informado ou maior que definido";
$erroQuantidadeCaracteres = "Valor não informado ou maior que definido";

?>