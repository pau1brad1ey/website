import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => (
  <div>
    <Helmet
      title='Agile web development | Greysphere Ltd'
      meta={[
        { name: 'description', content: 'Greypshere' },
        { name: 'keywords', content: 'Greysphere' }
      ]}
    />

    <h1>Development</h1>
  </div>
)

export default Page
