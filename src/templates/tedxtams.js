import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BallotBuzz ({ data }) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageInfo={{ pageName: "tedxtams" }}>
            <SEO title={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Link to="..">Back to TedxTAMS</Link>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                slug
            }
        }
    }
`