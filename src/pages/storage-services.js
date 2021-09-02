import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "./storage.css"

const storage = () => (
  <Layout>
    <SEO title="storage" />
    <div class="text-packing">
      <h4>
        All of us have had that "what am I going to do with all these things! I
        don't want to take them, but I want to keep them!" moment, and we know
        how it feels! For that reason and for your convenience, Viking offers a
        great storage solution for you. We will store your things in our
        warehouse safely, accessibly and affordably, for a short stay or a long
        period, which ever you decide is best for you. Call us and let us know
        how we may be able to help you with your storage needs.
      </h4>
      <Link to="/" class="back-home">
        &larr; back to home{" "}
      </Link>
    </div>
  </Layout>
)

export default storage;
