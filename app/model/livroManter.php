<?php
require 'conexaoDataBase.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    if (!isset($_POST['csrf_token'], $_POST['titulo'], $_POST['editora'], $_POST['edicao'], $_POST['anopublicacao'], $_POST['valor'])) { 
        setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        setIframeMensagemErro();
    }
    
    if (!verifyCsrfToken($_POST['csrf_token'])) {
        setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        setIframeMensagemErro();
    } 
    
    $mensagemerro = false;
    $codl = trim(htmlspecialchars($_POST['codigolivro']));
    $titulo = trim(htmlspecialchars($_POST['titulo']));
    $editora = trim(htmlspecialchars($_POST['editora']));
    $edicao = trim(htmlspecialchars($_POST['edicao']));
    $anopublicacao = trim(htmlspecialchars($_POST['anopublicacao']));
    $valor = trim(htmlspecialchars(str_replace(['.', ','], ['', '.'], $_POST['valor'])));

    $datahoraatual = date("Y-m-d H:i:s");

    if(empty($codl)) {
        $usuario = CODUINCLUSAO;
        try {
            $sql = "INSERT INTO Livro (Titulo, Editora, Edicao, AnoPublicacao, Valor, CodU_Inclusao, DataU_Inclusao) VALUES (:titulo, :editora, :edicao, :anopublicacao, :valor, :codu_inclusao, :datau_inclusao)";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':titulo', $titulo);
            $sqlPdo->bindParam(':editora', $editora);
            $sqlPdo->bindParam(':edicao', $edicao);
            $sqlPdo->bindParam(':anopublicacao', $anopublicacao);
            $sqlPdo->bindParam(':valor', $valor);
            $sqlPdo->bindParam(':codu_inclusao', $usuario);
            $sqlPdo->bindParam(':datau_inclusao', $datahoraatual);

        if ($sqlPdo->execute()) {

            $livro_codl = $pdo->lastInsertId();
            
            foreach ($_POST['codigoautor'] as $valorautor) {
                $autor_codau = $valorautor;

                $sql = "INSERT INTO Livro_Autor (Livro_CodL, Autor_CodAu, CodU_Inclusao, DataU_Inclusao) VALUES (:livro_codl, :autor_codau, :codu_inclusao, :datau_inclusao)";
                $sqlPdo = $pdo->prepare($sql);
                $sqlPdo->bindParam(':livro_codl', $livro_codl);
                $sqlPdo->bindParam(':autor_codau', $autor_codau);
                $sqlPdo->bindParam(':codu_inclusao', $usuario);
                $sqlPdo->bindParam(':datau_inclusao', $datahoraatual);
            
                $sqlPdo->execute();
            }

            foreach ($_POST['codigoassunto'] as $valorassunto) {
                $assunto_codas = $valorassunto;
                
                $sql = "INSERT INTO Livro_Assunto (Livro_CodL, Assunto_CodAs, CodU_Inclusao, DataU_Inclusao) VALUES (:livro_codl, :assunto_codas, :codu_inclusao, :datau_inclusao)";
                $sqlPdo = $pdo->prepare($sql);
                $sqlPdo->bindParam(':livro_codl', $livro_codl);
                $sqlPdo->bindParam(':assunto_codas', $assunto_codas);
                $sqlPdo->bindParam(':codu_inclusao', $usuario);
                $sqlPdo->bindParam(':datau_inclusao', $datahoraatual);
            
                $sqlPdo->execute();
            }

            echo "<h3 style='color:green'>Livro cadastrado com sucesso!</h3>";
            echo "<script>parent.document.getElementById('btnEnviar').style.display ='none';</script>";
            setIframeMensagemErro();
            echo "<script>setTimeout(() => { parent.window.location.href='../view/livroGrid.php'; }, '5000');</script>";

        } 

        } catch (PDOException $e) {

            $mensagemerro = $e->getMessage();

        }
    } else { 
        $excluido = EXCLUIDO;
        $usuario = CODUALTERACAO; 

        try {
            $sql = "UPDATE Livro SET Titulo = :titulo, Editora = :editora, Edicao = :edicao, AnoPublicacao = :anopublicacao, Valor = :valor, CodU_Alteracao = :codu_alteracao, DataU_Alteracao = :datau_alteracao WHERE CodL = :codl AND Excluido = :excluido";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':codl', $codl);
            $sqlPdo->bindParam(':titulo', $titulo);
            $sqlPdo->bindParam(':editora', $editora);
            $sqlPdo->bindParam(':edicao', $edicao);
            $sqlPdo->bindParam(':anopublicacao', $anopublicacao);
            $sqlPdo->bindParam(':valor', $valor);
            $sqlPdo->bindParam(':excluido', $excluido);
            $sqlPdo->bindParam(':codu_alteracao', $usuario);
            $sqlPdo->bindParam(':datau_alteracao', $datahoraatual);

        if ($sqlPdo->execute()) {

            $livro_codl = $codl;

            $setexcluido = time();
            $excluido = EXCLUIDO;
            $usuario = CODUALTERACAO;

                $sql = "UPDATE Livro_Autor SET Excluido = :setexcluido, CodU_Alteracao = :codu_alteracao, DataU_Alteracao = :datau_alteracao WHERE Livro_CodL = :livro_codl AND Excluido = :excluido";
                $sqlPdo = $pdo->prepare($sql);
                $sqlPdo->bindParam(':livro_codl', $livro_codl);
                $sqlPdo->bindParam(':setexcluido', $setexcluido);
                $sqlPdo->bindParam(':excluido', $excluido);
                $sqlPdo->bindParam(':codu_alteracao', $usuario);
                $sqlPdo->bindParam(':datau_alteracao', $datahoraatual);
                
                $sqlPdo->execute();

                $sql = "UPDATE Livro_Assunto SET Excluido = :setexcluido, CodU_Alteracao = :codu_alteracao, DataU_Alteracao = :datau_alteracao WHERE Livro_CodL = :livro_codl AND Excluido = :excluido";
                $sqlPdo = $pdo->prepare($sql);
                $sqlPdo->bindParam(':livro_codl', $livro_codl);
                $sqlPdo->bindParam(':setexcluido', $setexcluido);
                $sqlPdo->bindParam(':excluido', $excluido);
                $sqlPdo->bindParam(':codu_alteracao', $usuario);
                $sqlPdo->bindParam(':datau_alteracao', $datahoraatual);
    
                $sqlPdo->execute();

            $usuario = CODUINCLUSAO;

            foreach ($_POST['codigoautor'] as $valorautor) {

                $autor_codau = $valorautor;

                $sql = "INSERT INTO Livro_Autor (Livro_CodL, Autor_CodAu, CodU_Inclusao, DataU_Inclusao) VALUES (:livro_codl, :autor_codau, :codu_inclusao, :datau_inclusao)";
                $sqlPdo = $pdo->prepare($sql);
                $sqlPdo->bindParam(':livro_codl', $livro_codl);
                $sqlPdo->bindParam(':autor_codau', $autor_codau);
                $sqlPdo->bindParam(':codu_inclusao', $usuario);
                $sqlPdo->bindParam(':datau_inclusao', $datahoraatual);

                $sqlPdo->execute();
            }

            foreach ($_POST['codigoassunto'] as $valorassunto) {
                $assunto_codas = $valorassunto;
                
                $sql = "INSERT INTO Livro_Assunto (Livro_CodL, Assunto_CodAs, CodU_Inclusao, DataU_Inclusao) VALUES (:livro_codl, :assunto_codas, :codu_inclusao, :datau_inclusao)";
                $sqlPdo = $pdo->prepare($sql);
                $sqlPdo->bindParam(':livro_codl', $livro_codl);
                $sqlPdo->bindParam(':assunto_codas', $assunto_codas);
                $sqlPdo->bindParam(':codu_inclusao', $usuario);
                $sqlPdo->bindParam(':datau_inclusao', $datahoraatual);
            
                $sqlPdo->execute();
            }

            echo "<h3 style='color:green'>Livro alterado com sucesso!</h3>";
            setIframeMensagemErro();

        } 

        } catch (PDOException $e) {
            
            $mensagemerro = $e->getMessage();

        }
    }

    if($mensagemerro) {
        $mensagemSecundaria = 'Por favor, tente novamente mais tarde.';
        str_contains($mensagemerro, 'Duplicate entry') && $mensagemSecundaria = 'Já Existe um Livro cadastrado com este título informado.';
        echo $mensagemerro;
        //setMenssageError(mensagemPrincipal : "Não foi possível ".(empty($codl) ? 'cadastrar' : 'alterar')." o livro.", mensagemSecundaria : $mensagemSecundaria);
        setIframeMensagemErro();
    }

}

