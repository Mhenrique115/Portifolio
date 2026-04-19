# Matheus Henrique | Portfolio

> Portfólio pessoal com estética de terminal VS Code e chuva de código Matrix.

## ✨ Features

- 🖥️ Estilo terminal / VS Code
- 🌧️ Efeito de chuva de código Matrix em canvas
- 🌓 Tema escuro padrão com alternância para claro
- 💾 Tema persistente via `localStorage`
- 📱 Layout responsivo para desktop e mobile
- ⚡ Sem dependências externas — HTML, CSS e JavaScript puros
- 🎯 Animações de scroll e destaques de seção
- 🔗 Navegação interna com links ativos

## � Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Git** (para clonar o repositório)
- **Navegador web moderno** (Chrome, Firefox, Edge, etc.)
- **Editor de código** (VS Code recomendado para edição)

## 🚀 Como usar

### Clonando o repositório

```bash
git clone https://github.com/Mhenrique115/Portifolio.git
cd portfolio
```

### Rodando localmente

1. Abra o arquivo `index.html` diretamente no navegador:
   - Clique duplo no arquivo `index.html`
   - Ou use uma extensão como "Live Server" no VS Code

2. Para desenvolvimento com servidor local (opcional):
   - Instale uma extensão como "Live Server" no VS Code
   - Clique com o botão direito em `index.html` e selecione "Open with Live Server"

## 📁 Estrutura do projeto

```
portfolio/
├── index.html                # Página principal
├── css/
│   └── style.css             # Estilos e temas
├── js/
│   └── main.js               # Matrix rain, tema, scroll e interações
├── assets/
│   ├── img/
│   │   └── perfil.jpg        # Foto de perfil
│   └── pdf/
│       └── curriculo_matheus_brito_att.docx.pdf
└── README.md
```

## ✏️ Personalização

### Editando o conteúdo

Edite o `index.html` para atualizar:

- **Nome e bio** — Seção `#sobre`
- **Links de contato** — Seção `#contato`
- **Projetos** — Seção `#projetos`
- **Conquistas** — Seção `#conquistas`
- **Currículo** — Use `assets/pdf/curriculo_matheus_brito_att.docx.pdf`
- **Foto** — `assets/img/perfil.jpg`

### Personalizando o tema

- O tema padrão é escuro. Para alterar, edite `js/main.js` na linha `let isDark = true;`
- Cores podem ser ajustadas em `css/style.css` nas variáveis CSS `:root` e `body.dark`

### Modificando o efeito Matrix

- Para alterar a velocidade ou densidade, edite as constantes em `js/main.js` na função `initMatrix()`
- Para adicionar/remover snippets de código, modifique o array `snippets` no início do arquivo

## 🚀 Deploy no GitHub Pages

1. Faça upload de todos os arquivos no repositório do projeto.
2. Vá em **Settings → Pages**.
3. Em *Source*, selecione **Branch: main** e pasta **/ (root)**.
4. Clique em **Save**.
5. Acesse: `https://Mhenrique115.github.io/Portifolio` (ou o nome correto do seu repositório).

## 🛠️ Tecnologias usadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📝 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como base para seu próprio portfólio, mas dê os devidos créditos.

---

© 2025 Matheus Henrique
