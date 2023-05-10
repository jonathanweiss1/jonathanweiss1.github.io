import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jonathan's Homepage`,
    description: `Jonathan is a Computer Science Student with a focus on image processing in medical applications.`,
    author: `Jonathan Weiß`,
    siteUrl: `https://jonathanweiss1.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "content_md",
        path: `${__dirname}/src/content_md`
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          "https://jonathanweiss1.github.io/using-ssr/",
          "https://jonathanweiss1.github.io/using-typescript/"
        ]
      }
    }]
};

export default config;
