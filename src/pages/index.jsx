import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layouts/index'
import Banner from '../components/banner'
import Preloader from '../components/preloader'
import Services from '../sections/headlineServices'

const IndexPage = () => (
  <Layout>
    <Helmet
      title='Agile web development | Greysphere Ltd'
      meta={[
        { name: 'description', content: 'Greypshere Ltd. Clean and simple services and solutions to help business large and small improve their online presence.' },
        { name: 'keywords', content: 'Greysphere' }
      ]}
    />

    <Banner
      title='CLEAN and SIMPLE'
      subtitle='Helping businesses large and small with their online presence without any fuss'
      /* cta={{
        text: 'See what we offer',
        url: '/services'
      }} */
    />
    <Services />
    <Preloader />
  </Layout>
)

export default IndexPage
