import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()}, viking@vikingmovingandrelocation.com
      {` `}
      <a href="viking@vikingmovingandrelocation.com"></a>
      <h3>adress: long beach, CA 90803</h3>
    </div>
  )
}

export default Footer
