<?php
    require ('../model/assuntoGetUpdate.php');

    $acaoAplicacao = "Cadastrar";
    $nomeAplicacao = "assunto";
    $tipoAplicacaoDestino = "Grid";
    require ('header.html');
?>

<div class="container">
    <h1><a href="assuntoGrid.php"><img id="btnVoltar" src="../../assets/img/btnVoltar.png"></a><?= !empty($retornoPdo['CodAs']) ? 'Alterar '.$nomeAplicacao : 'Cadastrar '.$nomeAplicacao ?></h1>
    <span><?= !empty($retornoPdo['CodAs']) ? 'Alterar' : 'Cadastrar' ?> todos os assuntos disponíveis</span>
        <div class="home-form">
        <iframe id="iframeManter" name="iframeManter" class="iframe-grid iframe-grid-off"></iframe>
            <form action="../model/assuntoManter.php<?= !empty($retornoPdo['CodAs']) ? '?assunto='.$retornoPdo['CodAs'].'&alterar=1' : '' ?>" method="post" target="iframeManter" class="form-grid">
                <input type="hidden" id="csrf_token" name="csrf_token" value="<?= getCsrfToken(); ?>">
                <input type="hidden" id="codigoassunto" name="codigoassunto" value="<?= !empty($retornoPdo['CodAs']) ? $retornoPdo['CodAs'] : '' ?>">
                
                <label for="descricaoassunto">Descrição Assunto</label>
                <input type="text" id="descricaoassunto" name="descricaoassunto" maxlength="20" value="<?= !empty($retornoPdo['Descricao']) ? $retornoPdo['Descricao'] : '' ?>" onfocus="document.getElementById('iframeManter').src='about:blank';" required>
                
                <button id="btnEnviar">ENVIAR</button>
            </form>
        </div>
</div>

<?php
require ("footer.html");
?>