'use strict'

import { colors, typography } from './../theme'

const Li = ({ children }) =>
  <li>
    {children}

    <style jsx>{`
      li {
        color: ${colors.subtitle};
        font-weight: ${typography.regular};
        font-size: ${typography.f14};
        line-height: 24px;
        margin-bottom: 10px;
        list-style-type: disc;
      }
    `}</style>
  </li>

export default Li
