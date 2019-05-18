// Packages
import React from 'react'

// Components
import Navigation from '../components/navigation'

// Layouts
import App from '../layouts/app'

// Theme
import { colors } from '../theme'

const Home = () => {
  return (
    <App>
      <section>
        <div>
          <h1>Bu Kinoshita</h1>
          <h2>Software Engineer & UX Designer</h2>

          <Navigation />
        </div>
      </section>

      <style jsx>{`
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
    </App>
  )
}

export default Home
