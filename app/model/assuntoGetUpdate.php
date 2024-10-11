<?php
require 'conexaoDataBase.php';

    $retornoPdo['CodAs'] = 0;
    
    if ($_SERVER["REQUEST_METHOD"] == "GET" && (isset($_GET['assunto']) && !empty($_GET['assunto']))) {

        if (!isset($_GET['csrf_token'])) {
            setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        }
        
        if (!verifyCsrfToken($_GET['csrf_token'])) {
            setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        } 
        
        $codas = trim(htmlspecialchars($_GET['assunto']));
            
        try {
            
            if (!isset($codas) || !is_numeric($codas)) {
                throw new InvalidArgumentException($erroCampoNumerico);
            }
        
            $sql = "SELECT * FROM Assunto WHERE CodAs = :codas";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':codas', $codas);
            $sqlPdo->execute();
            $retornoPdo = $sqlPdo->fetch(PDO::FETCH_ASSOC);
            
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
    }

?>
