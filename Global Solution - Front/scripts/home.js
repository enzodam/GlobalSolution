document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu');
    const navMenu = document.querySelector('.outros');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    document.querySelectorAll('.outros a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                navMenu.classList.remove('show');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const integrantes = document.getElementById('integrantes');

    integrantes.addEventListener('click', function() {
        window.location.href = 'integrantes.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contato = document.getElementById('contato');

    contato.addEventListener('click', function() {
        window.location.href = 'contato.html';
    });
});
