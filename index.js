var swiper = new Swiper('.s1', {
    loop: true,
    pagination: {
        el: '.s1_pag',
        dynamicBullets: true,
    },
});

var swiper = new Swiper('.swiper_story', {
    loop: true,
    
    pagination: {
        dynamicBullets: true,
    },
    // autoplay: {
    //     delay: 1000,
    // },
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

console.log(nav_link);

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


