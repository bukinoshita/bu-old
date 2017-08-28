'use strict'

import Head from 'next/head'
import Router from 'next/router'
import Progress from 'nprogress'

import pkg from '../package'
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

if (global.document) {
  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: ${pkg.repository.url}`,
    `Have a great day! 🎉`
  ]

  for (const message of info) {
    console.log(message)
  }
}

const viewSource = event => {
  const allowed = ['P', 'H1', 'SPAN']

  if (allowed.includes(event.target.tagName)) {
    return
  }

  document.location = pkg.repository.url
  event.preventDefault()
}

export default ({ children, color = '#000' }) => {
  return (
    <main
      style={{ backgroundColor: color, minHeight: '100vh' }}
      onDoubleClick={viewSource}
    >
      <Head>
        <meta
          property="twitter:image:src"
          content={`https://bukinoshita.io/static/cover.png`}
        />
        <meta
          property="og:image"
          content={`https://bukinoshita.io/static/cover.png`}
        />

        <title>bukinoshita</title>

        <link rel="apple-touch-icon" href="/static/icon.png" />
        <link rel="icon" href="/static/icon.png" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="description" content={pkg.description} />
        <meta name="twitter:site" content="@bukinoshita" />
      </Head>

      {children}

      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
            box-shadow: 0 0 10px ${colors.white}, 0 2px 2px ${colors.black};
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
