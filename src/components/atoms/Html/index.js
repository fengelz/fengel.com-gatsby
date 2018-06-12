import React from 'react'
import renderHTML from 'react-render-html'

function Html(props) {
  const content = props.content
  return props.embed ? (
    <div> {renderHTML(props.content)} </div>
  ) : (
    renderHTML(props.content)
  )
}

export default Html
