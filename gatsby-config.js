module.exports = {
  siteMetadata: {
    description: "Babatunde Ojo | Portfolio",
    locale: "en",
    title: "Babatunde Ojo",
    formspreeEndpoint: "https://formspree.io/f/mjvlrkgr",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-blue",
      },
    },
  ],
}