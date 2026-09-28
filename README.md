# Controle de Estoque — PWA

Sistema de controle de estoque por prateleiras. Funciona como app instalável
no Android, e depois de instalado roda 100% offline (os dados ficam salvos
só no seu celular).

## Como publicar no GitHub Pages (gratuito)

1. No GitHub, crie um repositório novo (pode ser público), por exemplo
   chamado `controle-estoque`.
2. Envie estes itens para a raiz do repositório, mantendo essa mesma
   estrutura de pastas:
   ```
   index.html
   manifest.json
   sw.js
   icons/icon-192.png
   icons/icon-512.png
   assets/logo.png
   ```
   (No GitHub: "Add file" → "Upload files", arraste tudo, sem esquecer que
   os ícones ficam dentro da pasta `icons` e o logotipo dentro da pasta
   `assets`.)
3. Vá em **Settings** → **Pages** (menu à esquerda).
4. Em "Build and deployment" → "Source", selecione **Deploy from a branch**.
5. Em "Branch", selecione `main` (ou `master`) e a pasta `/ (root)`. Clique
   em **Save**.
6. Espere 1-2 minutos. O GitHub vai te dar um link parecido com:
   `https://SEU-USUARIO.github.io/controle-estoque/`

## Como instalar no celular

1. Abra esse link pelo Chrome no celular.
2. Vá no menu (⋮) do Chrome → **"Adicionar à tela inicial"** ou
   **"Instalar app"** (o Chrome também pode sugerir isso sozinho, com um
   banner na parte de baixo da tela).
3. Confirme. Vai aparecer um ícone do app na sua tela inicial, igual a
   qualquer outro app.
4. Abra por esse ícone (não pelo navegador) — ele abre em tela cheia, sem
   barra de endereço.

## Sobre o funcionamento offline

- Na primeira vez que o app é aberto, o navegador guarda todos os arquivos
  em cache automaticamente.
- A partir daí, ele abre e funciona **mesmo sem internet**.
- Os dados que você cadastra (prateleiras, itens, quantidades) ficam salvos
  localmente no celular — não dependem do link do GitHub Pages continuar no
  ar. O link só é necessário para instalar o app (e para receber
  atualizações futuras, se você editar os arquivos no repositório).

## Backup

Dentro do app, o botão **⬇ Backup** exporta um arquivo `.json` com todos os
seus dados, e o **⬆ Importar** recarrega esse arquivo. Vale usar de vez em
quando como segurança, embora não seja necessário no uso do dia a dia.
