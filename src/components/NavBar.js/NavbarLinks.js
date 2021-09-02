import React from "react"
import { Link } from "gatsby"
import "./NavBar.css"
import styled from "styled-components"

const NavbarLinks = () => {
  return (
    <div class="header">
      <ul class="navigatin-list">
        <li>
          <Link to="/moving-services" class="href">
            MOVING Services
          </Link>
        </li>
        <li>
          <Link to="/piano" class="href">
            Piano and Safes
          </Link>
        </li>
        <li>
          <Link to="/packing-services" class="href">
            Packing Services
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/storage-services" class="href">
            Storage Services
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/contact-us" class="href">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
