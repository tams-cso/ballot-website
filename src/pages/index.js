import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Who are we?</h1>
          <p></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/FCh_RQ1w4ns" allowfullscreen></iframe>
          </div>
          <br></br>
          <p>Are you looking for a place where you can raise your voice?</p>
          <p>Do you need a club where you can speak your mind?</p>
          <p>Will you be the change you want to see in the world?</p>
          <h2>Welcome home.</h2>
        </Col>
      </Row>
      {/*
      <Row>
        <Col>
          <p>
            This website is currently under construction.
          </p>
          <p>
            -Ted Kwee-Bintoro
          </p>
          <p>
            This is a Gatsby Starter that I frequently use to get jump started
            on quick website builds. It includes the following packages:
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
          <p>
            For more documentation on these packages and how they work, please
            refer to the pages linked in the list above.
          </p>
        </Col>
      </Row>
      */}
    </Container>
  </Layout>
)

export default IndexPage
