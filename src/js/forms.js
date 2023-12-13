const inputPreenchido = document.querySelectorAll('.input');

const enviar = document.getElementById('btn');

const inserirMensagemDeErro = document.querySelectorAll('.error-message');

inputPreenchido.forEach((input, index) => {
    enviar.addEventListener('click', () => {
        verificarPreenchimento(input, index);
    })
})

function verificarPreenchimento(input, index) {
        inputPreenchido !== ""
        if (input.value !== "") {
            inserirMensagemDeErro[index].classList.remove('show')
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
            input.classList.add('error');
            inserirMensagemDeErro[index].classList.add('show')
        }
};