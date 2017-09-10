'use strict'

import { colors, typography } from './../theme'

const Highlight = ({ children }) =>
  <label>
    `{children}`
    <style jsx>{`
      label {
        color: ${colors.white};
        line-height: 1.5rem;
        font-weight: ${typography.semibold};
        font-size: ${typography.f12};
        padding: 1px 3px;
        border-radius: 1px;
        white-space: nowrap;
      }
    `}</style>
  </label>

export default Highlight
