import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SideMenu = () => (
  <menu className="menu-container">
    <h1 className="title">Interactive Signalling</h1>
    <p className="sub-title">An analogue of pollution awareness</p>
    <ul className="links">
        <li><AniLink className="link" paintDrip to="/about/" hex="#08e192" duration={0.8}>About</AniLink></li>
        <li><AniLink className="link" paintDrip to="/process/" hex="#08e192" duration={0.8}>Process</AniLink></li>
        <li><AniLink className="link" paintDrip to="/team/" hex="#08e192" duration={0.8}>Team</AniLink></li>
        <a className="connect-button" href="https://martinjohnh.github.io/interactive-signalling/" target="_blank" rel="noopener noreferrer">Visit</a>
    </ul>
  </menu>
)

export default SideMenu
