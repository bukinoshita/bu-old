'use strict'

import Link from 'next/link'

import { colors, typography } from './../theme'

const Article = ({ id, title, description, date }) => {
  return (
    <Link href={`/blog/${id}`} prefetch>
      <article>
        <h2>
          {title}

          <label>
            {date}
          </label>
        </h2>
        <p>
          {description}
        </p>

        <span>
          Read more
          <span className="arrow">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
          </span>
        </span>

        <style jsx>{`
          article {
            cursor: pointer;
            margin-bottom: 70px;
          }

          article:hover .arrow {
            opacity: 1;
            transform: translateX(0);
          }

          article:hover p {
            color: #fff;
          }

          h2 {
            color: #fff;
            font-size: ${typography.f18};
            margin-bottom: 10px;
          }

          label {
            color: ${colors.subtitle};
            font-weight: ${typography.bold};
            text-transform: uppercase;
            margin-left: 10px;
            font-size: ${typography.f10};
            vertical-align: middle;
          }

          p {
            color: ${colors.subtitle};
            font-weight: ${typography.regular};
            font-size: ${typography.f14};
            line-height: 24px;
            text-align: left;
            margin-bottom: 10px;
            transition: all 0.2s ease;
          }

          span {
            color: ${colors.white};
            margin-top: 10px;
            font-size: ${typography.f10};
            font-weight: ${typography.bold};
            display: block;
            text-transform: uppercase;
          }

          .arrow {
            display: inline-block;
            vertical-align: initial;
            margin-left: 5px;
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.2s ease;
          }
        `}</style>
      </article>
    </Link>
  )
}

export default Article
