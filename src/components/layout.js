/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import "@fontsource/montserrat"

import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  <Link href="https://www.facebook.com/groups/265378090967162/"> Facebook</Link> | 
                  <Link href="https://www.instagram.com/ballot.tams"> Instagram</Link> |
                  <Link href="mailto:ballot.tams@gmail.com"> Email</Link> | 
                  © {new Date().getFullYear()} TAMS Ballot.
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
