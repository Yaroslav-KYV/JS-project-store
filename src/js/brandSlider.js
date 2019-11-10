import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'


// Слайдер брендов
$('.autoplay').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

