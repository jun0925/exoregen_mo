$(function () {
    var $header = $("header");
    var scrollDownClass = "scrollDown";
    var $menuBtn = $(".menu-btn");
    var menuOpenClass = "menu-open";
    var lastScr = 0;
    var $topBtn = $(".top-btn");
    var $subNavOpenBtn = $(".sub-nav-open-btn");
    var aniTimer = 300;
    
    $(window).on("scroll", function () {
        var scrY = window.pageYOffset;

        if ($header.hasClass("reset")) return false;
        
        if (scrY > lastScr) {
            $header.addClass(scrollDownClass);
        } else {
            $header.removeClass(scrollDownClass);
        }
    });

    var choiceClass = "choice";
    $menuBtn.on("click", function () {
        $subNavOpenBtn.removeClass(choiceClass);
        $(".hd-top").toggleClass(menuOpenClass);
        $(".nav-box").stop().fadeToggle(300,function(){
            $(".sub-nav").slideUp(50);
        });
        $("html,body").toggleClass(menuOpenClass);
    });

    $(".close").on("click",function(){
        alert("준비중 입니다.");
        return false;
    });
    
    $subNavOpenBtn.on("click", function () {
        var $subNav = $(".sub-nav");
        var $targetSubNav = $(this).next($subNav);
        $(this).toggleClass(choiceClass);
        $subNavOpenBtn.not($(this)).removeClass(choiceClass);
        $targetSubNav.stop().slideToggle(aniTimer);
        $subNav.not($targetSubNav).stop().slideUp(aniTimer);
    });

    /* scroll top btn */
    $topBtn.on("click", function () {
        $("html,body").stop().animate({
            scrollTop: lastScr
        }, 500)
    });

    var awardLogoSwiper = new Swiper(".award-logo-swiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            360: {
                slidesPerView: 3.4,
            },
            320: {
                slidesPerView: 2.7
            },
        },
    });

    //footer 계열사 콤보박스 기능
    var comboBox = document.querySelector(".company-combo");
    var companyBox = document.querySelector(".company-box");
    var companyBoxClose = document.querySelector(".company-box .close-btn");
    var openClass = "on";

    comboBox.onclick = function(){
        companyBox.style.display = "block";
        setTimeout(function(){
            companyBox.classList.add(openClass);
        },50);
    }

    companyBoxClose.onclick = function(){
        companyBox.classList.remove(openClass);
        setTimeout(function(){
            companyBox.style.display = "none";
        },400);
    }
});