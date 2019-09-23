import React from "react"
import {StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Team = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: {relativePath: {eq: "gray_rect.png"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 225) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        allMarkdownRemark(filter: {frontmatter: {path: {eq: "/team"}}}, sort: {order: DESC, fields: [frontmatter___date]}) {
            edges {
                node {
                    excerpt(pruneLength: 165)
                    frontmatter {
                        title
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
    `}
    render={data =>
      <Layout>
        <SEO title="Team" />
        <Img className="about-image" fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        <div className="about-content">
          {data.allMarkdownRemark.edges.map((edge, index) =>
            <a key={index} className="card" href="" target="_blank" rel="noopener">
              <div>
                <div className="purple-line"/>
              </div>
              <Img className="team-member-image" fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
              <div className="post-text">
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.excerpt}</p>
                <span className="more">link</span>
              </div>
            </a>
          )}
        </div>
      </Layout>
    }
  >
  </StaticQuery>
)

export default Team
