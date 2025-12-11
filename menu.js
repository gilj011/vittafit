// Script para filtros do cardápio VittaFit

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Remove active class de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona active class ao botão clicado
            this.classList.add('active');

            // Filtra os itens
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (category === 'all' || itemCategory === category) {
                    item.classList.remove('hidden');
                    // Adiciona animação
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = 'fadeIn 0.5s ease';
                    }, 10);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Adiciona efeito de contagem de itens visíveis
    function updateItemCount() {
        const visibleItems = document.querySelectorAll('.menu-item:not(.hidden)');
        console.log(`Exibindo ${visibleItems.length} itens do cardápio`);
    }

    // Atualiza contagem inicial
    updateItemCount();

    // Atualiza contagem quando filtros mudarem
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(updateItemCount, 100);
        });
    });
});
