import React from 'react'

import { Project } from './'

import { space } from 'ui/theme'

import projects from 'utils/projects.json'

export const Projects = () => {
  return (
    <ul>
      {projects.map(({ title, description }: any) => (
        <Project
          description={description}
          href={`https://github.com/bukinoshita/${title}`}
          key={title}
          title={title}
        />
      ))}

      <style jsx={true}>{`
        ul {
          margin-top: ${space.spacing(15)};
        }
      `}</style>
    </ul>
  )
}
