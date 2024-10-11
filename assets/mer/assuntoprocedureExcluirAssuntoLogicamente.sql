CREATE DEFINER=`root`@`%` PROCEDURE `acervodigital`.`ExcluirAssuntoLogicamente`(IN CODIGO INT)
BEGIN
	
	DECLARE CONTADOR INT DEFAULT 0;
    DECLARE TOTALLIVROS INT DEFAULT 0;

	CALL TotalLivroAssunto(CODIGO, TOTALLIVROS);

	IF TOTALLIVROS = 0 THEN 

	    UPDATE Assunto 
	    SET Excluido = UNIX_TIMESTAMP(NOW()),
	    CodU_Alteracao = 'ALTERACAO', 
	    DataU_Alteracao = NOW()
	    WHERE CodAs = CODIGO AND Excluido = '0';
	
	   SELECT ROW_COUNT() INTO CONTADOR;
	
	    IF CONTADOR > 0 THEN
	        SELECT 'Assunto excluído com sucesso !' AS mensagemRetorno;
	    ELSE
	        SELECT 'Não foi possível realizar a exclusão do Assunto' AS mensagemRetorno;
	    END IF;

    ELSE
        SELECT 'Não foi possível realizar a exclusão, Assunto com livros cadastrados' AS mensagemRetorno;
    END IF;
   
END