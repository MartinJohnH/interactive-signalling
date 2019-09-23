import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SideMenu = () => (
  <menu className="menu-container">
    <h1 className="title">Interactive Signalling</h1>
    <p>An analogue of pollution awareness</p>
    <ul className="links">
        <li><AniLink className="link" paintDrip to="/about/" hex="#08e192" duration={0.8}>About</AniLink></li>
        <li><AniLink className="link" paintDrip to="/process/" hex="#08e192" duration={0.8}>Process</AniLink></li>
        <li><AniLink className="link" paintDrip to="/team/" hex="#08e192" duration={0.8}>Team</AniLink></li>
        <li className="connect-button">Connect</li>
    </ul>
  </menu>
)

export default SideMenu
