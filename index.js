import * as animations from "./js/animations.js";
import * as helpers from "./js/helpers.js"


const submitForm = $("#submitForm");

////////// hamburger menu while mobile///////////////

animations.hamMenu(); 


///////////////EMAIL///////////////////


submitForm.on("click", function(){
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






















