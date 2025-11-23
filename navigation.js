// Простий роутер для навігації
document.addEventListener('DOMContentLoaded', function() {
    // Обробка кліків по посиланнях
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('/')) {
            e.preventDefault();
            const route = e.target.getAttribute('href');
            navigateTo(route);
        }
    });

    // Функція навігації
    function navigateTo(route) {
        window.history.pushState({}, route, window.location.origin + route);
        loadContent(route);
    }

    // Завантаження контенту
    function loadContent(route) {
        // Тут буде логіка завантаження відповідного HTML
        console.log('Завантаження сторінки:', route);
    }

    // Обробка браузерної навігації
    window.addEventListener('popstate', function() {
        loadContent(window.location.pathname);
    });
});