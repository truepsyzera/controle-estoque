# Controle de Estoque — PWA

Sistema de controle de estoque por prateleiras. Funciona como app instalável
no Android, e depois de instalado roda 100% offline (os dados ficam salvos
só no seu celular).


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
