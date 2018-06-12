import Remarkable from 'remarkable'
import renderHTML from 'react-render-html'

function Html(props) {
  const content = props.content.substr(0, props.content.length - 1)
  return renderHTML(content)
}

export default Html
