CREATE TABLE Assunto (
    CodAs INT PRIMARY KEY auto_increment NOT NULL,
    Descricao VARCHAR(20) NOT NULL,
    Excluido VARCHAR(11) DEFAULT 0,
    CodU_Inclusao VARCHAR(11),
    DataU_Inclusao DATETIME,
    CodU_Alteracao VARCHAR(11),
    DataU_Alteracao DATETIME,
    CONSTRAINT UQ_AssuntoExcluido UNIQUE (Excluido, Descricao),
    CONSTRAINT CHK_AssuntoDescricao_Not_Empty CHECK (Descricao <> '')
);

CREATE TABLE Autor (
    CodAu INT PRIMARY KEY auto_increment NOT NULL,
    Nome VARCHAR(40) NOT NULL,
    Excluido VARCHAR(11) DEFAULT 0,
    CodU_Inclusao VARCHAR(11),
    DataU_Inclusao DATETIME,
    CodU_Alteracao VARCHAR(11),
    DataU_Alteracao DATETIME,
    CONSTRAINT UQ_AutorExcluido UNIQUE (Excluido, Nome),
    CONSTRAINT CHK_AutorNome_Not_Empty CHECK (Nome <> '')
);

CREATE TABLE Livro (
    CodL INT PRIMARY KEY auto_increment NOT NULL,
    Titulo VARCHAR(40) NOT NULL,
    Editora VARCHAR(40),
    Edicao INT,
    AnoPublicacao VARCHAR(4),
    Valor DECIMAL(10, 2),
    Excluido VARCHAR(11) DEFAULT 0,
    CodU_Inclusao VARCHAR(11),
    DataU_Inclusao DATETIME,
    CodU_Alteracao VARCHAR(11),
    DataU_Alteracao DATETIME,
    CONSTRAINT UQ_LivroExcluido UNIQUE (Excluido, Titulo),
    CONSTRAINT CHK_LivroTitulo_Not_Empty CHECK (Titulo <> '')
);

CREATE TABLE Livro_Assunto (
    Livro_CodL INT,
    Assunto_CodAs INT,
    Excluido VARCHAR(11) DEFAULT 0,
    CodU_Inclusao VARCHAR(11),
    DataU_Inclusao DATETIME,
    CodU_Alteracao VARCHAR(11),
    DataU_Alteracao DATETIME,
    PRIMARY KEY (Livro_CodL, Assunto_CodAs, Excluido),
    FOREIGN KEY (Livro_CodL) REFERENCES Livro(CodL),
    FOREIGN KEY (Assunto_CodAs) REFERENCES Assunto(CodAs)
);

CREATE TABLE Livro_Autor (
    Livro_CodL INT,
    Autor_CodAu INT,
    Excluido VARCHAR(11) DEFAULT 0,
    CodU_Inclusao VARCHAR(11),
    DataU_Inclusao DATETIME,
    CodU_Alteracao VARCHAR(11),
    DataU_Alteracao DATETIME,
    PRIMARY KEY (Livro_CodL, Autor_CodAu, Excluido),
    FOREIGN KEY (Livro_CodL) REFERENCES Livro(CodL),
    FOREIGN KEY (Autor_CodAu) REFERENCES Autor(CodAu)
);
