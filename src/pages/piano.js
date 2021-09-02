import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "./piano.css"
import photo from "../images/foto-piano04g.jpg"
import photo2 from "../images/foto-piano06g.jpg"

const piano = () => (
  <Layout>
    <SEO title="packing" />
    <div class="text-piano">
      <h4>
        Moving a piano is a highly specialized skill that requires both an
        intricate knowledge of how to properly disassemble and prepare the piano
        along with special equipment to both protect and move it. This is
        especially true of baby grand and grand pianos, but less so with most
        upright models.{" "}
      </h4>
      <h4>
        In many cases, the movers must know what NOT to do when preparing and
        moving the piano and this is where many discount piano movers go wrong!
        A piano that is improperly prepared can result in major damage, and one
        that is improperly moved or transported can result in serious injuries
        and major damage.{" "}
      </h4>{" "}
      <h4>
        Correctly moving a piano that normally weighs in excess of 500 pounds is
        much more that having multiple movers using sheer force. Rather, it is
        knowing how the piano is constructed, its heavy vs light areas, and how
        to use the leverage that these areas give the mover to efficiently move
        it.
      </h4>{" "}
      <h4>
        Along with a small crew of experienced piano movers, the owner of Viking
        is always the lead mover and always present in any piano move and has
        been involved in hundreds of piano moves, from the simple and
        straightforward to the complex and complicated! Viking is also pleased
        to offer long and short-term piano storage at our facility in Whittier,
        California.
      </h4>
      <img src={photo} width="500px" height="400px" />
      <img src={photo2} width="500px" height="400px" />
      <h4>
        Please contact us if you are moving a piano and let us talk with you
        about the details of your proposed move and allow us to give you a
        pricing quote. We may not be the cheapest, but do you really want to try
        and save a few dollars and take your chances with a 'discount mover'?
        Your piano may be the centerpiece of your home and you have certainly
        spent a lot of money on its purchase.
      </h4>
      <Link to="/" class="back-home">
        &larr; back to home{" "}
      </Link>
    </div>
  </Layout>
)

export default piano
