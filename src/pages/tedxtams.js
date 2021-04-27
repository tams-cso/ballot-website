import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TedTams = () => (
    <Layout pageInfo={{ pageName: "tedxtams" }}>
        <SEO title="TedxYouth@TAMS" />
        <h1>we speak a lot</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default TedTams