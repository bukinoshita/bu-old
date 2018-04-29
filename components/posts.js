'use strict'

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Post from './post'

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => {
        return <Post key={post} post={post} />
      })}

      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}</style>
    </ul>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}

export default Posts
