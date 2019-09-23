import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "gray_rect.png" }) {
              childImageSharp {
                  fluid(maxWidth: 738) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const IndexPage = () => (
  <Layout pageType="homepage">
    <SEO title="Interactive Signalling" />
    <div className="home-image">
        <Image/>
    </div>
  </Layout>
)

export default IndexPage
