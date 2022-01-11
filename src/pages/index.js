import React from 'react'
import SiteLayout from "../components/sitelayout"
import Header from "../components/header"
import Blog from "../components/blog/index"

const Home = () => {
  return(
    <SiteLayout>
      <Header/>
      <Blog/>
    </SiteLayout>
  )
}

export default Home