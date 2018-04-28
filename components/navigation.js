'use strict'

// Packages
import React from 'react'
import Link from 'next/link'

// Theme
import { colors } from './../theme'

const Navigation = ({ home }) => {
  return (
    <nav>
      {home ? (
        <Link href="/" prefetch>
          <a>Home</a>
        </Link>
      ) : null}

      <Link href="/projects" prefetch>
        <a>Projects</a>
      </Link>

      <Link href="/essays" prefetch>
        <a>Essays</a>
      </Link>

      <Link href="/talks" prefetch>
        <a>Talks</a>
      </Link>

      <Link href="/work" prefetch>
        <a>Work</a>
      </Link>

      <style jsx>{`
        nav {
          text-align: center;
          width: 100%;
        }

        a {
          display: inline-block;
          color: ${colors.white};
          margin: 15px;
          padding-bottom: 4px;
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
          background-color: ${colors.white};
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

export default Navigation
