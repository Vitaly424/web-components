let firstSlide = new Swiper(".slider-product", {

  //Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

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
   slidesPerView: 1,
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
   speed: 300,

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
});

let previewSlide = new Swiper(".slider-product-mini", {
   slidesPerView: 3,

   navigation: {
      nextEl: ".swiper-button-next-mini",
      prevEl: ".swiper-button-prev-mini",
   }
})

firstSlide.controller.control = previewSlide;
previewSlide.controller.control = firstSlide;