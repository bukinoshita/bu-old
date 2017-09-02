'use strict'

import { colors, typography } from './../theme'

const Highlight = ({ children }) =>
  <label>
    `{children}`
    <style jsx>{`
      label {
        background-color: ${colors.white}
        color: ${colors.black};
        line-height: 1.5rem;
        font-weight: ${typography.regular};
        font-size: ${typography.f12};
        padding: 1px 3px;
        border-radius: 1px;
        margin-left: 4px;
        margin-right: 2px;
        white-space: nowrap;
      }
    `}</style>
  </label>

export default Highlight
