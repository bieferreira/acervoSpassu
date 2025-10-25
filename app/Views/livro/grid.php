<?php
$nomeAplicacao = "Livros";
require __DIR__ . '/../../view/header.html';
?>

<div class="container">
    <h1><?= $nomeAplicacao ?></h1>
    <span>Lista de todos os livros disponíveis</span>

    <div class="actions">
        <a href="?route=livro/create" class="btn btn-primary">Novo Livro</a>
    </div>

    <div class="grid-container">
        <table class="grid">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Título</th>
                    <th>Editora</th>
                    <th>Edição</th>
                    <th>Ano</th>
                    <th>Valor</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($livros as $livro): ?>
                <tr>
                    <td><?= $livro->getCodL() ?></td>
                    <td><?= htmlspecialchars($livro->getTitulo()) ?></td>
                    <td><?= htmlspecialchars($livro->getEditora()) ?></td>
                    <td><?= htmlspecialchars($livro->getEdicao()) ?></td>
                    <td><?= $livro->getAnoPublicacao() ?></td>
                    <td>R$ <?= number_format($livro->getValor(), 2, ',', '.') ?></td>
                    <td>
                        <a href="?route=livro/edit/<?= $livro->getCodL() ?>" class="btn btn-small btn-edit">Editar</a>
                        <button onclick="excluirLivro(<?= $livro->getCodL() ?>)" class="btn btn-small btn-delete">Excluir</button>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
function excluirLivro(id) {
    if (confirm('Deseja realmente excluir este livro?')) {
        $.ajax({
            url: '?route=livro/delete/' + id,
            method: 'POST',
            data: {
                csrf_token: document.querySelector('meta[name="csrf-token"]').content
            },
            success: function(response) {
                if (response.success) {
                    window.location.reload();
                } else {
                    alert(response.message);
                }
            },
            error: function(xhr) {
                const response = xhr.responseJSON;
                alert(response?.message || 'Erro ao excluir livro');
            }
        });
    }
}
</script>

<?php require __DIR__ . '/../../view/footer.html'; ?>