CREATE DEFINER=`root`@`%` PROCEDURE `acervodigital`.`TotalLivroAssunto`(IN CODIGOASSUNTO INT, OUT TOTALIVROS INT)
BEGIN
	
    SELECT COUNT(*) INTO TOTALIVROS
    FROM Livro_Assunto la
    WHERE la.Assunto_CodAs = CODIGOASSUNTO AND Excluido = '0';

END