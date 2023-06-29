import type { GatsbyConfig, PluginRef } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `Gatsby Starter Emilia`,
    siteTitleAlt: `Gatsby Starter Emilia | AREA44`,
    siteHeadline: `Gatsby Starter Emilia | AREA44`,
    siteUrl: `https://gatsby-starter-emilia.netlify.app`,
    siteDescription: "Minimalistic portfolio/photography site with masonry grid, page transitions and big images.",
    siteImage: `/og-image.jpg`,
    siteLanguage: `en`,
    author: `@torn4dom4n`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: `Gatsby Starter Emilia`,
        socialMedia: [{}],
        showThemeAuthor: false,
        location: `Vietnam`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Emilia | AREA44`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
