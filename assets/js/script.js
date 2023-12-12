AOS.init({
    duration: 600,
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween: 0,
    slidesPerView: "auto",
    loop: true,
    // allowTouchMove: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 8000,
});

const swiperPack = new Swiper('.slide-pack', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    loop: true
})

function showMoreFaq() {
    var elements = document.querySelectorAll('.card_faq.additional');
    var btnContentView = document.getElementById("content-faq-more");
    var btnView = document.getElementById("btn-view-more-faq")

    elements.forEach(function (element) {
        element.classList.toggle('second-faq');
    });

    btnContentView.classList.toggle('less-more')
    if (btnContentView.classList.contains('less-more')) {
        btnView.innerText = "Voir moins";
    } else {
        btnView.innerText = "Voir plus";
    }

}

function toggleClasse(element) {
    var parentElement = element.parentNode.parentNode;
    parentElement.classList.toggle('active');

    var content = element.parentNode.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";

}

function toggleMenuMobile() {
    var menu = document.getElementById("nav-menu")
    menu.classList.toggle('active-mobile')
}