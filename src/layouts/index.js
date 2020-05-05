import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
// import ScrollToTop from '../components/scrollToTop'
import 'bootstrap/dist/css/bootstrap.css'
import './theme.css'

import Footer from '../sections/footer'
import Header from '../sections/header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Agile web development | Greysphere Ltd'
      meta={[
        { name: 'description', content: 'Greypshere' },
        { name: 'keywords', content: 'Greysphere' }
      ]}
      link={[
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700%7CVarela+Round'},
        {rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic'},
        {rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,700'}
      ]}
    />
    <Header />
    <div className='main'>
      { children }
    </div>
    <Footer />
    {/*
      <ScrollToTop />
    */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
