// assets/js/main.js

// Script básico de inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página inicial carregada');
    
    // Exemplo de manipulação de eventos para o botão de inscrição
    const signUpButton = document.querySelector('.btn-primary');
    if (signUpButton) {
        signUpButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = '/inscricao';  // Redireciona para a página de inscrição
        });
    }
});
