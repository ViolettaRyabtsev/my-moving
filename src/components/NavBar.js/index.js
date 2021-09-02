import { useEffect } from "react"
//import { DiAppcelerator } from "react-icons/Di"
//import { iconContext } from "react-icons/lib"
//import { Nav } from "./NavbarElements.js"
import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"

import styled from "styled-components"

const Navigation = styled.div``
const Toggle = styled.div``
const Navbox = styled.div``
const Hamburger = styled.div``

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
