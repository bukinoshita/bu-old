'use strict'

import { Component } from 'react'
import { getDownloads } from 'npmstat'
import spacetime from 'spacetime'

import Page from './../../layouts/page'
import Row from './../../components/row'
import Job from './../../components/job'
import Back from './../../components/back'
import Footnotes from './../../components/footnotes'
import Separator from './../../components/separator'
import work from './../../data/work'
import { colors, typography } from './../../theme'

class WorkExperience extends Component {
  static async getInitialProps() {
    const s = new spacetime(new Date())
    const d = s.date()
    const m = s.month() + 1
    const y = s.year()

    const { downloads } = await getDownloads('react-cookies', {
      range: `2016-01-01:${y}-${m}-${d}`
    })

    return { downloads }
  }

  render() {
    const { downloads } = this.props
    const list = work.map(w => <Job key={w.company} data={w} />)
    const footnotes = [
      {
        title: 'Education',
        description: `Learn more about my education. Where and how I've been studying my whole life.`,
        href: '/'
      },
      {
        title: 'Blog',
        description: `Sometimes I like to write about code and share my knowledge to learn/teach other people.`,
        href: '/blog'
      }
    ]

    return (
      <Page>
        <Back />

        <Row>
          <header>
            <h1>work experience</h1>

            <h2>Currently</h2>
            <p>
              <strong>open sourcerer:</strong> Developing a bunch of nodejs
              modules. I currently have{' '}
              <a href="https://www.npmjs.com/~bukinoshita">
                100+ packages
              </a>{' '}
              published on npm and the most popular one is called{' '}
              <a href="https://github.com/bukinoshita/react-cookies">
                react-cookies
              </a>{' '}
              with <strong>{downloads || '21K+'} downloads</strong>.
            </p>

            <p>
              <strong>entrepreneur: </strong>Building{' '}
              <a href="https://hackdisrupt.now.sh">hackdisrupt</a> and{' '}
              <a href="https://getsecret.now.sh">secret</a> (#3 Product of the
              Day on{' '}
              <a href="https://www.producthunt.com/posts/secret-3">
                ProductHunt
              </a>).
            </p>

            <p className="italic">
              * Also built Embrace Open Source (9K+ users), Ritoplz (4K+ users)
              and Tweetstockr (5K+ users).
            </p>
          </header>

          <ul>
            {list}
          </ul>

          <Separator />

          <Footnotes footnotes={footnotes} />
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

          h2 {
            color: ${colors.white};
            margin-top: 30px;
            font-weight: ${typography.bold};
            text-transform: uppercase;
            font-size: ${typography.f12};
            line-height: 24px;
            text-align: left;
            margin-bottom: 5px;
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

          ul {
            margin-top: 50px;
          }

          .italic {
            font-size: ${typography.f12};
            font-style: italic;
            margin-top: 15px;
          }
        `}</style>
      </Page>
    )
  }
}

export default WorkExperience
