// const queryTags = graphql`
//   query {
//     allWordpressTag {
//       edges {
//         node {
//           id
//           name
//           slug
//         }
//       }
//     }
//   }
// `

// const queryCategories = graphql`
//   query {
//     allWordpressCategory {
//       edges {
//         node {
//           id
//           name
//           slug
//         }
//       }
//     }
//   }
// `

const queryAllPosts = () => {
  return graphql`
    query InitialPosts {
      allWordpressPost {
        edges {
          node {
            id
            title
            slug
            excerpt
            date
          }
        }
      }
    }
  `
}
export { queryAllPosts }
