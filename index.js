var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
        })
        .from(".footer", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
        });
}

firstPageAnim();

function MouseFollower() {
    let circle = document.querySelector(".minicircle");
    window.addEventListener("mousemove", (event) => {
        circle.style.left = event.x + "px";
        circle.style.top = event.y + "px";
    })
}

MouseFollower();


let elem = document.querySelectorAll(".elem");
elem.forEach(function (element) {
    let rotate = 0;
    let diff = 0;

    element.addEventListener("mouseleave", function () {
        gsap.to(element.querySelector("img"), {
             opacity: 0,
             ease: Power3
        })
    })


    element.addEventListener("mousemove", function (event) {
        let diffrent = event.clientY - element.getBoundingClientRect().top;
        diff = event.clientX - rotate;
        rotate = event.clientX;
        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diffrent,
            left: event.clientX,
            rotate: gsap.utils.clamp(-20, 20, diff * 0.6)
        });
    });
});