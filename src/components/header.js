import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "QR_code.png" }) {
              childImageSharp {
                  fluid(maxWidth: 20) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img className="logo" fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Header = () => (
  <header className="header-container">
    <div className="green-bar forwards"/>
    <AniLink className="gap" paintDrip to="/" hex="#08e192" duration={0.8}>
      <Logo />
    </AniLink>
    <div className="green-bar reverse"/>
  </header>
)

export default Header
