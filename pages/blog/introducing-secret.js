'use strict'

import Post from './../../layouts/post'
import H2 from './../../components/h2'
import P from './../../components/p'
import Bold from './../../components/bold'
import Image from './../../components/image'
import Highlight from './../../components/highlight'
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
        Secret is a side-project that I built to solve a single problem. I still
        remember many times my old bosses and friends sharing with me{' '}
        <Highlight>keys</Highlight> or <Highlight>passwords</Highlight> through
        a chat platform (Slack, WhatsApp, etc) and these{' '}
        <Highlight>secrets</Highlight> probably still exist there.
      </P>

      <P>
        To solve that I built Secret where you can share those kinda of
        information through a safe, private, and encrypted link that
        automatically expires.
      </P>

      <H2>But what that means?</H2>
      <P>
        It means that when you use Secret, we receive an encrypted copy of the
        secret. We don't have the ability to access the content of your
        encrypted secret, and only keep it until somebody opens it.
      </P>
      <P>
        We use WebCrypto API with the AES-GCM algorithm to encrypt and decrypt
        the secret in the browser, meaning the secret that’s transferred to our
        server is already encrypted and its contents can’t be viewed by us.
      </P>

      <H2>The true story!</H2>
      <P>
        I actually built Secret because I thought it would be a cool project to
        practice my coding/design skills. I'm always creating something new
        every day and Secret is one of them.
      </P>

      <P>
        When I had the idea I came to a friend and talked about Secret with him,
        he told me that it was a simple and interesting project. And that got me
        excited, on the same night I started building the API, it took me less
        than 2 hours.
      </P>
      <P>
        The next morning I started designing the website and building it
        (front-end code, connecting with the API, …).
      </P>

      <Image
        src={`/static/posts/${post.id}/secret.png`}
        label="secret@v0.0.1"
      />

      <P>
        After finishing Secret, I worked in the post-production of the website.
      </P>

      <Ul>
        <Li>
          Writing a good{' '}
          <Url href="https://github.com/bukinoshita/secret/blob/46916e1e9ce87257545d210647cd63eb1d47729a/readme.md">
            readme
          </Url>{' '}
          on Github
        </Li>
        <Li>
          Making the{' '}
          <Url href="https://github.com/bukinoshita/secret">
            repository
          </Url>{' '}
          public
        </Li>
        <Li>Sharing on Social Media (facebook and twitter)</Li>
        <Li>
          Publishing on{' '}
          <Url href="https://www.producthunt.com/posts/secret-3">
            Product Hunt
          </Url>
        </Li>
      </Ul>

      <P>
        It got some attention on Facebook groups, people really enjoyed Secret
        and I was really happy. I thought that was it.
      </P>
      <P>
        Since a lot of people liked Secret I added more{' '}
        <Url href="https://github.com/bukinoshita/secret/releases/tag/v0.1.0">
          features/improvements
        </Url>{' '}
        like:
      </P>

      <Ul>
        <Li>Add optional passphrase</Li>
        <Li>Add copy link button</Li>
        <Li>Add help page</Li>
        <Li>Add about page</Li>
      </Ul>

      <H2>And I thought that was it… 🎉</H2>

      <P>
        I don't know why. I don't know how… But secret was the{' '}
        <Bold>#3 Product of the Day on Product Hunt</Bold>.
      </P>

      <Image
        src={`/static/posts/${post.id}/ph.png`}
        label="#3 Product of the Day on Product Hunt ❤ (at the end of the day it was the #4)"
      />

      <P>
        It was a Sunday afternoon when I saw Product Hunt’s tweet about Secret.
        And to be honest I didn’t believe at first because I wasn’t expecting at
        all. At the same time, I was really excited!
      </P>

      <H2>Conclusion</H2>

      <P>
        I don't think Secret will survive that long. I don't want to earn money
        with Secret. I don't want it to be a Startup or Company.
      </P>
      <P>
        Secret is just a fun Open Source side-project that I'm so proud of. I
        learned a lot about marketing, cryptography, front-end, design, and
        back-end.
      </P>
      <P>
        I don't know if sharing my analytics will mean anything, but I'll share
        anyway.
      </P>

      <Image
        src={`/static/posts/${post.id}/analytics.png`}
        label="from Nov 21 2017 to Nov 28 2017"
      />

      <P>That's all! Thanks for reading, until my next project.</P>

      <Separator />

      <H2>Links</H2>

      <Ul>
        <Li>
          <Url href="https://getsecret.now.sh/">Secret</Url>
        </Li>
        <Li>
          <Url href="https://github.com/bukinoshita/secret">Source Code</Url>
        </Li>
        <Li>
          <Url href="https://www.producthunt.com/posts/secret-3">
            Product Hunt
          </Url>
        </Li>
      </Ul>
    </Post>
  )
}
