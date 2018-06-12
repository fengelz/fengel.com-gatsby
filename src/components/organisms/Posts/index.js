import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

import Html from '../../atoms/Html'

import './styles.scss'

class Posts extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <div className="org-a9ca065c-a467-47bb-a252-2138bff1cb1d">
        {posts.map(post => {
          console.log(post)
          post = post.node
          moment.locale('DA')
          return (
            <div className="post" key={post.id}>
              <h2>
                <Link to={`/${post.slug}`}>{post.title}</Link>
              </h2>

              <Html content={post.excerpt} />
              <time>{moment(post.date).format('Do MMM YYYY')}</time>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Posts
