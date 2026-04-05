# Bootcamp Treinos API

API para o Bootcamp de Treinos do FSC — Projeto construído com Node.js, Fastify, TypeScript e Prisma, utilizando as melhores práticas do ecossistema moderno.

## 🚀 Tecnologias e Arquitetura

O sistema é construído sobre uma base RESTful modular e tipada de ponta a ponta:

- **Framework Web**: [Fastify](https://fastify.dev/) para alta performance.
- **Validação e Tipagem**: [Zod](https://zod.dev/) integrado com `fastify-type-provider-zod` para inferência de tipos em tempo de compilação e validação estrita de I/O em tempo de execução.
- **Banco de Dados**: PostgreSQL hospedado no [NeonDB](https://neon.tech/) garantindo provisionamento rápido e serverless (não utilizamos Docker).
- **ORM**: [Prisma v7](https://www.prisma.io/) com Prisma Adapter gerando clientes totalmente tipados a partir de `schema.prisma`.
- **Autenticação**: [Better Auth](https://better-auth.com/) injetado diretamente nas rotas provendo fluxos seguros e nativos.
- **Documentação de API**: Swagger UI interativo moderno usando [@scalar/fastify-api-reference](https://github.com/scalar/scalar/tree/main/packages/fastify-api-reference).
- **Inteligência Artificial**: Vercel AI SDK integrado para geração de treinos dinâmicos com IA.

## 🗂️ Estrutura do Domínio

A API gerencia os fluxos centrais da experiência de treinos, refletida no banco de dados:

- **Usuários e Autenticação (`User`, `Session`, `Account`, `Verification`)**: Perfil do usuário (peso, altura, idade, fat percentage).
- **Planos de Treino (`WorkoutPlan`)**: Modelagem do planejamento global.
- **Dias de Treino (`WorkoutDay`)**: Divisão do plano pelos dias da semana.
- **Exercícios (`WorkoutExercise`)**: Séries, repetições, descanso e ordem das execuções diárias.
- **Sessões Realizadas (`WorkoutSession`)**: Acompanhamento e registro em tempo real dos treinos finalizados.

## 🌍 Rotas Principais (Endpoints)

O roteamento é modularizado em `src/routes/` e exposto na base da aplicação.

1. **`GET /docs`**: Acesso à documentação interativa da API.
2. **`/api/auth/*`**: Endpoints de autenticação, sessões e login gerenciadas pelo better-auth.
3. **`/me`**: Obtenção de dados do perfil autenticado atual.
4. **`/home`**: Rota central do dashboard do Bootcamp.
5. **`/stats`**: Estatísticas gerais e progresso dos treinos.
6. **`/workout-plans`**: CRUD e listagem de treinos do usuário.
7. **`/ai`**: Integração responsável por gerar planos usando o `AI SDK`.

---

## 🛠️ Requisitos

- **Node.js** 24.x (ver em `package.json` → `engines`)
- **pnpm** 10.33.0+

## 📦 Instalação e Execução

Clone o repositório e instale todas as dependências:

```bash
pnpm install
```

Sincronize seu banco de dados Neon configurado no arquivo `.env` gerando os tipos do Prisma:

```bash
pnpm exec prisma db push
pnpm exec prisma generate
```

Inicie o servidor (em ambiente de desenvolvimento on-the-fly via `tsx`):

```bash
pnpm dev
```
> O servidor estará rodando em `http://localhost:8080/docs`.

---

## 💻 Lint e Code Style

- **TypeScript** 5.9 configurado com `module` e `moduleResolution` como **NodeNext** para ESM nativo (saída em `dist/`).
- **ESLint 10**: Flat config `eslint.config.js` com recomentações JS, TS, regras de imports dinâmicos ordenados e compatibilidade com Prettier.
- Recomendado uso do formatador Prettier integrado ao VS Code (fix on save ativo).

---

## Histórico de commits (atualizado automaticamente)

Esta lista é gerada pelo hook em `.githooks/pre-commit` sempre que você faz um commit (desde que os hooks estejam ativos — ver abaixo). Como o hook roda **antes** do commit ser gravado, a linha do commit em curso só aparece no **próximo** commit (ou rode `pnpm readme:history` e faça um commit só do README).

<!-- AUTO:COMMIT_HISTORY_START -->

- `dc3462a` chore: add fastify swagger generation (17 hours ago)
- `01d58fd` chole: add zod and fastify-type-provider-zod setup (17 hours ago)
- `33cff4c` feat: add fastify api (25 hours ago)
- `ca291f4` docs: nota sobre histórico e sincroniza lista (25 hours ago)
- `f23d8f4` docs: README com histórico e hooks de sincronização (26 hours ago)
- `c82c7a2` chore:add eslint and prettier setup (26 hours ago)
- `e4505d7` chore: add node version to package.json (2 days ago)
- `02e057d` chole: add typescrip and tsx setup (2 days ago)

<!-- AUTO:COMMIT_HISTORY_END -->

## Hooks Git (README sincronizado a cada commit)

Após `pnpm install`, o script **`prepare`** configura `core.hooksPath` para `.githooks` (se o diretório `.git` existir). Assim, em cada commit o hook **`pre-commit`** roda `scripts/update-readme-history.mjs` e inclui o `README.md` atualizado no mesmo commit.

Se os hooks não estiverem ativos, configure manualmente:

```bash
git config core.hooksPath .githooks
```

Para só regenerar o histórico sem commit: `pnpm readme:history`.

No **Windows**, use Git for Windows (executa os hooks com `sh`). O arquivo `.gitattributes` força fim de linha LF nos hooks para evitar falhas do interpretador.
