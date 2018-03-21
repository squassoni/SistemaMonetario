var contador = 15;
$("#imagemCalc").hover(function () {
    $("#imagemCalc").addClass("z-depth-5");
}, function () {
    $("#imagemCalc").removeClass("z-depth-5");
})

$("#imagemRegua").hover(function () {
    $("#imagemRegua").addClass("z-depth-5");
}, function () {
    $("#imagemRegua").removeClass("z-depth-5");
})


$("#zoomIn").click(function () {
    contador += 1;
    $(".divContent").css("font-size", contador + "px");
});


$("#zoomOut").click(function () {
    contador -= 1;
    $(".divContent").css("font-size", contador + "px");
});


$("#highlight").click(function () {
    $("span").toggleClass("highlight")
})
