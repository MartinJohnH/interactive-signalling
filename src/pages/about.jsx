import React from "react"
import {StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          markdownRemark(frontmatter: { path: { eq: "/about" } }) {
                html
            }
            placeholderImage: file(relativePath: { eq: "aboutimg.png" }) {
              childImageSharp {
                  fluid(maxWidth: 758) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
        }
      `}
      render={data => (
        <Layout>
          <SEO title="About"/>
          <Img className="about-image" fluid={data.placeholderImage.childImageSharp.fluid} />
          <div
            className="about-content"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </Layout>
      )}
    />
  )
}

export default About
