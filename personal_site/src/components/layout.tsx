/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./navbar"

const Layout = ({ children }: { children: any }) => {
  const data: any = useStaticQuery(graphql`
    query SiteRouteQuery {
      sitePage {
        path
      }
    }
  `)

  return (
    <>
      <NavBar currentRoute={data.sitePage.path} />
      <div className="px-4 py-2">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
