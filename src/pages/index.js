import React from "react"

import Layout from "../components/layout"
import Image from "../components/zh-logo"
import logo from "../images/zh-logo.png"
import SEO from "../components/seo"
import {
  Box,
  Card,
  Button,
  Text,
  Link,
  Flex
} from 'rebass'

import "../css/bg.css"

const boxstyle = {
  left: '35%',
  padding: '10vmin',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <Box
      style={boxstyle}
      sx={{
        backgroundColor: 'transparent'      // theme.space[3]
      }}
    >
      <Card>
        <Flex>
          <Text
          fontFamily="Norwester"
          fontSize={6}
          display="block"
          lineHeight = {1}
          m={15}>Zero Hour Movement</Text>
          </Flex>
        <Box><Link href="https://google.com"><Button className="pulse" variant='outline' sx={{
          '&:hover': {
            backgroundColor: 'blue',
          },
          cursor: 'pointer'
        }} m={2} p={3} fontSize={4} fontFamily="Norwester" backgroundColor='secondary'>Donate</Button></Link>
          <Link href="https://www.instagram.com/zerohourmvmt/"><Button className="pulse" variant='outline' m={2} fontFamily="Norwester" backgroundColor='secondary' sx={{
          '&:hover': {
            backgroundColor: 'blue',
          },
          cursor: 'pointer'
        }}>Instagram</Button></Link>
          <Link href="https://twitter.com/zerohourmvmt/"><Button className="pulse" variant='outline' m={2} sx={{
          '&:hover': {
            backgroundColor: 'blue',
          },
          cursor: 'pointer'
        }} fontFamily="Norwester" backgroundColor='secondary'>Twitter</Button></Link>
        </Box>
      </Card>
    </Box>
  </Layout>
)

export default IndexPage
