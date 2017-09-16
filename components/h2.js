'use strict'

import toId from 'to-id'

import { colors, typography } from './../theme'

const H2 = ({ children }) =>
  <h2>
    <a href={`#${toId(children)}`} id={`${toId(children)}`}>
      {children}
    </a>

    <style jsx>{`
      h2 {
        font-size: ${typography.f22};
        margin-top: 20px;
        margin-bottom: 25px;
        position: relative;
        font-weight: ${typography.bold};
        opacity: .9;
        line-height: 2rem;
      }

      h2:before {
        content: '#';
        color: ${colors.subtitle};
        position: absolute;
        left: -20px;
      }

      a {
        color: ${colors.white};
      }
    `}</style>
  </h2>

export default H2
