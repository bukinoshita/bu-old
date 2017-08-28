'use strict'

import { Component } from 'react'
import 'isomorphic-fetch'
import sortArr from 'sort-arr'
import Link from 'next/link'

import Page from './../layouts/page'

class Home extends Component {
  static async getInitialProps() {
    const res = await fetch(
      'https://api.github.com/users/bukinoshita/repos?per_page=100'
    )
    const json = await res.json()
    return { stars: json }
  }

  render() {
    const { name, html_url } = sortArr(
      this.props.stars,
      'pushed_at'
    ).reverse()[0]

    return (
      <Page color="#fff">
        <div>
          <h1>bu kinoshita</h1>
          <h2>front-end engineer & ux designer</h2>

          <h3>
            &gt; currently working on <a href="https://franz.sh">franz</a> and{' '}
            <a href={html_url}>{name}</a>.
          </h3>

          <footer>
            <ul>
              <li>
                <Link href="/about/work-experience" prefetch>
                  <span>work</span>
                </Link>/
              </li>
              <li>
                <Link href="/blog" prefetch>
                  <span>blog</span>
                </Link>/
              </li>
              <li>
                <a href="https://twitter.com/bukinoshita">twitter</a>/
              </li>
              <li>
                <a href="https://github.com/bukinoshita">github</a>/
              </li>
              <li>
                <a href="https://dribbble.com/bukinoshita">dribbble</a>
              </li>
            </ul>
          </footer>

          <style jsx>
            {`
              div {
                padding: 100px;
                min-height: 100vh;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
              }

              h2 {
                color: #868e96;
                line-height: 30px;
              }

              ul {
                display: flex;
                margin-top: 25px;
              }

              li {
                font-size: 13px;
                color: #868e96;
                padding-right: 5px;
              }

              a,
              span {
                color: #868e96;
                margin-right: 5px;
                cursor: pointer;
              }

              a:hover,
              span:hover {
                color: #000;
              }

              h3 {
                font-weight: 400;
                font-size: 14px;
                color: #868e96;
                margin-top: 16px;
              }

              h3 a {
                font-weight: 600;
                color: #000;
              }

              h3 a:hover {
                text-decoration: underline;
              }

              @media (max-width: 500px) {
                div {
                  padding: 45px;
                }
              }
            `}
          </style>
        </div>
      </Page>
    )
  }
}

export default Home
