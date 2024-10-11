<?php
    require ('../model/assuntoGetList.php');
    $acaoAplicacao = "Listar";
    $nomeAplicacao = "Assunto";
    $tipoAplicacaoDestino = "Form";
    require ('header.html');
?>

<div class="container">
    <h1>
    <a href="../../principal.html"><img id="btnVoltar" src="../../assets/img/btnVoltar.png"></a><?= $acaoAplicacao." ".$nomeAplicacao; ?>
    </h1>
    <span>Lista de todos os assuntos cadastrados disponíveis </span>
    <div class="grid-container">

    <div class="grid-header-message"><iframe id="iframeManter" name="iframeManter" class="iframe-grid iframe-grid-off"></iframe></div>
        <div class="grid-header">Código</div>
        <div class="grid-header">Descrição</div>
        <div class="grid-header">Ações</div>
        <?php foreach ($retornoPdo as $rPdo): ?>
            <div class="grid-item"><?= $rPdo['CodAs']; ?></div>
            <div class="grid-item grid-item-left"><?= $rPdo['Descricao']; ?></div>
            <div class="grid-item">
                <a href="assuntoForm.php?assunto=<?= $rPdo['CodAs']; ?>&csrf_token=<?= getCsrfToken(); ?>">Editar</a>
                <a href="../model/assuntoManter.php?assunto=<?= $rPdo['CodAs']; ?>&csrf_token=<?= getCsrfToken(); ?>&excluir=1" onclick="return confirm('Tem certeza que deseja excluir?')" target="iframeManter">Excluir</a>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<?php
require ("footer.html");
?>