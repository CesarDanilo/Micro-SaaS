# Diagrama do Banco de Dados - Comparador de Preços

## Diagrama Completo ER

```mermaid
erDiagram
    USUARIO ||--o{ PLANO : pertence
    USUARIO ||--o{ FAVORITO : possui
    USUARIO ||--o{ HISTORICO_PESQUISA : gera
    PRODUTO ||--o{ CATEGORIA : pertence
    PRODUTO ||--o{ PRECO : tem
    PRODUTO ||--o{ FAVORITO : favoritado
    PRODUTO ||--o{ HISTORICO_PESQUISA : pesquisado
    LOJA ||--o{ PRECO : oferece
    CATEGORIA ||--o{ CATEGORIA : subcategoria

    USUARIO {
        int id PK
        string nome
        string email UK
        string senha_hash
        datetime data_cadastro
        int plano_id FK
        int tentativas_gratis_restantes
    }
    
    PLANO {
        int id PK
        string nome
        int max_favoritos
        int max_comparacoes_diarias
        boolean pode_salvar_favoritos
        decimal preco_mensal
    }
    
    PRODUTO {
        int id PK
        string nome
        text descricao
        int categoria_id FK
        string imagem_url
        datetime data_cadastro
    }
    
    LOJA {
        int id PK
        string nome
        string url_site
        string logo_url
    }
    
    PRECO {
        int id PK
        int produto_id FK
        int loja_id FK
        decimal preco
        datetime data_registro
        boolean disponivel
        string url_produto
    }
    
    FAVORITO {
        int id PK
        int usuario_id FK
        int produto_id FK
        datetime data_adicao
    }
    
    HISTORICO_PESQUISA {
        int id PK
        int usuario_id FK
        int produto_id FK
        datetime data_pesquisa
        string termo_buscado
    }
    
    CATEGORIA {
        int id PK
        string nome
        int pai_id FK
    }
