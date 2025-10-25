<!-- Formulário de exemplo com as novas rotas -->
<form action="<?= $livro ? "/livros/{$livro->getCodL()}" : "/livros" ?>" method="POST" class="form-grid">
    <?php if ($livro): ?>
        <input type="hidden" name="_method" value="PUT">
    <?php endif; ?>
    
    <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
    
    <!-- campos do formulário -->
</form>

<!-- Script JavaScript para delete -->
<script>
function excluirLivro(id) {
    if (confirm('Deseja realmente excluir este livro?')) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = `/livros/${id}`;
        
        const methodInput = document.createElement('input');
        methodInput.type = 'hidden';
        methodInput.name = '_method';
        methodInput.value = 'DELETE';
        
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = 'csrf_token';
        csrfInput.value = document.querySelector('meta[name="csrf-token"]').content;
        
        form.appendChild(methodInput);
        form.appendChild(csrfInput);
        document.body.appendChild(form);
        form.submit();
    }
}