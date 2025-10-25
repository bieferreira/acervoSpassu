<?php
$acaoAplicacao = isset($livro) ? "Alterar" : "Cadastrar";
$nomeAplicacao = "Livro";
require __DIR__ . '/../shared/header.html';
?>

<div class="container">
    <h1>
        <a href="?route=livro/index"><img id="btnVoltar" src="../../assets/img/btnVoltar.png"></a>
        <?= $acaoAplicacao ?> <?= $nomeAplicacao ?>
    </h1>
    <span><?= $acaoAplicacao ?> todos os livros disponíveis</span>
    
    <div class="home-form">
        <div id="mensagem-erro" class="erro" style="display: none;"></div>
        
        <form id="livroForm" class="form-grid">
            <input type="hidden" id="csrf_token" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
            <input type="hidden" id="codigolivro" name="codigolivro" value="<?= $livro ? $livro->getCodL() : '' ?>">
            
            <label for="titulo">Título do Livro</label>
            <input type="text" id="titulo" name="titulo" maxlength="40" value="<?= $livro ? $livro->getTitulo() : '' ?>" required>
            
            <label for="editora">Editora</label>
            <input type="text" id="editora" name="editora" maxlength="40" value="<?= $livro ? $livro->getEditora() : '' ?>" required>
            
            <label for="edicao">Edição</label>
            <input type="text" id="edicao" name="edicao" maxlength="10" value="<?= $livro ? $livro->getEdicao() : '' ?>" required>
            
            <label for="anopublicacao">Ano de Publicação</label>
            <input type="number" id="anopublicacao" name="anopublicacao" value="<?= $livro ? $livro->getAnoPublicacao() : '' ?>" required>
            
            <label for="valor">Valor</label>
            <input type="text" id="valor" name="valor" class="money" value="<?= $livro ? number_format($livro->getValor(), 2, ',', '.') : '' ?>" required>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary"><?= $acaoAplicacao ?></button>
                <button type="button" class="btn btn-secondary" onclick="window.location='?route=livro/index'">Cancelar</button>
            </div>
        </form>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../assets/js/jquery.mask.js"></script>
<script>
$(document).ready(function() {
    $('.money').mask('#.##0,00', {reverse: true});
    
    $('#livroForm').on('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const url = formData.get('codigolivro') 
            ? '?route=livro/update/' + formData.get('codigolivro')
            : '?route=livro/store';
        
        $.ajax({
            url: url,
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                if (response.success) {
                    window.location = '?route=livro/index';
                } else {
                    $('#mensagem-erro').text(response.message).show();
                }
            },
            error: function(xhr) {
                const response = xhr.responseJSON;
                $('#mensagem-erro').text(response?.message || 'Erro ao processar requisição').show();
            }
        });
    });
});
</script>

<?php require __DIR__ . '/../shared/footer.html'; ?>