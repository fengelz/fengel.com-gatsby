const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allWordpressPost(sort: { fields: [date] }) {
              edges {
                node {
                  title
                  excerpt
                  slug
                  date
                  content
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const PostTemplate = path.resolve(`./src/templates/post.js`)
        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            // will be the url for the page
            path: edge.node.slug,
            // specify the component template of your choice
            component: slash(PostTemplate),
            // In the ^template's GraphQL query, 'id' will be available
            // as a GraphQL variable to query for this posts's data.
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    )
  })
}
