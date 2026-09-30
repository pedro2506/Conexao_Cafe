
const usuarioLogado = localStorage.getItem('usuarioConexaoCafe');

if (!usuarioLogado) {
    window.location.href = './login.html';
}


const API_CAFE_QUENTE =
    'https://api.sampleapis.com/coffee/hot';

const API_CAFE_GELADO =
    'https://api.sampleapis.com/coffee/iced';






const cafesContainer =
    document.querySelector('#cafes-container');

const produtosContainer =
    document.querySelector('#produtos-container');

const carroselContainer =
    document.querySelector('#carrosel-container');

const btnAnterior =
    document.querySelector('#btn-anterior');

const btnProximo =
    document.querySelector('#btn-proximo');






let cafes = [];

let maisVendidos = [];

let indiceAtual = 0;

let quantidadePorPagina = 3;






const produtos = [

    {
        id: 1,

        nome: 'Brownie de Chocolate',

        categoria: 'Acompanhamento',

        preco: 9.90,

        imagem:
            './src/images/produtos/brownie.png',

        descricao:
            'Brownie de chocolate perfeito para acompanhar seu café.'
    },


    {
        id: 2,

        nome: 'Croissant',

        categoria: 'Acompanhamento',

        preco: 10.90,

        imagem:
            './src/images/produtos/croissant.png',

        descricao:
            'Croissant crocante por fora e macio por dentro.'
    },


    {
        id: 3,

        nome: 'Pão de Queijo',

        categoria: 'Acompanhamento',

        preco: 7.90,

        imagem:
            './src/images/produtos/pao-de-queijo.png',

        descricao:
            'Pão de queijo quentinho para acompanhar seu café.'
    },


    {
        id: 4,

        nome: 'Caneca Conexão Café',

        categoria: 'Produto',

        preco: 39.90,

        imagem:
            './src/images/produtos/Caneca.png',

        descricao:
            'Caneca exclusiva para os apaixonados por café.'
    }

];






async function buscarCafes() {

    try {

        const [respostaQuente, respostaGelado] =
            await Promise.all([

                fetch(API_CAFE_QUENTE),

                fetch(API_CAFE_GELADO)

            ]);


        if (
            !respostaQuente.ok ||
            !respostaGelado.ok
        ) {

            throw new Error(
                'Erro ao buscar os cafés.'
            );

        }


        const cafesQuentes =
            await respostaQuente.json();


        const cafesGelados =
            await respostaGelado.json();


        /*
            Adicionamos uma categoria
            para identificar o tipo de café.
        */

        const quentes = cafesQuentes.map(cafe => ({

            ...cafe,

            categoria: 'Café quente'

        }));


        const gelados = cafesGelados.map(cafe => ({

            ...cafe,

            categoria: 'Café gelado'

        }));


        /*
            Junta os dois resultados.
        */

        cafes = [
            ...quentes,
            ...gelados
        ];


        console.log(
            'Cafés recebidos da API:',
            cafes
        );


        mostrarCafes();


        /*
            Selecionamos alguns cafés
            para o carrossel.
        */

        maisVendidos =
            cafes.slice(0, 6);


        mostrarMaisVendidos();


    } catch (erro) {

        console.error(
            'Erro:',
            erro
        );


        cafesContainer.innerHTML = `

            <p class="loading">

                Não foi possível
                carregar os cafés.

            </p>

        `;

    }

}






function mostrarCafes() {

    cafesContainer.innerHTML = '';


    /*
        Mostra somente os primeiros
        cafés na página principal.
    */

    const cafesExibidos =
        cafes.slice(0, 8);


    cafesExibidos.forEach(cafe => {

        const card =
            criarCardCafe(cafe);


        cafesContainer.appendChild(card);

    });

}






function criarCardCafe(cafe) {

    const card =
        document.createElement('article');

    card.classList.add('produto-card');



    const nome =
        traduzirNomeCafe(cafe.title);



    const descricao =
        criarDescricaoCafe(
            cafe.title,
            cafe.categoria
        );



    const preco =
        gerarPrecoCafe(cafe.title);


    card.innerHTML = `

        <img
            class="produto-image"
            src="${cafe.image}"
            alt="${nome}"
            loading="lazy"
        >

        <div class="produto-info">

            <span class="produto-categoria">
                ${cafe.categoria}
            </span>

            <h3>
                ${nome}
            </h3>

            <p>
                ${descricao}
            </p>

            <span class="produto-price">
                R$ ${preco.toFixed(2)}
            </span>

        </div>

    `;


    return card;
}

