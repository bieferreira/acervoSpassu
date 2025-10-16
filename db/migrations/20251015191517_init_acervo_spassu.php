<?php

declare(strict_types=1);

use Phinx\Migration\AbstractMigration;

final class InitAcervoSpassu extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    
    public function up(): void
    {
        
        // Tabela Assunto
        $table = $this->table('MigrationAssunto', [
            'id'           => false,
            'primary_key'  => ['CodAs'],
            'engine'       => 'InnoDB',
            'encoding'     => 'utf8mb4',
            'collation'    => 'utf8mb4_0900_ai_ci',
        ]);

        $table
            ->addColumn('CodAs', 'integer', [
                'identity' => true,
                'signed'   => true,
                'null'     => false,
            ])
            ->addColumn('Descricao', 'string', [
                'limit' => 20,
                'null'  => false,
            ])
            ->addColumn('Excluido', 'string', [
                'limit'   => 11,
                'default' => '0',
                'null'    => false,
            ])
            ->addColumn('CodU_Inclusao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Inclusao', 'datetime', [
                'null' => true,
            ])
            ->addColumn('CodU_Alteracao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Alteracao', 'datetime', [
                'null' => true,
            ])
            ->addIndex(['Excluido', 'Descricao'], [
                'unique' => true,
                'name'   => 'UQ_MigrationAssuntoExcluido',
            ])
            ->addIndex(['Descricao'], [
                'unique' => false,
                'name'   => 'IDX_MigrationAssuntoDescricao',
            ])
            ->create();

        $this->execute("
            ALTER TABLE `MigrationAssunto`
            ADD CONSTRAINT `CHK_MigrationAssuntoDescricao_Not_Empty`
            CHECK (CHAR_LENGTH(TRIM(`Descricao`)) > 0)
        ");

        // Tabela Autor
        $table = $this->table('MigrationAutor', [
            'id'          => false,
            'primary_key' => ['CodAu'],
            'engine'      => 'InnoDB',
            'encoding'    => 'utf8mb4',
            'collation'   => 'utf8mb4_0900_ai_ci',
        ]);

        $table
            ->addColumn('CodAu', 'integer', [
                'identity' => true,     
                'signed'   => true,
                'null'     => false,
            ])
            ->addColumn('Nome', 'string', [
                'limit' => 40,
                'null'  => false,
            ])
            ->addColumn('Excluido', 'string', [
                'limit'   => 11,
                'default' => '0',
                'null'    => false,
            ])
            ->addColumn('CodU_Inclusao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Inclusao', 'datetime', [
                'null' => true,
            ])
            ->addColumn('CodU_Alteracao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Alteracao', 'datetime', [
                'null' => true,
            ])
            ->addIndex(['Excluido', 'Nome'], [
                'unique' => true,
                'name'   => 'UQ_MigrationAutorExcluido',
            ])
            ->addIndex(['Nome'], [
                'unique' => false,
                'name'   => 'IDX_MigrationAutorNome',
            ])
            ->create();

        $this->execute("
            ALTER TABLE `MigrationAutor`
            ADD CONSTRAINT `CHK_MigrationAutorNome_Not_Empty`
            CHECK (CHAR_LENGTH(TRIM(`Nome`)) > 0)
        ");

        // Tabela Livro
        $table = $this->table('MigrationLivro', [
            'id'          => false,
            'primary_key' => ['CodL'],
            'engine'      => 'InnoDB',
            'encoding'    => 'utf8mb4',
            'collation'   => 'utf8mb4_0900_ai_ci',
        ]);

        $table
            ->addColumn('CodL', 'integer', [
                'identity' => true,
                'signed'   => true,
                'null'     => false,
            ])
            ->addColumn('Titulo', 'string', [
                'limit' => 40,
                'null'  => false,
            ])
            ->addColumn('Editora', 'string', [
                'limit' => 40,
                'null'  => true,
            ])
            ->addColumn('Edicao', 'integer', [
                'null' => true,
            ])
            ->addColumn('AnoPublicacao', 'string', [
                'limit' => 4,
                'null'  => true,
            ])
            ->addColumn('Valor', 'decimal', [
                'precision' => 10,
                'scale'     => 2,
                'null'      => true,
            ])
            ->addColumn('Excluido', 'string', [
                'limit'   => 11,
                'default' => '0',
                'null'    => false,
            ])
            ->addColumn('CodU_Inclusao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Inclusao', 'datetime', [
                'null' => true,
            ])
            ->addColumn('CodU_Alteracao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Alteracao', 'datetime', [
                'null' => true,
            ])
            ->addIndex(['Excluido', 'Titulo'], [
                'unique' => true,
                'name'   => 'UQ_MigrationLivroExcluido',
            ])
            ->addIndex(['Titulo'], [
                'unique' => false,
                'name'   => 'IDX_MigrationLivroTitulo',
            ])
            ->create();

        $this->execute("
            ALTER TABLE `MigrationLivro`
            ADD CONSTRAINT `CHK_MigrationLivroTitulo_Not_Empty`
            CHECK (CHAR_LENGTH(TRIM(`Titulo`)) > 0)
        ");

        //Tabela Livro_Assunto
        $table = $this->table('MigrationLivro_Assunto', [
            'id'          => false,
            'primary_key' => ['Livro_CodL', 'Assunto_CodAs', 'Excluido'],
            'engine'      => 'InnoDB',
            'encoding'    => 'utf8mb4',
            'collation'   => 'utf8mb4_0900_ai_ci',
        ]);

        $table
            ->addColumn('Livro_CodL', 'integer', [
                'null'   => false,
                'signed' => true,
            ])
            ->addColumn('Assunto_CodAs', 'integer', [
                'null'   => false,
                'signed' => true,
            ])
            ->addColumn('Excluido', 'string', [
                'limit'   => 11,
                'default' => '0',
                'null'    => false,
            ])
            ->addColumn('CodU_Inclusao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Inclusao', 'datetime', [
                'null' => true,
            ])
            ->addColumn('CodU_Alteracao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Alteracao', 'datetime', [
                'null' => true,
            ])
            ->create();

        $this->table('MigrationLivro_Assunto')
            ->addForeignKey(
                'Livro_CodL',
                'MigrationLivro',
                'CodL',
                [
                    'delete'     => 'CASCADE',
                    'update'     => 'CASCADE',
                    'constraint' => 'FK_LivroAssunto_Livro',
                ]
            )
            ->addForeignKey(
                'Assunto_CodAs',
                'MigrationAssunto',
                'CodAs',
                [
                    'delete'     => 'CASCADE',
                    'update'     => 'CASCADE',
                    'constraint' => 'FK_LivroAssunto_Assunto',
                ]
            )
            ->update();
        
        //Tabela MigrationLivro_Autor
        $table = $this->table('MigrationLivro_Autor', [
            'id'          => false,
            'primary_key' => ['Livro_CodL', 'Autor_CodAu', 'Excluido'],
            'engine'      => 'InnoDB',
            'encoding'    => 'utf8mb4',
            'collation'   => 'utf8mb4_0900_ai_ci',
        ]);

        $table
            ->addColumn('Livro_CodL', 'integer', [
                'null'   => false,
                'signed' => true,
            ])
            ->addColumn('Autor_CodAu', 'integer', [
                'null'   => false,
                'signed' => true,
            ])
            ->addColumn('Excluido', 'string', [
                'limit'   => 11,
                'default' => '0',
                'null'    => false,
            ])
            ->addColumn('CodU_Inclusao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Inclusao', 'datetime', [
                'null' => true,
            ])
            ->addColumn('CodU_Alteracao', 'string', [
                'limit' => 11,
                'null'  => true,
            ])
            ->addColumn('DataU_Alteracao', 'datetime', [
                'null' => true,
            ])
            ->create();

        $this->table('MigrationLivro_Autor')
            ->addForeignKey(
                'Livro_CodL',
                'MigrationLivro',
                'CodL',
                [
                    'delete'     => 'CASCADE',
                    'update'     => 'CASCADE',
                    'constraint' => 'FK_LivroAutor_Livro',
                ]
            )
            ->addForeignKey(
                'Autor_CodAu',
                'MigrationAutor',
                'CodAu',
                [
                    'delete'     => 'CASCADE',
                    'update'     => 'CASCADE',
                    'constraint' => 'FK_LivroAutor_Autor',
                ]
            )
            ->update();

        //Procedure MigrationTotalLivroAssunto
        $this->execute("
            CREATE PROCEDURE `MigrationTotalLivroAssunto`(
                IN CODIGOASSUNTO INT,
                OUT TOTALLIVROS INT
            )
            BEGIN
                SELECT COUNT(*) INTO TOTALLIVROS
                FROM Livro_Assunto AS la
                WHERE la.Assunto_CodAs = CODIGOASSUNTO
                AND la.Excluido = '0';
            END;
        ");

        //Procedure MigrationTotalLivroAutor
        $this->execute("
            CREATE PROCEDURE `MigrationTotalLivroAutor`(
                IN CODIGOAUTOR INT,
                OUT TOTALLIVROS INT
            )
            BEGIN
                SELECT COUNT(*) INTO TOTALLIVROS
                FROM Livro_Autor AS la
                WHERE la.Autor_CodAu = CODIGOAUTOR
                AND la.Excluido = '0';
            END;
        ");

        //Procedure MigrationExcluirAssuntoLogicamente
        $this->execute(<<<'SQL'
            CREATE PROCEDURE `MigrationExcluirAssuntoLogicamente`(IN CODIGO INT)
            BEGIN
                DECLARE CONTADOR INT DEFAULT 0;
                DECLARE TOTALLIVROS INT DEFAULT 0;

                CALL MigrationTotalLivroAssunto(CODIGO, TOTALLIVROS);

                IF TOTALLIVROS = 0 THEN 
                    UPDATE MigrationAssunto 
                    SET Excluido       = UNIX_TIMESTAMP(NOW()),
                        CodU_Alteracao = 'ALTERACAO', 
                        DataU_Alteracao= NOW()
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
        SQL);
        
        //Procedure MigrationExcluirAutorLogicamente
        $this->execute(<<<'SQL'
            CREATE PROCEDURE `MigrationExcluirAutorLogicamente`(IN CODIGO INT)
            BEGIN
                DECLARE CONTADOR INT DEFAULT 0;
                DECLARE TOTALLIVROS INT DEFAULT 0;

                CALL MigrationTotalLivroAutor(CODIGO, TOTALLIVROS);

                IF TOTALLIVROS = 0 THEN 

                    UPDATE MigrationAutor 
                    SET Excluido        = UNIX_TIMESTAMP(NOW()),
                        CodU_Alteracao  = 'ALTERACAO', 
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
        SQL);

        //Procedure MigrationExcluirLivroLogicamente
        $this->execute(<<<'SQL'
            CREATE PROCEDURE `MigrationExcluirLivroLogicamente`(IN CODIGO INT)
            BEGIN
                DECLARE CONTADOR INT DEFAULT 0;
                DECLARE A1 INT DEFAULT 0;
                DECLARE A2 INT DEFAULT 0;
                DECLARE A3 INT DEFAULT 0;

                UPDATE MigrationLivro_Assunto
                SET Excluido        = UNIX_TIMESTAMP(NOW()),
                    CodU_Alteracao  = 'ALTERACAO',
                    DataU_Alteracao = NOW()
                WHERE Livro_CodL = CODIGO
                AND Excluido = '0';
                SET A1 = ROW_COUNT();

                UPDATE MigrationLivro_Autor
                SET Excluido        = UNIX_TIMESTAMP(NOW()),
                    CodU_Alteracao  = 'ALTERACAO',
                    DataU_Alteracao = NOW()
                WHERE Livro_CodL = CODIGO
                AND Excluido = '0';
                SET A2 = ROW_COUNT();

                UPDATE MigrationLivro
                SET Excluido        = UNIX_TIMESTAMP(NOW()),
                    CodU_Alteracao  = 'ALTERACAO',
                    DataU_Alteracao = NOW()
                WHERE CodL = CODIGO
                AND Excluido = '0';
                SET A3 = ROW_COUNT();

                SET CONTADOR = A1 + A2 + A3;

                IF CONTADOR > 0 THEN
                    SELECT 'Livro excluído com sucesso !' AS mensagemRetorno;
                ELSE
                    SELECT 'Não foi possível realizar a exclusão do Livro' AS mensagemRetorno;
                END IF;
            END
        SQL);

    }

    public function down(): void
    {
    
        // Tabela Assunto
        if ($this->hasTable('MigrationAssunto')) {
            $this->execute("ALTER TABLE `MigrationAssunto` DROP CHECK `CHK_MigrationAssuntoDescricao_Not_Empty`");
            $this->table('MigrationAssunto')->drop()->save();
        }        

        // Tabela Autor
        if ($this->hasTable('MigrationAutor')) {
            $this->execute("ALTER TABLE `MigrationAutor` DROP CHECK `CHK_MigrationAutorNome_Not_Empty`");
            $this->table('MigrationAutor')->drop()->save();
        }        


        // Tabela Livro
        if ($this->hasTable('MigrationLivro')) {
            $this->execute("ALTER TABLE `MigrationLivro` DROP CHECK `CHK_MigrationLivroTitulo_Not_Empty`");
            $this->table('MigrationLivro')->drop()->save();
        }        


        //Tabela Livro_Assunto
        if ($this->hasTable('MigrationLivro_Assunto')) {
            $this->table('MigrationLivro_Assunto')->drop()->save();
        }        


        //Tabela MigrationLivro_Autor
        if ($this->hasTable('MigrationLivro_Autor')) {
            $this->table('MigrationLivro_Autor')->drop()->save();
        }

        //Procedure MigrationExcluirLivroLogicamente
        $this->execute("DROP PROCEDURE IF EXISTS `MigrationExcluirLivroLogicamente`;");

        //Procedure MigrationExcluirAutorLogicamente
        $this->execute("DROP PROCEDURE IF EXISTS `MigrationExcluirAutorLogicamente`;");

        //Procedure MigrationExcluirAssuntoLogicamente
        $this->execute("DROP PROCEDURE IF EXISTS `MigrationExcluirAssuntoLogicamente`;");

        //Procedure MigrationTotalLivroAutor
        $this->execute("DROP PROCEDURE IF EXISTS `MigrationTotalLivroAutor`;");

        //Procedure MigrationTotalLivroAssunto
        $this->execute("DROP PROCEDURE IF EXISTS `MigrationTotalLivroAssunto`;");

    }
        
}
