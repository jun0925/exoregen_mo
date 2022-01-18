$(function () {
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    //product thumb swiper 
    var productThumb = new Swiper(".product-thumb-swiper", {
        slidesPerView: 3.2,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        speed: 600,
    });

    //product Main Swiper
    var productMainSwiper = new Swiper(".product-main-swiper", {
        slidesPerView: 1,
        speed: 600,
        thumbs: {
            swiper: productThumb
        }
    });

    productMainSwiper.on("slideChangeTransitionStart", function () {
        productThumb.slideTo(productMainSwiper.activeIndex);
    });

    productThumb.on("transitionStart", function () {
        productMainSwiper.slideTo(productThumb.activeIndex);
    });


    //tab active 
    var $detailTab = $(".section-pdt-detail .tab");
    $detailTab.on("click", function () {
        var tabClass = "choice";
        var $thisId = $(this).attr("id");
        var $detail = $(".tab-cont-detail");
        var $delivery = $(".tab-cont-delivery");

        $(this).addClass(tabClass);
        $detailTab.not($(this)).removeClass(tabClass);

        if ($thisId == "detailTab") {
            $delivery.css("display", "none");
            $detail.css("display", "block");
        } else if ($thisId == "deliveryTab") {
            $detail.css("display", "none");
            $delivery.css("display", "block");
        }
    });

    //detail toggle
    var detailContList = document.querySelectorAll(".detail-list > li");
    for (var i = 0; i < detailContList.length; i++) {
        detailContList[i].onclick = function () {
            this.classList.toggle("active");
        }
    }

    //other product swiper 
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
});