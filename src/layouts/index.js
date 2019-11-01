import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './application.css'
import logoImg from '../assets/img/logo.png'

const thisYear = new Date().getFullYear()
const Header = () => (
  <div className='header'>
    <div className='wrapper'>
      <div id='logo'>
        <a href='/' title='Home'><img src={logoImg} alt='Home' /></a>
      </div>
    </div>
  </div>
)

const Footer = () => (
  <div className='footer'>
    <div className='wrapper'>
      <div className='companyinfo'>
        <div className='info1'>Greysphere Ltd. Registered in England &amp; Wales No. 5382284. VAT Registration No. 858210131</div>
        <div className='info2'>Registered office : 11 Victor Road, Teddington, Middlesex. TW11 8SP.</div>
      </div>
      <div className='copyright'>
        Copyright &copy; 2005 - {thisYear} Greysphere Ltd
        <br />All Rights Reserved
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Agile web development | Greysphere Ltd'
      meta={[
        { name: 'description', content: 'Greypshere' },
        { name: 'keywords', content: 'Greysphere' }
      ]}
      link={[
        {rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic'},
        {rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,700'}
      ]}
    />
    <Header />
    <div className='main'>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
