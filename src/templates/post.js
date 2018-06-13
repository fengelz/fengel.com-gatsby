import React from 'react'

import Post from '../components/molecules/Post'

class PostTemplate extends React.Component {
  render() {
    return <Post content={this.props.data.wordpressPost} />
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      date
    }
  }
`
