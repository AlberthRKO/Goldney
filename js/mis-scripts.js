$(function () {


  /* ------------------------------------
  1. Configuración de Mmenu.js 
  -------------------------------------*/

  var $menu = $("#menu-principal").mmenu({

    //COFIGURANDO EL CORE
    //Integración con Bootstrap
    wrappers: ["bootstrap"],
    // Efecto deslizante para Sub-enlaces
    slidingSubmenus: true,
    //Quitamos la barra Superior
    navbar: {
      title: false
    },
    //CONFIGURANDO EXTENSIONES
    extensions: ["border-full", "pagedim-black", "shadow-page", "theme-white"],
    //CONFIGURANDO ADDs
    counters: true,
    navbars: [
      {
        "position": "top",
        "content": ['<a href="index.html"> <span class="h6 titulo2 pt-2 mx-auto" >GOLDNEY ELECTRONICS</span> </a>']
      }
    ]
  });


  /* ------------------------------------
      2. Configuración del boton buscar
  -------------------------------------*/
  $('.btn-buscar').click(function () {
    $('.btn-buscar').toggleClass('boton-buscar-activo');
  });

  /* ------------------------------------
     3. Configuración del Juggler.js
 -------------------------------------*/
  Juggler.init();

  /* ------------------------------------
 4. Configuración #swiperBeneficios
-------------------------------------*/


  var swiperBeneficios = new Swiper('#swiperBeneficios', {

    speed: 400,
    grabCursor: true,
    loop: true,

    // Componente Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Componente pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    //Componente keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    autoplay: {
      delay: 2000
    },
    //Componente Thumbs
    thumbs: {
      swiper: {
        el: '#swiperBeneficiosNav',
        slidesPerView: 3,
        watchOverflow: true

      }
    }
  })

  /* ------------------------------------
 5. Configuración #swiperFunciones
-------------------------------------*/


  var swiperBeneficios = new Swiper('#swiperFunciones', {

    speed: 400,
    grabCursor: true,
    loop: true,

    // Componente Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Componente pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    //Componente keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    //Componente Thumbs
    thumbs: {
      swiper: {
        el: '#swiperFuncionesNav',
        slidesPerView: 6,
        watchOverflow: true

      }
    }
  })



  var swiperBeneficios = new Swiper('#animacion', {

    speed: 1500,
    grabCursor: true,
    loop: true,

    // Componente Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Componente pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    autoplay: {
      delay: 2000
    },

    //Componente keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    }
  })




  /* ------------------------------------
 6. Configuración de hc-sticky.js
-------------------------------------*/
  var Sticky = new hcSticky('#navegacion', {
    mobileFirst: true,
    responsive: {
      0: {
        disable: true,
      },
      300: {
        disable: false,
        stickTo: 'body',
        stickyClass: 'encabezadoFijo',


      }
    }

  });







});


var swiperBeneficios = new Swiper('#swiper-container', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,


  autoplay: {
    delay: 2000
  },


})


AOS.init({
  duration: 1000,
  easing: 'slide'
});


// let numeros = 4

// $(window).resize(function () {
//   var widthBrowser = $(window).height();
//   var heightBrowser = $(window).width();
//   console.log("Tamaño de la pantalla del navegador: width=" + widthBrowser + " height=" + heightBrowser);
//   if (heightBrowser > 576) numeros = 6
//   if (heightBrowser > 992) numeros = 8
//   if (heightBrowser > 1200) numeros = 10
//   var swiperBeneficios = new Swiper('#swiper-container', {
//     loop: true,
//     slidesPerView: numeros,
//     spaceBetween: 30,


//     autoplay: {
//       delay: 2000
//     },


//   })
// });


// console.log(numeros)


