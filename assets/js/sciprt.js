//pc에서 header gnb hover시 메뉴 나오고 들어가기

$('.header .header-top .gnb .item').hover(function(){
    h = $(this).find('.gnb-2dept-wrapper').outerHeight();
    $('.header').css('--height',h+'px');
    $(this).find('.gnb-2dept').addClass('on');
    $('.nav-curtain').addClass('on');
},function(){
    $(this).find('.gnb-2dept').removeClass('on');
    $('.nav-curtain').removeClass('on');
    $('.header').css('--height',0+'px');
})


$('.btn-search').click(function (e) {
    e.stopPropagation(); // 이벤트 전파 중지
    toggleMenu('.search-wrap .search-area');
});

// btn-shopping 클릭 이벤트
$('.btn-shopping').click(function (e) {
    e.stopPropagation(); // 이벤트 전파 중지
    toggleMenu('.shopping-wrap .shopping-area');
});

// html 클릭 이벤트
$('html').click(function () {
    closeAllMenus();
});

// 공통 함수: 메뉴 토글
function toggleMenu(menuSelector) {
    $(menuSelector).toggleClass('on');
    updateHeaderHeight(menuSelector);
    $('.nav-curtain').toggleClass('on');
}

// 공통 함수: 모든 메뉴 닫기
function closeAllMenus() {
    $('.search-wrap .search-area, .shopping-wrap .shopping-area').removeClass('on');
    $('.header').css('--height', '0px');
    $('.nav-curtain').removeClass('on');
}

// 공통 함수: 헤더 높이 업데이트
function updateHeaderHeight(menuSelector) {
    const h = $(menuSelector).outerHeight();
    $('.header').css('--height', h + 'px');
} 

//header 색상 바꾸는 스크롤 트리거

ScrollTrigger.create({
    trigger:`.white-wrapper`,
    start:"0% 0%",
    end:"100% 100%",
    toggleClass:{targets:".header",className:"on"}
    })
ScrollTrigger.create({
    trigger:`.footer`,
    start:"0% 100%",
    end:"100% 0%",
    toggleClass:{targets:".header",className:"on"}
    })

//sc-watch-9 애니메이션

setTimeout(function() {
    $('.sc-watch-9 .sticky-content .inner .title-area .title').addClass('on');
  }, 4000);

ScrollTrigger.create({
    trigger:`.sc-watch-9 .sticky-container`,
    start:"0% 0%",
    end:"100% 100%",
    toggleClass:{targets:".sc-watch-9 .sticky-content .inner .video-container",className:"on"}
  })
ScrollTrigger.create({
    trigger:`.sc-watch-9 .sticky-container`,
    start:"0% 0%",
    end:"100% 100%",
    toggleClass:{targets:".sc-watch-9 .sticky-content .inner .title-area .headline",className:"on"}
})

const introTl = gsap.timeline({
scrollTrigger:{
    trigger:".sc-watch-9 .sticky-container",
    start:"20% 0%",
    end:"100% 100%",
    scrub:0,
}
})
introTl.to('.sc-watch-9 .sticky-content .inner .headline',{
    'background-image': `radial-gradient(circle at 50% -99.5386vh, rgb(251, 160, 181) 1.04614vh, rgb(252, 70, 170) 40.2307vh, rgb(116, 47, 120) 70.2769vh, rgba(0, 0, 0, 0) 100.277vh)`,
    '-webkit-mask-image': `radial-gradient(at 50% -29.4921vh, rgb(0, 0, 0) -8.9842vh, rgba(0, 0, 0, 0) 30.6464vh)`
},'a')
introTl.to('.sc-watch-9 .sticky-content .inner .title-area',{opacity:0,},'a')
introTl.to('.sc-watch-9 .sticky-content .inner .video-container',{scale:0.9,opacity:0},'a')
introTl.to('.sc-watch-9 .sticky-content .inner .desc-area',{opacity:1,})
introTl.to('.sc-watch-9 .sticky-content .inner .desc-area .desc',{'background-image':`radial-gradient(circle at 50% 11.6134vh, rgb(254, 196, 209) 9.46453vh, rgb(252, 74, 170) 82.3227vh, rgb(135, 50, 127) 120.787vh, rgba(18, 7, 18, 0.153) 150.787vh)`,})

