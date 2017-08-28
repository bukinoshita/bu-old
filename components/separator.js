'use strict'

import { colors } from './../theme'

const Separator = () =>
  <div>
    <hr />

    <style jsx>{`
      hr {
        width: 50px;
        height: 1px;
        display: block;
        border: none;
        background-color: ${colors.subtitle};
        margin: 50px auto;
      }
    `}</style>
  </div>

export default Separator
