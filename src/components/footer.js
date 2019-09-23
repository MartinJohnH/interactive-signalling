import PropTypes from "prop-types"
import React from "react"

const Footer = ({ courseName }) => (
  <footer className="footer-container">
    <div className="green-bar forwards"/>
    <p className="gap">{courseName}</p>
    <div className="green-bar reverse"/>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
