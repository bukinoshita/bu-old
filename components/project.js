'use strict'

import ProjectLabel from './job-label'
import { colors } from './../theme'

const Project = ({ data }) => {
  const { name, description, stargazers_count, fork, html_url, language } = data
  const isFork = fork ? <ProjectLabel title="fork" /> : null

  return (
    <li>
      <a href={html_url}>
        <h3>
          {name}

          {isFork}
        </h3>

        <h4>
          {description}
        </h4>

        <div>
          <p>
            <span className="from">
              {language}
            </span>
          </p>

          <p>
            {stargazers_count} stars
          </p>
        </div>
      </a>

      <style jsx>{`
        li {
          border: 1px solid #333;
          padding: 20px;
          margin-bottom: 30px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        p {
          color: ${colors.white};
          font-size: 10px;
          text-transform: uppercase;
        }

        div {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        li:hover {
          border-color: ${colors.white};
        }

        h3 {
          color: ${colors.white};
          font-size: 14px;
        }

        h4 {
          color: ${colors.subtitle};
          font-size: 12px;
          margin-top: 5px;
        }
      `}</style>
    </li>
  )
}

export default Project
