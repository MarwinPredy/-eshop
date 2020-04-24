import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faStream, faRoad, faLink} from '@fortawesome/free-solid-svg-icons'
import './style.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ProductPage = ({data}) => (
  <Layout>
    <SEO title="Product page" />
    <h1>Products</h1>
    <div className="container">
      {
        data.allMarkdownRemark.edges.map((product) => {
          return <div className="card">
              <div className="card-header"><h3>{product.node.frontmatter.title}</h3></div>
              <div className="breadcumb"><p>{product.node.frontmatter.description}</p></div>
              <div className="price-container"><span>{product.node.frontmatter.price} €</span><div className="badge"><p>11% off</p></div></div>
              <span className="suggested_price">Suggested price : {product.node.frontmatter.price*1.3} €</span>
              <div className="button_container">
                <div className="button"><FontAwesomeIcon icon={faStream} /></div>
                <div className="button"><FontAwesomeIcon icon={faEye} /></div>
                <div className="button"><FontAwesomeIcon icon={faRoad} /></div>
                <div className="button"><FontAwesomeIcon icon={faLink} /></div>
                <a className="buy">Add to cart</a>
              </div>
              <img src={product.node.frontmatter.image} alt=""/>
              <div className="state_bar">
                
              </div>
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