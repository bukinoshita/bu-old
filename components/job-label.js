'use strict'

import { colors, typography } from './../theme'

const JobLabel = ({ title }) => {
  return (
    <span>
      <div>
        {title}
      </div>

      <style jsx>{`
        div {
          color: ${colors.black};
          padding: 1px 5px;
          vertical-align: middle;
          border-radius: 1px;
          font-weight: ${typography.bold};
          margin-left: 10px;
          line-height: 1.35;
          display: inline-block;
          font-size: ${typography.f10};
          text-transform: lowercase;
          background-color: ${colors.white};
        }
      `}</style>
    </span>
  )
}

export default JobLabel
