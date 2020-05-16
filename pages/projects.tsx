import React from 'react'

import { Page } from 'layouts/page'

import { PageTitle } from 'components/page-title'
import { Projects } from 'components/projects'

import { space } from 'ui/theme'

const ProjectsPage = () => {
  return (
    <Page>
      <>
        <PageTitle
          title="Projects"
          description="a couple project that i've been working on"
        />
        <Projects />
        <a href="https://github.com/bukinoshita">Check more projects...</a>

        <style jsx>{`
          a {
            font-size: 13px;
            margin-top: ${space.spacing(10)};
            display: inline-block;
            font-style: italic;
          }
        `}</style>
      </>
    </Page>
  )
}

export default ProjectsPage
