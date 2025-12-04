# Como fazer deploy no GitHub Pages

## Configuração Inicial (já feita)

1. ✅ Instalado `gh-pages` como dependência de desenvolvimento
2. ✅ Configurado `base: '/T-A-Smart-Automation/'` no `vite.config.js`
3. ✅ Adicionados scripts de deploy no `package.json`

## Como fazer o deploy

Execute o comando:

```bash
npm run deploy
```

Este comando irá:
1. Fazer o build da aplicação (`npm run build`)
2. Criar/atualizar a branch `gh-pages` no GitHub
3. Fazer push dos arquivos estáticos para o GitHub Pages

## Ativar GitHub Pages no repositório

1. Vá para o repositório no GitHub: https://github.com/TiagoCoder2023/T-A-Smart-Automation
2. Clique em **Settings**
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione a branch `gh-pages` e a pasta `/ (root)`
5. Clique em **Save**

## Acessar o site

Após o deploy e configuração, o site estará disponível em:
**https://tiagocoder2023.github.io/T-A-Smart-Automation/**

## Atualizar o site

Sempre que fizer alterações, execute novamente:
```bash
npm run deploy
```

