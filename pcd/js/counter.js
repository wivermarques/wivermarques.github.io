document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o link do menu hambúrguer
    const menuHamburguer = document.querySelector('.Menu_hamburguer__1XGXX');

    // Adiciona um evento de clique ao link do menu hambúrguer
    menuHamburguer.addEventListener('click', function() {
        // Seleciona o elemento do menu
        const menuNav = document.querySelector('.Menu_nav__121rR');

        // Verifica se o menuNav tem a classe 'active'
        if (menuNav.classList.contains('active')) {
            // Se tiver, remove a classe 'active' e a classe 'noScroll' do body
            menuNav.classList.remove('active');
            document.body.classList.remove('noScroll');
        } else {
            // Se não tiver, adiciona a classe 'active' e a classe 'noScroll' ao body
            menuNav.classList.add('active');
            document.body.classList.add('noScroll');
        }
    });

    
    const counters = document.querySelectorAll('.txt-counter');
    const speed = 10000; // Aumentando o valor para tornar a animação mais lenta
    const interval = 50; // Intervalo entre cada atualização

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateCount() {
        counters.forEach(counter => {
            if (isElementInViewport(counter.closest('.blc-counter'))) {
                const target = +counter.getAttribute('data-count');
                const count = +counter.textContent;

                // Ajustando o cálculo do incremento para que seja uma fração constante do que falta para alcançar o target
                const increment = (target - count) / speed;

                // Se o count atual é menor que o target, atualize o count
                if (count < target) {
                    counter.textContent = Math.ceil(count + increment);
                    setTimeout(() => updateCount(counter), interval);
                } else {
                    counter.textContent = target;
                }
            }
        });
    }

    window.addEventListener('scroll', updateCount);
    updateCount(); // Chamar uma vez no início caso o elemento já esteja visível
});