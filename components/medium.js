'use strict'

import { colors, typography, phone } from './../theme'

const Medium = ({ href }) => {
  return (
    <a href={href}>
      <div className="post-info__item">
        <div className="block-pt">
          <svg width="16px" viewBox="0 0 25 19">
            <g id="medium" fillRule="nonzero" fill="#000000">
              <path
                d="M3.56,14.373 C3.56,14.928 3.533,15.06 3.242,15.403 L0.785,18.388 L0.785,18.784 L7.759,18.784 L7.759,18.388 L5.303,15.403 C5.012,15.06 4.959,14.901 4.959,14.373 L4.959,5.42 L11.086,18.784 L11.8,18.784 L17.056,5.42 L17.056,16.064 C17.056,16.354 17.056,16.406 16.871,16.592 L15.023,18.388 L15.023,18.784 L24.213,18.784 L24.213,18.388 L22.391,16.592 C22.207,16.406 22.181,16.354 22.181,16.064 L22.181,2.937 C22.181,2.646 22.207,2.593 22.391,2.409 L24.214,0.612 L24.214,0.216 L17.743,0.216 L13.121,11.758 L7.918,0.216 L1.128,0.216 L1.128,0.612 L3.268,3.252 C3.507,3.544 3.559,3.622 3.559,4.02 L3.559,14.373 L3.56,14.373 Z"
                id="Shape"
              />
            </g>
          </svg>
        </div>

        <span>This post was also published on Medium.</span>

        <style jsx>{`
          .post-info__item {
            width: 100%;
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

          .post-info__item:hover span {
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

          span {
            color: ${colors.white};
            font-size: ${typography.f12};
            margin-left: 10px;
            line-height: 1rem;
            transition: all 0.2s ease;
          }

          @media ${phone} {
            .post-info__item {
              margin-bottom: 30px;
            }
          }
        `}</style>
      </div>
    </a>
  )
}

export default Medium
