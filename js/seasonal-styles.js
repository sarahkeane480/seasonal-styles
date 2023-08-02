
/*
Deliverables: Using jQuery, create a page that promotes a unique look and feel for each of the four seasons by changing a page in the 4 following areas:

    A unique color scheme, for example stylesheet or background color, etc.
    A unique logo, for example a picture of a snowflake for winter, etc.
    A unique item of clothing, for example a parka for winter.
    A unique string of text identifying the season, for example "Leap into our Fall Wear!"
*/

// Making this all caps to indicate a constant that I never want to change
// maybe add colors to each season? but I'll just leave it to the CSS for now
const SEASONS = {
    default: {
        quote: "Don't be a DEFAULT Andy!",
        css: "css/default.css",
        logo: "images/four-seasons.gif",
        wear: "images/300x400.png",
    },
    spring: {
        quote: "Get ready to <strong>SPRING</strong> into our sweaters!",
        css: "css/spring.css",
        logo: "images/spring.gif",
        wear: "images/spring-wear.jpg",
    },
    summer: {
        quote: "Ya better <strong>SUMMER</strong> down!",
        css: "css/summer.css",
        logo: "images/summer.gif",
        wear: "images/summer-wear.jpg",
    },
    fall: {
        quote: "Don't <strong>FALL</strong> out of style!",
        css: "css/fall.css",
        logo: "images/fall.gif",
        wear: "images/fall-wear.jpg",
    },
    winter: {
        quote: "Get ready for an Epic <strong>WIN</strong>ter!",
        css: "css/winter.css",
        logo: "images/winter.gif",
        wear: "images/winter-wear.jpg",
    }
}



//////////////// DOCUMENT READY BLOCK BEGIN ////////////////
$("document").ready(function() {
    
    $("document").ready(function(){
        $('.seasons a').click(function(e){//find all a tags inside class of seasons
            e.preventDefault();//stop default submission
            let season = $(this).attr("href");//contents of href attribute of this element
            
            // destructuring assignment to unpack object properties from SEASONS (while looking cool and smart)
            let {quote, css, logo, wear} = SEASONS[season]

            // replace stylesheet
            $('link#season-css').attr("href",css)

            // replace logo image
            $('img#logo').attr("src", logo)

            // replace wear image
            $('img#wear').attr("src", wear)

            // replace quote
            $('h2#season-quote').html(quote)

        });
    });



});
//////////////// DOCUMENT READY BLOCK END ////////////////