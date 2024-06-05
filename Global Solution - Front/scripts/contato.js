document.addEventListener('DOMContentLoaded', function() {
    const voltarButton = document.getElementById('voltarButton');
    const form = document.getElementById('form');
  
    voltarButton.addEventListener('click', function() {
        window.location.href = 'home.html';
    });
  
    form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('text').value.trim();
  
        console.log('Mensagem enviada: ', {
            name,
            email,
            mensagem,
        });

        alert('Mensagem enviada com sucesso! \nAgradecemos seu contato');
  
        window.location.href = 'home.html';
    });
});
