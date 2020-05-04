import React from 'react'
import Helmet from 'react-helmet'

const Page = () => (
  <div>
    <Helmet
      title='Get in touch | Greysphere Ltd'
      meta={[
        { name: 'description', content: 'Greypshere' },
        { name: 'keywords', content: 'Greysphere' }
      ]}
    />
    <div className='container mt-5'>
      <h1>Get in touch</h1>
      <p>Drop us a line to find out excatly how we can help you</p>
    </div>
  </div>
)

export default Page
