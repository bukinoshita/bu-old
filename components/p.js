'use strict'

import { colors, typography } from './../theme'

const P = ({ children }) =>
  <p>
    {children}

    <style jsx>{`
      p {
        color: ${colors.subtitle};
        font-weight: ${typography.regular};
        font-size: ${typography.f14};
        line-height: 24px;
        margin-bottom: 30px;
      }
    `}</style>
  </p>

export default P
