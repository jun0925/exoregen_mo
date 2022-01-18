$(function(){
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    //join 01 leader swiper
    var leaderSwiper = new Swiper("#leaderSwiper",{
        slidesPerView: "auto",
        spaceBetween: 20,
    });
});