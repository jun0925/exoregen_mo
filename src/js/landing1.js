$(function(){
    //새로고침시 스크롤 최상단
    setTimeout(function(){
        scrollTo(0,0)
    },100);

    //최초 로드시 html,body overflow: hidden 처리
    $("html,body").css("overflow","hidden");

    //3.5초후 intro 영역 제거
    setTimeout(function(){
        $(".intro-wrap").stop().fadeOut(300,function(){
            $(this).remove();
            $(".intro-video-wrap video").get(0).play();
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
    });

    //비디오 썸네일 클릭시 재생
    $(".video-thumb").on("click",function(){
        $(this).next("video").get(0).play();
        $(this).remove();
    });
    
    const aniClass ="ani-class";
    scrEffect(".pdt-info-box", aniClass);
    scrEffect(".pdt-info-box .name-wrap", aniClass);
    scrEffect(".pdt-info-box .info-wrap", aniClass);
    scrEffect(".pdt-info-box .pdt-video-wrap", aniClass);
    scrEffect("#point1", aniClass);
    scrEffect("#point2", aniClass);
    scrEffect("#point3", aniClass);
    scrEffect(".buy-sec", aniClass);
    scrEffect(".use-tit-wrap", aniClass);
    scrEffect(".use-info-wrap", aniClass)
    scrEffect(".use-img-cont-wrap .img-box", aniClass);
    scrEffect(".use-img-cont-wrap .num-list li", aniClass);
    scrEffect(".use-video-wrap", aniClass);
    scrEffect("#tech1", aniClass);
    scrEffect("#tech2", aniClass);

    //스크롤 영역 도달시 odometer 실행
    window.onscroll = function() {
        const scrY = window.scrollY;
        const percentTop = $(".per-list").offset().top - 500;
        console.log(scrY);
        console.log(percentTop);
        if(scrY >= percentTop) {
            const per1 = document.getElementById("percentage1");
            const per2 = document.getElementById("percentage2");
            const per3 = document.getElementById("percentage3");

            per1.innerHTML = "13.43";
            per2.innerHTML = "16.72";
            per3.innerHTML = "21.08";

        }
    }
});
//스크롤 액션 함수
function scrEffect(target, aniClass, subTarget) {
    let target2Top = target || subTarget;
    let vh;
    let contentTop = $(target2Top).position().top + 200;

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