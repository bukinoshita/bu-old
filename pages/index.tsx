import React from 'react'

import { Page } from 'layouts/page'

import { Navigation } from 'components/navigation'

import { space, Weight } from 'ui/theme'

const Home = () => {
  return (
    <Page>
      <>
        <h1>Bu Kinoshita</h1>
        <h2>Software Engineer & UX Designer</h2>

        <Navigation />

        <style jsx>{`
          h1 {
            font-weight: ${Weight.Bold};
            letter-spacing: 2px;
            margin-bottom: ${space.spacing(3)};
          }

          h2 {
            font-weight: ${Weight.Regular};
            letter-spacing: 2px;
            opacity: 0.5;
            margin-bottom: ${space.spacing(5)};
          }
        `}</style>
      </>
    </Page>
  )
}

export default Home
