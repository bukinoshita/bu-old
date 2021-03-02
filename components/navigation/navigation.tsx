import React from 'react'

import { Colors, space } from 'ui/theme'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://github.com/bukinoshita">Github</a>
        </li>

        <li>
          <a href="https://twitter.com/bukinoshita">Twitter</a>
        </li>
      </ul>

      <style jsx>{`
        nav {
          width: 100%;
        }

        ul {
          margin-top: ${space.spacing(10)};
        }

        li {
          display: inline-block;
        }

        a {
          display: inline-block;
          margin-right: ${space.spacing(4)};
          padding-bottom: ${space.spacing(1)};
          letter-spacing: 2px;
          position: relative;
          opacity: 0.5;
          transition: all 0.25s ease;
        }

        a:before {
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

        a:hover {
          opacity: 1;
        }

        a:hover:before {
          visibility: visible;
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  )
}
