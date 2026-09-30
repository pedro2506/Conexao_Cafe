
const usuarioLogado =
    localStorage.getItem(
        'usuarioConexaoCafe'
    );

if (!usuarioLogado) {
    window.location.href =
        './login.html';
}


const API_CAFE_QUENTE = 'https://api.sampleapis.com/coffee/hot';
const API_CAFE_GELADO = 'https://api.sampleapis.com/coffee/iced';






const cafesContainer =
    document.querySelector('#cafes-container');

const produtosContainer =
    document.querySelector('#produtos-container');

const carrosselContainer =
    document.querySelector('#carrossel-container');

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
        nome: 'Café Especial',
        categoria: 'Café',
        preco: 12.90,
        imagem: './src/images/produtos/cafe-especial.png',
        descricao:
            'Café especial selecionado para proporcionar uma experiência marcante.'
    },

    {
        id: 2,
        nome: 'Brownie de Chocolate',
        categoria: 'Acompanhamento',
        preco: 9.90,
        imagem: './src/images/produtos/brownie.png',
        descricao:
            'Brownie de chocolate perfeito para acompanhar seu café.'
    },

    {
        id: 3,
        nome: 'Croissant',
        categoria: 'Acompanhamento',
        preco: 10.90,
        imagem: './src/images/produtos/croissant.png',
        descricao:
            'Croissant crocante por fora e macio por dentro.'
    },

    {
        id: 4,
        nome: 'Pão de Queijo',
        categoria: 'Acompanhamento',
        preco: 7.90,
        imagem: './src/images/produtos/pao-de-queijo.png',
        descricao:
            'Pão de queijo quentinho para acompanhar seu café.'
    },

    {
        id: 5,
        nome: 'Caneca Conexão Café',
        categoria: 'Produto',
        preco: 39.90,
        imagem: './src/images/produtos/Caneca.png',
        descricao:
            'Caneca exclusiva para os apaixonados por café.'
    }

];






function normalizarNome(nome) {

    return String(nome || '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');
}






function obterNomeCafe(cafe) {

    return cafe.title || cafe.name || 'Café';

}






function obterTipoCafe(cafe) {

    const nome =
        normalizarNome(obterNomeCafe(cafe));


    if (
        nome.includes('espresso') ||
        nome.includes('expresso')
    ) {

        return 'expresso';

    }


    if (nome.includes('latte')) {

        return 'latte';

    }


    if (nome.includes('cappuccino')) {

        return 'cappuccino';

    }


    if (nome.includes('mocha')) {

        return 'mocha';

    }


    if (nome.includes('americano')) {

        return 'americano';

    }


    if (nome.includes('macchiato')) {

        return 'macchiato';

    }


    if (nome.includes('cold brew')) {

        return 'cold brew';

    }


    if (nome.includes('iced coffee')) {

        return 'iced coffee';

    }


    return nome;
}






function informacoesCafe(nomeCafe) {

    const nome =
        normalizarNome(nomeCafe);


    if (
        nome.includes('espresso') ||
        nome.includes('expresso')
    ) {

        return {

            nome: 'Café Expresso',

            descricao:
                'Café intenso e aromático, preparado para quem aprecia um sabor marcante.'

        };
    }


    if (nome.includes('latte')) {

        return {

            nome: 'Café Latte',

            descricao:
                'Café suave combinado com leite cremoso, proporcionando uma bebida equilibrada.'

        };
    }


    if (nome.includes('cappuccino')) {

        return {

            nome: 'Cappuccino',

            descricao:
                'Uma combinação deliciosa de café, leite e espuma cremosa.'

        };
    }


    if (nome.includes('mocha')) {

        return {

            nome: 'Café Mocha',

            descricao:
                'Café combinado com chocolate e leite, criando uma bebida cremosa e saborosa.'

        };
    }


    if (nome.includes('americano')) {

        return {

            nome: 'Café Americano',

            descricao:
                'Café de sabor equilibrado e suave, perfeito para qualquer momento do dia.'

        };
    }


    if (nome.includes('macchiato')) {

        return {

            nome: 'Café Macchiato',

            descricao:
                'Café finalizado com uma pequena quantidade de leite cremoso.'

        };
    }


    if (nome.includes('cold brew')) {

        return {

            nome: 'Cold Brew',

            descricao:
                'Café preparado lentamente com água fria, resultando em uma bebida suave e refrescante.'

        };
    }


    if (nome.includes('iced coffee')) {

        return {

            nome: 'Café Gelado',

            descricao:
                'Uma opção refrescante de café servido gelado.'

        };
    }


    return {

        nome: nomeCafe,

        descricao:
            'Uma deliciosa opção de café para tornar seu momento ainda mais especial.'

    };
}






