<?php
require 'conexaoDataBase.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (!isset($_POST['csrf_token'], $_POST['descricaoassunto'])) {
        setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        setIframeMensagemErro();
    }
    
    if (!verifyCsrfToken($_POST['csrf_token'])) {
        setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        setIframeMensagemErro();
    } 
    
    $mensagemerro = false;
    $codas = trim(htmlspecialchars($_POST['codigoassunto']));
    $descricao = trim(htmlspecialchars($_POST['descricaoassunto']));

    $datahoraatual = date("Y-m-d H:i:s");

    if(empty($codas)) {
        $usuario = CODUINCLUSAO;

        try {
            
            if (!isset($usuario) || (strlen($usuario) < 1 && strlen($usuario) > 11)) {
                throw new InvalidArgumentException($erroValorUsuario);
            }
    
            if (!isset($descricao) || (strlen($descricao) < 1 && strlen($descricao) > 40)) {
                throw new InvalidArgumentException($erroQuantidadeCaracteres);
            }

            $sql = "INSERT INTO Assunto (Descricao, CodU_Inclusao, DataU_Inclusao) VALUES (:descricao, :codu_inclusao, :datau_inclusao)";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':descricao', $descricao);
            $sqlPdo->bindParam(':codu_inclusao', $usuario);
            $sqlPdo->bindParam(':datau_inclusao', $datahoraatual);
            
                if ($sqlPdo->execute()) {

                    $lastId = $pdo->lastInsertId();
                    echo "<h3 style='color:green'>Assunto cadastrado com sucesso!</h3>";
                    setIframeMensagemErro();
                    redirecionaPrincipal('../view/assuntoGrid.php');

                } 

        } catch (PDOException $e) {
            
            $mensagemerro = $e->getMessage();

        } catch (InvalidArgumentException $e) {
            
            $mensagemerro = $e->getMessage();        

        } catch (Exception $e) {
        
            $mensagemerro = $e->getMessage();

        }

    } else { 
        
        $excluido = EXCLUIDO;
        $usuario = CODUALTERACAO; 

        try {
            $sql = "UPDATE Assunto SET Descricao = :descricao, CodU_Alteracao = :codu_alteracao, DataU_Alteracao = :datau_alteracao WHERE CodAs = :codas AND Excluido = :excluido";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':codas', $codas);
            $sqlPdo->bindParam(':descricao', $descricao);
            $sqlPdo->bindParam(':excluido', $excluido);
            $sqlPdo->bindParam(':codu_alteracao', $usuario);
            $sqlPdo->bindParam(':datau_alteracao', $datahoraatual);

        if ($sqlPdo->execute()) {

            $lastId = $pdo->lastInsertId();
            echo "<h3 style='color:green'>Assunto alterado com sucesso!</h3>";
            setIframeMensagemErro();

        } 

        } catch (PDOException $e) {
            
            $mensagemerro = $e->getMessage();

        }
    }

    if($mensagemerro) {
        $mensagemSecundaria = 'Por favor, tente novamente mais tarde.';
        str_contains($mensagemerro, 'Duplicate entry') && $mensagemSecundaria = 'Já Existe um Assunto cadastrado com está descricao informada.';
        
        setLogSistema(mensagemErro : "Erro de exceção: " . $mensagemerro, arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
        setMenssageError(mensagemPrincipal : "Não foi possível ".(empty($codas) ? 'cadastrar' : 'alterar')." o assunto.", mensagemSecundaria : $mensagemSecundaria);
        setIframeMensagemErro();
    }

}

if ($_SERVER["REQUEST_METHOD"] == "GET" && (isset($_GET['excluir']) && !empty($_GET['excluir']))) {

    if (!isset($_GET['csrf_token'], $_GET['assunto'])) {
        setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        setIframeMensagemErro();
    }
    
    if (!verifyCsrfToken($_GET['csrf_token'])) {
        setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        echo "<script>setTimeout(() => { parent.window.location.href='../view/assuntoGrid.php'; }, '5000');</script>";
    } 
    
    $codas = trim(htmlspecialchars($_GET['assunto']));
        
    try {

        $sql = "CALL ExcluirAssuntoLogicamente(:codas)";
        $sqlPdo = $pdo->prepare($sql);
        $sqlPdo->bindParam(':codas', $codas);
    
        if ($sqlPdo->execute()) {

            $retorno = $sqlPdo->fetch(PDO::FETCH_ASSOC);

            $mensagem = "<h3 style='color:green'>".$retorno['mensagemRetorno']."</h3><script>setTimeout(() => { parent.window.location.href='../view/assuntoGrid.php'; }, '5000');</script>";
            str_contains($mensagem, 'Não foi possível') && $mensagem = setMenssageError(mensagemPrincipal : $retorno['mensagemRetorno'], mensagemSecundaria : "");
            echo $mensagem;
            setIframeMensagemErro();
    
        }

    } catch (PDOException $e) {
        
        setMenssageError(mensagemPrincipal : "Não foi possível excluir o assunto.", mensagemSecundaria : "Por favor, tente novamente mais tarde. ");
        setIframeMensagemErro();

    }
}

?>
