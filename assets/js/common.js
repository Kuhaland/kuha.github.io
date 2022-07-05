$(document).ready(function() {
    // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1500);
});

$(function () {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%"
        }
    });

    var slides = document.querySelectorAll("section.panel");

    for (var i=0; i<slides.length; i++) {
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

var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("content__inner-btn");
var spanes = document.getElementsByClassName("modal__close");
var funcs = [];

function Modal(num) {
    return function() {
        btns[num].onclick =  function() {
            modals[num].style.display = "block";
            console.log(num);
        };

        spanes[num].onclick = function() {
            modals[num].style.display = "none";
        };
    };
}

for(var i = 0; i < btns.length; i++) {
    funcs[i] = Modal(i);
}

for(var j = 0; j < btns.length; j++) {
    funcs[j]();
}

window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
};
