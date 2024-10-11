<?php
    require ('../model/livroGetList.php');
    $acaoAplicacao = "Listar";
    $nomeAplicacao = "Livro";
    $tipoAplicacaoDestino = "Form";
    require ('header.html');
?>

<div class="container">
    <h1>
    <a href="../../principal.html"><img id="btnVoltar" src="../../assets/img/btnVoltar.png"></a><?= $acaoAplicacao." ".$nomeAplicacao; ?>
    </h1>
    <span>Lista de todos os livros cadastrados disponíveis </span>
    <div class="grid-container">

    <div class="grid-header-message"><iframe id="iframeManter" name="iframeManter" class="iframe-grid iframe-grid-off"></iframe></div>
        <div class="grid-header">Código</div>
        <div class="grid-header">Livro</div>
        <div class="grid-header">Ações</div>
        <?php foreach ($retornoPdo as $rPdo): ?>
            <div class="grid-item"><?= $rPdo['CodL']; ?></div>
            <div class="grid-item grid-item-left"><?php echo "<b>".$rPdo['Titulo']."</b> ".$rPdo['Edicao']."ª Edição, Editora ".$rPdo['Editora']." ano da Publicação ".$rPdo['AnoPublicacao']."<br>Valor R$ ".number_format($rPdo['Valor'], 2, ',', '.'); ?></div>
            <div class="grid-item">
                <a href="livroForm.php?livro=<?= $rPdo['CodL']; ?>&csrf_token=<?= getCsrfToken(); ?>">Editar</a>
                <a href="../model/livroManter.php?livro=<?= $rPdo['CodL']; ?>&csrf_token=<?= getCsrfToken(); ?>&excluir=1" onclick="return confirm('Tem certeza que deseja excluir?')" target="iframeManter">Excluir</a>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<?php
require ("footer.html");
?>