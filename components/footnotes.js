'use strict';

import Link from 'next/link';

import { colors, typography, phone } from './../theme';

const Footnotes = ({ footnotes }) => {
  const footnote1 = footnotes[0];
  const footnote2 = footnotes[1];

  return (
    <ul>
      <li>
        <Link href={footnote1.href}>
          <div>
            <h4>
              {footnote1.title}
              <span>(not ready yet)</span>
            </h4>
            <p>
              {footnote1.description}
            </p>

            <span>
              Learn more
              <span className="arrow">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </span>
            </span>
          </div>
        </Link>
      </li>

      <li>
        <Link href={footnote2.href}>
          <div>
            <h4>
              {footnote2.title}
              <span>(not ready yet)</span>
            </h4>
            <p>
              {footnote2.description}
            </p>

            <span>
              Learn more
              <span className="arrow">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </span>
            </span>
          </div>
        </Link>
      </li>

      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        li {
          width: 40%;
          max-width: 40%;
        }

        div {
          cursor: pointer;
        }

        div:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        h4 {
          color: ${colors.white};
          font-size: ${typography.f14};
          font-weight: ${typography.bold};
        }

        h4 span {
          display: inline-block;
          margin-left: 8px;
          color: ${colors.subtitle};
        }

        p {
          color: #ababab;
          font-size: 12px;
          font-weight: ${typography.semibold};
          margin-top: 10px;
          line-height: 20px;
        }

        span {
          color: ${colors.white};
          margin-top: 10px;
          font-size: ${typography.f10};
          font-weight: ${typography.bold};
          display: block;
          text-transform: uppercase;
        }

        .arrow {
          display: inline-block;
          vertical-align: sub;
          margin-left: 5px;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.2s ease;
        }

        @media ${phone} {
          li {
            width: 100%;
            max-width: 100%;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </ul>
  );
};

export default Footnotes;
