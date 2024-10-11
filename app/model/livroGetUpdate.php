<?php
require 'conexaoDataBase.php';

    $excluido = EXCLUIDO;

    $retornoPdo['CodL'] = 0;
    $retornoPdo['livroautores'] = "";
    $retornoPdo['livroassuntos'] = "";


    if ($_SERVER["REQUEST_METHOD"] == "GET" && (isset($_GET['livro']) && !empty($_GET['livro']))) {

        if (!isset($_GET['csrf_token'])) {
            setMenssageError(mensagemPrincipal : "Não foi possível continuar.", mensagemSecundaria : "Dados obrigatórios não enviados.");
        }
        
        if (!verifyCsrfToken($_GET['csrf_token'])) {
            setMenssageError(mensagemSecundaria : "CSRF TOKEN não validado.", mensagemPrincipal : "Não foi possível acessar." );
        } 
        
        $codl = trim(htmlspecialchars($_GET['livro']));
            
        try {
            
            if (!isset($codl) || !is_numeric($codl)) {
                throw new InvalidArgumentException($erroCampoNumerico);
            }
        
            if (!isset($excluido) || (strlen($excluido) < 1 && strlen($excluido) > 11)) {
                throw new InvalidArgumentException($erroValorExclusao);
            }

            $sql = "SELECT l.*, (SELECT GROUP_CONCAT(Autor_CodAu SEPARATOR ',') FROM Livro_Autor WHERE Livro_CodL = l.CodL AND Excluido = :excluido ) AS livroautores, (SELECT GROUP_CONCAT(Assunto_CodAs SEPARATOR ',') FROM Livro_Assunto WHERE Livro_CodL = l.CodL  AND Excluido = :excluido ) AS livroassuntos FROM Livro l WHERE CodL = :codl";
            $sqlPdo = $pdo->prepare($sql);
            $sqlPdo->bindParam(':codl', $codl);
            $sqlPdo->bindParam(':excluido', $excluido);
            $sqlPdo->execute();
            $retornoPdo = $sqlPdo->fetch(PDO::FETCH_ASSOC);
            
        } catch (PDOException $e) {
            
            setLogSistema(mensagemErro : "Erro de banco de dados: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
            setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum livro.", mensagemSecundaria : "Por favor, tente novamente mais tarde.");
            redirecionaPrincipal();
            die();
        
        } catch (InvalidArgumentException $e) {
            
            setLogSistema(mensagemErro : "Erro de argumento inválido: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
            setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum livro.", mensagemSecundaria : $e->getMessage());
            redirecionaPrincipal();
            die();
        
        } catch (Exception $e) {
        
            setLogSistema(mensagemErro : "Erro de exceção: " . $e->getMessage(), arquivoErro : $e->getFile(), linhaErro : $e->getLine(), mapearOrigemErro : $e->getTraceAsString());
            setMenssageError(mensagemPrincipal : "Não foi possível localizar nenhum livro.", mensagemSecundaria : $e->getMessage());
            redirecionaPrincipal();
            die();
        }
    }

    try {
            
        if (!isset($excluido) || (strlen($excluido) < 1 && strlen($excluido) > 11)) {
            throw new InvalidArgumentException($erroValorExclusao);
        }

        $sql1 = "SELECT * FROM Autor WHERE Excluido = :excluido ORDER BY Nome";
        $sqlPdo1 = $pdo->prepare($sql1);
        $sqlPdo1->bindParam(':excluido', $excluido);
        $sqlPdo1->execute();
        $retornoPdo1 = $sqlPdo1->fetchAll(PDO::FETCH_ASSOC);
        
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

    try {
            
        if (!isset($excluido) || (strlen($excluido) < 1 && strlen($excluido) > 11)) {
            throw new InvalidArgumentException($erroValorExclusao);
        }

        $sql2 = "SELECT * FROM Assunto WHERE Excluido = :excluido ORDER BY Descricao";
        $sqlPdo2 = $pdo->prepare($sql2);
        $sqlPdo2->bindParam(':excluido', $excluido);
        $sqlPdo2->execute();
        $retornoPdo2 = $sqlPdo2->fetchAll(PDO::FETCH_ASSOC);
        
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
