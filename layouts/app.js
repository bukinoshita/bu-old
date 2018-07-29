'use strict'

// Packages
import React from 'react'
import Progress from 'nprogress'
import Router from 'next/router'
import PropTypes from 'prop-types'

// Components
import Header from './../components/header'

// Theme
import { colors } from './../theme'

let progress
const stopProgress = () => {
  clearTimeout(progress)
  Progress.done()
}

Router.onRouteChangeStart = () => {
  progress = setTimeout(Progress.start, 200)
}

Router.onRouteChangeComplete = stopProgress
Router.onRouteChangeError = stopProgress

const App = ({ children, hasHeader }) => {
  return (
    <main>
      {hasHeader ? <Header /> : null}

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

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: ${colors.white};
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${colors.white}, 0 2px 2px ${colors.white};
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
          }

          svg {
            vertical-align: middle;
          }
        `}
      </style>
    </main>
  )
}

App.defaultProps = {
  hasHeader: true
}

App.propTypes = {
  children: PropTypes.any,
  hasHeader: PropTypes.bool
}

export default App
