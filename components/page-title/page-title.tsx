import React from 'react'

import { space, Weight } from 'ui/theme'

export const PageTitle = ({ title, description }: any) => {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>

      <style jsx>{`
        h1 {
          font-weight: ${Weight.Bold};
          letter-spacing: 2px;
          margin-bottom: ${space.spacing(3)};
        }

        h2 {
          font-weight: ${Weight.Regular};
          letter-spacing: 2px;
          opacity: 0.5;
          margin-bottom: ${space.spacing(5)};
        }
      `}</style>
    </header>
  )
}
