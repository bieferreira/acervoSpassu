CREATE DEFINER=`root`@`%` PROCEDURE `acervodigital`.`ExcluirAutorLogicamente`(IN CODIGO INT)
BEGIN
	
	DECLARE CONTADOR INT DEFAULT 0;
    DECLARE TOTALLIVROS INT DEFAULT 0;

	CALL TotalLivroAutor(CODIGO, TOTALLIVROS);

	IF TOTALLIVROS = 0 THEN 

	    UPDATE Autor 
	    SET Excluido = UNIX_TIMESTAMP(NOW()),
	    CodU_Alteracao = 'ALTERACAO', 
	    DataU_Alteracao = NOW()
	    WHERE CodAu = CODIGO AND Excluido = '0';
	
	   SELECT ROW_COUNT() INTO CONTADOR;
	
	    IF CONTADOR > 0 THEN
	        SELECT 'Autor excluído com sucesso !' AS mensagemRetorno;
	    ELSE
	        SELECT 'Não foi possível realizar a exclusão do Autor' AS mensagemRetorno;
	    END IF;

    ELSE
        SELECT 'Não foi possível realizar a exclusão, Autor com livros cadastrados' AS mensagemRetorno;
    END IF;
   
END