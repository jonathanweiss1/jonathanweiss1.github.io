import React from 'react';
import {Link} from 'gatsby';
import NavBar from "../components/navbarnew"

const SiteLayout = ({children}) => {
  const logoStyle = `
      text-white
      font-radley
      sm:text-base
      text-sm
  `

  return (
      <div className="application">
          <script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script>
          <div>
              <NavBar></NavBar>
              <main>{children}</main>
              <footer className="text-center py-4 bg-gray-50 text-black">
                  <p>Copyright 2022 Jonathan Weiß</p>
              </footer>
          </div>
      </div>
  )
}

export default SiteLayout