if ($_SERVER["REQUEST_METHOD"] == "GET" && (isset($_GET['excluir']) && !empty($_GET['excluir']))) {

    if (!isset($_GET['csrf_token'], $_GET['livro'])) {
        setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        setIframeMensagemErro();
    }
    
    if (!verifyCsrfToken($_GET['csrf_token'])) {
        setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        echo "<script>setTimeout(() => { parent.window.location.href='../view/livroGrid.php'; }, '5000');</script>";
    } 
    
    $codl = trim(htmlspecialchars($_GET['livro']));
        
    try {

        $sql = "CALL ExcluirLivroLogicamente(:codl)";
        $sqlPdo = $pdo->prepare($sql);
        $sqlPdo->bindParam(':codl', $codl);
    
        if ($sqlPdo->execute()) {

            $retorno = $sqlPdo->fetch(PDO::FETCH_ASSOC);

            $mensagem = "<h3 style='color:green'>".$retorno['mensagemRetorno']."</h3><script>setTimeout(() => { parent.window.location.href='../view/livroGrid.php'; }, '5000');</script>";
            str_contains($mensagem, 'Não foi possível') && $mensagem = setMenssageError(mensagemPrincipal : $retorno['mensagemRetorno'], mensagemSecundaria : "");
            echo $mensagem;
            setIframeMensagemErro();
    
        }

    } catch (PDOException $e) {
        
        setMenssageError(mensagemPrincipal : "Não foi possível excluir o livro.", mensagemSecundaria : "Por favor, tente novamente mais tarde. ");
        setIframeMensagemErro();

    }
}

?>

<style>
iframe {
    position: absolute !important;
    top: 280px !important;
}
</style>