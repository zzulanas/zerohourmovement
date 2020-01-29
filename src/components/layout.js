/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'theme-ui'
import theme from '../gatsby-pluigin-theme-ui/index'
import Header from "./header"
import {
  Flex,
  Box,
  Link,
  Text,
  Image
} from 'rebass'
import "./layout.css"
import logo from "../images/zh-logo.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Flex
            px={2}
            color='white'
            bg='transparent'
            alignItems='center'>
            <img src={logo} style={{maxWidth:80}}/>
            <Box mx='auto' />
          </Flex>
          <main>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
