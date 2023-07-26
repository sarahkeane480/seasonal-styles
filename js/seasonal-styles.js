$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);
    });
});

//////////////// DOCUMENT READY BLOCK BEGIN ////////////////
$("document").ready(function() {

    let counter = 0;
    $("div#myDiv p").each(function(){
        counter++;
        $(this).prepend(counter + "] ");
    });

    //start hidden
    $("div#yetAnotherDiv li").hide();
    
    //reveal li items
    $("div#yetAnotherDiv")
    .hide()
    .fadeIn(2000,function(){
        $("div#yetAnotherDiv li").each(function(){
            $(this).slideDown(1000);
        });
    });
    
    
    $("document").ready(function(){
        $('.seasons a').click(function(e){//find all a tags inside class of seasons
            e.preventDefault();//stop default submission
            let season = $(this).attr("href");//contents of href attribute of this element
            alert(season);
        });
    });



});
//////////////// DOCUMENT READY BLOCK END ////////////////