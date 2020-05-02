import { Link } from "gatsby"
import React from "react"
import "./style.css"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import logo from "../../images/tente-picto.png"

const Header = () => {

  //Stock dans le context l'identity du user pour y disposer en global
  const identity = useIdentityContext()
  //stat local pour gerer la modal
  const [dialog, setDialog] = React.useState(false)
  console.log(identity)
  const name =(identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"
  const isLoggedIn = identity && identity.isLoggedIn
  return(
   <> 
  <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="logo-container">
            <Link to="/"><img src={logo}></img></Link>
            <p>Le petit campeur</p>
          </div>
          <div className="navigation-items">
            <Link to="/">Home</Link>
            <Link to="/products/">Product</Link>
            <Link to="/stories/">Stories</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
          </div>
          <div className="utiles">
            <a>Recherche</a>
            <a>Panier</a>
            <button className="btn" onClick={() => setDialog(true)}>
              {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
            </button>
          </div>
        </div>
      </div>
  </header>
  <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
  </>
  )}

export default Header
