'use strict'

import { Component } from 'react'

import Post from './../../layouts/post'
import H2 from './../../components/h2'
import H3 from './../../components/h3'
import P from './../../components/p'
import Bold from './../../components/bold'
import Url from './../../components/url'
import Ul from './../../components/ul'
import Li from './../../components/li'
import Highlight from './../../components/highlight'
import Image from './../../components/image'
import Code from './../../components/code'
import GithubEmbed from './../../components/github-embed'
import Separator from './../../components/separator'
import BlogPost from './../../components/blog-post'
import posts from './../../data/posts'

export default class PartIIIHowToCreateANodeModule extends Component {
  render() {
    const { url: { pathname } } = this.props
    const p = pathname.substring(6, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post}>
        <P>
          Let’s learn how to create a small and simple node module with some
          ES2015 features and more. This is <Bold>part 3</Bold> where I will
          cover tests, continuous integration and publishing a node module. If
          you missed <Bold>part 1</Bold> and <Bold>part 2</Bold>, check here:
        </P>

        <BlogPost post="part-i-how-to-create-a-node-module" />

        <BlogPost post="part-ii-how-to-create-a-node-module" />

        <H2>
          Before publishing, it's always good to make sure it works as expected
        </H2>

        <P>
          Now that we have everything done and working, we can create a couple
          of tests to make sure it's working as expected. Some people choose to
          create tests at the beginning, before writing any code. It doesn't
          work for me that way, but it's just personal preferences
        </P>

        <P>
          For the sake of simplicity, I'm covering only the main function which
          is the one on the root of our project,{' '}
          <Highlight>./index.js</Highlight>.
        </P>

        <P>
          Before writing any tests would be good to decide what are going to
          test. We know that we are going to test only the main function. And
          the expected output is a message saying that the pizzas that I ordered
          are ready.
        </P>

        <Image src="https://cdn-images-1.medium.com/max/800/1*4WtKyOUGp6dPxxxwnFTBoA.gif" />

        <Ul>
          <Li>
            Make sure it returns a message saying the pizza I ordered is ready
            with the toppings and size I've chosen.
          </Li>
          <Li>
            Make sure it works with different sizes and more than one topping.
          </Li>
          <Li>Make sure it returns an error if the size is not available.</Li>
          <Li>Make sure it returns an error if I don't choose any toppings.</Li>
        </Ul>

        <H3>
          Make sure it returns a message saying the pizza I ordered is ready
          with the toppings and size I've chose
        </H3>

        <P>
          On the first post, we installed <Highlight>AVA</Highlight> to run our
          tests. If you're not familiar with <Highlight>AVA</Highlight> take a
          look at their repository and documentation just to get familiar with
          it.
        </P>

        <Code
          label="./test.json — `lines 21:25`"
          url="https://github.com/bukinoshita/make-pizza/blob/master/test.js#L21-L25"
        >{`test('when making one small BBQ Chicken pizza', async t => {
  const pizza = await m({ size: 'small', topping: ['BBQ Chicken'] })

  t.is(pizza, 'Your 1 small pizza is ready! BBQ Chicken')
})`}</Code>

        <P>
          To create a test you call the <Highlight>test</Highlight> function you
          imported from AVA. The first argument must be t.
        </P>

        <P>
          On the first test, I created a <Highlight>const</Highlight> called
          pizza where it waits for the function to be resolved.
        </P>

        <P>
          <Highlight>t.is(value, expected, [message])</Highlight> asserts that{' '}
          <Highlight>value</Highlight> is the same as
          <Highlight>expected</Highlight>. So we assert that the value resolved
          on <Highlight>pizza</Highlight> is the same as the expected{' '}
          <Highlight>string</Highlight>.
        </P>

        <H3>
          Make sure it works with different sizes and more than one topping
        </H3>

        <P>
          This test should be the same way we created the first test. But
          instead of using only <Highlight>topping: ['BBQ Chicken']</Highlight>,
          you should include another topping as well and change the pizza size.
        </P>

        <H3>Make sure it returns an error if the size is not available</H3>

        <P>
          This time we need to make sure that our function throws an error
          correctly when we the customer chooses a size that's not available.
        </P>

        <Code
          label="./test.js — `lines 15:19`"
          url="https://github.com/bukinoshita/make-pizza/blob/master/test.js#L15-L19"
        >{`test('when has no sizes', async t => {
  const error = await t.throws(m({ size: 'a', topping: ['BBQ Chicken'] }))

  t.is(error.message, 'Choose on of these sizes: small, medium, large.')
})`}</Code>

        <P>
          <Highlight>
            t.throws(function|promise, [error, [message]])
          </Highlight>{' '}
          asserts that <Highlight>function</Highlight>
          throws an error, or <Highlight>promise</Highlight> rejects with an
          error.
        </P>
        <P>
          The same way we had to wait for the promise to be resolved, here we
          have to wait for the function to throw an error because the{' '}
          <Highlight>size</Highlight> <Bold>`a`</Bold> it's not available.
        </P>
        <P>
          We use <Highlight>t.is()</Highlight> again to assert that the{' '}
          <Highlight>error.message</Highlight> is the same as the expected
          string.
        </P>
        <P>
          You can create as many tests as you wish. This is only an introduction
          on how tests work with AVA.
        </P>

        <H2>Continuous Integration</H2>

        <P>
          Well, continuous integration is great! If you're not using, you should
          try it. It will help automate your tests and deployments.
        </P>

        <P>
          Although the one I like most is{' '}
          <Url href="https://circleci.com/">CircleCI</Url>, we will be setting
          up CI with <Url href="https://travis-ci.org/">Travis-CI</Url>.
        </P>

        <P>
          Make sure you create an account on Travis with your Github account and
          sync your repositories.
        </P>

        <Image src="https://cdn-images-1.medium.com/max/800/1*I99GA_cHEPFSsuqP2qZMFA.png" />

        <P>
          Now that you have your repositories set up on travis, you need to
          create a{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/.travis.yml">
            .travis.yml
          </Url>{' '}
          file on the root of your project.
        </P>

        <Code
          label="./.travis.yml"
          url="https://github.com/bukinoshita/make-pizza/blob/master/.travis.yml"
        >{`language: node_js
node_js:
  - '7'
  - '8'`}</Code>

        <P>
          language to be tested and the node versions to be tested. Since
          async/await was introduced on node v7.3 we don't want to run the tests
          on node lower than 7. Otherwise, the tests will fail.
        </P>

        <P>
          Push your changes to Github and travis will be automatically triggered
          and the tests will start running.
        </P>

        <P>
          If you want, you can add a script to deploy your app after the tests
          pass.{' '}
          <Url href="https://docs.travis-ci.com/user/languages/javascript-with-nodejs/">
            Check here
          </Url>.
        </P>

        <H2>Publishing a node module</H2>

        <P>
          With all my node modules, I always publish my package with{' '}
          <Url href="https://github.com/sindresorhus/np">np</Url>.{' '}
          <Highlight>np</Highlight> is a better{' '}
          <Highlight>npm publish</Highlight>. And here is why:
        </P>

        <Ul>
          <Li>Interactive UI</Li>
          <Li>
            Ensures you are publishing from the <Highlight>master</Highlight>{' '}
            branch
          </Li>
          <Li>
            Ensures the working directory is clean and that there are no
            unpulled changes
          </Li>
          <Li>
            Reinstalls dependencies to ensure your project works with the latest
            dependency tree
          </Li>
          <Li>Runs the tests</Li>
          <Li>
            Bumps the version in package.json and npm-shrinkwrap.json (if
            present) and creates a git tag
          </Li>
          <Li>
            Prevents{' '}
            <Url href="https://github.com/npm/npm/issues/13248">
              accidental publishing
            </Url>{' '}
            of pre-release versions under the
            <Highlight>latest</Highlight>{' '}
            <Url href="https://docs.npmjs.com/cli/dist-tag">dist-tag</Url>
          </Li>
          <Li>Publishes the new version to npm, optionally under a dist-tag</Li>
          <Li>Pushes commits and tags to GitHub</Li>
        </Ul>

        <Image src="https://cdn-images-1.medium.com/max/800/1*64gMHXogmFze4Y1_RuESnw.gif" />

        <P>
          Check the documentation on their{' '}
          <Url href="https://github.com/sindresorhus/np">repository</Url> to
          install and use it. Their interactive ui is pretty straightforward and
          easy to use.
        </P>

        <Image src="https://cdn-images-1.medium.com/max/1000/1*EKdmVmBLJvUe23RrEP7VpA.png" />

        <Separator />

        <GithubEmbed
          project="bukinoshita/make-pizza"
          description="Making a pizza with ES2015"
        />
      </Post>
    )
  }
}
