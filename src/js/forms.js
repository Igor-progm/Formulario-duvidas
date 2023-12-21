const inputPreenchido = document.querySelectorAll('.input');

const enviar = document.getElementById('btn');

enviar.addEventListener('click', (e) => {
    e.preventDefault()

    inputPreenchido.forEach((input) => {
        if (input.value) {
            input.classList.remove('error');
            input.nextElementSibling.classList.remove('show')
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
            input.classList.add('error');
            input.nextElementSibling.classList.add('show');
        }
    })
})