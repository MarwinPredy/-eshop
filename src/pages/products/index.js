import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye} from '@fortawesome/free-solid-svg-icons'
import './style.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ProductPage = ({data}) => (
  <Layout>
    <SEO title="Product page" />
    <h1>Products</h1>
    <Link to="/">Go back to the homepage</Link>
    <div className="container">
      {
        data.allMarkdownRemark.edges.map((product) => {
          return <div className="card">
              <h3>{product.node.frontmatter.title}</h3>
              <span>{product.node.frontmatter.price} €</span>
              <p>{product.node.frontmatter.description}</p>
              <img src={product.node.frontmatter.image} alt=""/>
              <a><FontAwesomeIcon className="buy" icon={faCartPlus} /></a>
              <a><FontAwesomeIcon className="view" icon={faEye} /></a>
          </div>
        })
      }
    </div>
  </Layout>
)

export const query = graphql`
query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            price
            description
            image
          }
        }
      }
    }
  }`

export default ProductPage