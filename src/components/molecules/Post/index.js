import React, { PureComponent } from 'react'
import moment from 'moment'

import Html from '../../atoms/Html'

import './styles.scss'

class Post extends PureComponent {
  render() {
    const { content } = this.props
    return (
      <article className="mol-28055d40-87fd-4b8c-925d-c061f7d075d2">
        <h1>{content.title}</h1>
        <time>{moment(content.date).format('Do MMM YYYY')}</time>
        <Html content={content.content} embed={true} />
      </article>
    )
  }
}

export default Post
