$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1500);
});

$(function () {
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%"
        }
    });

    let slides = document.querySelectorAll("section.panel");

    for (let i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i], {pushFollowers: false})
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
});

$(document).ready(function(){
    $('.contact__button-item').each(function() {
        $(this).append('<span></span><span></span>')
    });
});

let modals = document.getElementsByClassName("modal");
let btns = document.getElementsByClassName("content__inner-btn");
let spanes = document.getElementsByClassName("modal__close");
let funcs = [];

function Modal(num) {
    return function() {
        btns[num].onclick =  function() {
            modals[num].style.display = "block";
        };

        spanes[num].onclick = function() {
            modals[num].style.display = "none";
        };
    };
}

for(let i = 0; i < btns.length; i++) {
    funcs[i] = Modal(i);
}

for(let j = 0; j < btns.length; j++) {
    funcs[j]();
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};
