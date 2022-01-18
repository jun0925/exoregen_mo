$(function () {
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    //kobeas thumb swiper 
    var kobeasThumb = new Swiper(".kobeas-thumb-swiper",{
        slidesPerView: 3.2,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        speed: 600,
    });

    //kobeas Main Swiper
    var kobeasMainSwiper = new Swiper(".kobeas-main-swiper",{
        slidesPerView: 1,
        speed: 600,
        thumbs: {
            swiper: kobeasThumb
        }
    });

    kobeasMainSwiper.on("slideChangeTransitionStart",function(){
        kobeasThumb.slideTo(kobeasMainSwiper.activeIndex);
    });

    kobeasThumb.on("transitionStart",function() {
        kobeasMainSwiper.slideTo(kobeasThumb.activeIndex);
    });

    //recommandProduct 
    var recommandProduct = new Swiper("#recommandProduct", {
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 500,
        loop: true,
        centeredSlides: true,
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
        },
    });
});