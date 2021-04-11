//I got this code from CodePen for the functionality of the navbar but i'm not if it works or why it isn't working.

function checkScroll(){
    var startY = $(".nav-bar").height() * 2;

    if($(window).scrollTop() > startY){
        $(".nav-bar").addClass("scrolled");
    }else{
        $(".nav-bar").removeClass("scrolled");
    }
}

if($(".nav-bar").length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
