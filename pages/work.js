'use strict'

// Packages
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

// Layouts
import Page from './../layouts/page'

// Components
import Works from './../components/work'

// UI
import Row from './../ui/row'

// HOC
import withData from './../hoc/with-data'

// THeme
import { colors } from './../theme'

const Work = ({ data }) => {
  const { work } = data

  return (
    <Page title="Work">
      <Row>
        <Works work={work} />
      </Row>

      <style jsx>{`
        li {
          color: ${colors.white};
          font-size: 20px;
        }
      `}</style>
    </Page>
  )
}

Work.propTypes = {
  data: PropTypes.object
}

export const getWork = gql`
  query getWork {
    work {
      role
      company
      from
      to
      location
      remote
      description
    }
  }
`

export default withData(
  graphql(getWork, {
    options: {},
    props: ({ data }) => ({
      data
    })
  })(Work)
)
