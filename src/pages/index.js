import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  <div>
    <div className="vimeo-wrapper">
      <iframe title="Interactive Signalling"
              src="https://player.vimeo.com/video/378418710?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0"
              frameBorder="0" allow="autoplay; fullscreen"></iframe>
    </div>
    <Layout pageType="homepage">
      <SEO title="Interactive Signalling" />
      <div className="home-image">
        {/*<iframe src="https://player.vimeo.com/video/378418710?color=ffffff&title=0&byline=0&portrait=0" width="640"*/}
        {/*        height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>*/}
      </div>
    </Layout>
  </div>
)

export default IndexPage
