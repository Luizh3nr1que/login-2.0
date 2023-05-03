const form = document.querySelector('.form');
const erro = document.querySelector('.erro');
const button = document.querySelector('.btnEntrar');
const input = document.querySelectorAll('input');


button.addEventListener('click', () => {
    let camposVazio = false;
    input.forEach(input => {
        if (input.value === '') {
            camposVazio = true;
        }
    });

    if (camposVazio) {
        erro.innerHTML = 'Preencha todos os campos';
    }
})