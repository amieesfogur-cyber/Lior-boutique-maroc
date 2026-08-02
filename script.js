// Lior Boutique Maroc

document.addEventListener("DOMContentLoaded", function(){

    console.log("Bienvenue chez Lior Boutique Maroc");

});


// Animation simple au scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    sections.forEach(section=>{

        let position = section.getBoundingClientRect().top;

        let screen = window.innerHeight;

        if(position < screen - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});
