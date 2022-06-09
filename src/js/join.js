$(function(){
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    /*leader swiper */
    var leaderSwiper = new Swiper("#leaderSwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
    });

    //베스트 지점장 텍스트 클릭시 영역 스크롤 이동
    $("#scrHofObj").on("click",function(){
        $("html,body").animate({
            scrollTop: $(".best-leader-wrap").position().top - 100
        },100);
    });
});