const hamburger = $("#hamburger");
const navigationIcons = $(".mainNav ul");


hamburger.on("click", function(event) {
    event.preventDefault()
    navigationIcons.slideToggle();
})




