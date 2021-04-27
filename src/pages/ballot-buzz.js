import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BallotBuzz = () => (
    <Layout pageInfo={{ pageName: "ballot-buzz" }}>
        <SEO title="Ballot Buzz" />
        <h1>The Ballot Buzz is where we do our shtuff</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default BallotBuzz