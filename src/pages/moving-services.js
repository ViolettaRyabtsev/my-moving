import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "./moving.css"
const moving = () => (
  <Layout>
    <SEO title="moving" />
    <div class="text-moving">
      <h4>
        <h3>LOCAL MOVES</h3>
        The majority of Viking's work is done in Southern California with Long
        Beach and the Greater Los Angeles area being our busiest area. And since
        Viking is a full-service moving company, we are happy to do moves
        anywhere from simple, one bedroom apartments to full, 4 bedroom family
        homes. Every week Viking performs literally dozens of single person and
        family relocations from Long Beach and the Los Angeles area to new
        places within that area and we can honestly say that we have never had a
        dissatisfied client! Every week Viking performs literally dozens of
        single person and family relocations from Long Beach and the Los Angeles
        area to new places within that area and we can honestly say that we have
        never had a dissatisfied client! The cost for many local moves is based
        on an hourly system and is generally the best and most economic way for
        our customers. Other moves in larger apartments and homes or challenging
        obstacles like multiple stairs, floors, or large amounts of furniture
        are subject to flat-rates. This is were we have an assessor come to your
        home, meet you and preform a 10-15 minute walk-through and at the
        conclusion, tell you exactly how much your move will cost and discuss
        strategies with you in terms of helping you in the most efficient way
        possible so you move is as easy and streamlined as can be.
        <h3>CALIFORNIA STATE MOVES</h3> Our next busiest area is California
        State with San Diego, San Francisco and all points between being the
        most popular. Most of these moves are a little more detailed in terms of
        the work involved since such moves require a little more care in how we
        pack and protect your furnishings and belongings. Our number one concern
        at Viking is making absolutely sure that your property arrives at your
        new place exactly as it left your old one so we take a little more time
        and use more material to accomplish that goal.
        <h3>INTERSTATE MOVES</h3>
        Finally, Viking offers full-service, long-distance moving that operates
        beautifully, efficiently and quite economically! As for our interstate
        California moves, our first priority is making sure that your belongings
        are packed correctly to come out of your house, into our truck and into
        your new place in another state. In addition, Viking has its own
        dedicated long-distance truck, crew and equipment to relocate you and we
        never contract your move to someone else. Although long-distance moves
        always involve a good amount of driving, they are one of our favorites
        as it is always rewarding to see our clients happy once their moving
        stress is over and they are in their new place with a big smile!
      </h4>
      <Link to="/" class="back-home">
        &larr; back to home{" "}
      </Link>
    </div>
  </Layout>
)

export default moving
