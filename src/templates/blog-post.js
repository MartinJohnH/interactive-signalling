import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogPost = ({ data }) => {
  return (
      <Layout>
        <SEO title="About"/>
        <h2>{data.markdownRemark.frontmatter.title} - ({data.markdownRemark.frontmatter.date})</h2>
        <Img className="blog-post-image" fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
        <div className="dotted-line"/>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div>
          {console.log(data)}
        </div>
      </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 758) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
export default BlogPost
