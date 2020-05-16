import React from 'react'

import { Project } from '.'

import { space } from 'ui/theme'

import projects from 'utils/projects.json'

export const Projects = () => {
  return (
    <ul>
      {projects.map(({ title, description }: any) => (
        <Project
          key={title}
          description={description}
          href={`https://github.com/bukinoshita/${title}`}
          title={title}
        />
      ))}

      <style jsx>{`
        ul {
          margin-top: ${space.spacing(15)};
        }
      `}</style>
    </ul>
  )
}
