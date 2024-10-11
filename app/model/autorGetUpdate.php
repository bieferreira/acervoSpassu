<?php
require 'conexaoDataBase.php';

    $retornoPdo['CodAu'] = 0;

    if ($_SERVER["REQUEST_METHOD"] == "GET" && (isset($_GET['autor']) && !empty($_GET['autor']))) {

        if (!isset($_GET['csrf_token'])) {
            setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        }
        
        if (!verifyCsrfToken($_GET['csrf_token'])) {
            setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        } 
        
        $codau = trim(htmlspecialchars($_GET['autor']));
            
        try {
            
            if (!isset($codau) || !is_numeric($codau)) {
                throw new InvalidArgumentException($erroCampoNumerico);
            }
        
            $sql = "SELECT * FROM Autor WHERE CodAu = :codau";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':codau', $codau);
            $sqlPdo->execute();
            $retornoPdo = $sqlPdo->fetch(PDO::FETCH_ASSOC);
            
        } catch (PDOException $e) {
            
            setLogSistema(mensagemErro : "Erro de banco de dados: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
            setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum autor.", mensagemSecundaria : "Por favor, tente novamente mais tarde.");
            redirecionaPrincipal();
            die();
        
        } catch (InvalidArgumentException $e) {
            
            setLogSistema(mensagemErro : "Erro de argumento inválido: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
            setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum autor.", mensagemSecundaria : $e->getMessage());
            redirecionaPrincipal();
            die();
        
        } catch (Exception $e) {
        
            setLogSistema(mensagemErro : "Erro de exceção: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
            setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum autor.", mensagemSecundaria : $e->getMessage());
            redirecionaPrincipal();
            die();
        }
    }

?>
