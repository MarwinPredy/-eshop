import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/index"
import SEO from "../components/seo"
import BagPack from "../images/sacs.png"
import Kevlar from "../images/carboneFiber.jpg"
import Waterproof from "../images/waterproofFabric.jpg"
import Breath from "../images/respiringFabric.jpg"
import Showcase from "../components/Showcase/index"
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page-container">
      <div className="hero">
        <div className="gradient">
        <h2>Tout ce que vous avez à faire <br></br> c'est décider de partir et le plus dur est fait</h2>
        <Link to="/products/">Shop Now</Link>
        </div>
      </div>
      <div className="feature-row">
        <div className="row">
          <div className="gradient-img">
          <img src={BagPack}></img>
          </div>
          <div className="feature-content">
            <h3>Designé pour l'aventure. Paré pour le risque.</h3>
            <p>Nous avons à coeur de créer des produits issues des dernières technologies.</p> 
            <p>Pour affronter les conditions climatiques et assurer un usage quotidien de nos produits, nous nous sommes tournés vers des matériaux intelligents.</p>
            <p>Depuis plus de 30 ans, les techno-polymères gagnent en performance et en qualité grâce au progrès de la recherche.</p>
            <p>Capitalisant sur leur potentiel immense nous tentons de vous proposer de nouveaux produits pour repousser les limites de votre expérience lors de voyage afin d'en faire des souvenirs uniques.</p> 
            <p>Résistance aux intempéries, ultra-confort ou réspirabilité sont autant de propriétés qui révolutionnent l'expérience du camping moderne. </p>
            <Link to="/products/">Voir les produits</Link>
          </div>
        </div>
      </div>
      <div className="feature-showcase">
        <div className="row">
          <Showcase src={Kevlar} title="Ultra Résistant" content="Nos tissus sont doublés d'un revêtement en carbon pour apporter plus de résitance à nos tissus. Tissus à haute résistance alliant à la fois légereté et resistance, ils sont la pierre angulaire de nos produits et vous garantirons une résistance à toutes épreuves."/>
          <Showcase src={Breath} title="Imper-Respirant" content="Fabriqué à base de poly-tétra-fluoro-ethylène (PTFE), tous nos tissus sont ensuite retravaillés pour correspondre à la norme  ePTFE. Cela permet nous assurer que nous vous proposons des produits à haute réspirabilité qui pourront s'adapter à tous milieux peux importe le climat dans lequel vous vous trouvez. "/>
          <Showcase src={Waterproof} title="WaterProof" content="Peu importe les intemperies qui vous attendent tous nos produits sont à l'épreuve de l'eau grâce à la technologie Gore Tex®. Développé en collaboration, nous n'avons cessé d'innover afin de dévelloper nos propres brevets WaterSliding©."/>
        </div>
      </div>
      <div className="featured-collections">
        <div className="row">
          <h2>Featured collection</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
