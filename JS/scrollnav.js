$(window).scroll(function(){
    if($(window).scrollTop()){
        $(".nav-header").addClass("grey");
    }
    else{
        $(".nav-header").removeClass("grey");

    }
});
