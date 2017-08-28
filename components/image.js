'use strict'

const Image = ({ src, alt }) =>
  <div>
    <img src={src} alt={alt} />

    <style jsx>{`
      img {
        display: block;
        width: 100%;
        border-radius: 3px;
        margin-top: 50px;
        margin-bottom: 50px;
      }
    `}</style>
  </div>

export default Image
