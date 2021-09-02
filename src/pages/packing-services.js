import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "./packing.css"
const packing = () => (
  <Layout>
    <SEO title="packing" />
    <div class="text-packing">
      <h4 class="text">
        <h3>Minimal pack</h3>
        At Viking, our highest priority is making sure that your furniture and
        belongings arrive to your new home in the same condition that they left.
        Our minimal pack option is ideal for local or short distance moves. Once
        your movers arrive, we come into your home and pack all of your
        furniture and home furnishings in our moving blankets so they will be
        safe during the moving process and while they are being transported.
        Viking will also specially wrap anything you have that is fragile for
        you. The rest of your belongings are packed by you before your movers
        arrive and are then loaded on your moving truck! Viking will also
        provide re-usable boxes for you to pack things upon request. If you find
        that you have more things than you want to take, but at the same time do
        not want to simply dispose of or throw away your things, check out our
        short and long-term STORAGE SERVICES.
        <h3>intermidiate pack</h3>
        Our intermediate pack option is a step up from our basic pack; we come
        into your home and pack books, clothes, audio and visual equipment as
        well as most of your basic belongings. The intermediate pack option is
        best for moves that are longer distance (such as Los Angeles to San
        Francisco or San Francisco to San Diego). Our most important goal at
        Viking is to make sure your furniture and belongings are packed well and
        not damaged during the moving process. If you find that you have more
        things than you want to take, but at the same time do not want to simply
        dispose of or throw away your things, check out our short and long-term
        STORAGE SERVICES.
        <h3>full pack</h3>
        Viking's full-pack option is exactly as it sounds! We come into your
        home and pack your place from top to bottom in preparation for what will
        be a long-distance move for you. The full pack option includes
        everything including clothing, fragile items, kitchenware, electronics,
        wall hangings, et cetera. As with all of our packing options, Viking
        uses protective and re-useable boxes so that your belongings are
        transported safely and also to reduce the cost of your move.
      </h4>
      <Link to="/" class="back-home">
        &larr; back to home{" "}
      </Link>
    </div>
  </Layout>
)

export default packing
