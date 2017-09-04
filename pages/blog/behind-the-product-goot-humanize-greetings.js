'use strict'

import { Component } from 'react'
import goot from 'goot'
import spacetime from 'spacetime'

import Post from './../../layouts/post'
import H2 from './../../components/h2'
import H3 from './../../components/h3'
import P from './../../components/p'
import Bold from './../../components/bold'
import Image from './../../components/image'
import Url from './../../components/url'
import Highlight from './../../components/highlight'
import posts from './../../data/posts'

export default class GootHumanizeGreeting extends Component {
  render() {
    const now = spacetime().hour()
    const greeting = goot(now)
    const { url: { pathname } } = this.props
    const p = pathname.substring(6, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post}>
        <P>
          Hey, <strong>good {greeting}</strong>!
        </P>
        <P>
          That's how the project start. By just saying{' '}
          <Highlight>morning</Highlight>, <Highlight>afternoon</Highlight> or{' '}
          <Highlight>night</Highlight> based on your timezone. If you're reading
          this post in the morning, you'll see a <Bold>good morning</Bold>{' '}
          message at the beginning, if you're a reading in the afternoon, you'll
          see a <Bold>good afternoon</Bold> message and if you're reading...
          okay, you got it!
        </P>
        <P>
          I know the idea may sound silly, it's just a module that returns a
          <Highlight>string</Highlight>. That's why this project is by far one
          of my favorites because it's so simple and it can make a difference
          for the users that are seeing that on your website.
        </P>
        <P>
          The tiny details like a simple good morning when it's in the morning
          for your users. They may feel more human when using your website and
          not feel like they are talking with a robot because there's a little
          touch of a human behind a simple good morning.
        </P>
        <P>
          It's what we are trying to do with technology. For example{' '}
          <Highlight>artificial intelligence</Highlight> like{' '}
          <Highlight>Siri</Highlight>. Apple has been working hard with AI to
          make Siri sound more human. Or even{' '}
          <Highlight>Google Assistant</Highlight> with a conversation or
          natural-sounding back and forth exchanges, and not traditional,
          computer-centric paradigms.
        </P>
        <H2>Where the idea came from?</H2>
        <P>
          I was just checking <Url href="https://dribbble.com">
            Dribbble
          </Url>{' '}
          when I saw a Facebook login redesign page. I really enjoyed the
          design, it was simple and it felt right. The shot has a welcome
          message like <Highlight>Good evening! ...</Highlight>. And that caught
          my attention, I just thought it would be cool to create something to
          welcome users based on their timezone. Just a simple welcome message.
        </P>
        <Image
          src={`/static/posts/${post.id}/facebook.png`}
          label="Facebook Redesign [Sign in on Desktop] by Pedro Henrique Marques"
        />
        <H2>Creating goot!</H2>
        <H3>v0.0.1</H3>
        <P>
          On <Highlight>v0.0.1</Highlight> goot was even simpler than it is
          today. It was only a `function` that returned a `string` without any
          parameters. Goot tried to get the time right and then return the
          message, it was working great until I tried to deploy a web base demo,{' '}
          <Url href="https://github.com/bukinoshita/goot-web">goot-web</Url>.
        </P>
        <P>
          I was having some issues that running `goot` with React locally and
          when deployed I was returning different times.
        </P>
        <H3>v0.0.2 & v0.0.3</H3>
        <P>
          <Highlight>v0.0.2</Highlight> and <Highlight>v0.0.3</Highlight> was to
          make the API more stable, fixing minor bugs and adding tests.
        </P>
        <H3>v0.0.4</H3>
        <P>
          On <Highlight>v0.0.4</Highlight> I added parameters to the function
          where the developer can pass the time and goot would return a message
          based on that time. Just to make things easier and not to try predict
          the right time for each timezone.
        </P>
        <H3>v0.0.5</H3>
        <P>
          This was an awesome release for me. I introduced support to different
          languages such as <Bold>portuguese</Bold>, <Bold>spanish</Bold>,{' '}
          <Bold>french</Bold> and <Bold>german</Bold>.
        </P>
        <Image
          src={`/static/posts/${post.id}/goot-web.png`}
          label="`goot-web` with different languages support built with React"
        />
        <H3>v0.0.6 & v0.0.7</H3>

        <P>
          On <Highlight>v0.0.6</Highlight> and <Highlight>v0.0.7</Highlight> was
          just a couple of fixes and improvements. I also redesigned `goot-web`
          website to something simpler.
        </P>

        <Image
          src={`/static/posts/${post.id}/cover.png`}
          label="new `goot-web`"
        />

        <H2>The future of goot</H2>

        <P>
          I've been using `goot` in some{' '}
          <Url href="https://github.com/bukinoshita/goot#example">
            projects
          </Url>{' '}
          that I did and it worked pretty well. For now `goot` returns a
          `promise` which is something that I don't like that much, would be so
          much easier to return a `string` since `goot` does not need be
          `promise` based. That been said, the next release will be{' '}
          <Highlight>v1.0.0</Highlight> (major release) where I will make the
          API more stable and easier to use. ❤️
        </P>

        <P>
          Give it a try with goot on your projects as well! It's pretty easy to
          use, check it{' '}
          <Url href="https://github.com/bukinoshita/goot">here</Url>.
        </P>
      </Post>
    )
  }
}
