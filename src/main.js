import './style.css'
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';


document.addEventListener('DOMContentLoaded', () => {
  new Splide('.splide', {
    type: 'fade',
    rewind: true,
    autoplay: true,
    interval: 4000,
    pagination: false,
    arrows: false,
  }).mount();
});

function handleScroll() {
  const section = document.querySelector('.fourth-section')
  const parallaxElement = document.querySelector('.parallax-bg')

  let scrollPosition = window.scrollY;
  const distanceFromTop = section.offsetTop
  const relativeScroll = distanceFromTop - scrollPosition
  // console.log('rel',relativeScroll)
  // console.log('inn',innerHeight)
  if (relativeScroll > window.innerHeight) return
  parallaxElement.style.transform = `translate3d(0px, ${-relativeScroll * 0.25}px, 0px)`;

}

document.addEventListener('scroll', handleScroll)