import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BallotBuzz = ({ data }) => (
    <Layout pageInfo={{ pageName: "ballot-buzz" }}>
        <SEO title="Ballot Buzz" />
        <h1>The Ballot Buzz</h1>
        <h4>{data.allMarkdownRemark.totalCount} articles</h4>
        <p><i>Articles edited for publication purposes.</i></p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <Link to={node.frontmatter.slug}>
                    <h3>
                        {node.frontmatter.title}{" "}
                        <span>
                            — by {node.frontmatter.author}
                        </span>
                    </h3>
                </Link>
                <h4>Published on {node.frontmatter.date} in vol. {node.frontmatter.volume} under {node.frontmatter.topic} </h4>
                <p>{node.excerpt}</p>
            </div>
        ))}
    </Layout>
)

export default BallotBuzz

export const query = graphql`
    query MyQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                id
                frontmatter {
                    author
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                    topic
                    volume
                }
                excerpt
                }
            }
        }
    }
`  