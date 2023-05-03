let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Conecte-se'
});
window.addEventListener('focus', () => {
    document.title = docTitle;
});

const form = document.querySelector('.form');
const erro = document.querySelector('.erro');
const button = document.querySelector('.btnEntrar');
const input = document.querySelectorAll('input');


button.addEventListener('click', (event) => {
    let camposVazio = false;
    input.forEach(input => {
        if (input.value === '') {
            camposVazio = true;
        }
    });

    if (camposVazio) {
        erro.innerHTML = 'Preencha todos os campos';
        event.preventDefault();

    }
})