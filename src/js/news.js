$(function(){
    var $newsTab = $(".link-tab li a");
    $newsTab.on("click",function(){
        $(this).addClass("choice");
        $newsTab.not($(this)).removeClass("choice");
    });

    var tabSwiper = new Swiper("#tabSwiper",{
        slidesPerView: "auto",
        spaceBetween: 55,
        width: 250
    });
});