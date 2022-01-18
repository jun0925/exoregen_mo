$(function () {
    //header style change
    var header = document.querySelector("header");
    header.classList.add("reset");

    // btn
    var shareBtn = document.getElementById("shareBtn");
    var resetBtn = document.getElementById("resetBtn");

    resetBtn.onclick = function () {
        var skinTestFile = "/skin-test.html";
        window.location.href = origin + skinTestFile;
    }

    shareBtn.onclick = function () {
        var dummyInput = document.createElement("input");
        var url = window.location.href;
        document.body.appendChild(dummyInput);
        dummyInput.value = url;
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
        alert("피부타입 테스트 결과 URL이 복사 되었습니다.");
    }
});