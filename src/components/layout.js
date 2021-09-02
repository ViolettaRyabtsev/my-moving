import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import { Global, css } from "@emotion/core"
import NavBar from "./NavBar.js"
import logo from "../images/logo-viking.png"
import "././NavBar.js/NavBar.css"
import "./layout.css"
import photo from "../images/moving-out-boxes.jpg"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-setemetadata"
import Quote from "././NavBar.js/button.js"
import { GiVikingHelmet } from "react-icons/gi"
import Footer from "./footer"
const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>hello violet</title>
        <meta name={title} content={description} />
      </Helmet>

      <div class="layout-page">
        <div class="flex-head">
          <Quote class="quote" />
          <NavBar class="navigation" />
          <img src={logo} />
        </div>
        <div>
          <img class="main-photo" src={photo}></img>
          <main class="children">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
