$(document).ready(function () {
  function handleHover(menuClass, submenuClass, linkClass) {
    if ($(window).width() > 992) { // Change the width value according to your needs
      $(menuClass).hover(
        function () {
          $(this).find(submenuClass).stop().slideDown();
          $(this).addClass('active_item');
          $(this).find(linkClass).addClass('active');
        },
        function () {
          $(this).find(submenuClass).stop().slideUp();
          $(this).removeClass('active_item');
          $(this).find(linkClass).removeClass('active');
        }
      );
    } else {
      $(menuClass).off('hover'); // Ensure hover is removed for mobile devices
      $(menuClass).click(function () {
        $(this).find(submenuClass).stop().slideToggle();
        $(this).toggleClass('active_item');
        $(this).find(linkClass).toggleClass('active');
      });
    }
  }

  handleHover('.has_subMenu', '.sub_menu_wrapper', '.nav_links');
  handleHover('.has_child_menu', '.third_level_wrapper', '.subMenu_link');

  // Reapply handlers on window resize
  $(window).resize(function() {
    handleHover('.has_subMenu', '.sub_menu_wrapper', '.nav_links');
    handleHover('.has_child_menu', '.third_level_wrapper', '.subMenu_link');
  });
});


// on scroll toggle class in headt
$(document).ready(function () {
  var $topheader = $('.nav_header');
  var scrollClass = 'stickey_header';

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $topheader.addClass(scrollClass);
    } else {
      $topheader.removeClass(scrollClass);
    }
  });
});


const body = document.getElementById('nav_header');
const scrollUp = "sticky-up";
const scrollDown = "sticky-down";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 70) {
    body.classList.remove(scrollUp);
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

// open mobile menu 
$(document).ready(function () {
  $(".open_mobile_menu").click(function () {
    $(this).toggleClass('active')
    $(".nav_list_wrapper").slideToggle();
  });
});




// // hero swiper sider
var mySwiper = new Swiper('#hero_slider', {
  loop: true,
  autoplay: false,
  autoplay: {
    delay: 4000,
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


$(document).ready(function () {
  var goSignUp = $('.goSignUp');
  var goLogin = $('.goLogin');
  var signUpFrom = $('.register');
  var loginFrom = $('.login');
  goSignUp.click(function () {
    signUpFrom.addClass('showPopup')
    loginFrom.removeClass('showPopup')
  });
  goLogin.click(function () {
    loginFrom.addClass('showPopup')
    signUpFrom.removeClass('showPopup')
  });

  $('.close_popup').click(function () {
    $('.popup_drop_shadow').removeClass('showPopup')
  });

});

$(document).ready(function () {
  var loginHide = true;
  if (loginHide) {
    $('.login_menu').css('display', 'none');
    $('.dropdown_hide').css('display', 'flex');
  } else {
    $('.login_menu').css('display', 'flex');
    $('.dropdown_hide').css('display', 'none');
  }
});





