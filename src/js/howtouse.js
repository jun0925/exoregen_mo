$(function () {
    

    //htu01-detail other product swiper 
    var otherProductSwiper = new Swiper("#otherProductList", {
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

    //htu03 -test intro
    window.onscroll = function() {
        scrY = window.pageYOffset;
        var contTop = $(".section-use03").offset().top - 200;
        var leftCont = document.querySelector(".section-use03 .img-box");
        var rightCont = document.querySelector(".section-use03 .cont");
        if (scrY >= contTop) {
            var odometer = document.querySelector(".odometer");
            odometer.innerHTML = "1,755,655";
            leftCont.style.transform = "none";
            rightCont.style.transform = "none";
        }
    }
    /*$(window).on("scroll",function(){
        scrY = window.pageYOffset;
        var sec4PosTop = $(".section-use03").offset().top - 100;
        if(scrY >= sec4PosTop) {
            var odometer = document.querySelector(".odometer");
            odometer.innerHTML = "1,755,655";
        }
    });*/

});