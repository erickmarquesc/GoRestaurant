
<div align="center">
  <h3>GoRestaurant</h3>
  <p>Gerenciamento de cardápio de restaurante com CRUD completo</p>
</div>

---

## Funcionalidades

- Listagem de pratos com imagem, descrição e preço
- Cadastro de novos pratos com validação de formulário
- Edição de pratos existentes
- Exclusão com modal de confirmação
- Toggle de disponibilidade (disponível / indisponível)
- Feedback visual com notificações toast
- Loading skeleton durante o carregamento inicial
- Error boundary para captura de erros inesperados

## Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| UI | React 19 + TypeScript 5 |
| Estilização | Styled Components 6 |
| HTTP | Axios |
| Mock API | MirageJS |
| Modais | React Modal |
| Notificações | React Hot Toast |
| Testes | React Testing Library + Jest |

## Pré-requisitos

- Node.js 18+
- Yarn ou npm

## Como rodar

```bash
# Instalar dependências
yarn install

# Iniciar em desenvolvimento (API mock inclusa via MirageJS)
yarn start

# Rodar testes
yarn test

# Verificar linting
yarn lint

# Build de produção
yarn build
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz baseado no `.env.example`:

```env
REACT_APP_API_URL=http://localhost:3000/api
```

> Em desenvolvimento o MirageJS intercepta as requisições — nenhum servidor externo é necessário.

## Estrutura do projeto

```
src/
├── components/
│   ├── Card/          # Compound component (Root, Header, Body, Footer)
│   ├── ConfirmModal/  # Modal de confirmação de exclusão
│   ├── Dashboard/     # Grid de pratos com skeleton loading
│   ├── EditFoodModal/ # Re-export semântico de FoodFormModal (modo edição)
│   ├── ErrorBoundary/ # Captura erros não tratados da árvore de componentes
│   ├── FoodFormModal/ # Formulário de criação e edição de pratos
│   ├── Header/        # Cabeçalho com botão de novo prato
│   ├── ModalBase/     # Componentes base de layout para modais
│   └── NewFoodsModal/ # Re-export semântico de FoodFormModal (modo criação)
├── hooks/
│   ├── useFoods.tsx   # Context + CRUD de pratos (com loading state e useCallback)
│   ├── useModal.tsx   # Context de estado dos modais
│   └── index.ts       # Barrel de exports
├── services/
│   └── api.ts         # Instância do Axios (URL via variável de ambiente)
├── styles/
│   └── global.ts      # Variáveis CSS + estilos globais
└── types/
    └── food.ts        # Interfaces e tipos compartilhados
```

## Arquitetura

### Compound Components
O `Card` usa o padrão *compound component* com `CardContext` para compartilhar dados entre `Root`, `Header`, `Body` e `Footer` sem prop drilling.

### Context API
Dois providers separados por responsabilidade:
- **FoodsProvider** — estado dos pratos, operações CRUD e loading state
- **FoodsModalProvider** — qual modal está ativo e qual prato está sendo manipulado

### Tipagem centralizada
Todos os tipos de domínio (`IFood`, `FoodInput`, `ModalType`, `FormFields`, `FormErrors`) vivem em `src/types/food.ts`.

---

Baseado no desafio da [Rocketseat](https://www.rocketseat.com.br/) | Desenvolvido por **Erick Marques**
