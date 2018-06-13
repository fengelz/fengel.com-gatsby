module.exports.queryAllPosts = `
    query AllPosts {
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

module.exports.queryAllTags = `
    query AllTags {
        allWordpressTag {
            edges {
                node {
                    id
                    name
                    slug
                }
            }
        }
    }
`
module.exports.queryAllCategories = `
    query AllCategories {
        allWordpressCategory {
            edges {
                node {
                    id
                    name
                    slug
                }
            }
          }
    }
`

module.exports.queryPostsByTagSlug = `
    allWordpressPost(filter: { tags: { slug: { eq: $slug } } }) {
        edges {
            node {
                title
                excerpt
                slug
            }
        }
    }
`

module.exports.queryPostsByCategorySlug = `
    query PostsByTag($slug: String!) {
        allWordpressPost(filter: { categories: { slug: { eq: $slug } } }) {
            edges {
                 node {
                    title
                    excerpt
                    slug
                }
            }
        }
    }
`
