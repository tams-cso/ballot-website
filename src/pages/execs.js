import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SciMUN = () => (
  <Layout pageInfo={{ pageName: "execs" }}>
    <SEO title="Execs" />
    <Row>
      <Col><h1 style={{ textAlign: "center" }}>Meet the Execs</h1></Col>
    </Row>
    <Row>
      <Col>
        <p>President: Ted Kwee-Bintoro</p>
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
