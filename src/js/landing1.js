$(function(){
    //새로고침시 스크롤 최상단
    setTimeout(function(){
        scrollTo(0,0)
    },10);

    //최초 로드시 html,body overflow: hidden 처리
    $("html,body").css("overflow","hidden");

    //3.5초후 intro 영역 제거
    const aniClass ="ani-class";

    setTimeout(function(){
        $(".intro-wrap").stop().fadeOut(300,function(){
            $(this).remove();
            $(".intro-video-wrap video").get(0).play();

            setTimeout(function(){
                $(".pdt-info-box").addClass(aniClass);
                setTimeout(function(){
                    $(".pdt-info-box .name-wrap").addClass(aniClass);
                    setTimeout(function(){
                        $(".pdt-info-box .info-wrap").addClass(aniClass);
                    },350);
                },350);
                
            },500);
        });
        $("html,body").css("overflow","auto");
    },3500);

    //리뷰 스와이퍼
    const reviewSwiper = new Swiper("#reviewSwiper",{
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
    });

    // 라운드 이미지 flow
    $("#loungeList").simplyScroll({
        pauseButton: true,
        speed: 1,
    });

    //비디오 썸네일 클릭시 재생
    $(".video-thumb").on("click",function(){
        $(this).next("video").get(0).play();
        $(this).remove();
    });
    
    scrEffect(".pdt-info-box .pdt-video-wrap", aniClass);
    scrEffect(".buy-sec .name-wrap", aniClass);
    scrEffect("#point1", aniClass);
    scrEffect("#point2", aniClass);
    scrEffect("#point3", aniClass);
    scrEffect(".use-tit-wrap", aniClass);
    scrEffect(".use-info-wrap", aniClass)
    scrEffect(".use-img-cont-wrap .num-list li", aniClass);
    scrEffect(".use-video-wrap", aniClass);
    scrEffect("#tech1", aniClass);
    scrEffect("#tech2", aniClass);

    // 구매하기 버튼 효과 observe
    const observeEl = document.getElementById('linkBtn2')
    const triggerEl = document.querySelector('.link-btn-trigger')

    const handler = (entries) => {
        console.log(entries)
        if (entries[0].isIntersecting) {
            observeEl.classList.add('fixed-on')
        } else {
            observeEl.classList.remove('fixed-on')
        }
    }

    const observer = new IntersectionObserver(handler,{
        rootMargin: '500% 0px 0px 0px'
    });
    
    observer.observe(triggerEl);

    //스크롤값에 따라 필요한 스크립트 실행.
    window.onscroll = function() {
        const scrY = window.scrollY;
        const percentTop = $(".per-list").offset().top - 500;
        if(scrY >= percentTop) {
            const per1 = document.getElementById("percentage1");
            const per2 = document.getElementById("percentage2");
            const per3 = document.getElementById("percentage3");

            per1.innerHTML = "13.43";
            per2.innerHTML = "16.72";
            per3.innerHTML = "21.08";
        }

        if(scrY >= $(".pdt-info-txt-wrap").offset().top - 250) {
            $(".pdt-video-thumb").stop().fadeOut(200,function(){
                $(this).remove();
                $(".pdt-video-wrap video").get(0).play();
            });
        }

        movingText(".scr-txt");

        if(scrY >= $(".buy-sec").offset().top - 450) {
            $(".buy-cont").addClass(aniClass);
        }
    }

    //배경 클릭시 팝업 닫기
    $("#imgPopup").on("click",imgClose);
    
    $("#imgPopup .img-wrap").on("click",function(e){
        e.stopPropagation();
    });

});
//스크롤 액션 함수
function scrEffect(target, aniClass, subTarget) {
    let target2Top = target || subTarget;
    let vh;
    let contentTop = $(target2Top).offset().top;

    $(window).on("resize",function(){
        vh = innerHeight;
    }).trigger("resize");

    $(window).on("scroll",function(){
        let scrY = window.scrollY;
        if(contentTop - (vh / 2) <= scrY && !$(target).hasClass(aniClass)) {
            $(target).addClass(aniClass);
        }
    });
}

//스크롤 값에 따라 좌우로 움직이는 텍스트
function movingText(el) {
    var scrY = window.pageYOffset || window.scrollY;
    var operator;
    var divisionVal = 4;
    
    if ($(el).hasClass("left_move")) {
        operator = "-";
        scrY = window.pageYOffset / divisionVal;
    } else {
        operator = "+";
        scrY = window.pageYOffset / divisionVal;
    }

    if (scrY <= $(".scr-txt").position().top) {
        $(el).css({
            transform: `translate3d(${operator}${scrY}px, 0px, 0px)`
        });
    }
}

//특허증 이미지 팝업 함수
var imgPopup = document.getElementById("imgPopup");
var imgPopupBox = document.getElementById("imgPopupBox");
var img = document.querySelector(".img-popup-box > .img-wrap > img");
var htmlBody = document.querySelector("html,body");

function imgOpen(imgSrc) {
    $("#imgPopup").show();
    $("html,body").css("overflowY","hidden");
    setTimeout(function () {
        $("#imgPopupBox").addClass("show");
        $("#imgPopupBox > .img-wrap > img").attr("src",imgSrc);
    }, 50);
}

function imgClose() {
    $("#imgPopupBox").removeClass("show");
    $("html,body").css("overflowY","auto");
    setTimeout(function () {
        $("#imgPopupBox > .img-wrap > img").attr("src","");
        $("#imgPopup").css("display","none");
    }, 300);
}