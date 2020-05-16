import React, { ReactElement } from 'react'
import Head from 'next/head'

import pkg from '../../package.json'

import { Colors, space } from 'ui/theme'
import { Row } from 'ui/row'

import { Footer } from 'components/footer'
import { Header } from 'components/header'

if ('document' in global) {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })

  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: https://github.com/${pkg.repository}`,
    `Have a great day! 🎉`
  ]

  for (const message of info) {
    console.log(message)
  }
}

export const Page = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>bu kinoshita</title>

        <meta name="theme-color" content={Colors.Woodsmoke} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={pkg.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="bu kinoshita" />
        <meta
          property="twitter:image"
          content="https://bukinoshita.io/static/cover.png"
        />

        <meta property="og:url" content="https://bukinoshita.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="bu kinoshita" />
        <meta property="og:image" content="static/cover.png" />

        <link rel="apple-touch-icon" href="/static/icon.png" />
        <link rel="icon" href="/static/icon.png" type="image/png" />
      </Head>

      <Header />

      <main>
        <Row>{children}</Row>
      </main>

      <Footer />

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

          body {
            background-color: ${Colors.Woodsmoke};
            text-transform: lowercase;
            font-size: 13px;
            color: ${Colors.White};
          }

          a {
            text-decoration: none;
            color: ${Colors.White};
          }

          li {
            list-style: none;
          }

          svg {
            vertical-align: middle;
          }
        `}
      </style>

      <style jsx>{`
        main {
          display: flex;
          align-items: center;
          min-height: calc(var(--vh, 1vh) * 100 - 256px);
          margin-top: ${space.spacing(14)};
        }
      `}</style>
    </>
  )
}
