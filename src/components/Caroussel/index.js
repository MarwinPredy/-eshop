import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css"


const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  arrows: true,
  speed: 1500,
  easing: "swing",
  swipeToSlide: true,
};

const Caroussel = ({data}) =>(
    <div className="card__container">
      <Slider {...settings}>
        {
        data.allMarkdownRemark.edges.map((product) => {
          return <div className="caroussel__card">
              <div className="image">
                <img src={product.node.frontmatter.image} alt=""/>
              </div>
              <div className="content">
                <div className="card__header">
                  <h4>{product.node.frontmatter.title}</h4>
                </div>
                <div className="breadcumb">
                  <p>{product.node.frontmatter.description}</p>
                </div>
              </div>
              <div className="price_container">
                <span>{product.node.frontmatter.price} €</span>
              </div>
          </div>
        })
      }
      </Slider>
    </div>
)

  export default function MyCaroussel(props) {
    return (
      <StaticQuery
        query={graphql`
        query ProductQuerie {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
              edges {
                node {
                  frontmatter {
                    title
                    price
                    description
                    image
                    path
                  }
                }
              }
            }
          }`}
        render={data => <Caroussel data={data} {...props} />}
      />
    )
  }
