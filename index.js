window.onload = function() {
    if(document.body.scrollTop > 0) {
        console.log(1);
        window.scrollTo(0, -1);
        document.body.scrollTop = 0;
    }
    window.scrollTo(0, -1);
    document.body.scrollTop = 0;
}

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
        

        TimelineLite.add(TweenMax.to(".logo-L", 0.5, {transform:'translate(0,calc(55vh - 50%))', opacity:1}));

        TimelineLite.add(TweenMax.to(".logo-B", 0.5, {transform:'translate(0,calc(55vh - 50%))', opacity:1}),0.8);

        TimelineLite.add(TweenMax.to(".logo-R", 0.5, {transform:'translate(0,calc(55vh - 45%))', opacity:1}),1.4);//採到

        TimelineLite.addLabel("spin",1.5);

        TimelineLite.add(TweenMax.to(".logo-B", 0.5, {transform:'translate(0,calc(55vh - 50%)) scaleY(0.5)' }),"spin");
        TimelineLite.add(TweenMax.to(".logo-R", 0.5, {transform:'translate(0,calc(55vh - 20%))'}),"spin");

        TimelineLite.addLabel("spin_1", 2);

        TimelineLite.add(TweenMax.to(".logo-B", 0.5, {transform:'translate(0,calc(55vh - 50%))'}),"spin_1");

        TimelineLite.add(TweenMax.to(".logo-R", 0.5, {transform:'translate(0,calc(55vh - 50%))'}),"spin_1");


        TimelineLite.add(TweenMax.to("#move .logo", 1, {opacity:0})).addCallback(move_end,3);

        TimelineLite.addCallback(move_none,4);



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






