'use strict'

import { colors, typography } from './../theme'

const Quote = ({ children }) =>
  <quote>
    {children}

    <style jsx>{`
      quote {
        font-size: ${typography.f20};
        line-height: 32px;
        padding: 25px;
        display: block
        font-style: italic;
        color: ${colors.subtitle};
      }
    `}</style>
  </quote>

export default Quote
