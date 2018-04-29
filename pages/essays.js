'use strict'

// Packages
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Layouts
import Page from './../layouts/page'

// Components
import Posts from './../components/posts'

// UI
import Row from './../ui/row'

// HOC
import withData from './../hoc/with-data'

const Essays = ({ data }) => {
  const { posts } = data

  return (
    <Page title="Essays">
      <Row>
        <Posts posts={posts} />
      </Row>
    </Page>
  )
}

export const allPosts = gql`
  query allPosts($username: String!, $limit: Int) {
    posts(username: $username, limit: $limit) {
      title
      subtitle
      url
    }
  }
`

export const allPostsQueryVars = {
  username: 'bukinoshita',
  first: 10
}

export default withData(
  graphql(allPosts, {
    options: {
      variables: allPostsQueryVars
    },
    props: ({ data }) => ({
      data
    })
  })(Essays)
)
