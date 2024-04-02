addEventListener("DOMContentLoaded", (event) => {
    let swiper = new Swiper('.swiper-container', {
        // Опции слайдера
        slidesPerView: 1,
        spaceBetween: 10,
        // Пагинация, если нужна
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});