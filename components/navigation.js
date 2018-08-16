'use strict'

// Packages
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// Theme
import { colors } from './../theme'

const Navigation = ({ home }) => {
  return (
    <nav>
      {home ? (
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>
      ) : null}

      <a href="https://github.com/bukinoshita">Github</a>

      <a href="https://twitter.com/bukinoshita">Twitter</a>

      <a href="https://medium.com/@bukinoshita/latest">Medium</a>

      <style jsx>{`
        nav {
          text-align: center;
          width: 100%;
        }

        a {
          display: inline-block;
          color: ${colors.white};
          margin: 15px;
          padding-bottom: 4px;
          letter-spacing: 2px;
          position: relative;
          opacity: 0.5;
          transition: all 0.25s ease;
        }

        a:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -5px;
          left: 0;
          background-color: ${colors.white};
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.25s ease;
        }

        a:hover {
          opacity: 1;
        }

        a:hover:before {
          visibility: visible;
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  )
}

Navigation.defaultProps = {
  home: false
}

Navigation.propTypes = {
  home: PropTypes.bool
}

export default Navigation
