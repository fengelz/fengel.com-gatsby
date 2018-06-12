import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => (
  <div>
    {/* {console.log(data.allWordpressPost)} */}
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage

export const query = graphql`
  query SinglePage($slug: String!) {
    wordpressPost(slug: { eq: "$slug" }) {
      title
      content
      date
    }
  }
`
