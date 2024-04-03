addEventListener("DOMContentLoaded", (event) => {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'server.js');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Данные отправлены успешно!');
                form.reset();
            } else {
                alert('Произошла ошибка при отправке данных!');
            }
        };
        xhr.onerror = function() {
            alert('Произошла ошибка при отправке данных!');
        };
        xhr.send(formData);
    });

});