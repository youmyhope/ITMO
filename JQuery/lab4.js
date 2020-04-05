$(document).ready(function() {
//Selectors
    $(".Link").css({
        "textDecoration": "none",
        "color": "green"
    });
    $("p.Link").css({"color": "red"});
    $(".Paragraph").css({
        "color": "pink",
        "fontSize": "20px",
        "fontWeight": "bold"
    });
    $("form *").prop("disabled", true);

//DOM
    $("a").prepend("↖");
    $("a").attr("target", "_blank")
    $("a").each(function() {
        $(this).attr("href", function (index, value) {
            let protocol = value.substring(0, value.indexOf(':'));
            if (protocol === 'http') {
                let href = value.substring(value.indexOf(':'), value.length);
                return protocol + 's' + href;
            }
        });
    });
    $('body').append('<button id="cancel">Cancel</button>');
    $("#cancel").click(function(){
        $("a").each(function() {
            $(this).text(function (index, text){
                if (text.substring(0, 1) === '↖') {
                    return text.substring(1, text.length);
                }
            });
        });
        $("form *").prop("disabled", false);
    });
//Effects
    $("table").css("marginTop", "10px");
    $("#fadeIn").click(() =>{
        $("#fadeIn").parent().siblings().children().fadeIn();
    });
    $("#hide").click(() =>{
        $("#hide").parent().siblings().children().hide(1000);
    });
    $("#slideDown").click(() =>{
        $("#slideDown").parent().siblings().children().slideDown();
    });
    $("#slideUp").click(() =>{
        $("#slideUp").parent().siblings().children().slideUp("slow");
    });
    $("#animation").click(() =>{
        $("#animation").parent().siblings().children().animate({
            opacity: '0.5',
            fontSize: '3em',
            height: '150px',
            width: '150px'}, "slow");
    });
});
//AJAX
$(".F5").css("marginTop", "10px");
$("#ajax").click(() =>{
    $.ajax({
        url: "https://inxaoc.github.io/example/ajax-1.html"
    }).done((x) =>{
        let pageAdd = document.createElement("div");
        pageAdd.innerHTML = x;
        $("body").append(pageAdd);
    });
});
