'use strict'

import { Component } from 'react'
import c from 'copy-text-to-clipboard'

import { colors, typography } from './../theme'

class Code extends Component {
  constructor() {
    super()

    this.copyCode = this.copyCode.bind(this)

    this.state = { isCopied: false }
  }

  copyCode() {
    const { children } = this.props
    const bash = children.includes('$ ')
    const code = bash ? children.replace('$ ', '') : children
    this.setState({ isCopied: true })

    c(code)
  }

  render() {
    const { isCopied } = this.state
    const { children, label, url } = this.props
    const copy = isCopied ? 'Copied!' : 'Copy'
    const hasLabel = label ? 'has-label' : null
    const st = label
      ? {
          marginBottom: '70px',
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0
        }
      : null

    const hasUrl = url
      ? <a href={url}>
          (source)
          <style jsx>{`
            a {
              color: rgba(255, 255, 255, .3);
              text-decoration: underline;
              cursor: pointer;
            }

            a:hover {
              color: ${colors.white};
            }
          `}</style>
        </a>
      : null

    return (
      <pre>
        <code style={st}>
          {children}
        </code>

        <span className={hasLabel}>
          {label} {hasUrl}
        </span>

        <button onClick={this.copyCode}>
          {copy}
        </button>

        <style jsx>{`
          pre {
            position: relative;
          }

          code {
            background-color: rgba(255, 255, 255, .04);
            width: 100%;
            display: block;
            padding: 15px 75px 15px 15px;
            border-radius: 4px;
            margin-bottom: 30px;
            font-size: ${typography.f12};
            color: rgba(255, 255, 255, .5);
            font-family: 'monaco';
            line-height: 1.15rem;
            overflow-x: auto;
          }

          .has-label {
            position: absolute;
            bottom: -35px;
            font-size: 12px;
            font-weight: 600;
            color: ${colors.white};
            height: 35px;
            line-height: 35px;
            color: rgba(255, 255, 255, .3);
            display: block;
            background-color: rgba(255, 255, 255, .07);
            width: 100%;
            border-bottom-right-radius: 4px;
            border-bottom-left-radius: 4px;
            padding-left: 15px;
            padding-right: 15px;
          }

          button {
            position: absolute;
            top: 16px;
            right: 16px;
            background-color: transparent;
            font-weight: ${typography.bold};
            border: none;
            color: ${colors.white};
            cursor: pointer;
            opacity: .5;
          }

          button:hover {
            opacity: 1;
          }
        `}</style>
      </pre>
    )
  }
}

export default Code
