import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SciMUN = () => (
  <Layout pageInfo={{ pageName: "execs" }}>
    <SEO title="Execs" />
    <Row>
      <Col><h1 style={{ textAlign: "center" }}>Meet the Execs</h1></Col>
    </Row>
    <Row>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StaticImage src="../images/ted-headshot.jpeg" placeholder={ "blurred" } height={ 200 } quality={ 100 } layout={ "constrained" }/>
      </Col>
    </Row>
    <Row>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p><i>PRESIDENT: </i><b>Ted Kwee-Bintoro</b></p>
      </Col>
    </Row>
    <Row>
      <Col style={{
          margin: `0 auto`,
          maxWidth: 960,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ul>
          <li>plays osu</li>
          <li>not actually named Ted</li>
          <li>scared of the dark</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>Director of Competitions: Audrey Hopkin</p>
        <p>Director of Events: Daphne Sahaya</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>Director of Logistics: Yifan Guo</p>
        <p>Director of Outreach: Anay Gupta</p>
      </Col>
    </Row>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SciMUN
