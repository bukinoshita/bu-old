'use strict'

import { Component } from 'react'

import Post from './../../layouts/post'
import H2 from './../../components/h2'
import H3 from './../../components/h3'
import P from './../../components/p'
import Li from './../../components/li'
import Ul from './../../components/ul'
import Bold from './../../components/bold'
import Url from './../../components/url'
import Highlight from './../../components/highlight'
import Code from './../../components/code'
import GithubEmbed from './../../components/github-embed'
import Separator from './../../components/separator'
import BlogPost from './../../components/blog-post'
import posts from './../../data/posts'

export default class PartIHowToCreateANodeModule extends Component {
  render() {
    const { url: { pathname } } = this.props
    const p = pathname.substring(6, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post}>
        <P>
          Let's learn how to create a small and simple node module with some
          ES2015 features and more. This is <Bold>part 1</Bold> where we
          basically set up our project. If you want to skip this part, you can
          just{' '}
          <Url href="https://github.com/bukinoshita/make-pizza-project">
            clone the project locally
          </Url>.
        </P>

        <H2>What are we going to create?</H2>

        <P>
          We will create a simple node module to create a pizza. Yes, it's lame.
          But we will be learning about.
        </P>

        <Ul>
          <Li>async/await</Li>
          <Li>destructuring</Li>
          <Li>promises</Li>
          <Li>tests</Li>
          <Li>lint</Li>
          <Li>publishing npm package</Li>
          <Li>semver</Li>
          <Li>continuous integration</Li>
        </Ul>

        <P>And all that good stuff++.</P>

        <H2>What are we going to use?</H2>

        <Ul>
          <Li>
            <Url href="https://github.com/nodejs/node">nodejs</Url>: If I recall
            correctly nodejs introduced async/await on v7.3.0, so make sure you
            use this version or higher. I'm using v8.3.0.
          </Li>
          <Li>
            <Url href="https://www.npmjs.com/">npm</Url>: I'm using v5.3.0.
          </Li>
          <Li>
            <Url href="https://github.com/avajs/ava">ava</Url>: Futuristic
            JavaScript test runner.
          </Li>
          <Li>
            <Url href="https://github.com/sindresorhus/xo">xo</Url>: JavaScript
            happiness style linter.
          </Li>
          <Li>
            <Url href="https://github.com/prettier/prettier">prettier</Url>:
            Prettier is an opinionated code formatter.
          </Li>
          <Li>
            <Url href="https://travis-ci.org/">travis-ci</Url>: Test and Deploy
            with Confidence.
          </Li>
        </Ul>

        <H2>Getting started</H2>

        <P>
          First, let's{' '}
          <Url href="https://github.com/new">create a new repository</Url> on
          Github, clone it and run <Highlight>yarn init</Highlight> or{' '}
          <Highlight>npm init</Highlight> to create a basic package.json for
          your project.
        </P>

        <Code>$ yarn init</Code>

        <P>
          Now that you have a basic package.json, you can install the
          dependencies that we are going to use.
        </P>

        <Code>$ yarn add — dev ava eslint-config-prettier xo</Code>

        <P>
          Your package.json should look like this. I added a{' '}
          <Highlight>test</Highlight> script with{' '}
          <Highlight>xo --quiet && ava</Highlight> so everytime you run{' '}
          <Highlight>$ yarn test</Highlight> it will run both xo and ava. Life's
          good.
        </P>

        <P>
          I also extended xo with a custom config to use{' '}
          <Highlight>prettier</Highlight>.
        </P>

        <Code
          label="./package.json"
          url="https://github.com/bukinoshita/make-pizza/blob/master/package.json"
        >{`{
  "name": "make-pizza",
  "version": "0.0.0",
  "description": "Making a pizza with ES2015",
  "main": "index.js",
  "repository": "https://github.com/bukinoshita/make-pizza.git",
  "author": "Bu Kinoshita <bukinoshita@gmail.com>",
  "license": "MIT",
  "scripts": {
    "test": "xo --quiet && ava"
  },
  "dependencies": {
    "shout-error": "^0.0.2",
    "shout-message": "^0.0.2",
    "shout-success": "^0.0.2"
  },
  "devDependencies": {
    "ava": "^0.22.0",
    "eslint-config-prettier": "^2.3.0",
    "xo": "^0.18.2"
  },
  "xo": {
    "extends": ["prettier"]
  }
}`}</Code>

        <H2>Organizing project</H2>

        <P>
          Okay, we need to decide how are going to make our pizza and the
          commands that we should have. Let's make it pretty simple, so let's
          just have <Highlight>toppings</Highlight>, <Highlight>size</Highlight>{' '}
          and <Highlight>heat</Highlight>.
        </P>

        <H3>Toppings</H3>

        <P>It should be a list with all toppings available.</P>

        <H3>Size</H3>

        <P>It should be a list with all sizes available.</P>

        <H3>Heat</H3>

        <P>A function to heat the pizza. Seriously!</P>

        <P>With that in mind, let's create folders and files.</P>

        <Code
        >{`$ mkdir lib helpers example && touch index.js test.js lib/check-toppings.js lib/heat-pizza.js lib/is-size.js lib/is-topping.js lib/sleep.js helpers/sizes.json helpers/toppings.json example/index.js`}</Code>

        <P>
          We created 3 folders: <Highlight>lib</Highlight> ,{' '}
          <Highlight>helpers</Highlight> and <Highlight>example</Highlight>.
        </P>

        <H3>/lib</H3>

        <P>On lib folder we create these files:</P>

        <Ul>
          <Li>
            check-toppings.js: To separate unavailable toppings from the
            available ones.
          </Li>
          <Li>heat-pizza.js: To heat the pizza.</Li>
          <Li>is-size.js: To check if size is available or not.</Li>
          <Li>is-topping.js: To check if topping is available or not.</Li>
          <Li>
            sleep.js: A promise that waits <Highlight>x ms</Highlight> to
            resolve it.
          </Li>
        </Ul>

        <H3>/helpers</H3>

        <Ul>
          <Li>sizes.json: array with available sizes.</Li>
          <Li>toppings.json: array with available toppings.</Li>
        </Ul>

        <P>
          <Highlight>index.js</Highlight> on the root of the project where we
          will write the main function to make a pizza.{' '}
          <Highlight>test.js</Highlight> on also on the root where we will write
          our tests. And <Highlight>/example</Highlight> where we going to put a
          small example later.
        </P>

        <H2>Check Part II and Part III</H2>

        <BlogPost post="part-ii-how-to-create-a-node-module" />

        <Separator />

        <GithubEmbed
          project="bukinoshita/make-pizza"
          description="Making a pizza with ES2015"
        />
      </Post>
    )
  }
}
