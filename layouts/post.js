'use strict'

import Head from 'next/head'

import Page from './page'
import Row from './../components/row'
import Back from './../components/back'
import Separator from './../components/separator'
import Medium from './../components/medium'
import Pt from './../components/pt'
import { colors, typography } from './../theme'

const Post = ({
  children,
  post: { title, description, id, medium, translation },
  url = ''
}) => {
  const cover = `/static/posts/${id}/cover.png`
  const isPt = url.includes('/pt/')
  const md = medium ? <Medium href={medium} /> : null
  const pt = translation ? <Pt id={id} isPt={isPt} /> : null
  let info = null

  if (md || pt) {
    info = (
      <div>
        {md}
        {pt}

        <style jsx>{`
          div {
            display: flex;
            justify-content: space-between;
            padding: 30px 0 0;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    )
  }

  return (
    <Page>
      <Head>
        <title>
          bukinoshita - {title}
        </title>
        <meta name="description" content={description} />
      </Head>

      <Back href="/blog" />

      <Row>
        <img src={cover} alt={title} />

        <h1>
          {title}
        </h1>

        <h2>
          {description}
        </h2>

        {info}

        <Separator />

        {children}
      </Row>

      <style jsx>{`
        img {
          max-width: 100%;
          border-radius: 3px;
          margin-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
          display: block;
          max-height: 400px;
        }

        h1 {
          color: ${colors.white};
          font-size: ${typography.f30};
        }

        h2 {
          color: ${colors.subtitle};
          font-weight: ${typography.semibold};
          font-size: ${typography.f18};
          line-height: 1.7rem;
          margin-top: 10px;
          margin-bottom: 30px;
        }
      `}</style>
    </Page>
  )
}

export default Post
