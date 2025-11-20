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
  const relativeScroll = scrollPosition - distanceFromTop
  // console.log('rel',relativeScroll)
  // console.log('inn',innerHeight)
  if (relativeScroll > window.innerHeight) return
  parallaxElement.style.transform = `translate3d(0px, ${relativeScroll * 0.25}px, 0px)`;
}

function handleNavbarOnDesktop() {
  const header = document.querySelector('header')
  const navbarContent = document.querySelector('.test__navbar')

  let scrollPosition = window.scrollY
  let windowWidth = window.innerWidth

  if (windowWidth >= 992) {
    if (scrollPosition > 40) {
      header.style.backgroundColor = 'white'
      navbarContent.style.filter = 'invert(1)'
    } else {
      header.style.backgroundColor = 'transparent'
      navbarContent.style.filter = 'invert(0)'
    }
  }
}

document.addEventListener('scroll', handleScroll)
document.addEventListener('scroll', handleNavbarOnDesktop)