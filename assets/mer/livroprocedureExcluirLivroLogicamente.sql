CREATE DEFINER=`root`@`%` PROCEDURE `acervodigital`.`ExcluirLivroLogicamente`(IN CODIGO INT)
BEGIN
	
	DECLARE CONTADOR INT DEFAULT 0;

	    UPDATE Livro_Assunto 
	    SET Excluido = UNIX_TIMESTAMP(NOW()),
	    CodU_Alteracao = 'ALTERACAO', 
	    DataU_Alteracao = NOW()
	    WHERE Livro_CodL = CODIGO AND Excluido = '0';

	    UPDATE Livro_Autor 
	    SET Excluido = UNIX_TIMESTAMP(NOW()),
	    CodU_Alteracao = 'ALTERACAO', 
	    DataU_Alteracao = NOW()
	    WHERE Livro_CodL = CODIGO AND Excluido = '0';

	    UPDATE Livro 
	    SET Excluido = UNIX_TIMESTAMP(NOW()),
	    CodU_Alteracao = 'ALTERACAO', 
	    DataU_Alteracao = NOW()
	    WHERE CodL = CODIGO AND Excluido = '0';
	
	   SELECT ROW_COUNT() INTO CONTADOR;
	
	    IF CONTADOR > 0 THEN
	        SELECT 'Livro excluído com sucesso !' AS mensagemRetorno;
	    ELSE
	        SELECT 'Não foi possível realizar a exclusão do Livro' AS mensagemRetorno;
	    END IF;
   
END