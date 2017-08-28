'use strict'

import { Component } from 'react'

import Page from './../layouts/page'
import Row from './../components/row'
import Back from './../components/back'
import Article from './../components/article'
import { colors, typography } from './../theme'
import posts from './../data/posts'

class Blog extends Component {
  render() {
    const articles = posts.map(post =>
      <Article
        key={post.id}
        id={post.id}
        title={post.title}
        date={post.date}
        tags={post.tags}
        description={post.description}
      />
    )
    return (
      <Page color="#000">
        <Back />

        <Row>
          <header>
            <h1>blog</h1>
          </header>

          <hr className="separator" />

          <section>
            {articles}
          </section>
        </Row>

        <style jsx>{`
          header {
            text-align: center;
          }

          h1 {
            color: ${colors.white};
            font-weight: 500;
            font-size: ${typography.f16};
            margin-bottom: 50px;
          }

          p {
            color: ${colors.subtitle};
            font-weight: ${typography.regular};
            font-size: ${typography.f14};
            line-height: 24px;
            text-align: left;
            margin-bottom: 10px;
          }

          strong,
          a {
            color: ${colors.white};
            font-weight: ${typography.bold};
          }

          a {
            text-decoration: underline;
          }

          .separator {
            width: 50px;
            height: 1px;
            display: block;
            border: none;
            background-color: ${colors.subtitle};
            margin: 50px auto;
          }

          section {
            margin-top: 50px;
          }
        `}</style>
      </Page>
    )
  }
}

export default Blog
