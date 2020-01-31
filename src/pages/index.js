import React from "react"

import Layout from "../components/layout"
import Image from "../components/zh-logo"
import ContactForm from "../components/ContactForm.js";
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
  left: '10%',
  padding: '10vmin',
  width:'100%',
  '@media screen and (max-width:64em)':{
    width: '100%',
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <Box

      sx={{
        backgroundColor: 'transparent'      // theme.space[3]
      }}
    >
      <Card>
        <Flex sx={{
          margin: 100,
          flexWrap: 'nowrap',
          '@media screen and (max-width:64em)':{
            flexWrap: 'wrap',
            margin: 2
          }
        }}>
          <Box width={2/3}>
          <Box sx={{textAlign:'left', '@media screen and (min-width: 600px)':{textAlign:'center'}}}>
            <Text
              fontFamily="Norwester"
              fontSize={6}
              display="block"
              lineHeight={1}
              whiteSpace="wrap"
              sx={{whiteSpace:'wrap'}}
              m={15}>Zero Hour Movement</Text>
          </Box>
          <Box sx={{textAlign:'left', '@media screen and (min-width: 600px)':{textAlign:'center'}}}><Link href="https://google.com"><Button className="pulse" variant='outline' sx={{
            '&:hover': {
              backgroundColor: '#FE3E00',
            }, 
            display: 'none',
            cursor: 'pointer'
          }} m={2} p={3} fontSize={4} fontFamily="Norwester" backgroundColor='secondary'>Donate</Button></Link>
          </Box>
          <Box sx={{textAlign:'left', '@media screen and (min-width: 600px)':{textAlign:'center'}}}>
            <Link href="https://www.instagram.com/zerohourmvmt/"><Button className="pulse" variant='outline' m={2} fontFamily="Norwester" backgroundColor='secondary' sx={{
              '&:hover': {
                backgroundColor: '#FE3E00',
              },
              cursor: 'pointer'
            }}>Instagram</Button></Link>
            <Link href="https://twitter.com/zerohourmvmt/"><Button className="pulse" variant='outline' m={2} sx={{
              '&:hover': {
                backgroundColor: '#FE3E00',
              },
              cursor: 'pointer'
            }} fontFamily="Norwester" backgroundColor='secondary'>Twitter</Button></Link>
            <Link href="https://facebook.com/zerohourmvmt"><Button className="pulse" variant='outline' m={2} sx={{
              '&:hover': {
                backgroundColor: '#FE3E00',
              },
              cursor: 'pointer'
            }} fontFamily="Norwester" backgroundColor='secondary'>Facebook</Button></Link>
            <ContactForm/>
          </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              height: 0,
              marginTop: 50,
              paddingBottom: (900 / 16) + '%',
              position: 'relative',
              overflow: 'hidden',
              '& > iframe': {
                position: 'absolute',
                width: '100%',
                height: '60%',
                '@media screen and (max-width:64em)':{
                  width: '100%',
                  height: '100%',
                },
                top: 0,
                bottom: 0,
                left: 0,
                border: 0
              }
            }}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nJoVH2bHS8Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Flex>
      </Card>
    </Box>
  </Layout>
)

export default IndexPage
