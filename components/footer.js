'use strict'

// Packages
import React from 'react'

// UI
import Row from './../ui/row'

// Theme
import { colors } from './../theme'

const Footer = () => {
  return (
    <footer>
      <Row>
        <ul>
          <li>
            <a href="https://github.com/bukinoshita">Github</a>
          </li>

          <li>
            <a href="https://twitter.com/bukinoshita">Twitter</a>
          </li>

          <li>
            <a href="https://medium.com/bukinoshita">Medium</a>
          </li>
        </ul>
      </Row>

      <style jsx>{`
        footer {
          height: 100px;
          line-height: 100px;
          text-align: center;
        }

        li {
          display: inline-block;
          margin-right: 6px;
          margin-left: 6px;
        }

        a {
          color: ${colors.white};
        }
      `}</style>
    </footer>
  )
}

export default Footer