async function buscarCafes() {

    try {

        const [
            respostaQuente,
            respostaGelado
        ] = await Promise.all([

            fetch(API_CAFE_QUENTE),

            fetch(API_CAFE_GELADO)

        ]);


        if (
            !respostaQuente.ok ||
            !respostaGelado.ok
        ) {

            throw new Error(
                'Erro ao acessar a API dos cafés.'
            );

        }


        const cafesQuentes =
            await respostaQuente.json();

        const cafesGelados =
            await respostaGelado.json();


        const todosCafes = [

            ...cafesQuentes.map(cafe => ({
                ...cafe,
                categoria: 'Café quente'
            })),

            ...cafesGelados.map(cafe => ({
                ...cafe,
                categoria: 'Café gelado'
            }))

        ];



        const tiposPermitidos = [

            'expresso',
            'latte',
            'cappuccino',
            'mocha',
            'americano',
            'macchiato'

        ];


        cafes = [];



        tiposPermitidos.forEach(tipo => {

            const cafeEncontrado =
                todosCafes.find(cafe => {

                    return obterTipoCafe(cafe) === tipo;

                });


            if (cafeEncontrado) {

                cafes.push(cafeEncontrado);

            }

        });



        mostrarCafes();



        criarMaisVendidos();


    } catch (erro) {

        console.error(
            'Erro ao buscar cafés:',
            erro
        );


        cafesContainer.innerHTML = `

            <p>
                Não foi possível carregar os cafés no momento.
            </p>

        `;

    }

}



function criarMaisVendidos() {

    const tiposDesejados = [
        'expresso',
        'latte',
        'cappuccino',
        'mocha',
        'americano',
        'macchiato'
    ];

    maisVendidos = [];

    tiposDesejados.forEach(tipoDesejado => {

        const cafeEncontrado = cafes.find(cafe => {

            const tipo = obterTipoCafe(cafe);

            return tipo === tipoDesejado;

        });

        if (cafeEncontrado) {
            maisVendidos.push(cafeEncontrado);
        }

    });

    indiceAtual = 0;

    mostrarMaisVendidos();
}






function criarCardCafe(cafe) {

    const nomeOriginal =
        obterNomeCafe(cafe);


    const informacao =
        informacoesCafe(nomeOriginal);


    const preco =
        (Math.random() * 10 + 8)
            .toFixed(2);


    const card =
        document.createElement('article');


    card.classList.add('cafe-card');


    card.innerHTML = `

        <img
            class="cafe-image"
            src="${cafe.image || ''}"
            alt="${informacao.nome}"
            loading="lazy"
        >

        <div class="cafe-info">

            <h3>
                ${informacao.nome}
            </h3>

            <p>
                ${informacao.descricao}
            </p>

            <p>
                ${cafe.categoria || 'Café'}
            </p>

            <span class="cafe-price">
                R$ ${preco.replace('.', ',')}
            </span>

        </div>

    `;


    return card;

}






function mostrarCafes() {

    cafesContainer.innerHTML = '';


    cafes.forEach(cafe => {

        const card =
            criarCardCafe(cafe);


        cafesContainer.appendChild(card);

    });

}






function criarCardProduto(produto) {

    const card =
        document.createElement('article');


    card.classList.add('produto-card');


    card.innerHTML = `

        <img
            class="produto-image"
            src="${produto.imagem}"
            alt="${produto.nome}"
            loading="lazy"
        >

        <div class="produto-info">

            <h3>
                ${produto.nome}
            </h3>

            <p>
                ${produto.descricao}
            </p>

            <span class="produto-price">
                R$ ${produto.preco
                    .toFixed(2)
                    .replace('.', ',')}
            </span>

        </div>

    `;


    return card;

}






function mostrarProdutos() {

    produtosContainer.innerHTML = '';


    produtos.forEach(produto => {

        const card =
            criarCardProduto(produto);


        produtosContainer.appendChild(card);

    });

}






function mostrarMaisVendidos() {

    carrosselContainer.innerHTML = '';


    const total =
        maisVendidos.length;


    if (total === 0) {

        return;

    }


    for (
        let i = 0;
        i < quantidadePorPagina;
        i++
    ) {

        const indice =
            (indiceAtual + i) % total;


        const cafe =
            maisVendidos[indice];


        const card =
            criarCardCafe(cafe);


        carrosselContainer.appendChild(card);

    }

}






function proximoProduto() {

    if (maisVendidos.length === 0) {

        return;

    }


    indiceAtual += quantidadePorPagina;


    if (
        indiceAtual >=
        maisVendidos.length
    ) {

        indiceAtual = 0;

    }


    mostrarMaisVendidos();

}






function produtoAnterior() {

    if (maisVendidos.length === 0) {

        return;

    }


    indiceAtual -= quantidadePorPagina;


    if (indiceAtual < 0) {

        indiceAtual =
            Math.floor(
                (maisVendidos.length - 1) /
                quantidadePorPagina
            ) *
            quantidadePorPagina;

    }


    mostrarMaisVendidos();

}






function atualizarQuantidadePorPagina() {

    if (window.innerWidth <= 600) {

        quantidadePorPagina = 1;

    }

    else if (window.innerWidth <= 900) {

        quantidadePorPagina = 2;

    }

    else {

        quantidadePorPagina = 3;

    }


    mostrarMaisVendidos();

}






btnAnterior.addEventListener(
    'click',
    produtoAnterior
);


btnProximo.addEventListener(
    'click',
    proximoProduto
);


window.addEventListener(
    'resize',
    atualizarQuantidadePorPagina
);








mostrarProdutos();



atualizarQuantidadePorPagina();



buscarCafes();

const btnLogout =
    document.querySelector('#btn-logout');

if (btnLogout) {
    btnLogout.addEventListener(
        'click',
        () => {

            localStorage.removeItem(
                'usuarioConexaoCafe'
            );

            window.location.href =
                './login.html';
        }
    );
}