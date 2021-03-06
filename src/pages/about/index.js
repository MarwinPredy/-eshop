import React from "react"
import { Link } from "gatsby"


import Portrait from "../../images/story2.png"
import Kevlar from "../../images/carboneFiber.jpg"
import Waterproof from "../../images/waterproofFabric.jpg"
import Breath from "../../images/respiringFabric.jpg"
import Showcase from "../../components/Showcase/index"



import Layout from "../../components/Layout/index"
import SEO from "../../components/seo"
import './style.css'

const AboutPage = () => (
  <Layout>
    <SEO title="About page" />
    <div className="page__container">
      <div className="feature__story">
        <div className="row">
          <div className="story__img">
            <img src={Portrait} data-sal="slide-left" data-sal-delay="500" data-sal-duration="2000" data-sal-easing="ease"/>
          </div>
          <div className="story__content">
              <div className="title__container">
                <h2>Decouvrez</h2>
                <h3>Decouvrez</h3>
                <span>notre histoire</span>
              </div>
              <div className="text__container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="button__container">
                <Link to="/products/">Découvrez notre histoire</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="feature__showcase">
        <div className="row">
          <div className="title__container">
            <h2>Levez</h2>
            <h3>Levez</h3>
            <span>le voile</span>
          </div>
          <div className="showcase__container">
          <Showcase src={Kevlar} title="Ultra Résistant" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." button="En Savoir Plus"/>
          <Showcase src={Breath} title="Imper-Respirant" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." button="En Savoir Plus"/>
          <Showcase src={Waterproof} title="WaterProof" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." button="En Savoir Plus"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)


export default AboutPage