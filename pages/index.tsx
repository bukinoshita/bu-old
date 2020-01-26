import React from 'react'

import { Page } from '../layouts/page'
import { Navigation } from '../components/navigation'

import { colors } from '../ui/theme'

const Home = () => {
  return (
    <Page>
      <>
        <section>
          <div>
            <h1>Bu Kinoshita</h1>
            <h2>Software Engineer & UX Designer</h2>

            <Navigation />
          </div>
        </section>

        <style jsx={true}>{`
          section {
            display: flex;
            align-items: center;
            min-height: calc(100vh);
            text-align: center;
          }

          div {
            width: 100%;
          }

          h1 {
            color: ${colors.white};
            font-weight: 700;
            letter-spacing: 2px;
            text-align: center;
            margin-bottom: 10px;
          }

          h2 {
            color: ${colors.white};
            font-weight: 400;
            letter-spacing: 2px;
            text-align: center;
            opacity: 0.5;
            margin-bottom: 20px;
          }
        `}</style>
      </>
    </Page>
  )
}

export default Home
