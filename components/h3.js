'use strict'

import { colors, typography } from './../theme'

const H3 = ({ children }) =>
  <h3>
    {children}

    <style jsx>{`
      h3 {
        font-size: ${typography.f16};
        color: ${colors.white};
        margin-bottom: 10px;
        font-weight: ${typography.bold};
        opacity: .75;
        line-height: 1.5rem;
      }
    `}</style>
  </h3>

export default H3
