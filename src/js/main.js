$(function () {
    /* top swiper */
    var mainSwiper = new Swiper("#mainTopSwiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        //effect: "fade",
        speed: 900,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return "<span class='swiper-pagination-current'>" + current + "</span>" + "<span class='swiper-pagination-slash'> / </span>" + "<span class='swiper-pagination-total'>" + total + "</span>"
            }
        },
        /*on: {
            slideChangeTransitionStart: function() {
                if(this.activeIndex == 1 || this.activeIndex == 2 || this.activeIndex == 5) {
                    $(".swiper-pagination-custom span").css("color","#000");
                } else {
                    $(".swiper-pagination-custom span").css("color","#fff");
                }

                console.log(this.activeIndex);
            },
        }*/
    });

    /* products swiper */
    var productsSwiper = new Swiper("#productsSwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 500,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    /*section3 swiper */
    var section3Swiper = new Swiper("#section3Swiper", {
        slidesPerView: "auto",
        spaceBetween: 55,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 500,
    });

    /*review swiper */
    var reviewSwiper = new Swiper("#reviewSwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 500,
    });

    /*leader swiper */
    var leaderSwiper = new Swiper("#leaderSwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
    });

    /*section6 swiper */
    var section6Swiper = new Swiper("#section6Swiper", {
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 1300
    });

    /*section7 swiper */
    var section7Swiper = new Swiper("#newsSwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        speed: 500
    });


    //new section3 scrollingBtn
    var $sec3CsBtn = $("#counselingBtn");
    var scrY;

    $sec3CsBtn.on("click", function () {
        scrY = window.pageYOffset;
        var footerTop = $("footer").position().top - 50;

        $("html,body").stop().animate({
            scrollTop: footerTop
        });
    });

    var tvSwiper = new Swiper("#tv-swiper", {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });
    //new section3 video
    var videoBubble = document.getElementById("videoBubble");
    var videoPopup = document.getElementById("videoPopup");
    var videoPopupBox = document.getElementById("videoPopupBox");
    var videoWrap = document.querySelector(".video-popup-box > .video-wrap");
    var video = document.createElement("video");
    var iframeCont = document.createElement("iframe");
    var videoPopupClose = document.querySelector("#videoPopupBox > .close-btn");
    var htmlBody = document.querySelector("html,body");
    
    $(".youtube-cont").on("click", function () {
        var $youtubeUrl = $(this).data("url");
        youtubeOpen($youtubeUrl);
    });

    videoBubble.onclick = function () {
        videoOpen("/video_/talk_video.mp4");
    }

    videoPopup.onclick = function () {
        videoClose();
    }

    videoPopupClose.onclick = function () {
        videoClose();
    }

    videoPopupBox.onclick = function (e) {
        e.stopPropagation();
    }

    function videoOpen(videoSrc) {
        videoPopup.style.display = "block";
        htmlBody.style.overflowY = "hidden";

        setTimeout(function () {
            videoPopupBox.classList.add("show");
            videoWrap.appendChild(video)
            video.setAttribute("muted", true);
            video.setAttribute("controls", true);
            video.setAttribute("playsinline", true);
            video.setAttribute("src", videoSrc);
            video.play();
        }, 50);
    }

    function youtubeOpen(url) {
        videoPopup.style.display = "block";
        htmlBody.style.overflowY = "hidden";

        setTimeout(function () {
            videoPopupBox.classList.add("show");
            videoWrap.appendChild(iframeCont);
            iframeCont.setAttribute("src", url);
        }, 50);

    }

    function videoClose() {
        htmlBody.style.overflowY = "auto";
        videoPopupBox.classList.remove("show");
        setTimeout(function () {
            videoPopup.style.display = "none";
            $(".video-wrap > video").remove();
            $(".video-wrap > iframe").remove();
        }, 500);
    }



    //new section4 odometer 
    $(window).on("scroll", function () {
        scrY = window.pageYOffset;
        var sec4PosTop = $(".new-section4").offset().top - 100;
        if (scrY >= sec4PosTop) {
            var odometer = document.querySelector(".new-section4 .odometer");
            odometer.innerHTML = "1,755,655";
        }
    });

    //SCR EFFECT
    scrEffect(".speech-box", "on");

    function scrEffect(target, addClass, subTarget) {
        var target2Top = subTarget || target;
        var vh;
        var targetTop = $(target2Top).offset().top + 100;

        $(window).on("resize", function () {
            vh = innerHeight;
        }).trigger("resize");

        $(window).on("scroll", function () {
            scrY = window.pageYOffset;
            if (targetTop - (vh / 2) <= scrY && !$(target).hasClass(addClass)) {
                $(target).addClass(addClass);
            }
        });
    }

    // 메인에서 무료상담 인풋 노출
    var counselingBox = document.querySelector("footer .counseling");

    counselingBox.style.display = "block";

    /* main news-list */
    var $mainNewsTab = $(".section7 .tab-list a");
    $mainNewsTab.on("click", function () {
        $(this).addClass("choice");
        $mainNewsTab.not($(this)).removeClass("choice");
    });
});