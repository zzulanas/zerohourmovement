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
          <Box>
            <Text
              fontFamily="Norwester"
              fontSize={6}
              display="block"
              lineHeight={1}
              m={15}>Zero Hour Movement</Text>
          </Box>
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
          </Box>
          <Box
            sx={{
              width: '100%',
              height: 0,
              paddingBottom: (900 / 16) + '%',
              position: 'relative',
              overflow: 'hidden',
              '& > video': {
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                bottom: 0,
                left: 0,
                border: 0
              }
            }}>
            <video
              width='560'
              height='315'
              src='https://ucc9c9b27e3288c8c3a53005acd5.dl.dropboxusercontent.com/cd/0/inline/AxHpIPqO5dbR0Hji_6z7vA4Wfib4Wx8p0U2HeYYhGTAvBtysPVW0mJe_pHJkWYr3k_Nn0Rh6QRNqsJ8EzkK89f6PM7DEPuFNtZ5VKRswaJFTpMNTPm_QaTj1YWBWJjST8Cw/file#'
              allowFullScreen
            />
          </Box>
        </Flex>
      </Card>
    </Box>
  </Layout>
)

export default IndexPage
