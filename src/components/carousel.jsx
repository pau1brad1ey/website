import React from 'react'
import 'font-awesome/css/font-awesome.css'
import OwlCarousel from 'react-owl-carousel'
import './carousel.css'
import imgOne from '../assets/img/intro-carousel/one.jpg'
import imgTwo from '../assets/img/intro-carousel/two.jpg'
import imgThree from '../assets/img/intro-carousel/three.jpg'
import imgFour from '../assets/img/intro-carousel/four.jpg'
import imgFive from '../assets/img/intro-carousel/five.jpg'
const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
}

const events = {
  onDragged: function (event) {},
  onChanged: function (event) {}
}

const Carousel = () => (
  <section id='intro'>
    <div className='intro-container'>
      <OwlCarousel
        className='owl-theme'
        loop
      >
        <div className='item'><img src={imgOne} alt='The Last of us' /> </div>
        <div className='item'><img src={imgTwo} alt='The Last of us' /> </div>
        <div className='item'><img src={imgThree} alt='The Last of us' /></div>
      </OwlCarousel>
    </div>
  </section>
)

export default Carousel
