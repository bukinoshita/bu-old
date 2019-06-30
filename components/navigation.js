// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Theme
import { colors } from '../theme'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://github.com/bukinoshita">Github</a>
        </li>

        <li>
          <a href="https://twitter.com/bukinoshita">Twitter</a>
        </li>

        <li>
          <a href="https://medium.com/@bukinoshita">Medium</a>
        </li>
      </ul>

      <style jsx>{`
        nav {
          text-align: center;
          width: 100%;
        }

        li {
          display: inline-block;
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
