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
  return (
    <Page title="Essays">
      <Row />
    </Page>
  )
}

export const getEssays = gql`
  query getEssays {
    essays {
      title
      subtitle
      url
    }
  }
`

export default withData(
  graphql(getEssays, {
    options: {},
    props: ({ data }) => ({
      data
    })
  })(Essays)
)
