import React from 'react'

import Posts from '../components/organisms/Posts'

const IndexPage = ({ data }) => (
  <div>
    {console.dir(data)}
    <Posts posts={data.allWordpressPost.edges} />
  </div>
)

export default IndexPage

export const homePageQuery = graphql`
  query InitialPosts {
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
