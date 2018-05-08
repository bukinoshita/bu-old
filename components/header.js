'use strict'

// Packages
import React from 'react'

// Components
import Navigation from './navigation'

// Theme
import { colors } from './../theme'

const Header = () => {
  return (
    <header>
      <Navigation home />

      <style jsx>{`
        header {
          height: 80px;
          display: flex;
          align-items: center;
          text-align: center;
          position: sticky;
          top: 0;
          background-color: ${colors.black};
          z-index: 1;
        }
      `}</style>
    </header>
  )
}

export default Header