//data-scroll-1 값을 가진 모든 객체들에 scrollY 클래스 토글해서 컨트롤 

$('[data-scroll-1]').each(function(i,el){
    gsap.to($(this),{
        scrollTrigger:{
            trigger:el,
            start:"0% 100%",
            end:"100% 0%",
            toggleClass: "scrollY",
        },
    })
})


//sc-gesture video 컨트롤

$('.replay').on('click',function(){
    $('.replay').hide();
    $('#video').get(0).play();
    $('.play').hide();
    $('.pause').show();
});
$('.play').on('click',function(){
    $('#video').get(0).play();
    $('.replay').hide();
    $('.play').hide();
    $('.pause').show();
});
$('.pause').on('click',function(){
    $('#video').get(0).pause();
    $('.replay').hide();
    $('.play').show();
    $('.pause').hide();
});
setInterval(function(){
    if($('#video').prop("ended")){
    $('.replay').show();
    $('.play').hide();
    $('.pause').hide();
    }
});


//sc-gesture list 스크롤 애니메이션

gsap.set('.sc-gesture .gesture-list ul li:nth-child(1)',{
    y:'-40vh'
})
const introT2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-gesture .sticky-container",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
    }
    })
    introT2.to('.sc-gesture .screen-img .img2',{opacity:1,})
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(1)',{
        y:'-45vh',
        scale:0.9,
        opacity:0,
    })

    introT2.to('.sc-gesture .screen-img .img3',{opacity:1,})
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(2)',{
        y:'-35vh',
    })
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(2)',{
        y:'-45vh',
        scale:0.9,
        opacity:0,
    })
    introT2.to('.sc-gesture .screen-img .img4',{opacity:1,})
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(3)',{
        y:'-35vh',
    })
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(3)',{
        y:'-45vh',
        scale:0.9,
        opacity:0,
    })
    introT2.to('.sc-gesture .screen-img .img5',{opacity:1,})
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(4)',{
        y:'-35vh',
    })
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(4)',{
        y:'-45vh',
        scale:0.9,
        opacity:0,
    })
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(5)',{
        y:'-35vh',
    })
    introT2.to('.sc-gesture .gesture-list ul li:nth-child(5)',{
    y:'-45vh',
    scale:0.9,
    opacity:0,
    })
 

gsap.to('.sc-gesture .gesture-list ul',{
    scrollTrigger:{
        trigger:".sc-gesture .sticky-container",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
    },
    yPercent:-70,
})


//lottie animation 스크롤에 따라 컨트롤

let animation1 = bodymovin.loadAnimation({
    container: $('#lottie_1')[0], // Required
    path: './assets/json/particle.json', 
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true // Optional
    });

    animation1.addEventListener('data_ready', function () {
        total1= animation1.totalFrames;
        ScrollTrigger.create({
            trigger: '.sc-location .sticky-container',
            start: 'top center',
            end: 'bottom center',
            onUpdate: (self) => {
                animation1.goToAndStop(total1*self.progress.toFixed(3),true)
            }
        });
     });
let animation2 = bodymovin.loadAnimation({
    container: $('#lottie_2')[0], // Required
    path: './assets/json/carbon.json', 
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true // Optional
    });

    animation2.addEventListener('data_ready', function () {
        total1= animation2.totalFrames;
        ScrollTrigger.create({
            trigger: '.sc-carbon .sticky-container',
            start:"0% 0%",
           end:"90% 100%",
            onUpdate: (self) => {
                animation2.goToAndStop(total1*self.progress.toFixed(3),true)
            }
        });
     });

// sc-carbon title과 image 스크롤 애니메이션

