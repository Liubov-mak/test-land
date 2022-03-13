function toTop() {
    $("body, html").animate({
        scrollTop: 0
    }, 1000)
}
const baseScrollTop = () => {
    const btnTop = document.querySelector('.mobile-up');

    btnTop.addEventListener('click', () => {
        btnTop.classList.add('active');
        setTimeout(() => {
            btnTop.classList.remove('active');
        }, 100);
    })

    const btnReveal = function () {
        if (window.scrollY >= 400) {
            btnTop.classList.add('is-visible');
        } else {
            btnTop.classList.remove('is-visible');
        }
    };
    window.addEventListener('scroll', btnReveal);
};

baseScrollTop();
