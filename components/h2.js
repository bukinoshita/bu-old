'use strict'

import { colors, typography } from './../theme'

const H2 = ({ children }) =>
  <h2>
    {children}

    <style jsx>{`
      h2 {
        font-size: ${typography.f22};
        color: ${colors.white};
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
    `}</style>
  </h2>

export default H2
