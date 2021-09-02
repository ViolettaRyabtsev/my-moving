import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
const aboutUs = () => (
  <Layout>
    <SEO title="about" />
    <div>here about us </div>
    <Link to="/">&larr; back to home </Link>
  </Layout>
)

export default aboutUs
