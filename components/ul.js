'use strict'

const Ul = ({ children }) =>
  <ul>
    {children}

    <style jsx>{`
      ul {
        margin-bottom: 30px;
      }
    `}</style>
  </ul>

export default Ul
