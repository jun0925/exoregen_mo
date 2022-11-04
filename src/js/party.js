$(function(){

    //서브 비디오 js
    const subVideoSwiper = new Swiper("#partyVideoSwiper",{
        slidesPerView: 4.2,
        spaceBetween: 5,
    });

    $(".sub-video-thumb").on("click",function(){
        $(this).addClass("play");
        $(".sub-video-thumb").not($(this)).removeClass("play");
        
        const $videoUrl = $(this).data("video");
        $(".main-video-box iframe").attr("src",$videoUrl);
    });

    // 파티 갤러리 관련 js
    const galTabSwiper = new Swiper ("#partyGalTabSwiper",{
        slidesPerView: 2,
        centeredSlides: true,
        navigation: {
            nextEl: "#partyGalTabSwiper .swiper-button-next",
            prevEl: "#partyGalTabSwiper .swiper-button-prev"
        },
    });

    $(".gallery-tab .content-tab").on("click",function(){
        $(this).addClass("active");
        $(".gallery-tab .content-tab").not($(this)).removeClass("active");
        const $tabIdx = $(this).index();
        $(".gallery-cont-wrap").hide();
        $(".gallery-cont-wrap").eq($tabIdx).stop().fadeIn(600);
    });

    $(".gallery-main").each(function (index, element) {
        $(this).attr("id",`galleryMain-${index}`);
        $(this).next(".gallery-thumb").attr("id",`galleryThumb-${index}`);
        
        let gallerySubSwiper = new Swiper(`#galleryThumb-${index}`,{
            slidesPerView: 3.2,
            spaceBetween: 5,
            speed: 1000,
            observer: true,
            observeParents: true,
        });

        const galleryMainSwiper = new Swiper(`#galleryMain-${index}`,{
            slidesPerView: 1,
            speed: 1000,
            effect: "fade",
            observer: true,
            observeParents: true,
            thumbs: {
                swiper: gallerySubSwiper
            },
            navigation: {
                nextEl: `#galleryMain-${index} .swiper-button-next`,
                prevEl: `#galleryMain-${index} .swiper-button-prev`,
            },
        });
        
        galleryMainSwiper.on("slideChangeTransitionStart", function () {
            gallerySubSwiper.slideTo(galleryMainSwiper.activeIndex);
        });
    });

    //시상식 관련 js
    const partyAwardsTab = new Swiper("#partyAwardsTabSwiper",{
        slidesPerView: 2,
        centeredSlides: true,
        navigation: {
            nextEl: "#partyAwardsTabSwiper .swiper-button-next",
            prevEl: "#partyAwardsTabSwiper .swiper-button-prev"
        },
    });

    const partyAwardsSwiper = new Swiper("#partyAwardsSwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: "#partyAwardsSwiper .swiper-button-next",
            prevEl: "#partyAwardsSwiper .swiper-button-prev"
        },
    });

    $(".awards-swiper").each(function(index,element){
        $(this).attr("id",`partyAwardSwiper-${index}`);

        let centerOption;
        let awardSwiperWrap = $(`#partyAwardSwiper-${index} .swiper-wrapper`);
        let awardsContLength = awardSwiperWrap.children().length


        if(awardsContLength == 1) {
            centerOption = true;
        } else {
            centerOption = false;
        }

        const partyAwardsSwiper = new Swiper(`#partyAwardSwiper-${index}`,{
            slidesPerView: 2.3,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            centeredSlides: centerOption,
            navigation: {
                nextEl: `#partyAwardSwiper-${index} .swiper-button-next`,
                prevEl: `#partyAwardSwiper-${index} .swiper-button-prev`
            }
        });
        
    });

    $(".awards-tab .content-tab").on("click",function(){
        $(this).addClass("active");
        $(".awards-tab .content-tab").not($(this)).removeClass("active");

        const $tabIdx = $(this).index();
        $(".award-cont-wrap").hide();
        $(".award-cont-wrap").eq($tabIdx).stop().fadeIn(600);
    });

    // 헬시엑소 영역
    const hExoSwiper = new Swiper("#hExoSwiper",{
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
    })
});