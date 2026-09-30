# ☕ Conexão Café

Uma landing page interativa para uma cafeteria fictícia, desenvolvida com **HTML, CSS e JavaScript**, com integração a uma API externa de cafés.

O projeto foi desenvolvido com foco em **responsividade, organização de código, experiência do usuário e integração com API**, simulando uma aplicação real de cafeteria.

---

## 📌 Sobre o projeto

O **Conexão Café** é uma página web criada para apresentar uma cafeteria de forma moderna e interativa.

A aplicação possui:

* Página inicial da cafeteria;
* Sistema de cadastro de usuário;
* Sistema de login;
* Proteção da página principal;
* Botão de logout;
* Cardápio de cafés carregado através de API;
* Seção de produtos da cafeteria;
* Seção de produtos mais vendidos;
* Carrossel de produtos;
* Navegação entre as seções da página;
* Seção institucional;
* Seção de localização;
* Layout responsivo para diferentes tamanhos de tela.

O projeto também utiliza imagens próprias para representar os produtos do **Conexão Café**.

---

# 🎯 Objetivos

O projeto tem como principais objetivos:

1. Praticar a construção de páginas web utilizando HTML, CSS e JavaScript;
2. Trabalhar com manipulação do DOM;
3. Consumir dados de uma API externa utilizando `fetch`;
4. Criar componentes de produtos dinamicamente com JavaScript;
5. Implementar cadastro e autenticação simples utilizando `localStorage`;
6. Trabalhar com navegação entre páginas;
7. Desenvolver uma interface responsiva;
8. Organizar arquivos utilizando uma estrutura de projeto adequada;
9. Praticar Git e GitHub para controle de versão e publicação do projeto.

---

# 🚀 Funcionalidades

## 🔐 Cadastro

O usuário pode realizar um cadastro informando seus dados.

Após o cadastro, os dados são armazenados no navegador através do:

```text
localStorage
```

Depois do cadastro, o usuário é direcionado para a página de login.

---

## 🔑 Login

A página de login verifica os dados cadastrados no navegador.

O sistema compara:

* E-mail;
* Senha.

Quando os dados estão corretos, o usuário é direcionado para a página principal:

```text
index.html
```

---

## 🚪 Logout

Após entrar na página principal, o usuário encontra o botão:

```text
Sair
```

Ao clicar nele, o sistema:

1. Remove os dados de autenticação do `localStorage`;
2. Encerra a sessão;
3. Redireciona o usuário para a página de login.

---

## 🛡️ Proteção da página principal

A página principal verifica se existe um usuário autenticado.

Caso o usuário tente acessar diretamente:

```text
index.html
```

sem estar autenticado, ele é redirecionado para:

```text
login.html
```

Essa funcionalidade simula um controle básico de acesso.

> **Observação:** essa autenticação é apenas para fins educacionais. Como os dados são armazenados no `localStorage`, ela não deve ser utilizada como sistema de autenticação para uma aplicação real.

---

# ☕ Cardápio de cafés

Os cafés são obtidos através de uma API externa:

**SampleAPIs — Coffee API**

Endpoint utilizado:

```text
https://api.sampleapis.com/coffee/hot
```

Também é utilizada a categoria de cafés gelados:

```text
https://api.sampleapis.com/coffee/iced
```

Os dados recebidos da API são processados pelo JavaScript antes de serem apresentados na interface.

O sistema realiza tratamento dos nomes dos cafés para manter uma apresentação padronizada no cardápio.

Exemplo:

```text
espresso
Espresso
ESPRESSO
```

podem ser apresentados na interface como:

```text
Café Expresso
```

---

# 🛍️ Nossos produtos

Além dos cafés obtidos através da API, o projeto possui produtos próprios do Conexão Café.

Entre eles estão:

* Café Especial;
* Brownie de Chocolate;
* Croissant;
* Pão de Queijo;
* Caneca Conexão Café.

