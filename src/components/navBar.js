import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            Home
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/scimun" className="link-no-style">
              <Nav.Link as="span" eventKey="scimun">
                SciMUN
              </Nav.Link>
            </Link>
            <Link to="/ballot-buzz" className="link-no-style">
              <Nav.Link as="span" eventKey="ballot-buzz">
                Ballot Buzz
              </Nav.Link>
            </Link>
            <Link to="/tedxtams" className="link-no-style">
              <Nav.Link as="span" eventKey="tedxtams">
                TedxYouth@TAMS
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
