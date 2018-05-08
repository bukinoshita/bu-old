'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Theme
import { colors } from './../theme'

const Work = ({ work }) => {
  return (
    <ul>
      {work.map(
        ({ role, company, location, remote, description, from, to }) => {
          return (
            <li key={company}>
              <article>
                <h3>
                  {company} {remote ? <label>remote</label> : null}
                </h3>
                <p>
                  {role} — {location}
                </p>

                <p>{description}</p>

                <p>
                  {from} — {to}
                </p>
              </article>
            </li>
          )
        }
      )}

      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        li {
          flex-basis: 50%;
          margin-bottom: 30px;
          padding: 30px;
          width: 100%;
          transition: all 0.25s ease;
        }

        h3 {
          color: ${colors.white};
          font-size: 20px;
          line-height: 30px;
        }

        p {
          color: ${colors.white};
          margin-top: 10px;
          line-height: 36px;
          opacity: 0.75;
          font-size: 16px;
        }

        label {
          color: ${colors.black};
          background-color: ${colors.white};
          font-size: 12px;
          padding: 2px 4px;
          vertical-align: middle;
          margin-left: 5px;
        }
      `}</style>
    </ul>
  )
}

Work.propTypes = {
  work: PropTypes.object
}

export default Work
