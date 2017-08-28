'use strict'

import { typography } from './../theme'

const Bold = ({ children }) =>
  <strong>
    {children}

    <style jsx>{`
      strong {
        font-weight: ${typography.extrabold};
      }
    `}</style>
  </strong>

export default Bold
