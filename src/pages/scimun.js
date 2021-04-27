import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SciMUN = () => (
  <Layout pageInfo={{ pageName: "scimun" }}>
    <SEO title="SciMUN" />
    <h1>we vibe at SciMUN</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SciMUN
