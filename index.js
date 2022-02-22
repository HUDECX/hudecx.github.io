import * as animations from "./js/animations.js";
import * as helpers from "./js/helpers.js"


const submitFormButton = $("#submitForm");
// const form = document.querySelector("#contactForm")
const appearAnimacia = document.querySelectorAll("section>h2.specialText, #contactForm, .job, .projectRight, .sourcesContainer, .bunky");


////////// hamburger menu while mobile///////////////

animations.hamMenu(); 


///////////////EMAIL///////////////////


submitFormButton.on("click", function(){
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("message").value;
    const form = document.getElementById("contactForm");

    const sentConfirmation = helpers.sendEmail(name,email,subject,body);

    console.log(sentConfirmation);
    form.reset();

        ////  TODO nefunguje spravne ziskavanie result statusu
    if(sentConfirmation){
        $("body").append(`<div id="confirmation">EMAIL WAS SENT SUCCESSFULLY!</div>`);
        $("#confirmation").fadeToggle().delay(3000).fadeToggle();
    }else if(!sentConfirmation){
        $("body").append(`<div id="denied">EMAIL WAS NOT SENT!</div>`);
        $("#denied").fadeToggle().delay(3000).fadeToggle();
    }
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.style.opacity = 0;
        entry.target.classList.toggle("anim", entry.isIntersecting)
        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    })
},{
    threshold: 0.5
})

appearAnimacia.forEach(element => {
    observer.observe(element);
})

observer.observe(form);

















