'use strict';

import Head from 'next/head';

import pkg from '../package';

if (global.document) {
  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: ${pkg.repository.url}`,
    `Have a great day! 🎉`
  ];

  for (const message of info) {
    console.log(message);
  }
}

const viewSource = event => {
  const allowed = ['P', 'H1', 'SPAN'];

  if (allowed.includes(event.target.tagName)) {
    return;
  }

  document.location = pkg.repository.url;
  event.preventDefault();
};

export default ({ children }) =>
  <main onDoubleClick={viewSource}>
    <Head>
      <meta
        property="twitter:image:src"
        content={`https://bukinoshita.io/static/cover.png`}
      />
      <meta
        property="og:image"
        content={`https://bukinoshita.io/static/cover.png`}
      />

      <title>bukinoshita</title>

      <link rel="apple-touch-icon" href="/static/icon.png" />
      <link rel="icon" href="/static/icon.png" type="image/png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta name="description" content={pkg.description} />
      <meta name="twitter:site" content="@bukinoshita" />
    </Head>

    {children}

    <style jsx global>
      {`
        * {
          padding: 0;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
            Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        a {
          text-decoration: none;
        }

        li {
          list-style: none;
        }
      `}
    </style>
  </main>;
