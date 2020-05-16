import React from 'react'

import { space } from 'ui/theme'

export const Row = ({ children, size }: any) => {
  return (
    <div className="row">
      {children}

      <style jsx>{`
        .row {
          padding-left: ${space.spacing(8)};
          padding-right: ${space.spacing(8)};
          margin-left: auto;
          margin-right: auto;
          max-width: ${size};
          width: 100%;
        }
      `}</style>
    </div>
  )
}

Row.defaultProps = {
  size: '600px'
}
