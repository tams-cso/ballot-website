/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage, createNodeField } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/buzz-post.js`)
  
    const buzzes = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/(ballot-buzz)/"  }}
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (buzzes.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    buzzes.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })

    const tedxtamsTemplate = require.resolve(`./src/templates/tedxtams.js`)
  
    const talks = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/(tedxtams)/"  }}
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (talks.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    talks.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: tedxtamsTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }