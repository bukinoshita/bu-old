import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import pkg from '../package.json'
import * as Fathom from 'fathom-client'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE || '', {
      includedDomains: ['bukinoshita.com'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{`${pkg.author} — ${pkg.description}`}</title>

        <meta
          name="description"
          content={`${pkg.author} — ${pkg.description}`}
        />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="apple-touch-icon" href="static/favicon.png" />
        <meta name="viewport" content="width=device-width" />
        <meta
          property="og:title"
          content={`${pkg.author} — ${pkg.description}`}
        />
        <meta
          property="og:description"
          content={`${pkg.author} — ${pkg.description}`}
        />
        <meta
          name="twitter:image"
          content="https://bukinoshita.com/static/cover.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:title"
          content={`${pkg.author} — ${pkg.description}`}
        />
        <meta
          property="og:description"
          content={`${pkg.author} — ${pkg.description}`}
        />
        <meta property="og:image" content="static/cover.png" />
        <meta property="og:url" content="https://bukinoshita.com" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="px-6 max-w-6xl mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
