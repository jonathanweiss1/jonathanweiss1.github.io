import * as React from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import { useState } from "react"

const NavBar = ({ currentRoute }: { currentRoute: string }) => {
  const drawer = () => {
    console.log(isOpen);
    setDrawerState(!isOpen);
    console.log(isOpen);
  }
  const [isOpen, setDrawerState] = useState(false);
  const indicatorClassesDropdown = (route: String) => {
    if (route == currentRoute)
      return "text-slate-500 font-extrabold bg-slate-200"
    else return ""
  }
  let items: { route: string; title: string }[] = [
    { route: "/", title: "Home" },
    { route: "/impressum", title: "Impressum" },
    { route: "/data-protection", title: "Data Protection" },
  ]
  return (
    <div>
      <nav className="fixed w-full p-4 mb-3 bg-slate-100 shadow-md rounded-b-lg z-50">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          {/* Mobile toggle */}
          <div className="md:hidden">
            <button type="button" onClick={drawer}>
              <svg
                className="h-8 w-8 fill-current text-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {/* Navbar */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-sans">
              {items.map(item => (
                <li key={item.route}>
                  <Link
                    to={item.route}
                    className={indicatorClassesDropdown(item.route)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Dark background transition */}


          {/* Drawer menu */}
          <aside
            className={
              "p-5 transform top-0 left-0 w-64 bg-slate-100 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50 text-gray-900 " +
              (isOpen ? "translate-x-0" : "-translate-x-full")
            }
          >
            <div className="close">
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                onClick={() => {
                  setDrawerState(false)
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <span
              onClick={() => {
                setDrawerState(false);
              }}
              className="flex w-full items-center p-4 border-b"
            >
              <Link to="/">
                <Logo />
              </Link>
            </span>
            <ul className="divide-y font-sans">
              {items.map(item => (
                <li key={item.route}>
                  <Link
                    to={item.route}
                    className={
                      "p-4 inline-block flex" +
                      indicatorClassesDropdown(item.route)
                    }
                    onClick={() => {
                      setDrawerState(false);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </nav>
      <div className="py-8"></div>
    </div>
  )
}

export default NavBar
