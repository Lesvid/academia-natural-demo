const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

window.addEventListener('load', revealOnScroll);