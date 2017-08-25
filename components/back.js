'use strict';

import Link from 'next/link';

const Back = ({ inversed = false, href = '/' }) => {
  return (
    <div className={inversed ? 'inversed' : null}>
      <Link href={href}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="20" y1="12" x2="4" y2="12" />
          <polyline points="10 18 4 12 10 6" />
        </svg>
      </Link>

      <style jsx>{`
        div {
          height: 30px;
          width: 30px;
          line-height: 36px;
          text-align: center;
          display: block;
          background-color: #fff;
          border-radius: 1px;
          position: fixed;
          top: 25px;
          left: 25px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        div:hover {
          transform: scale(1.1);
        }

        .inversed {
          background-color: #000;
        }

        .inversed svg,
        .inversed line,
        .inversed polyline {
          fill: #fff;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Back;
