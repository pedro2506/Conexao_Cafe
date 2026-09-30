const formulario =
    document.querySelector('#form-login');


const email =
    document.querySelector('#email');


const senha =
    document.querySelector('#senha');


const mensagemLogin =
    document.querySelector('#mensagem-login');



formulario.addEventListener(

    'submit',

    (evento) => {


        evento.preventDefault();



        limparMensagens();



        const usuarioSalvo =

            JSON.parse(

                localStorage.getItem(
                    'usuarioConexaoCafe'
                )

            );



        if (!usuarioSalvo) {


            mensagemLogin.textContent =

                'Nenhum usuário cadastrado.';



            mensagemLogin.classList.add(
                'erro'
            );


            return;

        }




        if (

            email.value.trim() === usuarioSalvo.email

            &&

            senha.value === usuarioSalvo.senha

        ) {



            mensagemLogin.textContent =

                'Login realizado com sucesso!';



            mensagemLogin.classList.add(
                'sucesso'
            );



            setTimeout(

                () => {


                    window.location.href =

                        './index.html';



                },

                800

            );



        }

        else {



            mensagemLogin.textContent =

                'E-mail ou senha inválidos.';



            mensagemLogin.classList.add(
                'erro'
            );

        }



    }

);





function limparMensagens() {


    mensagemLogin.textContent = '';

    mensagemLogin.className = '';

}