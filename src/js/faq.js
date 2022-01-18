$(function(){
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    //faq cont
    var $faq = $(".faq");
    var $faqQ = $(".faq-q");
    var $faqA = $(".faq-a");
    $faqQ.on("click",function(){
        var openClass = "faq-open";
        var $target = $(this).next();
        var $thisParent = $(this).parent();
        var timer = 300;
        $thisParent.toggleClass(openClass);
        $target.slideToggle(timer);
        $faq.not($thisParent).removeClass(openClass);
        $faqA.not($target).slideUp(timer);
    });
});