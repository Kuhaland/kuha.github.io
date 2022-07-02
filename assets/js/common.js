$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-20%"})
        .to("#slideContainer", 0.5, {z: 0})

        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-40%"})
        .to("#slideContainer", 0.5, {z: 0})

        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-60%"})
        .to("#slideContainer", 0.5, {z: 0})

        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-80%"})
        .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
    })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
