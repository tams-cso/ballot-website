import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SciMUN = () => (
  <Layout pageInfo={{ pageName: "execs" }}>
    <SEO title="Execs" />
    <h1>Meet the Execs</h1>
    <p>President: Ted Kwee-Bintoro</p>
    <p>Director of Competitions: Audrey Hopkin</p>
    <p>Director of Events: Daphne Sahaya</p>
    <p>Director of Logistics: Yifan Guo</p>
    <p>Director of Outreach: Anay Gupta</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SciMUN
