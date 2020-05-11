import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import "./style.css"

const Caroussel = ({data}) =>(
    <div className="container">
        {
        data.allMarkdownRemark.edges.map((product) => {
          return <div className="card">
              <div className="card-header"><h3>{product.node.frontmatter.title}</h3></div>
              <div className="breadcumb"><p>{product.node.frontmatter.description}</p></div>
              <div className="price-container"><span>{product.node.frontmatter.price} €</span><div className="badge"><p>11% off</p></div></div>
              <span className="suggested_price">Suggested price : {product.node.frontmatter.price*1.3} €</span>
              <div className="button_container">
                <a className="buy">Add to cart</a>
              </div>
              <img src={product.node.frontmatter.image} alt=""/>
              <div className="state_bar">
                
              </div>
          </div>
        })
      }
    </div>
)

  export default function MyCaroussel(props) {
    return (
      <StaticQuery
        query={graphql`
        query ProductQuerie {
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
          }`}
        render={data => <Caroussel data={data} {...props} />}
      />
    )
  }
