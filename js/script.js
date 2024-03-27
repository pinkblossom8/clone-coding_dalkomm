// 헤더
$(function() {
  var prevScrollTop = 0;

  document.addEventListener("scroll", function(){
      
      var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
      
      if (nowScrollTop > prevScrollTop){ $('header').addClass('active'); } 
      // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
      else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
      prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장

  });

});

// 메인슬라이드
function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    effect : 'fade',
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination",
      clickable : true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev"
    }
  });
}

SliderBox1__init();

// section_2 슬라이드
function SliderBox2__init() {
  const swiper = new Swiper(".slider-box-2 .swiper", {
    // Optional parameters
    loop: true,
    slidesPerView:3,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

SliderBox2__init();

// aos
AOS.init();