'use strict'

// Packages
import React from 'react'

// UI
import Row from './../ui/row'

// Theme
import { colors } from './../theme'

const Footer = () => {
  return (
    <footer>
      <Row>
        <p>Made with love</p>
      </Row>

      <style jsx>{`
        footer {
          height: 100px;
          line-height: 100px;
          text-align: center;
        }

        p {
          color: ${colors.white};
        }
      `}</style>
    </footer>
  )
}

export default Footer
