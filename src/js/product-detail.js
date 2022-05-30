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
    var detailContList = document.querySelectorAll(".detail-list .toggle-btn");
    for (var i = 0; i < detailContList.length; i++) {
        detailContList[i].onclick = function () {
            this.parentNode.classList.toggle("active");
        }
    }

    //other product swiper 
    var reComProdSwiper = new Swiper("#recomProdSwiper",{
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 500,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: "#recomProdSwiper .swiper-button-next",
            prevEl: "#recomProdSwiper .swiper-button-prev"
        }
    });

    var otherProductSwiper = new Swiper("#otherProductList", {
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 500,
        loop: true,
        centeredSlides: true,
        navigation: {
            prevEl: "#otherProductList .swiper-button-prev",
            nextEl: "#otherProductList .swiper-button-next"
        },
    });
});