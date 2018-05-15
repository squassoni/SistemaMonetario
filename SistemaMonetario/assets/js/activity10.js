
$(".bar").draggable({ revert: "invalid" });

$("target#doisTarget").droppable({
    accept: "#dois",
    drop: function (event, ui) {
        $('#dois').addClass('doisHome');
        verifyResult();
    }
});
$("target#cincoTarget").droppable({
    accept: "#cinco",
    drop: function (event, ui) {
        $('#cinco').addClass('cincoHome');
        verifyResult();
    }
});
$("target#dezTarget").droppable({
    accept: "#dez",
    drop: function (event, ui) {
        $('#dez').addClass('dezHome');
        verifyResult();
    }
});
$("target#vinteTarget").droppable({
    accept: "#vinte",
    drop: function (event, ui) {
        $('#vinte').addClass('vinteHome');
        verifyResult();
    }
});
$("target#cinquentaTarget").droppable({
    accept: "#cinquenta",
    drop: function (event, ui) {
        $('#cinquenta').addClass('cinquentaHome');
        verifyResult();
    }
});
$("target#cemTarget").droppable({
    accept: "#cem",
    drop: function (event, ui) {
        $('#cem').addClass('cemHome');
        verifyResult();
    }
});


$('#reset').click(function () { doReset(); });
$('#hint').click(function () {
    $('#doisTarget').css('background', '#557fa5');
    $('#cincoTarget').css('background', '#af678f');
    $('#dezTarget').css('background', '#e6b1a0');
    // $('#vinteTarget').css('background', '#f67d3e');
    $('#cinquentaTarget').css('background', '#ebc072');
    // $('#cemTarget').css('background', '#adced3');
});

function doReset() {
    //   $('.bar').removeClass('redhome');
    //   $('.bar').removeClass('whitehome');
    //   $('.bar').removeClass('bluehome');
    //   $('greenbox').removeClass('hint');
    $('#dois').css('left', '600px');
    $('#dois').css('top', '1030px');
    $('#dois').removeClass('doisHome');
    $('#cinco').css('left', '600px');
    $('#cinco').css('top', '1490px');
    $('#cinco').removeClass('cincoHome');
    $('#dez').css('left', '600px');
    $('#dez').css('top', '340px');
    $('#dez').removeClass('dezHome');
    $('#vinte').css('left', '600px');
    $('#vinte').css('top', '800px');
    $('#vinte').removeClass('vinteHome');
    $('#cinquenta').css('left', '600px');
    $('#cinquenta').css('top', '1260px');
    $('#cinquenta').removeClass('cinquentaHome');
    $('#cem').css('left', '600px');
    $('#cem').css('top', '570px');
    $('#cem').removeClass('cemHome');
    $('target').css('background', '#ffffff');
    //   $('#blue').css('left','calc( 50% - 150px )' );
    //   $('#blue').css('top', '350px' );
    //   $('#white').css('left','calc( 50% - 100px )' );
    //   $('#white').css('top', '400px' );
}

doReset(); // reset positions when page loads.
//could have used the syntax below for this reset. it's ugly.
//$(document).ready( function(){ doReset(); });

function verifyResult() {
    var doisResult = $('#dois').hasClass('doisHome');
    var cincoResult = $('#cinco').hasClass('cincoHome');
    var dezResult = $('#dez').hasClass('dezHome');
    var vinteResult = $('#vinte').hasClass('vinteHome');
    var cinquentaResult = $('#cinquenta').hasClass('cinquentaHome');
    var cemResult = $('#cem').hasClass('cemHome');
    if (!vinteResult && !cemResult) {
        if (doisResult && cincoResult && cinquentaResult && dezResult) {
            $('#sendResult').css('display', 'inline-block');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    }
}