Esses produtos são cadastrados diretamente no JavaScript e possuem:

* Nome;
* Categoria;
* Preço;
* Imagem;
* Descrição.

---

# ⭐ Mais vendidos

O projeto possui uma seção de **Mais vendidos**, apresentada através de um carrossel.

O usuário pode navegar pelos produtos utilizando os botões:

```text
‹
›
```

O carrossel também foi desenvolvido pensando em diferentes tamanhos de tela, incluindo dispositivos móveis.

---

# 📱 Responsividade

A interface foi desenvolvida para funcionar em diferentes dispositivos:

* 💻 Computadores;
* 💻 Notebooks;
* 📱 Smartphones;
* 📱 Tablets.

O CSS utiliza técnicas de design responsivo para adaptar a apresentação dos elementos conforme o tamanho da tela.

---

# 🎨 Identidade visual

A interface utiliza uma identidade visual inspirada em cafeterias, utilizando principalmente:

* Fundo escuro;
* Tons de marrom;
* Tons dourados;
* Cards com bordas arredondadas;
* Efeitos de hover;
* Imagens de produtos;
* Elementos com aparência moderna.

A proposta visual busca transmitir uma sensação de ambiente acolhedor e relacionado ao universo do café.

---

# 🗂️ Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte maneira:

```text
Conexao_Cafe/
│
├── index.html
├── cadastro.html
├── login.html
├── README.md
├── LICENSE
│
└── src/
    │
    ├── css/
    │   ├── styles.css
    │   ├── cadastro.css
    │   └── login.css
    │
    ├── js/
    │   ├── script.js
    │   ├── cadastro.js
    │   └── login.js
    │
    └── images/
        ├── conexao_cafe.png
        ├── background-desktop.png
        ├── background-mobile.png
        │
        └── produtos/
            ├── cafe-especial.png
            ├── brownie.png
            ├── croissant.png
            ├── pao-de-queijo.png
            └── Caneca.png
```

---

# 📄 Principais arquivos

## `index.html`

É a página principal do projeto.

Nela estão as principais seções:

* Header;
* Início;
* Cafés;
* Nossos produtos;
* Mais vendidos;
* Sobre nós;
* Localização;
* Footer.

Também é responsável por carregar:

```text
src/css/styles.css
```

e:

```text
src/js/script.js
```

---

## `cadastro.html`

Página responsável pelo cadastro de novos usuários.

Utiliza:

```text
src/css/cadastro.css
```

e:

```text
src/js/cadastro.js
```

---

## `login.html`

Página responsável pela autenticação do usuário.

Utiliza:

```text
src/css/login.css
```

e:

```text
src/js/login.js
```

---

## `styles.css`

Arquivo responsável pela estilização da página principal.

Nele estão os estilos relacionados a:

* Header;
* Menu;
* Hero;
* Cards;
* Cafés;
* Produtos;
* Carrossel;
* Sobre;
* Localização;
* Footer;
* Responsividade.

---

## `script.js`

Arquivo JavaScript principal da página inicial.

Entre suas responsabilidades estão:

* Verificação de autenticação;
* Logout;
* Consumo da API;
* Tratamento dos dados dos cafés;
* Criação dinâmica dos cards;
* Exibição dos produtos;
* Funcionamento do carrossel;
* Navegação dos produtos.

---

## `cadastro.js`

Controla o formulário de cadastro.

Responsável por:

* Capturar os dados do formulário;
* Validar informações;
* Armazenar o usuário no `localStorage`;
* Redirecionar para a página de login após o cadastro.

---

## `login.js`

Controla o formulário de login.

Responsável por:

* Recuperar o usuário armazenado;
* Comparar e-mail e senha;
* Informar se o login foi realizado;
* Criar a sessão;
* Redirecionar para `index.html`.

---

# 💾 LocalStorage

Para fins de estudo, o projeto utiliza o armazenamento local do navegador.

A chave utilizada é:

