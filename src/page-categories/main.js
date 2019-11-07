import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'
import '../scss/main.scss';
import './page.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-contacts');
});

// Слайдер брендов
$('.autoplay').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
