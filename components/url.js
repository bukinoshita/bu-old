'use strict'

import { colors, typography } from './../theme'

const Url = ({ children, href }) =>
  <a href={href}>
    {children}

    <style jsx>{`
      a {
        color: ${colors.white};
        font-weight: ${typography.semibold};
        font-size: ${typography.f14};
        line-height: 18px;
        border-bottom: 1px dotted ${colors.white};
        display: inline-block;
        transition: .15s ease-in-out;
      }

      a:hover {
        border-bottom-style: solid;
        transform: translateY(-2px);
      }
    `}</style>
  </a>

export default Url
