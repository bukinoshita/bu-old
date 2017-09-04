'use strict'

import Link from 'next/link'

import { colors, typography } from './../theme'

const Pt = ({ id, isPt }) => {
  const language = isPt ? 'english' : 'portuguese'
  const href = isPt ? `/blog/${id}` : `/blog/pt/${id}`
  const pt = isPt ? 'en' : 'pt'

  return (
    <Link href={href} prefetch>
      <div className="post-info__item">
        <div className="block-pt">
          {pt}
        </div>

        <a>
          Read this post in {language}.
        </a>

        <style jsx>{`
          .post-info__item {
            width: 50%;
            display: flex;
            align-items: center;
            opacity: .5;
            cursor: pointer;
            transition: all 0.2s ease;
            padding-right: 30px;
          }

          .post-info__item:hover {
            opacity: 1;
          }

          .post-info__item:hover a {
            text-decoration: underline;
          }

          .block-pt {
            width: 30px;
            height: 30px;
            min-width: 30px;
            background-color: ${colors.white};
            display: block;
            text-align: center;
            line-height: 30px;
            border-radius: 2px;
            text-transform: uppercase;
            font-size: ${typography.f12};
            font-weight: ${typography.bold};
          }

          a {
            color: ${colors.white};
            font-size: ${typography.f12};
            margin-left: 10px;
            line-height: 1rem;
            transition: all 0.2s ease;
          }
        `}</style>
      </div>
    </Link>
  )
}

export default Pt
