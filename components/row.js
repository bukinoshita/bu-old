'use strict';

import { phone } from './../theme';

const Row = ({ children }) => {
  return (
    <div>
      {children}

      <style jsx>{`
        div {
          padding: 100px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        @media ${phone} {
          div {
            padding: 35px;
          }
        }
      `}</style>
    </div>
  );
};

export default Row;
