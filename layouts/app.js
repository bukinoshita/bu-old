// Packages
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// Root
import pkg from '../package'

// Theme
import { colors } from '../theme'

if (global.document) {
  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: https://github.com/${pkg.repository}`,
    `Have a great day! 🎉`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const App = ({ children }) => {
  return (
    <main>
      <Head>
        <title>bu kinoshita</title>

        <meta name="theme-color" content={colors.black} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pkg.description} />
        <meta name="keywords" content={pkg.keywords} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="bu kinoshita" />
        <meta property="twitter:image" content="https://bukinoshita.io/static/cover.png" />

        <meta property="og:url" content="https://bukinoshita.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="bu kinoshita" />
        <meta property="og:image" content="static/cover.png" />

        <link rel="apple-touch-icon" href="/static/icon.png" />
        <link rel="icon" href="/static/icon.png" type="image/png" />
      </Head>

      {children}

      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
              'Helvetica Neue', Arial, sans-serif;
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
