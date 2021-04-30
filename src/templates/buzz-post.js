import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BallotBuzz ({ data }) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageInfo={{ pageName: "ballot-buzz" }}>
            <SEO title={frontmatter.title} />
            <h1>{frontmatter.title}</h1>
            <h2>by {frontmatter.author}</h2>
            <h3>VOL. {frontmatter.volume} — published {frontmatter.date} under {frontmatter.topic}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Link to="..">Back to Ballot Buzz</Link>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                volume
                date(formatString: "MMMM DD, YYYY")
                topic
                slug
            }
        }
    }
`