import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../../node_modules/normalize.css/normalize.css'
import './index.scss'
import Master from '../components/atoms/Master'
import Aside from '../components/molecules/Aside'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Master>
      <Aside
        categories={data.allWordpressCategory.edges}
        tags={data.allWordpressTag.edges}
      />
      <section>{children()}</section>
    </Master>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query InitialData {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressTag {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
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
