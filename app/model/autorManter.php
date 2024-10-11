<?php
require 'conexaoDataBase.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (!isset($_POST['csrf_token'], $_POST['nomeautor'])) {
        setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        setIframeMensagemErro();
    }
    
    if (!verifyCsrfToken($_POST['csrf_token'])) {
        setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        setIframeMensagemErro();
    } 
    
    $mensagemerro = false;
    $codau = trim(htmlspecialchars($_POST['codigoautor']));
    $nome = trim(htmlspecialchars($_POST['nomeautor']));

    $datahoraatual = date("Y-m-d H:i:s");

    if(empty($codau)) {
        $usuario = CODUINCLUSAO;
        try {
            $sql = "INSERT INTO Autor (Nome, CodU_Inclusao, DataU_Inclusao) VALUES (:nome, :codu_inclusao, :datau_inclusao)";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':nome', $nome);
            $sqlPdo->bindParam(':codu_inclusao', $usuario);
            $sqlPdo->bindParam(':datau_inclusao', $datahoraatual);

        if ($sqlPdo->execute()) {

            $lastId = $pdo->lastInsertId();
            echo "<h3 style='color:green'>Autor cadastrado com sucesso!</h3>";
            echo "<script>parent.document.getElementById('btnEnviar').style.display ='none';</script>";
            setIframeMensagemErro();
            echo "<script>setTimeout(() => { parent.window.location.href='../view/autorGrid.php'; }, '5000');</script>";

        } 

        } catch (PDOException $e) {

            $mensagemerro = $e->getMessage();

        }
    } else { 
        $excluido = EXCLUIDO;
        $usuario = CODUALTERACAO; 
        try {
            $sql = "UPDATE Autor SET Nome = :nome, CodU_Alteracao = :codu_alteracao, DataU_Alteracao = :datau_alteracao WHERE CodAu = :codau AND Excluido = :excluido";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':codau', $codau);
            $sqlPdo->bindParam(':nome', $nome);
            $sqlPdo->bindParam(':excluido', $excluido);
            $sqlPdo->bindParam(':codu_alteracao', $usuario);
            $sqlPdo->bindParam(':datau_alteracao', $datahoraatual);

        if ($sqlPdo->execute()) {

            $lastId = $pdo->lastInsertId();
            echo "<h3 style='color:green'>Autor alterado com sucesso!</h3>";
            setIframeMensagemErro();

        } 

        } catch (PDOException $e) {
            
            $mensagemerro = $e->getMessage();

        }
    }

    if($mensagemerro) {
        $mensagemSecundaria = 'Por favor, tente novamente mais tarde.';
        str_contains($e->getMessage(), 'Duplicate entry') && $mensagemSecundaria = 'Já Existe um Autor cadastrado com este nome informado.';
        setMenssageError(mensagemPrincipal : "Não foi possível ".(empty($codau) ? 'cadastrar' : 'alterar')." o autor.", mensagemSecundaria : $mensagemSecundaria);
        setIframeMensagemErro();
    }

}

if ($_SERVER["REQUEST_METHOD"] == "GET" && (isset($_GET['excluir']) && !empty($_GET['excluir']))) {

    if (!isset($_GET['csrf_token'], $_GET['autor'])) {
        setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        setIframeMensagemErro();
    }
    
    if (!verifyCsrfToken($_GET['csrf_token'])) {
        setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        echo "<script>setTimeout(() => { parent.window.location.href='../view/autorGrid.php'; }, '5000');</script>";
    } 
    
    $codau = trim(htmlspecialchars($_GET['autor']));
        
    try {

        $sql = "CALL ExcluirAutorLogicamente(:codau)";
        $sqlPdo = $pdo->prepare($sql);
        $sqlPdo->bindParam(':codau', $codau);
    
        if ($sqlPdo->execute()) {

            $retorno = $sqlPdo->fetch(PDO::FETCH_ASSOC);

            $mensagem = "<h3 style='color:green'>".$retorno['mensagemRetorno']."</h3><script>setTimeout(() => { parent.window.location.href='../view/autorGrid.php'; }, '5000');</script>";
            str_contains($mensagem, 'Não foi possível') && $mensagem = setMenssageError(mensagemPrincipal : $retorno['mensagemRetorno'], mensagemSecundaria : "");
            echo $mensagem;
            setIframeMensagemErro();
    
        }

    } catch (PDOException $e) {
        
        setMenssageError(mensagemPrincipal : "Não foi possível excluir o autor.", mensagemSecundaria : "Por favor, tente novamente mais tarde. ");
        setIframeMensagemErro();

    }
}

?>
