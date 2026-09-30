
const formulario =
    document.querySelector('#form-cadastro');






const nome =
    document.querySelector('#nome');

const email =
    document.querySelector('#email');

const telefone =
    document.querySelector('#telefone');

const senha =
    document.querySelector('#senha');

const confirmarSenha =
    document.querySelector('#confirmar-senha');






const mensagemCadastro =
    document.querySelector('#mensagem-cadastro');






telefone.addEventListener(
    'input',
    () => {

        let valor =
            telefone.value.replace(/\D/g, '');


        if (valor.length > 11) {

            valor =
                valor.substring(0, 11);

        }


        if (valor.length <= 10) {

            valor =
                valor.replace(
                    /^(\d{2})(\d{4})(\d{0,4})$/,
                    '($1) $2-$3'
                );

        } else {

            valor =
                valor.replace(
                    /^(\d{2})(\d{5})(\d{0,4})$/,
                    '($1) $2-$3'
                );

        }


        telefone.value = valor;

    }
);






function limparErros() {

    document
        .querySelector('#erro-nome')
        .textContent = '';

    document
        .querySelector('#erro-email')
        .textContent = '';

    document
        .querySelector('#erro-telefone')
        .textContent = '';

    document
        .querySelector('#erro-senha')
        .textContent = '';

    document
        .querySelector('#erro-confirmar-senha')
        .textContent = '';

    mensagemCadastro.textContent = '';

    mensagemCadastro.className =
        'mensagem-cadastro';

}






function emailValido(valor) {

    const regra =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regra.test(valor);

}






function validarFormulario() {

    limparErros();


    let formularioValido = true;






    if (nome.value.trim().length < 3) {

        document
            .querySelector('#erro-nome')
            .textContent =
            'Digite seu nome completo.';

        formularioValido = false;

    }






    if (!emailValido(email.value.trim())) {

        document
            .querySelector('#erro-email')
            .textContent =
            'Digite um e-mail válido.';

        formularioValido = false;

    }






    const telefoneNumeros =
        telefone.value.replace(/\D/g, '');


    if (telefoneNumeros.length < 10) {

        document
            .querySelector('#erro-telefone')
            .textContent =
            'Digite um telefone válido.';

        formularioValido = false;

    }






    if (senha.value.length < 6) {

        document
            .querySelector('#erro-senha')
            .textContent =
            'A senha deve ter pelo menos 6 caracteres.';

        formularioValido = false;

    }






    if (
        confirmarSenha.value !== senha.value
    ) {

        document
            .querySelector('#erro-confirmar-senha')
            .textContent =
            'As senhas não são iguais.';

        formularioValido = false;

    }


    return formularioValido;

}






formulario.addEventListener(
    'submit',
    (evento) => {

        evento.preventDefault();


        const formularioValido =
            validarFormulario();


        if (!formularioValido) {

            mensagemCadastro.textContent =
                'Verifique os dados informados.';

            mensagemCadastro.classList.add(
                'erro'
            );

            return;

        }






        const usuario = {

            nome:
                nome.value.trim(),

            email:
                email.value.trim(),

            telefone:
                telefone.value.trim(),

            senha:
                senha.value

        };






        localStorage.setItem(
            'usuarioConexaoCafe',
            JSON.stringify(usuario)
        );






        mensagemCadastro.textContent =
            'Cadastro realizado com sucesso!';


        mensagemCadastro.classList.add(
            'sucesso'
        );






        setTimeout(
            () => {

                window.location.href =
                    './login.html';

            },
            800
        );

    }
);

