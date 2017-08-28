'use strict'

import Page from './page'
import Row from './../components/row'
import Back from './../components/back'
import Separator from './../components/separator'
import Medium from './../components/medium'
import Pt from './../components/pt'
import { colors, typography } from './../theme'

const Post = ({
  children,
  post: { title, description, id, medium, translation }
}) => {
  const cover = `/static/posts/${id}.png`
  const md = medium ? <Medium href={medium} /> : null
  const pt = translation ? <Pt id={id} /> : null

  return (
    <Page>
      <Back href="/blog" />

      <Row>
        <img src={cover} alt={title} />

        <h1>
          {title}
        </h1>

        <h2>
          {description}
        </h2>

        <div className="post-info">
          {md}
          {pt}
        </div>

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

        .post-info {
          display: flex;
          justify-content: space-between;
          padding: 30px 0 0;
          flex-wrap: wrap;
        }
      `}</style>
    </Page>
  )
}

export default Post