const informacoesCafe = {

    'Espresso':

    {
        nome: 'Espresso',

        descricao:
            'Café intenso e encorpado, preparado com uma extração concentrada.'
    },


    'Cappuccino':

    {
        nome: 'Cappuccino',

        descricao:
            'Combinação cremosa de café espresso, leite vaporizado e espuma de leite.'
    },


    'Latte':

    {
        nome: 'Café Latte',

        descricao:
            'Café espresso suave combinado com leite vaporizado e uma textura cremosa.'
    },


    'Mocha':

    {
        nome: 'Mocha',

        descricao:
            'Uma combinação deliciosa de café espresso, leite e chocolate.'
    },


    'Americano':

    {
        nome: 'Café Americano',

        descricao:
            'Espresso combinado com água quente, resultando em um café equilibrado e aromático.'
    },


    'Macchiato':

    {
        nome: 'Café Macchiato',

        descricao:
            'Espresso marcante finalizado com uma pequena quantidade de leite cremoso.'
    },


    'Flat White':

    {
        nome: 'Flat White',

        descricao:
            'Espresso combinado com leite vaporizado, criando uma bebida cremosa e equilibrada.'
    },


    'Cold Brew':

    {
        nome: 'Cold Brew',

        descricao:
            'Café preparado lentamente a frio, com sabor suave, refrescante e menos amargo.'
    }

};


function traduzirNomeCafe(nome) {

    if (informacoesCafe[nome]) {

        return informacoesCafe[nome].nome;

    }


    const nomeMinusculo =
        nome.toLowerCase();


    if (
        nomeMinusculo.includes('vanilla')
    ) {

        return 'Latte de Baunilha';

    }


    if (
        nomeMinusculo.includes('caramel')
    ) {

        return 'Latte de Caramelo';

    }


    if (
        nomeMinusculo.includes('iced')
    ) {

        return 'Café Gelado';

    }


    return nome;

}


 

function criarDescricaoCafe(
    nome,
    categoria
) {

    const nomeMinusculo =
        nome.toLowerCase();


    if (
        nomeMinusculo.includes('cappuccino')
    ) {

        return 'Café cremoso preparado com expresso e leite vaporizado, perfeito para qualquer momento do dia.';

    }


    if (
        nomeMinusculo.includes('vanilla')
    ) {

        return 'Delicioso café com leite vaporizado e um toque suave de baunilha.';

    }


    if (
        nomeMinusculo.includes('caramel')
    ) {

        return 'Café cremoso com leite e um delicioso toque de caramelo.';

    }


    if (
        nomeMinusculo.includes('mocha')
    ) {

        return 'Uma combinação especial de café, leite e chocolate para os amantes de sabores intensos.';

    }


    if (
        nomeMinusculo.includes('expresso')
    ) {

        return 'Expresso encorpado e aromático, preparado para proporcionar uma experiência marcante.';

    }


    if (
        nomeMinusculo.includes('americano')
    ) {

        return 'Café expresso combinado com água quente, proporcionando um sabor equilibrado e agradável.';

    }


    if (
        nomeMinusculo.includes('macchiato')
    ) {

        return 'Expresso marcante finalizado com uma pequena quantidade de leite cremoso.';

    }


    if (
        nomeMinusculo.includes('flat white')
    ) {

        return 'Café expresso combinado com leite vaporizado e textura cremosa.';

    }


    if (
        nomeMinusculo.includes('cold brew')
    ) {

        return 'Café preparado lentamente a frio, com sabor suave e refrescante.';

    }


    if (
        nomeMinusculo.includes('iced')
    ) {

        return 'Uma opção refrescante de café servido gelado, ideal para os dias quentes.';

    }




    if (categoria === 'Café gelado') {

        return 'Uma opção refrescante de café, perfeita para aproveitar em qualquer momento.';

    }


    return 'Um café especial preparado para proporcionar uma experiência saborosa e agradável.';
}

