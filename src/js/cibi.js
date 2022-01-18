$(function(){
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    /*var $cibiTab = $(".cibi-tab .tab");
    $cibiTab.on("click",function(){
        var choiceClass = "choice"
        var showClass = "show";
        $(this).addClass(choiceClass);
        $cibiTab.not($(this)).removeClass(choiceClass);

        var $cibiCont = [$(".ci-wrap"),$(".bi-wrap")];
        var $thisIndex = $(this).index();

        $(".cont-box > div").css("display","none").removeClass(showClass);
        $cibiCont[$thisIndex].css("display","block");
        setTimeout(function(){
            $cibiCont[$thisIndex].addClass(showClass);
        },100);
    });*/
});