import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import Newsletter from "../pages/newsletter/index"
import SEO from "../components/seo"
import Portrait from "../images/story2.png"
import Kevlar from "../images/carboneFiber.jpg"
import Waterproof from "../images/waterproofFabric.jpg"
import Breath from "../images/respiringFabric.jpg"
import Showcase from "../components/Showcase/index"
import Caroussel from "../components/Caroussel/index"
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page__container">
      <div className="hero">
        <div className="hero__content">
          <div className="title__container">
            <h2>Explorer</h2>
            <h3>Explorer</h3>
            <span>le monde</span>
          </div>
          <div className="text__container">
            <p data-sal="slide-right" data-sal-delay="800" data-sal-duration="1500" data-sal-easing="ease">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="button__container" data-sal="slide-left" data-sal-delay="1000" data-sal-duration="2000" data-sal-easing="ease">
            <Link to="/products/">Shop Now</Link>
          </div>
        </div>
        <div className="hero__img">
          <div className="gradient"></div>
        </div>
      </div>
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
      <div className="featured__collections">
        <div className="row">
          <div className="title__container">
              <h2>Préparez</h2>
              <h3>Préparez</h3>
              <span>votre aventure</span>
          </div>
          <div className="caroussel__container">
            <Caroussel/>
          </div>
        </div>
      </div>
      <div className="hero__medium">
        <h3>Pourquoi choisir entre qualité et durabilité ? Nos produits combinent à la fois des matériaux de qualité ainsi qu'une grande fonctionnalité</h3>
      </div>
      <div className="opinion">

      </div>
      <div className="featured__utility">
        <div className="row">
          <div className="utility__links">
            <h4>Liens</h4>
            <ul className="links__container">
              <li>Recherche</li>
              <li>Envois et retours</li>
              <li>Conditions générales</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="newsletter__container">
            <h4>Newletter</h4>
            <Newsletter/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