function atualizarQuantidadePorPagina() {

    if (window.innerWidth <= 600) {

        quantidadePorPagina = 1;

    } else if (window.innerWidth <= 900) {

        quantidadePorPagina = 2;

    } else {

        quantidadePorPagina = 3;

    }

}






function gerarPrecoCafe(nome) {

    /*
        Preços fictícios apenas para
        apresentação do projeto.
    */

    const nomeMinusculo =
        nome.toLowerCase();


    if (
        nomeMinusculo.includes('latte')
    ) {

        return 14.90;

    }


    if (
        nomeMinusculo.includes('cappuccino')
    ) {

        return 13.90;

    }


    if (
        nomeMinusculo.includes('expresso')
    ) {

        return 8.90;

    }


    if (
        nomeMinusculo.includes('mocha')
    ) {

        return 15.90;

    }


    return 10.90;

}






function mostrarProdutos() {


    produtosContainer.innerHTML = '';



    produtos.forEach(produto => {


        const card = criarCardProduto(produto);


        produtosContainer.appendChild(card);

    });

}






function criarCardProduto(produto) {

    const card =
        document.createElement('article');


    card.classList.add(
        'produto-card'
    );


    card.innerHTML = `

        <img
            class="produto-image"
            src="${produto.imagem}"
            alt="${produto.nome}"
            loading="lazy"
        >


        <div class="produto-info">

            <span class="produto-categoria">

                ${produto.categoria}

            </span>


            <h3>

                ${produto.nome}

            </h3>


            <p>

                ${produto.descricao}

            </p>


            <span class="produto-price">

                R$ ${produto.preco.toFixed(2)}

            </span>

        </div>

    `;


    return card;

}






function mostrarMaisVendidos() {

    carroselContainer.innerHTML = '';


    const total =
        maisVendidos.length;


    /*
        Garante que o índice
        nunca fique fora dos produtos.
    */

    if (indiceAtual >= total) {

        indiceAtual = 0;

    }


    if (indiceAtual < 0) {

        indiceAtual = total - 1;

    }


    /*
        Cria os produtos que serão
        exibidos no carrossel.
    */

    for (
        let i = 0;
        i < quantidadePorPagina;
        i++
    ) {

        /*
            O operador %
            faz o carrossel voltar
            automaticamente ao início.
        */

        const indice =
            (indiceAtual + i) % total;


        const cafe =
            maisVendidos[indice];


        const card =
            criarCardCafe(cafe);


        carroselContainer.appendChild(card);

    }

}






btnProximo.addEventListener(
    'click',
    () => {

        indiceAtual += quantidadePorPagina;

        /*
            Se passou do último produto,
            volta para o primeiro.
        */

        if (
            indiceAtual >=
            maisVendidos.length
        ) {

            indiceAtual = 0;

        }


        mostrarMaisVendidos();

    }
);






btnAnterior.addEventListener(
    'click',
    () => {

        indiceAtual -= quantidadePorPagina;


        /*
            Se passou do primeiro,
            vai para o final.
        */

        if (indiceAtual < 0) {

            indiceAtual =
                maisVendidos.length -
                quantidadePorPagina;

        }


        /*
            Proteção para telas pequenas.
        */

        if (indiceAtual < 0) {

            indiceAtual = 0;

        }


        mostrarMaisVendidos();

    }
);






function limitarTexto(
    texto,
    limite
) {

    if (texto.length <= limite) {

        return texto;

    }


    return texto.substring(
        0,
        limite
    ) + '...';

}






mostrarProdutos();

buscarCafes();





window.addEventListener(
    'resize',
    () => {

        atualizarQuantidadePorPagina();

        indiceAtual = 0;

        mostrarMaisVendidos();

    }
);






atualizarQuantidadePorPagina();

mostrarProdutos();

buscarCafes();


const btnLogout = document.querySelector('#btn-logout');

if (btnLogout) {
    btnLogout.addEventListener('click', () => {

        localStorage.removeItem('usuarioConexaoCafe');

        window.location.href = './login.html';
    });
}