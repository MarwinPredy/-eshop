import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import SEO from "../components/seo"
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page-container">
      <div className="hero">
        <div className="gradient">
        <h2>Tout ce que vous avez à faire c'est décider de partir et le plus dur est fait</h2>
        <Link to="/products/">Shop Now</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
