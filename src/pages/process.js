import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Process = ({ data }) => (
  <Layout>
    <SEO title="Process" />
      <div className="cards-container">
          {data.allMarkdownRemark.edges.map((edge, index) =>
            <AniLink key={index} className="card" paintDrip to={`/process/${edge.node.frontmatter.date}`} hex="#7a03ff" duration={0.8}>
                <div className="date">
                    <div className="purple-line"/>
                    <h4 className="date-text">{edge.node.frontmatter.title}</h4>
                    <div className="purple-line"/>
                </div>
                <Img className="post-image" fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                <div className="post-text">
                    <p>{edge.node.excerpt}</p>
                    <p className="more">more</p>
                </div>
            </AniLink>
          )}
      </div>
  </Layout>
)

export const query = graphql`
    query ProcessQuery {
        allMarkdownRemark(filter: {frontmatter: {path: {eq: "/process"}}}, sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        date
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 350) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }

`

export default Process
