<?php
    require ('../model/autorGetList.php');
    $acaoAplicacao = "Listar";
    $nomeAplicacao = "Autor";
    $tipoAplicacaoDestino = "Form";
    require ('header.html');
?>

<div class="container">
    <h1>
    <a href="../../principal.html"><img id="btnVoltar" src="../../assets/img/btnVoltar.png"></a><?= $acaoAplicacao." ".$nomeAplicacao; ?>
    </h1>
    <span>Lista de todos os autores cadastrados disponíveis </span>
    <div class="grid-container">

    <div class="grid-header-message"><iframe id="iframeManter" name="iframeManter" class="iframe-grid iframe-grid-off"></iframe></div>
        <div class="grid-header">Código</div>
        <div class="grid-header">Nome</div>
        <div class="grid-header">Ações</div>
        <?php foreach ($retornoPdo as $rPdo): ?>
            <div class="grid-item"><?= $rPdo['CodAu']; ?></div>
            <div class="grid-item grid-item-left"><?= $rPdo['Nome']; ?></div>
            <div class="grid-item">
                <a href="autorForm.php?autor=<?= $rPdo['CodAu']; ?>&csrf_token=<?= getCsrfToken(); ?>">Editar</a>
                <a href="../model/autorManter.php?autor=<?= $rPdo['CodAu']; ?>&csrf_token=<?= getCsrfToken(); ?>&excluir=1" onclick="return confirm('Tem certeza que deseja excluir?')" target="iframeManter">Excluir</a>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<?php
require ("footer.html");
?>