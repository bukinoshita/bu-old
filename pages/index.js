'use strict'

// Packages
import React from 'react'

// Components
import Navigation from './../components/navigation'

// Layouts
import App from './../layouts/app'

// Components
import Footer from './../components/footer'

// Theme
import { colors } from './../theme'

const Home = () => {
  return (
    <App hasHeader={false}>
      <section>
        <div>
          <h1>Bu Kinoshita</h1>
          <h2>Front-end Engineer & UX Designer</h2>

          <Navigation />
        </div>
      </section>

      <Footer />

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          min-height: calc(100vh - 100px);
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
    </App>
  )
}

export default Home
