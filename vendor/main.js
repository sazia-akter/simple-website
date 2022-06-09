 

$(document).ready(function () {
  
  

  var $grid = $('.item-details').isotope({
    // options
  });
  // filter items on button click
  $('.item-menu').on('click', 'li ', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  $('.project_area .item-menu .li-group #li1').trigger("click");


  $('.project_area .item-details .item .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

 

  // Owl-carousel
  $(' .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      560: {
        items: 2
      }
    }
  })

  // sticky navigation menu

  let nav_offset_top = $('.header_area .main-menu').height() + 50;

  function navbarFixed() {
    if ($('.header_area .main-menu').length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu ').addClass('fixed_nav');
        } else {
          $('.header_area .main-menu ').removeClass('fixed_nav');
        }
      })
    }
  }

  navbarFixed();

})