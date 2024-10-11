<?php
    require ('../model/autorGetUpdate.php');

    $acaoAplicacao = "Cadastrar";
    $nomeAplicacao = "Autor";
    $tipoAplicacaoDestino = "Grid";
    require ('header.html');
?>

<div class="container">
    <h1><a href="autorGrid.php"><img id="btnVoltar" src="../../assets/img/btnVoltar.png"></a><?= !empty($retornoPdo['CodAu']) ? 'Alterar '.$nomeAplicacao : 'Cadastrar '.$nomeAplicacao ?></h1>
    <span><?= !empty($retornoPdo['CodAu']) ? 'Alterar' : 'Cadastrar' ?> todos os autores disponíveis</span>
        <div class="home-form">
        <iframe id="iframeManter" name="iframeManter" class="iframe-grid iframe-grid-off"></iframe>
            <form action="../model/autorManter.php<?= !empty($retornoPdo['CodAu']) ? '?autor='.$retornoPdo['CodAu'].'&alterar=1' : '' ?>" method="post" target="iframeManter" class="form-grid">
                <input type="hidden" id="csrf_token" name="csrf_token" value="<?= getCsrfToken(); ?>">
                <input type="hidden" id="codigoautor" name="codigoautor" value="<?= !empty($retornoPdo['CodAu']) ? $retornoPdo['CodAu'] : '' ?>">
                
                <label for="nomeautor">Nome Completo do Autor</label>
                <input type="text" id="nomeautor" name="nomeautor" maxlength="40" value="<?= !empty($retornoPdo['Nome']) ? $retornoPdo['Nome'] : '' ?>" onfocus="document.getElementById('iframeManter').src='about:blank';" required>
                
                <button id="btnEnviar">ENVIAR</button>
            </form>
        </div>
</div>

<?php
require ("footer.html");
?>