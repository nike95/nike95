addEventListener("DOMContentLoaded", (event) => {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    function changeLanguage() {
        const langSelect = document.getElementById('langSelect');
        const selectedLang = langSelect.value;
        const content = document.getElementById('content');

        switch (selectedLang) {
            case 'es':
                content.innerHTML = `
            <div class="text__title">Hola, Mundo!</div>
            <p>Esta es una página HTML simple.</p>
          `;
                break;
            case 'fr':
                content.innerHTML = `
            <div class="text__title">Bonjour, le monde!</div>
            <p>Ceci est une page HTML simple.</p>
          `;
                break;
            default: // English
                content.innerHTML = `
            <div class="text__title">Hello, World</div>
            <p>This is a simple HTML page.</p>
          `;
        }
    }
});