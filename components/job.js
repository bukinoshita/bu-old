'use strict'

import Remote from './remote'
import { colors } from './../theme'

const Job = ({ data }) => {
  const { role, company, from, to, location, remote } = data
  const isRemote = remote ? <Remote /> : null

  return (
    <li>
      <h3>
        {role}

        {isRemote}
      </h3>
      <h4>
        {company}
      </h4>

      <div>
        <p>
          <span className="from">
            {from}
          </span>

          <span className="separator">•</span>

          <span className="to">
            {to}
          </span>
        </p>

        <p>
          {location}
        </p>
      </div>

      <style jsx>{`
        li {
          border: 1px solid #333;
          padding: 20px;
          margin-bottom: 30px;
          transition: all 0.2s ease;
        }

        p {
          color: ${colors.white};
          font-size: 10px;
          text-transform: uppercase;
        }

        div {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .separator {
          margin-left: 5px;
          margin-right: 5px;
        }

        li:hover {
          border-color: ${colors.white};
        }

        h3 {
          color: ${colors.white};
          font-size: 14px;
        }

        h4 {
          color: ${colors.subtitle};
          font-size: 12px;
          margin-top: 5px;
        }
      `}</style>
    </li>
  )
}

export default Job
