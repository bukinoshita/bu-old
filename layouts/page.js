'use strict'

import Head from 'next/head'
import Router from 'next/router'
import Progress from 'nprogress'
import spacetime from 'spacetime'

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

export default ({ children, color, isInverted = true }) => {
  const now = spacetime().hour()
  const isLightMode = now >= 17 || now <= 6 ? null : 'light-mode'
  const lightMode = isInverted ? isLightMode : null

  return (
    <main
      style={{ backgroundColor: color, minHeight: '100vh' }}
      onDoubleClick={viewSource}
      className={lightMode}
    >
      <Head>
        <title>
          {pkg.name} — {pkg.description}
        </title>

        <meta name="theme-color" content={colors.black} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pkg.description} />
        <meta
          name="keywords"
          content="front, programming, design, ux, user, experience, javascript, js, node, nodejs"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bukinoshita" />
        <meta name="twitter:creator" content="@bukinoshita" />
        <meta name="twitter:title" content={pkg.name} />
        <meta name="twitter:description" content={pkg.description} />
        <meta
          property="twitter:image:src"
          content={`https://bukinoshita.io/static/cover.png`}
        />

        <meta property="og:url" content="https://bukinoshita.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="bukinoshita" />
        <meta property="og:image" content="static/cover.png" />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:site_name" content="bukinoshita" />

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
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }

          main {
            background-color: ${colors.black};
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

          .light-mode,
          .light-mode img,
          .light-mode .cover {
            filter: invert(100%);
          }

          svg {
            vertical-align: middle;
          }
        `}
      </style>
    </main>
  )
}
