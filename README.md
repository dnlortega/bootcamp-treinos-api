# bootcamp-treinos-api

API do bootcamp de treinos — projeto Node.js em TypeScript com ferramentas de lint e formatação.

## Requisitos

- **Node.js** 24.x (definido em `package.json` → `engines`)
- **pnpm** 10.33.0 (definido em `packageManager`)

## Instalação e execução

```bash
pnpm install
pnpm dev
```

O script `dev` sobe `src/index.ts` com **tsx** em modo watch.

## O que já foi feito

- **TypeScript** (`typescript` 5.9): `tsconfig.json` com `module` / `moduleResolution` **NodeNext**, `target` **ES2024**, `strict`, saída em `dist/`.
- **Execução em dev**: **tsx** com `--watch` no entrypoint `src/index.ts` (ex.: `console.log("Hello World")`).
- **ESLint 10** (flat config em `eslint.config.js`): regras recomendadas JS + **typescript-eslint** recommended, **eslint-config-prettier** (evita conflito com Prettier), **eslint-plugin-simple-import-sort** (imports/exports ordenados).
- **Prettier** como formatador padrão no VS Code (ver `.vscode/settings.json`).
- **VS Code**: format on save, Prettier como formatador padrão, **fix all ESLint** ao salvar.

## Scripts (`package.json`)

| Script | Descrição        |
| ------ | ---------------- |
| `dev`  | `tsx --watch src/index.ts` |

## Histórico de commits (atualizado automaticamente)

Esta lista é gerada pelo hook em `.githooks/pre-commit` sempre que você faz um commit (desde que os hooks estejam ativos — ver abaixo). Como o hook roda **antes** do commit ser gravado, a linha do commit em curso só aparece no **próximo** commit (ou rode `pnpm readme:history` e faça um commit só do README).

<!-- AUTO:COMMIT_HISTORY_START -->

- `01d58fd` chole: add zod and fastify-type-provider-zod setup (29 minutes ago)
- `33cff4c` feat: add fastify api (8 hours ago)
- `ca291f4` docs: nota sobre histórico e sincroniza lista (9 hours ago)
- `f23d8f4` docs: README com histórico e hooks de sincronização (10 hours ago)
- `c82c7a2` chore:add eslint and prettier setup (10 hours ago)
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
