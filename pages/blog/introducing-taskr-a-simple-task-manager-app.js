'use strict'

import Post from './../../layouts/post'
import H2 from './../../components/h2'
import P from './../../components/p'
import Bold from './../../components/bold'
import Image from './../../components/image'
import Ul from './../../components/ul'
import Li from './../../components/li'
import Url from './../../components/url'
import Separator from './../../components/separator'
import posts from './../../data/posts'

export default ({ url: { pathname } }) => {
  const p = pathname.substring(6, pathname.length)
  const post = posts.filter(({ id }) => id === p)[0]

  return (
    <Post post={post}>
      <P>
        <Url href="https://gettaskr.now.sh/">Taskr</Url> is a <Bold>free</Bold>{' '}
        and <Bold>simple</Bold> task manager app for macOS that helps you create
        simple routines and tasks for your day.
      </P>

      <P>
        I started Taskr because I couldn’t keep with a to-do app for more than a
        week. I tried a lot of to-do apps, in the beginning is all beautiful,
        but eventually I started using the app less and less.
      </P>

      <P>
        The first idea was to create a <Bold>simple</Bold> and{' '}
        <Bold>clean</Bold> task manager the way I like and feel comfortable.
        Taskr is also my first macOS app, it was fun to build it.
      </P>

      <P>
        As always I try to Open source all my work. Sharing with the community
        helps me keep building stuff that I want because they support me and
        seeing that they like the product really motivates me.
      </P>

      <Image
        src={`/static/posts/${post.id}/release.png`}
        label="Taskr first release on Twitter"
      />

      <P>
        I didn't market the app at all, just some tweets about the releases.
        Trying to improve the app and collect more feedback and users.
      </P>

      <P>
        It was the end of the year, it didn't make sense to market Taskr when
        everybody was celebrating. So I decided to wait.
      </P>

      <H2>The first real release</H2>

      <P>
        Since Taskr is{' '}
        <Url href="https://github.com/bukinoshita/taskr">Open Source</Url> on
        January 4th I decided to share Taskr with the Brazilian dev community on
        Facebook.
      </P>

      <Image src={`/static/posts/${post.id}/facebook.png`} label="" />

      <P>
        To be honest, I wasn't expecting a lot of attention on Facebook, I just
        wanted to share it. I spent the whole day answering questions and
        thanking people on this post, it was amazing that people really liked
        Taskr.
      </P>

      <P>
        I decided to post it on Product Hunt, so I took a couple screenshots,
        designed a nice cover, wrote a message to post on Product Hunt and a
        tweet talking about it. It was all ready for the big release.
      </P>

      <H2>Big release</H2>

      <P>
        January 5th, 2018 — Taskr was featured on Product Hunt. #1 Product of
        the Day (after #5 Product of the Week).
      </P>

      <Image src={`/static/posts/${post.id}/big-release.png`} />

      <P>
        <Url href="https://twitter.com/bukinoshita">My Twitter</Url> and{' '}
        <Url href="https://www.producthunt.com/@bukinoshita">
          Product Hunt
        </Url>{' '}
        went crazy,{' '}
        <Url href="https://twitter.com/ProductHuntHi/status/949248690031677441">
          so
        </Url>{' '}
        <Url href="https://twitter.com/imfine_thankyou/status/949267771455492096">
          many
        </Url>{' '}
        <Url href="https://twitter.com/syswarren/status/949270748505526272">
          people
        </Url>{' '}
        <Url href="https://twitter.com/yummygum/status/949307283363782656">
          talking
        </Url>{' '}
        <Url href="https://twitter.com/hugojmd/status/949348395654754305">
          really
        </Url>{' '}
        <Url href="https://twitter.com/kevinbryantlou/status/949362757861761024">
          well
        </Url>{' '}
        <Url href="https://twitter.com/dulitharw/status/949505262364307456">
          about
        </Url>{' '}
        <Url href="https://twitter.com/pugson/status/949311192463527942">
          Taskr
        </Url>.
      </P>

      <P>
        For me, Taskr is a huge success. Last year when I{' '}
        <Url href="https://medium.com/@bukinoshita/introducing-secret-100b5d95acfb">
          launched Secret
        </Url>{' '}
        (<Url href="https://www.producthunt.com/posts/secret-3">
          #4 on Product Hunt
        </Url>) I decided to build a product that gets in the #1 in 2018. Not
        only that, people really liked Taskr and it was also Trending on Github.
      </P>

      <Image
        src={`/static/posts/${post.id}/github.png`}
        label="Github Trending — #2 on Javascript & #10 for all languages."
      />

      <H2>Feedbacks, bugs, and improvements</H2>

      <P>
        It was amazing to see all the feedback and ideas people commented to
        improve Taskr. At the same time it was hard to decide which one to
        implement because I want Taskr to keep the simplicity.
      </P>

      <P>
        Some of the ideas I had in the first release was "wrong" and I only
        realized that after receiving feedback.
      </P>

      <Image src={`/static/posts/${post.id}/feedbacks.png`} label="" />

      <H2>Future of Taskr</H2>

      <P>Delivering what people want.</P>

      <Ul>
        <Li>Cloud sync (syncing tasks through devices)</Li>
        <Li>iOS App (Android app — maybe?)</Li>
        <Li>Linux & Windows support</Li>
        <Li>
          Custom plugins (Github, Slack, Reminders, Continuous Integration)
        </Li>
      </Ul>

      <P>
        I will work hard in the next days to build an API for Taskr to enable
        cloud-syncing and then start the iOS App. Windows support will be
        available in the next release thanks to{' '}
        <Url href="https://github.com/bukinoshita/taskr/commit/32249b28d20cf36f38aeb8b5fe6a51eb36752ab6">
          uenify
        </Url>.
      </P>

      <Image
        src={`/static/posts/${post.id}/downloads.png`}
        label="Last time checked: Wed 24 Jan 3:56pm"
      />

      <Separator />

      <H2>Links</H2>

      <Ul>
        <Li>
          <Url href="https://www.producthunt.com/posts/taskr">
            Product Hunt
          </Url>: #1 Product of the Day & #5 Product of the Week
        </Li>
        <Li>
          <Url href="https://github.com/bukinoshita/taskr">Github</Url>: Open
          source built with Electron, React and Next.js
        </Li>
        <Li>
          <Url href="https://twitter.com/bukinoshita">Twitter</Url>: To hear
          about new products and Taskr updates
        </Li>
        <Li>
          <Url href="https://gettaskr.now.sh/">
            <Bold>Download Taskr for free!</Bold>
          </Url>
        </Li>
      </Ul>
    </Post>
  )
}
