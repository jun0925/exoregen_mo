$(function () {
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    //테스트 답변 선택 
    var $testWrap = $(".test-wrap");
    var $testFormWrap = $(".test-form-wrap");
    var $testResultWrap = $(".test-result-wrap");
    var $testEx = $(".test-ex label");
    var $testPrevBtn = $(".test-prev-btn");

    $testEx.on("click",function(){
        var choiceClass ="choice";
        var $otherEx_next = $(this).parent().nextAll().children("label");
        var $otherEx_prev = $(this).parent().prevAll().children("label");
        $(this).addClass(choiceClass);
        $otherEx_next.removeClass(choiceClass);
        $otherEx_prev.removeClass(choiceClass);

        testActive('next');
    });

    $testPrevBtn.on("click",function(){
        testActive('prev');
    });

    $("#testFormPrevBtn").on("click",function(){
        $testFormWrap.css("display","none");
        $testWrap.fadeIn();
        $(".test").eq(":last-child").css("display","block").addClass("show");
    });

    $("#testFormNextBtn").on("click",function(){
        window.location.href = window.location.origin + "/skin-test-a1.html";
    });

    //총 테스트갯수 설정
    var testBox = document.querySelector(".test-box");
    var testBoxChild = testBox.children;
    var testLength = testBoxChild.length;
    var pagingAll = document.querySelector(".all-page");
    pagingAll.innerHTML = testLength;

    //test js
    function testActive(type) {
        var testShowClass = "show";
        var testShowCont = document.querySelector(".test.show");
        var testNextCont = testShowCont.nextElementSibling;
        var testPrevCont = testShowCont.previousElementSibling;
        var setTimer = 300;
        var resultPaging = document.querySelector(".now-page");
        var num = resultPaging.innerHTML;

        if(type === 'next') {
            if(!testNextCont) {
                $testWrap.css("display","none");
                $testFormWrap.fadeIn();
                return false;
            }
            testFade(testNextCont);
            
            if(num >= testLength) return false;
            num = parseInt(num) + 1;
        
        } else if(type === 'prev') {
            if(!testPrevCont) return false;
            testFade(testPrevCont);
            if(num <= 1) return false;
            num = parseInt(num) - 1;
        }

        resultPaging.innerHTML = num;

        function testFade(testCont) {
            testShowCont.classList.remove(testShowClass);
            setTimeout(function(){
                testShowCont.style.display = "none";
            },setTimer);
            
            setTimeout(function(){
                testCont.style.display ="block";
                setTimeout(function(){
                    testCont.classList.add(testShowClass);
                },100);
            },setTimer);
        }
    }

    //recommandProduct 
    var recommandProduct = new Swiper ("#recommandProduct",{
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 500,
        loop: true,
        centeredSlides: true,
        observer: true, 
        observeParents: true,
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next"
        },
    });

});