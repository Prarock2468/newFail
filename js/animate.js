var swiper2 = new Swiper('#hotel_swiper', {
    slidesPerView: 1.6,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    slideToClickedSlide: true,
    breakpoints: {
        768: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        578: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        }
    },
    pagination: {
        el: ".event_pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination_arr ' + className + '">' + (index + 1) + '<span class="arrow_pagination"></span>' + "</span>";
        },
    },
    on: {
        slideChange: function () {
            var slides = Array.from(this.slides);
            slides.forEach(slide => {
                slide.querySelector('.hotel_card_details').classList.remove('visible');
            });
            var activeSlide = slides[this.activeIndex];
            activeSlide.querySelector('.hotel_card_details').classList.add('visible');
        }
    }
});
// active slide animation
document.addEventListener('DOMContentLoaded', function () {
    var initialSlides = Array.from(swiper2.slides);
    initialSlides.forEach(slide => {
        slide.querySelector('.hotel_card_details').classList.remove('visible');
    });
    var initialActiveSlide = initialSlides[swiper2.activeIndex];
    initialActiveSlide.querySelector('.hotel_card_details').classList.add('visible');
});

// hotel slider
var swiper3 = new Swiper('.hotelSlider', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});




$('.video').parent().click(function () {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
        $(this).children(".video").get(0).play(); $(this).children(".imageoverlay").fadeOut();
    } else {
        $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
        $(this).children(".imageoverlay").fadeIn();
    }
});