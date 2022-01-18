$(function(){
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    //tab and box
    var $findTab = $(".find-tab .tab");
    $findTab.on("click",function(){
        var $thisId = $(this).attr("id");
        var $findIdBox = $(".find-id-box");
        var $pwIdBox = $(".find-pw-box");
        $(this).addClass("choice");
        $findTab.not($(this)).removeClass("choice");
        
        if($thisId == "idTab") {
            $findIdBox.css("display","block");
            $pwIdBox.css("display","none");
        } else {
            $findIdBox.css("display","none");
            $pwIdBox.css("display","block");
        }
    });
});