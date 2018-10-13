'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Theme
import { colors } from '../theme'

const App = ({ children }) => {
  return (
    <main>
      {children}

      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            font-family: 'Avenir Next', -apple-system, system-ui,
              BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
              sans-serif;
          }

          body {
            background-color: ${colors.black};
            text-transform: lowercase;
            font-size: 13px;
          }

          h1 {
            font-size: 20px;
          }

          h2 {
            font-size: 18px;
          }

          h3 {
            font-size: 16px;
          }

          h4 {
            font-size: 14px;
          }

          a {
            text-decoration: none;
          }

          li {
            list-style: none;
          }

          svg {
            vertical-align: middle;
          }
        `}
      </style>
    </main>
  )
}

App.propTypes = {
  children: PropTypes.any
}

export default App
