'use strict'

import { colors, typography } from './../theme'

const Image = ({ src, alt, label }) =>
  <div>
    <img src={src} alt={alt} />
    <label>
      {label}
    </label>

    <style jsx>{`
      div {
        margin-top: 50px;
        margin-bottom: 50px;
      }

      img {
        display: block;
        width: 100%;
        border-radius: 3px;
      }

      label {
        color: ${colors.subtitle};
        text-align: center;
        font-size: ${typography.f12};
        margin-top: 10px;
        display: block;
      }
    `}</style>
  </div>

export default Image
