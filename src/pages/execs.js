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
        <p>PRESIDENT: <b>Ted Kwee-Bintoro</b></p>
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
    <hr></hr>
    <Row>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StaticImage src="../images/audrey-headshot.jpg" placeholder={ "blurred" } height={ 200 } quality={ 100 } layout={ "constrained" }/>
      </Col>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StaticImage src="../images/daphne-headshot.jpg" placeholder={ "blurred" } height={ 200 } quality={ 100 } layout={ "constrained" }/>
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
        <p>DIRECTOR OF COMPETITIONS: <b>Audrey Hopkin</b></p>
      </Col>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p>DIRECTOR OF EVENTS: <b>Daphne Sahaya</b></p>
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
          <li>has a titanium spine</li>
          <li>thinks the moon should be a planet</li>
          <li>knows the first 43 digits of pi (don't ask what #42 and #43 are)</li>
        </ul>
      </Col>
      <Col style={{
          margin: `0 auto`,
          maxWidth: 960,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ul>
          <li>reps traditional science</li>
          <li>is 6' 4"</li>
          <li>loves all the committee heads equally (more or less)</li>
        </ul>
      </Col>
    </Row>
    <hr></hr>
    <Row>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <StaticImage src="../images/anay-headshot.jpg" placeholder={ "blurred" } height={ 200 } quality={ 100 } layout={ "constrained" }/>
      </Col>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
          <StaticImage src="../images/yifan-headshot.jpg" placeholder={ "blurred" } height={ 200 } quality={ 100 } layout={ "constrained" }/>
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
        <p>DIRECTOR OF OUTREACH: <b>Anay Gupta</b></p>
      </Col>
      <Col style={{
        margin: `0 auto`,
        maxWidth: 960,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p>DIRECTOR OF LOGISTICS: <b>Yifan Guo</b></p>
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
          <li>lost his id like three times idk</li>
          <li>speaks fluent chinese</li>
          <li>jai hind</li>
        </ul>
      </Col>
      <Col style={{
          margin: `0 auto`,
          maxWidth: 960,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ul>
          <li>can do pushups with one hand</li>
          <li>lived in three countries</li>
          <li>loves eating</li>
        </ul>
      </Col>
    </Row>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SciMUN
