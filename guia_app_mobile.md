# Guia — Transformar Divinissima em App de Celular

## O que você vai conseguir
Após seguir esse guia, qualquer pessoa poderá instalar o sistema Divinissima no celular como se fosse um app baixado da Play Store ou App Store — com ícone na tela inicial, abre sem barra de navegador, funciona offline.

---

## Arquivos que você precisa enviar para o GitHub

Envie TODOS estes arquivos para o repositório `backupdivinissima-byte/divinissima`:

| Arquivo | Função |
|---|---|
| `index.html` | Sistema principal (substitui o antigo) |
| `manifest.json` | Define nome, ícone e comportamento do app |
| `sw.js` | Service Worker (cache offline) |
| `icon-48.png` | Ícone pequeno |
| `icon-72.png` | Ícone médio |
| `icon-96.png` | Ícone médio |
| `icon-144.png` | Ícone Windows/Android |
| `icon-152.png` | Ícone iPad |
| `icon-192.png` | Ícone Android principal |
| `icon-512.png` | Ícone alta resolução |
| `apple-touch-icon.png` | Ícone iPhone/iPad |
| `favicon-32x32.png` | Favicon navegador |
| `favicon-16x16.png` | Favicon pequeno |

---

## Como enviar para o GitHub

### Opção A — Pelo site do GitHub (mais fácil)

1. Acesse **github.com** e entre na sua conta
2. Vá para o repositório `backupdivinissima-byte/divinissima`
3. Clique em **Add file → Upload files**
4. Arraste TODOS os 13 arquivos de uma vez
5. Role para baixo e clique em **Commit changes**
6. Aguarde 1-2 minutos e acesse `https://backupdivinissima-byte.github.io/divinissima/` para confirmar

---

## Como instalar no celular Android

1. Abra o Chrome no celular
2. Acesse `https://backupdivinissima-byte.github.io/divinissima/`
3. Vai aparecer um banner na parte de baixo da tela: **"Adicionar Divinissima à tela inicial"**
4. Toque em **Adicionar**
5. Pronto! O ícone do app aparece na tela inicial do celular

Se o banner não aparecer:
- Toque nos 3 pontos ⋮ no canto superior direito do Chrome
- Toque em **Adicionar à tela inicial**
- Confirme

---

## Como instalar no celular iPhone (iOS)

1. Abra o **Safari** (obrigatório — não funciona no Chrome no iPhone)
2. Acesse `https://backupdivinissima-byte.github.io/divinissima/`
3. Toque no botão **Compartilhar** (ícone de seta para cima, na barra inferior)
4. Role até encontrar **Adicionar à Tela de Início**
5. Toque em **Adicionar**
6. O ícone Divinissima aparece na tela inicial

---

## Como instalar no computador (Windows/Mac)

1. Abra o Chrome ou Edge
2. Acesse `https://backupdivinissima-byte.github.io/divinissima/`
3. Na barra de endereço, vai aparecer um ícone de instalação ⊕ ou um aviso no canto
4. Clique e confirme a instalação
5. O sistema abre como janela própria, sem barra do navegador

---

## O que muda após instalar

- Abre como app nativo, sem barra de endereço
- Ícone Divinissima (diamante dourado) na tela inicial
- Funciona mesmo sem internet (mostra os dados salvos)
- Sincroniza com a nuvem (Google Sheets) quando conectar
- Push notifications (futuramente, se necessário)
