let docTitle = document.title;
window.addEventListener('blur', () => {
    document.title = 'Conecte-se';
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
});

// const form = document.querySelector('.form');
const progressBar = document.querySelector('.progress');

form.addEventListener('input', () => {
    const inputs = Array.from(form.querySelectorAll('input[required]'));
    const progress = inputs.filter(input => input.value !== '').length / inputs.length * 100;
    progressBar.style.width = `${progress}%`;
});

function openGoogleSignIn() {
    var googleSignInWindow = window.open('https://accounts.google.com/o/oauth2/auth?client_id=SEU_CLIENT_ID&redirect_uri=SUA_REDIRECT_URI&response_type=token&scope=email%20profile', '_blank', 'width=500,height=600');
    googleSignInWindow.focus();
}

function handleGoogleSignIn(response) {
    console.log(response);
    // Faça o que desejar com o token de acesso do usuário, como enviar para seu servidor
}