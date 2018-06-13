const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queries = require('./src/queries')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    console.log('Create pages')
    resolve(
      graphql(queries.queryAllPosts)
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          const PostTemplate = path.resolve(`./src/templates/post.js`)
          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `${edge.node.slug}`,
              component: slash(PostTemplate),
              context: {
                slug: edge.node.slug,
              },
            })
          })
        })
        .then(() => {
          console.log('Create tags')
          graphql(queries.queryAllTags).then(result => {
            if (result.errors) {
              reject(result.errors)
            }
            const TagTemplate = path.resolve(`./src/templates/tag.js`)
            _.each(result.data.allWordpressTag.edges, edge => {
              createPage({
                path: `/tag/${edge.node.slug}`,
                component: slash(TagTemplate),
                context: {
                  slug: edge.node.slug,
                },
              })
            })
          })
        })
        .then(() => {
          console.log('Create categories')
          graphql(queries.queryAllCategories).then(result => {
            if (result.errors) {
              reject(result.errors)
            }
            const CatTemplate = path.resolve(`./src/templates/category.js`)
            _.each(result.data.allWordpressCategory.edges, edge => {
              createPage({
                path: `/category/${edge.node.slug}`,
                component: slash(CatTemplate),
                context: {
                  slug: edge.node.slug,
                },
              })
            })
          })
        })
    )
  })
}
