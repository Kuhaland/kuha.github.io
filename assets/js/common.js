$(document).ready(function() {
    // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1500);
});

$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
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
