import React from 'react'
import SiteLayout from "../components/siteLayout.js"
import Header from "../components/header.js"
import Blog from "../components/blog/index.js"

const Home = () => {
  return(
    <SiteLayout>
      <Header/>
      <Blog/>
    </SiteLayout>
  )
}

export default Home