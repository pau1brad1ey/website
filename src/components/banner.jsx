import React from 'react'
import { Button } from 'reactstrap'
import './banner.css'
import bgImg from '../assets/img/banner-bg.jpg'

const Banner = (props) => (
  <div className='banner mb-5'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-md-offset-1'>
          <div className='banner-content'>
            <h1 className='display-3'>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            {props.cta ? (
              <Button href={props.cta.url}>{props.cta.text}</Button>
              ) : null
            }
          </div>
        </div>
      </div>
      <div className='banner__background'>
        <div className='banner__background__asset' style={{backgroundImage: `url(${bgImg})`}} />
      </div>
    </div>
  </div>
)

export default Banner
