'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

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

Row.propTypes = {
  children: PropTypes.any
}

export default Row
