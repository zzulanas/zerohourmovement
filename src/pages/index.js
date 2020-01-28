import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Box,
  Card,
  Button,
  Text,
  Link
} from 'rebass'

import "../css/bg.css"

const boxstyle = {
  left:'35%',
  padding:'10vmin',
  position:'fixed',
  textAlign:'center',
  top:'50%',
  transform:'translate(-50%, -50%)'
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <Box
        style={boxstyle}
        sx={{
          display: 'grid',
          gridGap: 3,
          backgroundColor: 'transparent'      // theme.space[3]
        }}
    >
      <Card>
        <Text
        fontFamily="Norwester"
        fontSize={[4,5,6]}
        m={15}>Zero Hour Movement</Text>
        <Link href="https://www.instagram.com/zerohourmvmt/"><Button className="pulse" variant='outline' mr={2} fontFamily="Norwester" backgroundColor='secondary'>Instagram</Button></Link>
        <Link href="https://twitter.com/zerohourmvmt/"><Button className="pulse" variant='outline' mr={2} fontFamily="Norwester" backgroundColor='secondary'>Twitter</Button></Link>
        <Link href="https://google.com"  sx={{
          ':hover':{
            cursor: 'pointer'
          }
        }}><Button className="pulse" variant='outline' mr={2} fontFamily="Norwester" backgroundColor='secondary'>Donate</Button></Link>
      </Card>
    </Box>
  </Layout>
)

export default IndexPage
