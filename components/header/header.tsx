import React from 'react'

import { space } from 'ui/theme'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a href="/">
          <img src="static/logo.svg" width="40px" alt="bu kinoshita" />
        </a>
      </Link>

      <style jsx>{`
        header {
          height: 100px;
          display: flex;
          align-items: center;
          padding-left: ${space.spacing(8)};
          padding-right: ${space.spacing(8)};
        }
      `}</style>
    </header>
  )
}
