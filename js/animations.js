const hamburger = $("#hamburger");
const navigationIcons = $(".mainNav ul");
const buttons = $(".button");
const sections = $("section").not(".titleCard");




///// mobile


export function hamMenu(){          // hamburger menu
    hamburger.on("click", function(event) {
        event.preventDefault()
        navigationIcons.slideToggle();
    })
}







