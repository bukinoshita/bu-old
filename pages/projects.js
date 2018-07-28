'use strict'

// Packages
import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Layouts
import Page from './../layouts/page'

// UI
import Row from './../ui/row'

// HOC
import withData from './../hoc/with-data'

// Theme
import { colors } from './../theme'

const Projects = ({ data }) => {
  const { projects } = data

  return (
    <Page title="Projects">
      <Row>
        {projects.map(({ title }) => {
          return <li key={title}>{title}</li>
        })}
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

export const getProjects = gql`
  query getProjects {
    projects {
      title
    }
  }
`

export default withData(
  graphql(getProjects, {
    options: {},
    props: ({ data }) => ({
      data
    })
  })(Projects)
)
