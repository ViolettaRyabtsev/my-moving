import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
import ContactUs from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="contact-us" />

    <div class="contact">
      <h3>
        This is an exclusive channel where you can get in touch with Viking.
        Send us your suggestion, doubt or compliment.
      </h3>{" "}
      <ContactUs />
    </div>
    <Link to="/" class="back-home">
      &larr; back to home{" "}
    </Link>
  </Layout>
)

export default IndexPage
