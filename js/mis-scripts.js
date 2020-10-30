$(function () {
  "use strict";



  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });




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



  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
    return false;
  });



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


  var swiperBeneficios = new Swiper('#swiperTipos', {

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
        el: '#swiperTiposNav',
        slidesPerView: 3,
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



  //Formulario con animacion
  $(".form-control").each(function () {
    formmat($(this));
  });
  $('.form-control').on('blur', function () {
    formmat($(this));
  });
  $('.form-control').on('focus', function () {
    $(this).parent('.form-group').addClass("fill");
  });

  function formmat(e) {
    var $temp = 0;
    try {
      $temp = e.attr('placeholder').length;
    } catch (err) {
      $temp = 0;
    }
    if (e.val().length > 0 || $temp > 0) {
      e.parent('.form-group').addClass("fill");
    } else {
      e.parent('.form-group').removeClass("fill");
    }
  }



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

$('.form-control').on('focus', function () {
  $(this).parent('.form-group').addClass("fill");
});

function formmat(e) {
  var $temp = 0;
  try {
    $temp = e.attr('placeholder').length;
  } catch (err) {
    $temp = 0;
  }
  if (e.val().length > 0 || $temp > 0) {
    e.parent('.form-group').addClass("fill");
  } else {
    e.parent('.form-group').removeClass("fill");
  }
}

$('.guardarDatos').click(function () {
  $('.datosComponente').addClass("d-flex");
});
$('.borrarDatos').click(function () {
  $('.datosComponente').removeClass('d-flex');
  $('.datosComponente').addClass("d-none");
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


