'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Theme
import { colors } from './../theme'

const Post = ({ post }) => {
  const { title, subtitle, url } = post

  return (
    <li>
      <a href={url}>
        <article>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </article>
      </a>

      <style jsx>{`
        li {
          flex-basis: 50%;
          margin-bottom: 30px;
          padding: 30px;
          width: 100%;
          transition: all 0.25s ease;
        }

        li:hover {
          background-color: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
        }

        h3 {
          color: ${colors.white};
          font-size: 20px;
          line-height: 30px;
        }

        p {
          color: ${colors.white};
          margin-top: 15px;
          line-height: 36px;
          opacity: 0.75;
          font-size: 16px;
        }
      `}</style>
    </li>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post
