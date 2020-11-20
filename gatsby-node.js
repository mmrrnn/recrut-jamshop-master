/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const productTemplate = require.resolve(`./src/templates/product.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { price: { ne: null } } }) {
        edges {
          node {
            frontmatter {
              name
              slug
              price
              excerpt
              image
              description
              tag
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { frontmatter } = node

    createPage({
      path: frontmatter.slug,
      component: productTemplate,
      context: {
        product: frontmatter,
      },
    })
  })
}
