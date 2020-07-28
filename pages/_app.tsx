import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

const App = ({ Component, pageProps }: any) => {
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

  return <Component {...pageProps} />
}

export default App
