import { Link } from "gatsby"
import React from "react"
import "../styles/header.css"
import logo from "../images/images.png"
import steam from "../images/steam.png"

const Header = () => (
  <header className="header">
      <div className="container--fluid">
        <div className="container__row">
          <div className="container__col-3 logo-container">
            <Link to="/"><img src={logo}></img></Link>
          </div>
          <div className="container__col-6">
            <Link to="/products/">Product</Link>
            <Link to="/contact/">Contact</Link>
          </div>
          <div className="container__col-3">
            <Link>Sign in Through <img src={steam}/></Link>
          </div>
        </div>
      </div>
  </header>
)

export default Header