const carbonTl = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-carbon .sticky-container",
        start:"0% 0%",
        end:"110% 100%",
        scrub:0,
    }
    })
    carbonTl.to('.sc-carbon .sticky-content .title-area .title1',{opacity:1,},'a')
    carbonTl.to('.sc-carbon .sticky-content .title-area .title1',{scale:1.1,},'a')
    carbonTl.to('.sc-carbon .sticky-content .title-area .title1',{opacity:0,})
    carbonTl.to('.sc-carbon .sticky-content .title-area .title2',{opacity:1,},'b')
    carbonTl.to('.sc-carbon .sticky-content .title-area .title2',{scale:1.1,},'b')
    carbonTl.to('.sc-carbon .sticky-content .title-area .title2',{opacity:0})
    carbonTl.to('.sc-carbon .sticky-content .img-carbon-wrapper .img-carbon-container',{opacity:1},'c')
    carbonTl.to('.sc-carbon .sticky-content .img-carbon-wrapper .img-carbon-container',{y:-30},'c')
    carbonTl.to('.sc-carbon .sticky-content .img-carbon-wrapper .img-watch-container',{opacity:1},'d')
    carbonTl.to('.sc-carbon .sticky-content .img-carbon-wrapper .img-watch-container',{y:-30},'d')


    let swiper = new Swiper(".sc-health .common-slide-area .swiper", {
        
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
          nextEl: ".sc-health .slide-control .btn-next",
          prevEl: ".sc-health .slide-control .btn-prev",
        },
      });

      
    let swiper1 = new Swiper(".sc-communication .common-slide-area .swiper", {
        
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
          nextEl: ".sc-communication .slide-control .btn-next",
          prevEl: ".sc-communication .slide-control .btn-prev",
        },
      });

    let swiper2 = new Swiper(".sc-fitness .common-slide-area .swiper", {
    
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".sc-fitness .slide-control .btn-next",
        prevEl: ".sc-fitness .slide-control .btn-prev",
    },
    });

    let swiper3 = new Swiper(".sc-safety .common-slide-area .swiper", {
    
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".sc-safety .slide-control .btn-next",
            prevEl: ".sc-safety .slide-control .btn-prev",
        },
        });

/* max-width 833 script */

    /* header menu area open*/
    $('.header .m-header-top .m-header-wrapper .util-area .search-wrapper .btn-search').click(function(){
        $('.header .m-header-top .m-header-wrapper .search-wrapper .search-area').addClass('on');
        document.getElementById('globalnav-anim-menutrigger-bread-bottom-open').beginElement();
        document.getElementById('globalnav-anim-menutrigger-bread-top-open').beginElement();
        
    })
    $('.header .m-header-top .m-header-wrapper .util-area .cart-wrapper .btn-cart').click(function(){
        $('.header .m-header-top .m-header-wrapper .cart-wrapper .cart-area').addClass('on');
        document.getElementById('globalnav-anim-menutrigger-bread-bottom-open').beginElement();
        document.getElementById('globalnav-anim-menutrigger-bread-top-open').beginElement();
        
    })
    $('.header .m-header-top .m-header-wrapper .util-area .menu-wrapper .btn-menu').click(function(){
        if($('.header .m-header-top .m-header-wrapper .search-wrapper .search-area').hasClass('on')){
            $('.header .m-header-top .m-header-wrapper .search-wrapper .search-area').removeClass('on');
        }else if($('.header .m-header-top .m-header-wrapper .cart-wrapper .cart-area').hasClass('on')){
            $('.header .m-header-top .m-header-wrapper .cart-wrapper .cart-area').removeClass('on');
            document.getElementById('globalnav-anim-menutrigger-bread-bottom-close').beginElement();
            document.getElementById('globalnav-anim-menutrigger-bread-top-close').beginElement();
        }else if($('.header .m-header-top .m-header-wrapper .menu-wrapper .menu-area').hasClass('on')){
            $('.header .m-header-top .m-header-wrapper .menu-wrapper .menu-area').removeClass('on');
            document.getElementById('globalnav-anim-menutrigger-bread-bottom-close').beginElement();
            document.getElementById('globalnav-anim-menutrigger-bread-top-close').beginElement();
        }else{
            $('.header .m-header-top .m-header-wrapper .menu-wrapper .menu-area').addClass('on');
            document.getElementById('globalnav-anim-menutrigger-bread-bottom-open').beginElement();
            document.getElementById('globalnav-anim-menutrigger-bread-top-open').beginElement();
        }
        $('.nav-curtain').removeClass('on');
    })
