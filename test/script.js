addEventListener("DOMContentLoaded", (event) => {

    //slider
    console.log('hello word');
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //send-form
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let inputs = document.querySelectorAll('.video-form__input');
        let formData = new FormData(this);

        fetch('http://localhost:8888/test/submit.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                inputs.forEach(function (el) {
                    el.value = '';
                })
            })
            .catch(error => console.error('Ошибка:', error));
    });

});