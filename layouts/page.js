'use strict'

// Packages
import React from 'react'

// Layouts
import App from './../layouts/app'

// Components
import Footer from './../components/footer'

// UI
import Row from './../ui/row'

// Theme
import { colors } from './../theme'

const Page = ({ children, title }) => {
  return (
    <App>
      <section className="hero">
        <Row>
          <h1>{title}</h1>
        </Row>
      </section>

      <section className="main">{children}</section>

      <Footer />

      <style jsx>{`
        .hero {
          height: 300px;
          line-height: 300px;
        }

        h1 {
          color: ${colors.white};
          font-weight: 700;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 10px;
        }

        .main {
          min-height: calc(100vh - 480px);
        }
      `}</style>
    </App>
  )
}

export default Page
