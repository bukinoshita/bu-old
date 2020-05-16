import React from 'react'

import { Colors, space, Weight } from 'ui/theme'

export const Project = ({ title, description, href }: any) => {
  return (
    <li>
      <a href={href}>
        <h3>
          <span>{title}</span>
        </h3>
        <p>{description}</p>
      </a>

      <style jsx>{`
        li {
          margin-bottom: ${space.spacing(5)};
        }

        li:hover span:before {
          visibility: visible;
          transform: scaleX(1);
        }

        a {
          display: grid;
          grid-template-columns: 150px auto;
        }

        h3 {
          font-size: 14px;
          font-weight: ${Weight.Bold};
        }

        p {
          font-size: 14px;
          margin-left: ${space.spacing(3)};
          font-weight: ${Weight.Regular};
          color: ${Colors.SilverChalice};
          line-height: 22px;
        }

        span {
          position: relative;
          transition: all 0.25s ease;
        }

        span:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -5px;
          left: 0;
          background-color: ${Colors.White};
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.25s ease;
        }
      `}</style>
    </li>
  )
}
