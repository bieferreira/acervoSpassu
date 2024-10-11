CREATE DEFINER=`root`@`%` PROCEDURE `acervodigital`.`TotalLivroAutor`(IN CODIGOAUTOR INT, OUT TOTALIVROS INT)
BEGIN
	
    SELECT COUNT(*) INTO TOTALIVROS
    FROM Livro_Autor la
    WHERE la.Autor_CodAu = CODIGOAUTOR AND Excluido = '0';

END