<?php
    require ('../model/livroGetUpdate.php');

    $acaoAplicacao = "Cadastrar";
    $nomeAplicacao = "Livro";
    $tipoAplicacaoDestino = "Grid";
    require ('header.html');
?>
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<link rel="stylesheet" href="../../assets/css/multi/mobiscroll.jquery.min.css">
<script src="../../assets/js/mobiscroll.jquery.min.js"></script>
<script src="../../assets/js/jquery.mask.js"></script>

<div class="container">
    <h1><a href="livroGrid.php"><img id="btnVoltar" src="../../assets/img/btnVoltar.png"></a><?= !empty($retornoPdo['CodL']) ? 'Alterar '.$nomeAplicacao : 'Cadastrar '.$nomeAplicacao ?></h1>
    <span><?= !empty($retornoPdo['CodL']) ? 'Alterar' : 'Cadastrar' ?> todos os livros disponíveis</span>
        <div class="home-form">
        <iframe id="iframeManter" name="iframeManter" class="iframe-grid iframe-grid-off"></iframe>
            <form action="../model/livroManter.php<?= !empty($retornoPdo['CodL']) ? '?livro='.$retornoPdo['CodL'].'&alterar=1' : '' ?>" method="post" target="iframeManter" class="form-grid">
                <input type="hidden" id="csrf_token" name="csrf_token" value="<?= getCsrfToken(); ?>">
                <input type="hidden" id="codigolivro" name="codigolivro" value="<?= !empty($retornoPdo['CodL']) ? $retornoPdo['CodL'] : '' ?>">
                
                <label for="titulo">Titulo do Livro</label>
                <input type="text" id="titulo" name="titulo" maxlength="40" value="<?= !empty($retornoPdo['Titulo']) ? $retornoPdo['Titulo'] : '' ?>" required>
                
                <label for="codigoautor">Autor</label>
                <div mbsc-page class="demo-multiple-select">
                <div style="height:100%">
                <label>
                <input mbsc-input id="demo-multiple-select-input" placeholder="Selecione" data-dropdown="true" data-input-style="outline" data-label-style="stacked" data-tags="true" />
                </label>
                <select id="codigoautor" name="codigoautor[]" multiple required>
                        <?php foreach ($retornoPdo1 as $rPdo1): ?>
                                <option value="<?= $rPdo1['CodAu']; ?>" <?= (str_contains(','.$retornoPdo['livroautores'].',', ','.$rPdo1['CodAu'].',') ? 'selected' : '') ?>><?= $rPdo1['Nome']; ?></option>
                            <?php endforeach; ?>
                        </select>                
                    </div>
                </div>

                <label for="codigoassunto">Assunto</label>
                <div mbsc-page class="demo-multiple-select">
                <div style="height:100%">
                <label>
                <input mbsc-input id="demo-multiple-select-input-1" placeholder="Selecione" data-dropdown="true" data-input-style="outline" data-label-style="stacked" data-tags="true" />
                </label>
                <select id="codigoassunto" name="codigoassunto[]" multiple required>
                        <?php foreach ($retornoPdo2 as $rPdo2): ?>
                                <option value="<?= $rPdo2['CodAs']; ?>" <?= (str_contains(','.$retornoPdo['livroassuntos'].',', ','.$rPdo2['CodAs'].',') ? 'selected' : '') ?>><?= $rPdo2['Descricao']; ?></option>
                            <?php endforeach; ?>
                        </select>                
                    </div>
                </div>

                <label for="editora">Editora</label>
                <input type="text" id="editora" name="editora" maxlength="40" value="<?= !empty($retornoPdo['Editora']) ? $retornoPdo['Editora'] : '' ?>" required>

                <label for="edicao">Edição</label>
                <input type="number" id="edicao" name="edicao" value="<?= !empty($retornoPdo['Edicao']) ? $retornoPdo['Edicao'] : '' ?>" required>

                <label for="anopublicacao">Ano de Publicação</label>
                <input type="number" id="anopublicacao" name="anopublicacao" maxlength="4" value="<?= !empty($retornoPdo['AnoPublicacao']) ? $retornoPdo['AnoPublicacao'] : '' ?>" required>

                <label for="valor">Valor R$</label>
                <input type="text" id="valor" name="valor"  value="<?= !empty($retornoPdo['Valor']) ? number_format($retornoPdo['Valor'], 2, ',', '.') : '' ?>" required>

                <button id="btnEnviar" onclick="window.scrollTo(0, 0);">ENVIAR</button>
            </form>
        </div>
</div>

<script type="text/javascript">

        $('#titulo').on('keyup', (ev) => {
            $('#titulo').val($('#titulo').val().toUpperCase());
        });

       $('#valor').mask('000.000.000.000.000,00', {reverse: true});

       $('#valor').on('blur', function() {
            var valor = $(this).val();
            
            if (valor && valor.indexOf(',') === -1) {
                $(this).val(valor + ',00');
            } else {

                var partes = valor.split(',');
                if (partes[1] && partes[1].length < 2) {
                    $(this).val(valor + '0'); 
                }
            }
        });        

       $('#anopublicacao').on('keyup', function() {
            let valor = $(this).val();
            
            
            if (!/^\d{0,4}$/.test(valor) || valor > 2024) {
                $(this).val('');
                alert('Favor informar um ano válido');
            }
        });

        $('#btnEnviar').click(function() {
            if ($('#codigoautor').val() === null || $('#codigoautor').val() === "") {
                alert('Obrigatório informar pelo menos um Autor');
            }        

            if ($('#codigoautor').val() === null || $('#codigoassunto').val() === "") {
                alert('Obrigatório informar pelo menos um Assunto');
            }        
        });

            mobiscroll.setOptions({
      locale: mobiscroll.localePtBR,                                            // Specify language like: locale: mobiscroll.localePl or omit setting to use default
      theme: 'ios',                                                             // Specify theme like: theme: 'ios' or omit setting to use default
            themeVariant: 'light'                                               // More info about themeVariant: https://mobiscroll.com/docs/jquery/select/api#opt-themeVariant
    });
    
    $(function () {
      $('#codigoautor')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-multiple-select-input'),  // More info about inputElement: https://mobiscroll.com/docs/jquery/select/api#opt-inputElement
        });

        $('#codigoassunto')
        .mobiscroll()
        .select({
          inputElement: document.getElementById('demo-multiple-select-input-1'),  // More info about inputElement: https://mobiscroll.com/docs/jquery/select/api#opt-inputElement
        });
    });

</script>

<?php
require ("footer.html");
?>

<style>

main {
    height: 1150px;
}

iframe {
    position: absolute !important;
    top: 280px !important;
}

</style>    
