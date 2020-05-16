import React from 'react'
import { Colors, space } from 'ui/theme'

export const Footer = () => (
  <footer>
    <span>© 2020</span>

    <style jsx>{`
      footer {
        height: 100px;
        display: flex;
        align-items: center;
        padding-left: ${space.spacing(8)};
        padding-right: ${space.spacing(8)};
      }

      span {
        color: ${Colors.SilverChalice};
      }
    `}</style>
  </footer>
)
