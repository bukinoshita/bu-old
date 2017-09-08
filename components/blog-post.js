'use strict'

import Link from 'next/link'

import { colors, typography, phone } from './../theme'
import posts from './../data/posts'

const BlogPost = ({ post }) => {
  const { id, title, description } = posts.filter(({ id }) => id === post)[0]
  const cover = `/static/posts/${id}/cover.png`

  return (
    <Link href={`/blog/${id}`}>
      <div className="post">
        <div className="post-info">
          <h4>
            {title}
          </h4>
          <p>
            {description}
          </p>
        </div>

        <span className="cover" style={{ backgroundImage: `url(${cover})` }} />

        <style jsx>{`
          .post {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #333;
            transition: all 0.2s ease;
            margin-top: 50px;
            margin-bottom: 50px;
            cursor: pointer;
          }

          .post:hover {
            border-color: ${colors.white};
          }

          .post-info {
            width: 100%;
            padding: 20px;
          }

          h4 {
            color: ${colors.white};
            font-size: ${typography.f16};
            font-weight: ${typography.bold};
            margin-bottom: 8px;
          }

          p {
            font-size: 13px;
            color: ${colors.white};
            line-height: 1.4rem;
          }

          .cover {
            width: 200px;
            height: 140px;
            background-size: cover;
            background-position: center center;
          }

          @media ${phone} {
            .post {
              flex-wrap: wrap;
            }

            .post-info {
              order: 1;
            }

            .cover {
              height: 180px;
              width: 100%;
              order: 0;
            }
          }
        `}</style>
      </div>
    </Link>
  )
}

export default BlogPost
