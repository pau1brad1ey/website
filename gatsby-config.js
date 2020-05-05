module.exports = {
  siteMetadata: {
    title: `Greysphere - Agile web development`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-9907395-1'
      }
    }, {
      resolve: 'gatsby-plugin-react-helmet'
    }
  ]
}