```text
usuarioConexaoCafe
```

Ela permite manter os dados do usuário entre as páginas.

O fluxo simplificado é:

```text
Cadastro
   ↓
localStorage
   ↓
Login
   ↓
Validação
   ↓
Página principal
   ↓
Logout
   ↓
Login
```

---

# 🔄 Fluxo da aplicação

O funcionamento geral pode ser representado da seguinte forma:

```text
                ┌──────────────┐
                │   Cadastro   │
                │ cadastro.html│
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │  localStorage│
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │    Login     │
                │  login.html  │
                └──────┬───────┘
                       │
                 Login válido?
                    /     \
                  Não      Sim
                  │         │
                  ▼         ▼
               Mensagem   index.html
                            │
                            ▼
                     Conexão Café
                            │
                            ▼
                         Logout
                            │
                            ▼
                       Login.html
```

---

# 🧩 Tecnologias utilizadas

## HTML5

Utilizado para estruturar as páginas e seus respectivos elementos.

---

## CSS3

Utilizado para:

* Layout;
* Responsividade;
* Cores;
* Tipografia;
* Cards;
* Botões;
* Animações;
* Carrossel;
* Identidade visual.

---

## JavaScript

Utilizado para:

* Manipulação do DOM;
* Eventos;
* Formulários;
* `localStorage`;
* Autenticação;
* Consumo da API;
* Criação dinâmica de elementos;
* Carrossel;
* Tratamento dos dados.

---

## Fetch API

Utilizada para realizar requisições HTTP à API de cafés.

Exemplo:

```javascript
fetch('https://api.sampleapis.com/coffee/hot')
```

---

## LocalStorage

Utilizado para armazenar os dados do usuário e controlar a sessão de forma simples para fins educacionais.

---

## Git

Utilizado para controle de versão do projeto.

---

## GitHub

Utilizado para armazenar e compartilhar o código-fonte do projeto.

---

# ▶️ Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/pedro2506/Conexao_Cafe.git
```

## 2. Entrar na pasta

```bash
cd Conexao_Cafe
```

## 3. Abrir o projeto

O projeto pode ser executado utilizando uma extensão como:

**Live Server**

no Visual Studio Code.

Depois, abra:

```text
index.html
```

---

# 🌐 Publicação

O projeto pode ser publicado utilizando o **GitHub Pages**.

Após a configuração do GitHub Pages, a aplicação poderá ser acessada através de um endereço no formato:

```text
https://pedro2506.github.io/Conexao_Cafe/
```

---

# 📚 O que foi praticado

Durante o desenvolvimento do projeto foram trabalhados conceitos importantes de desenvolvimento web:

* Estruturação de páginas HTML;
* Organização de arquivos;
* CSS responsivo;
* Manipulação do DOM;
* Eventos JavaScript;
* Formulários;
* Validação;
* `localStorage`;
* Autenticação básica;
* Consumo de API;
* Requisições com `fetch`;
* Tratamento de dados recebidos da API;
* Criação dinâmica de elementos;
* Carrossel;
* Git;
* GitHub;
* Publicação de aplicações web.

---

# 🔮 Possíveis melhorias futuras

O projeto pode evoluir futuramente com funcionalidades como:

* Backend próprio;
* Banco de dados;
* Autenticação segura;
* Criação de conta com senha criptografada;
* Carrinho de compras;
* Sistema de pedidos;
* Página individual dos produtos;
* Sistema de favoritos;
* Área administrativa;
* Integração com banco de dados;
* API própria;
* Sistema de pagamento;
* Integração com WhatsApp;
* Geolocalização da cafeteria.

---

# 👨‍💻 Autor

**Pedro Miranda**

Projeto desenvolvido para fins de estudo e prática de desenvolvimento web.

---

# 📜 Licença

Este projeto possui uma licença definida no arquivo:

```text
LICENSE
```

Consulte o arquivo para obter informações sobre as condições de uso e distribuição do projeto.
