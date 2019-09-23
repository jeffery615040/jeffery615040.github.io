gotop = function() {
    window.scrollTo(0,0); 
}

move_end = function () {
    body.style.overflowY = "unset";
    move.style.opacity = "0";
}

move_none = function () {
    move.style.display = "none";
}


var TimelineLite = new TimelineMax();
var body = document.querySelector("body");
var move = document.querySelector("#move");

        TimelineLite.addCallback(gotop,1);
        
        TimelineLite.add(TweenMax.to(".logo-L", 1, {transform:'translate(calc(50VW - 50%),0)', opacity:1}));

        TimelineLite.add(TweenMax.to(".logo-R", 1, {transform:'translate(calc(50VW - 50%),0)', opacity:1}));

        TimelineLite.add(TweenMax.to(".logo-B", 1, {transform:'translate(calc(50VW - 50%),0)', opacity:1}));

        TimelineLite.add(TweenMax.to("#move .logo", 1, {opacity:0})).addCallback(move_end,4);

        TimelineLite.addCallback(move_none,6);
        

        


var swiper = new Swiper('.banner', {
    loop: true,
    pagination: {
        el: '.banner_pag',
        dynamicBullets: true,
    },
});

var swiper = new Swiper('.swiper_story', {
    loop: true,
    speed:1500,
    pagination: {
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
    },
});

var swiper = new Swiper('.s2', {
    loop: true,
    speed: 2000,
    pagination: {
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1000,
    },
});

var swiper = new Swiper('.s3', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

var nav_link = document.querySelectorAll(".nav-link");

for (let i = 0; i < nav_link.length; i++) {
    let English = ["Story","News","Menu","Contact","Recommend"];
    let Chinese = ["顛覆故事","顛覆消息","顛覆產品","聯絡顛覆","推薦顛覆"];
    
    nav_link[i].onmouseover = function changetext() {
        nav_link[i].textContent = English[i];  
    } 
    nav_link[i].onmouseout = function changetext() {
        nav_link[i].textContent = Chinese[i];  
    } 
}


        



