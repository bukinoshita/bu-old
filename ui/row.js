'use strict'

// Packages
import React from 'react'

const Row = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          max-width: 980px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  )
}

export default Row
