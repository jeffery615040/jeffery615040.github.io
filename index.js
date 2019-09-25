window.onload = function() {
    if(document.body.scrollTop > 0) {
        console.log(1);
        window.scrollTo(0, -1);
        document.body.scrollTop = 0;
    }
    window.scrollTo(0, -1);
    document.body.scrollTop = 0;
}

go_Top = function() {
    window.scrollTo(0,0); 
}

move_End = function () {
    body.style.overflowY = "unset";
    move.style.opacity = "0";
}

move_None = function () {
    move.style.display = "none";
}


var T1 = new TimelineMax();
var body = document.querySelector("body");
var move = document.querySelector("#move");


        T1.addCallback(go_Top,0.5);
        
        T1.add(TweenMax.to(".logo-L", 0.5, {transform:'translate(0,calc(55vh - 50%))', opacity:1}));

        T1.add(TweenMax.to(".logo-B", 0.5, {transform:'translate(0,calc(55vh - 50%))', opacity:1}),0.8);

        T1.add(TweenMax.to(".logo-R", 0.5, {transform:'translate(0,calc(55vh - 45%))', opacity:1}),1.4);

        T1.addLabel("spin",1.5);
        T1.add(TweenMax.to(".logo-B", 0.5, {transform:'translate(0,calc(55vh - 50%)) scaleY(0.5)' }),"spin");
        T1.add(TweenMax.to(".logo-R", 0.5, {transform:'translate(0,calc(55vh - 20%))'}),"spin");

        T1.addLabel("spin_1", 2);

        T1.add(TweenMax.to(".logo-B", 0.4, {transform:'translate(0,calc(55vh - 50%)) scaleY(1.1)'}),"spin_1");
        T1.add(TweenMax.to(".logo-R", 0.3, {transform:'translate(0,calc(55vh - 50%))'}),"spin_1");

        T1.add(TweenMax.to(".logo-B", 0.3, {transform:'translate(0,calc(55vh - 50%))'}));

        T1.add(TweenMax.to("#move .logo", 1, {opacity:0})).addCallback(move_End,3);

        T1.addCallback(move_None,4);



var swiper = new Swiper('.banner', {
    loop: true,
    pagination: {
        el: '.banner_pag',
        dynamicBullets: true,
    },
});

var swiper = new Swiper('.swiper_Story', {
    loop: true,
    speed:1500,
    pagination: {
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
    },
});

var swiper = new Swiper('.swiper_Message', {
    loop: true,
    speed: 2000,
    pagination: {
        dynamicBullets: true,
    },
    autoplay: {
        delay: 1000,
    },
});

var swiper = new Swiper('.swiper_Recommend', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

var nav_Link = document.querySelectorAll(".nav-link");

for (let i = 0; i < nav_Link.length; i++) {
    let English = ["Story","News","Menu","Contact","Recommend"];
    let Chinese = ["顛覆故事","顛覆消息","顛覆產品","聯絡顛覆","推薦顛覆"];
    
    nav_Link[i].onmouseover = function change_Text() {
        nav_Link[i].textContent = English[i];  
    } 
    nav_Link[i].onmouseout = function change_Text() {
        nav_Link[i].textContent = Chinese[i];  
    } 
}






