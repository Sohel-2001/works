const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

function loading(){
    var tl = gsap.timeline();

tl.to("#loader #yellow1",{

    top : "-100%",
    delay : 0.3,
    duration : 0.5,
    ease : "expo.out",

})

tl.from("#loader #yellow2",{
    top : "100%",
    delay : 0.3,
    duration : 0.5,
    ease : "expo.out",

},"anim")

tl.to("#loader h1",{
    color : "black"
},"anim")

tl.to("#loader",{
    opacity : 0
})

tl.to("#loader",{
    display : "none"
})
}

loading();


var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");

elems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var bgImg = elem.getAttribute("data-image");
        // console.log(bgImg);
        page2.style.backgroundImage = `url(${bgImg})`;
    })

    elem.addEventListener("mouseleave",function(){
        page2.style.backgroundImage = `url(${'./leo_visions-d0VEiBLT7DE-unsplash.jpg'})`
        // page2.style.backgroundImage = `none`

    })


})

document.querySelector("#footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})

