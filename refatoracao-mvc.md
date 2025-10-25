# Refatoração do Sistema Acervo SPASSU - MVC e Rotas Modernas

## 1. Análise do Padrão MVC Original

### Estrutura Original
```
app/
├── controller/
│   └── controller.php
├── model/
│   ├── assuntoGetList.php
│   ├── assuntoGetUpdate.php
│   ├── assuntoManter.php
│   └── ...
└── view/
    ├── assuntoForm.php
    ├── assuntoGrid.php
    └── ...
```

### Problemas Identificados
1. Acoplamento direto View-Model
2. Controlador subutilizado
3. Lógica de apresentação no Modelo
4. Falta de validação robusta

## 2. Nova Estrutura Implementada

### Diretórios
```
app/
├── controllers/
│   ├── BaseController.php
│   └── LivroController.php
├── core/
│   ├── Container.php
│   ├── Database.php
│   ├── Logger.php
│   ├── Request.php
│   ├── Response.php
│   ├── Router.php
│   ├── Routes.php
│   └── Validator.php
├── models/
│   ├── entities/
│   │   └── Livro.php
│   └── repositories/
│       └── LivroRepository.php
└── views/
    └── livro/
        ├── form.php
        └── grid.php
```

## 3. Sistema de Rotas Moderno

### Antes
```
/?route=livro/index
/?route=livro/create
/?route=livro/edit/1
```

### Depois (RESTful)
```
/livros
/livros/novo
/livros/{id}/editar
```

### Rotas Implementadas
- `GET /livros` - Lista todos os livros
- `GET /livros/novo` - Formulário de novo livro
- `POST /livros` - Cria um novo livro
- `GET /livros/{id}` - Exibe um livro
- `GET /livros/{id}/editar` - Formulário de edição
- `PUT /livros/{id}` - Atualiza um livro
- `DELETE /livros/{id}` - Remove um livro

## 4. Melhorias Implementadas

### Injeção de Dependências
```php
class Container {
    private static $container = [];

    public static function set($key, $value) {
        self::$container[$key] = $value;
    }

    public static function get($key) {
        if (!isset(self::$container[$key])) {
            throw new \Exception("Dependência não encontrada: {$key}");
        }
        return self::$container[$key];
    }
}
```

### Sistema de Validação
```php
$validator = new Validator($data);
$validator->required('titulo')
         ->maxLength('titulo', 40)
         ->required('editora')
         ->numeric('valor');
```

### Logging
```php
$this->logger->error('Erro ao salvar livro', [
    'error' => $e->getMessage(),
    'data' => $data
]);
```

## 5. Configuração do Servidor

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

## 6. Exemplos de Uso

### Formulário com Método PUT
```html
<form action="/livros/123" method="POST">
    <input type="hidden" name="_method" value="PUT">
    <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
    <!-- campos do formulário -->
</form>
```

### JavaScript para Delete
```javascript
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
```

## 7. Próximos Passos

1. Implementar a mesma estrutura para os módulos:
   - Autor
   - Assunto

2. Melhorias Futuras:
   - Implementar sistema de cache
   - Adicionar testes automatizados
   - Criar documentação API
   - Implementar autenticação e autorização
   - Adicionar sistema de migrations mais robusto

## 8. Dicas de Manutenção

1. Sempre use o Container para injeção de dependências
2. Mantenha os controllers limpos, movendo lógica de negócio para services
3. Use o sistema de logging para rastrear erros
4. Mantenha as validações centralizadas no Validator
5. Siga o padrão RESTful para novas rotas

## 9. Contato

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento.