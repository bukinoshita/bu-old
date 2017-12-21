'use strict'

import { Component } from 'react'
import 'isomorphic-fetch'
import sortArr from 'sort-arr'

import Page from './../layouts/page'
import Row from './../components/row'
import Back from './../components/back'
import Project from './../components/project'
import { colors, typography } from './../theme'

class Projects extends Component {
  static async getInitialProps() {
    const res = await fetch(
      `https://api.github.com/users/bukinoshita/repos?per_page=100&access_token=${process
        .env.ACCESS_TOKEN}`
    )
    const json = await res.json()
    return { repos: json }
  }

  render() {
    const projects = sortArr(this.props.repos, 'pushed_at')
      .reverse()
      .map((project, index) => {
        if (index <= 10) {
          return <Project data={project} />
        }
      })

    return (
      <Page>
        <Back />

        <Row>
          <header>
            <h1>projects</h1>
            <h2>more than 383 projects</h2>
          </header>

          <ul>
            {projects}
          </ul>

          <a href="https://github.com/bukinoshita?tab=repositories">
            Check all my projects
          </a>
        </Row>

        <style jsx>{`
          header {
            text-align: center;
          }

          h1 {
            color: ${colors.white};
            font-weight: 500;
            font-size: ${typography.f16};
          }

          h2 {
            margin-bottom: 50px;
            color: ${colors.white};
            font-weight: 400;
            margin-top: 10px;
            font-size: ${typography.f12};
          }

          a {
            text-align: center;
            display: block;
            color: ${colors.white};
            font-size: ${typography.f12};
            text-decoration: underline;
            transition: .2s;
          }

          a:hover {
            text-decoration: none;
            opacity: .75;
          }
        `}</style>
      </Page>
    )
  }
}

export default Projects
