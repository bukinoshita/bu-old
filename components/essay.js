'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Theme
import { colors } from './../theme'

const Essay = ({ essays }) => {
  return (
    <ul>
      {essays.map(({ title, subtitle, slug, createdAt }) => {
        return (
          <li key={title}>
            <a href={`https://medium.com/@bukinoshita/${slug}`}>
              <article>
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </article>
            </a>
          </li>
        )
      })}

      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        li {
          flex-basis: 100%;
          margin-bottom: 30px;
          padding: 30px;
          width: 100%;
          transition: all 0.25s ease;
        }

        li:hover {
          background-color: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
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

Essay.propTypes = {
  essays: PropTypes.array
}

export default Essay
