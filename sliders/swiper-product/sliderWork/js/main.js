 

// let swiperNav = new Swiper('.slider-product-mini', {
//    loop: true,
//    slidesPerView: "auto",
//    loopedSlides: 5,
//    slideToClickedSlide: true,
//    slidesPerColumn: 1,
//    slidesPerView: 5,
//    centeredSlides: true,
//    direction: 'vertical',
//    spaceBetween: 10
// })

// let swiperBig = new Swiper(".slider-product-big", {
//    slidesPerView: 1,
//    simulateTouch: false,
//    zoom: {
//       maxRatio: 2,
//       minRatio: 1
//    },
//    loop: true,
//    speed: 700,
//    navigation: {
//       nextEl: ".slider-product-big-arrow-right",
//       prevEl: ".slider-product-big-arrow-left",
//    },

//    effect: 'fade',
   
//    thumbs: {
//       swiper: swiperNav
//    }
// });

// let miniTopArrow = document.querySelector('.slider-product-mini-top');
// let minitTopBottom = document.querySelector('.slider-product-mini-bottom');

// miniTopArrow.addEventListener('click', () => {
//    swiperBig.slidePrev();
// });

// minitTopBottom.addEventListener('click', () => {
//    swiperBig.slideNext();
// });






/* gallery  */
var galleryTop = new Swiper(".slider-product-big", {
   spaceBetween: 10,
   grabCursor: true,
   navigation: {
      nextEl: ".slider-product-big-arrow-right",
      prevEl: ".slider-product-big-arrow-left",
   },
   loop: true,
   loopedSlides: 5,
   effect: 'fade',
   speed: 700,
   // other parameters
   on: {
     click: function() {
       /* do something */
     }
   },
   keyboard: {
     enabled: true,
     onlyInViewport: false
   },
   zoom: {
      maxRatio: 2,
      minRatio: 1
   }
});
 
 /* thumbs */
 var galleryThumbs = new Swiper(".slider-product-mini", {
   spaceBetween: 10,
   slidesPerView: 5,
   touchRatio: 1,
   speed: 700,
   navigation: {
      nextEl: ".slider-product-mini-bottom",
      prevEl: ".slider-product-mini-top",
   },
   slideToClickedSlide: true,
   loop: true,
   loopedSlides: 5,
   keyboard: {
     enabled: true,
     onlyInViewport: false
   },
    direction: 'vertical',
 });
 
 /* set conteoller  */
 galleryTop.controller.control = galleryThumbs;
 galleryThumbs.controller.control = galleryTop;
 

 
// let swiperBig = new Swiper(".slider-product-big", {
//    slidesPerView: 1,
//    initialSlide: 0,

//    // navigation: {
//    //    nextEl: ".slider-product-mini-top",
//    //    prevEl: ".slider-product-mini-bottom",
//    // },
//    effect: 'fade',

//    fadeEffect: {
//       crossFade: true
//    },

//    simulateTouch: true,
// })

// swiperMini.controller.control = swiperBig;
// swiperBig.controller.control = swiperMini;

// let firstSlide = new Swiper(".slider-product", {

//   //Стрелки
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   pagination: {
//     // el: '.swiper-pagination',
     
//     // Буллеты
//     // clickable: true,
     
//     // Делает точки меньше по бокам
//     // dynamicBullets: true
     
//     // // Кастомные буллеты, нумерация точек
//     // renderBullet: function (index, className) {
//     //    return `<span class="${className}">${index + 1}</span>`
//     // },
     
//     // // фракции, пример 1/3 2/3
//     // type: 'fraction',
//     // renderFraction: function (currentClass, totalClass) {
//     //    return `Фото <span class="${currentClass}"></span> из <span class="${totalClass}"></span>`
//     // }
//     // type: 'progressbar'
//    },
  
  // Скролл
//   scrollbar: {
//     el: ".swiper-scrollbar",

//     // Возможность перетаскивать скролл
//     draggable: true,
//    },
   
//    // Перетаскивание на пл
//    simulateTouch: true,
  
//    // Чувствительность свайпа 
//    touchRatio: 1,

//    // Угол срабатывания свайпа
//    touchAngle: 45,

//    // Курсон перетаскивания 
//    grabCursor: true,
   

   // // Переключения при клике на слайд
   // slideToClickedSlide: true,

   // // Навигация по хешу
   // hashNavigation: {
   //    // Отслеживания состояния
   //    watchState: true
   // }

   // Управление клавиатурой 
   // keyboard: {
   //    // Включить/выключить
   //    enabled: true,

   //    onlyInViewport: true,
   //    pageUpDown: true
   // },

   // mousewheel: {
   //    // Чувствительность колеса мыши
   //    sensitivity: 1
   // }
  
   // // Автовысота
   // autoHeight: true,
  

   // // Количество слайдов для показа, по умолчанию 1
   // slidesPerView: 1,
   // // slidesPerView: auto

   // // Если слайдов меньше чем нужно, он отключится
   // watchOverflow: true,

   // // отступы между слайдами
   // spaceBetween: 30,
   // spaceBetween: 30,

   // // пролистывание сразу групп
   // slidesPerGroup: 3,

   // // Активный слайд по центру
   // centeredSlides: true,


   // // Слайдер с которого стоит начать, не забываем что первый слайдер имеет индекс 0
   // initialSlide: 1,

   // Можно сделать несколько рядов, не забываем отключить auto высоту
   // slidesPerColumn: 2

   // Бесконечный слайдер 
   // loop: true

   // Для корректной работы бесконечности, это если у нас автоматическое кол-во слайдов стоит
   // loopedSlides: 3
   
   // Свободный режим
   // freeMode: true,

   // Автопрокрутка
   // autoplay: {
   //    // Пауза между прокруткой
   //    delay: 1000,
   //    // Закончишь на последнем слайде
   //    stopOnLastSlide: true,

   //    // отключить после ручного переключения
   //    disabledOnInteraction: false,
   //    disabledOnInteraction: true
   // }

   // // Скорсоть переключения
   // speed: 300,

   // // Вертикальный слайдер
   // direction: 'vertical',

   // effect: 'slide'

   // effect: 'fade',
   // fadeEffect: {
      //    crossFade: true
      // }
      
   // effect: 'flip',
      
   // flipEffect: {
   //    slideShadows: true,
   //    limitRotation: true
   // },
      
   // effect: 'cube',

   // cubeEffect: {
   //    slideShadows: true,
   //    shadow: true,
   //    shadowOffset: 20,
   //    shadowScale: 0.94
   // }

   // // Эффект потока
   // effect: 'coverflow',

   // coverflowEffect: {
   //    // Угол
   //    rotate: 20,

   //    // Наложение
   //    stretch: 50,

   //    // Тень
   //    slideShadows: true
   // }

   // По умолчанию стоит slide 
   // effect: 'slide',

   // // адаптив
   // breakpoints: {
   //    320: {
   //       slidesPerView: 1
   //    },
   //    480: {
   //       slidesPerView: 2
   //    },
   //    992: {
   //       slidesPerView: 3
   //    }
   // },

   // Увеличения изображения при клике
   // zoom: {
   //    maxRatio: 5,
   //    minRatio: 1
   // }

   // thumbs: {
   //    swiper: {
   //       el: '.slider-product-mini',
   //       slidesPerView: 3,

   //       navigation: {
   //          nextEl: ".swiper-button-next-mini",
   //          prevEl: ".swiper-button-prev-mini",
   //        }
   //    }
   // }
// });

 
// firstSlide.controller.control = previewSlide;
// previewSlide.controller.control = firstSlide;