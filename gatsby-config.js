module.exports = {
  siteMetadata: {
    title: `Greysphere - Agile web development`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-9907395-1'
      }
    }]
}
