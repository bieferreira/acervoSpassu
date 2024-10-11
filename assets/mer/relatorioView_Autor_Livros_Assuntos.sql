CREATE VIEW View_Autor_Livros_Assuntos AS
SELECT 
    a.CodAu AS CodigoAutor, 
    a.Nome AS NomeAutor, 
    l.CodL AS CodigoLivro,
    l.Titulo AS TituloLivro, 
    (SELECT GROUP_CONCAT(ass.Descricao ORDER BY ass.Descricao SEPARATOR ', ') AS livroassunto 
     FROM Livro_Assunto las 
     INNER JOIN Assunto ass 
     ON (ass.CodAs = las.Assunto_CodAs AND ass.Excluido = '0') 
     WHERE las.Livro_CodL = l.CodL  
     AND las.Excluido = '0' 
    ) AS AssuntoLivro,
   	CONCAT('R$ ', format(l.Valor,2,'de_DE')) AS Valor
FROM Autor a
INNER JOIN Livro_Autor la 
    ON (la.Autor_CodAu = a.CodAu AND la.Excluido = '0')
INNER JOIN Livro l 
    ON (l.CodL = la.Livro_CodL AND l.Excluido = '0')
WHERE a.Excluido = '0'
ORDER BY a.Nome;
