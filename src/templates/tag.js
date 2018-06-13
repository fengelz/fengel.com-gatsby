import React from 'react'

import Posts from '../components/organisms/Posts'

class TagTemplate extends React.Component {
  render() {
    return this.props.data.allWordpressPost ? (
      <Posts posts={this.props.data.allWordpressPost.edges} />
    ) : (
      <div />
    )
  }
}

export default TagTemplate

export const pageQuery = graphql`
  query PostsByCategory($slug: String!) {
    allWordpressPost(filter: { tags: { name: { eq: $slug } } }) {
      edges {
        node {
          title
          excerpt
          slug
          categories {
            wordpress_id
            id
            name
          }
        }
      }
    }
  }
`
