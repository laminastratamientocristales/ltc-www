$(document).ready(function() {
  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var h = $('.height-fix').height();
    $('.height-fix').height(h);
  };

  $('.gallery__carousel').slick({
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    autoplay: true,
    dots: true,
    responsive: [
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
  });


  // Image popups
  $('#open-popup-1').magnificPopup({
    items: [
      {
        src: 'images/fotos_obras/1.JPG',
        title: 'LTC | Láminas en edificios'
      },
      {
        src: 'images/fotos_obras/2.JPG',
        title: 'LTC | Láminas en edificios'
      },
      {
        src: 'images/fotos_obras/3.jpg',
        title: 'LTC | Láminas en edificios'
      },
      {
        src: 'images/fotos_obras/4.jpg',
        title: 'LTC | Láminas en edificios'
      },
      {
        src: 'images/fotos_obras/2.JPG',
        title: 'LTC | Láminas en edificios'
      },
      {
        src: 'images/fotos_obras/19.JPG',
        title: 'LTC | Láminas en edificios'
      },
      {
        src: 'images/fotos_obras/26.jpg',
        title: 'LTC | Láminas en edificios'
      }
    ],
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup-2').magnificPopup({
    items: [
      {
        src: 'images/fotos_obras/8.JPG',
        title: 'LTC | Láminas en coches policía'
      },{
        src: 'images/fotos_obras/5.JPG',
        title: 'LTC | Láminas en coches policía'
      }
    ],
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup-3').magnificPopup({
    items: [
      {
        src: 'images/fotos_obras/13.JPG',
        title: 'LTC | Láminas en gimnasios'
      },
      {
        src: 'images/fotos_obras/14.JPG',
        title: 'LTC | Láminas en gimnasios'
      },
      {
        src: 'images/fotos_obras/17.JPG',
        title: 'LTC | Láminas en gimnasios'
      },
      {
        src: 'images/fotos_obras/18.JPG',
        title: 'LTC | Láminas en gimnasios'
      }
    ],
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup-4').magnificPopup({
    items: [
      {
        src: 'images/fotos_obras/30.jpg',
        title: 'LTC | Láminas en oficinas'
      },
      {
        src: 'images/fotos_obras/31.jpg',
        title: 'LTC | Láminas en oficinas'
      },
      {
        src: 'images/fotos_obras/32.jpg',
        title: 'LTC | Láminas en oficinas'
      },
      {
        src: 'images/fotos_obras/34.jpg',
        title: 'LTC | Láminas en oficinas'
      }
    ],
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });

  $('#open-popup-5').magnificPopup({
    items: [
      {
        src: 'images/fotos_obras/37.jpg',
        title: 'LTC | Obras con andamios'
      },
      {
        src: 'images/fotos_obras/38.jpg',
        title: 'LTC | Obras con andamios'
      },
      {
        src: 'images/fotos_obras/36.jpg',
        title: 'LTC | Obras con andamios'
      },
      {
        src: 'images/fotos_obras/39.jpg',
        title: 'LTC | Obras con andamios'
      },
      {
        src: 'images/fotos_obras/41.jpg',
        title: 'LTC | Obras con andamios'
      }
    ],
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });


});
