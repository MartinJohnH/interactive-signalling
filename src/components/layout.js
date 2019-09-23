/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SideMenu from "./side-menu"
import Footer from "./footer"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <div className="inner-container">
        <SideMenu />
        <main className="content-container">{children}</main>
      </div>
      <Footer courseName="Cart 411 - Project Studio 1" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
