'use strict'

import Post from './../../layouts/post'
import H2 from './../../components/h2'
import H3 from './../../components/h3'
import P from './../../components/p'
import Bold from './../../components/bold'
import Quote from './../../components/quote'
import Image from './../../components/image'
import posts from './../../data/posts'

export default ({ url: { pathname } }) => {
  const p = pathname.substring(6, pathname.length)
  const post = posts.filter(({ id }) => id === p)[0]

  return (
    <Post post={post}>
      <P>
        This may be the most required featured that users ask for Twitter to
        make.
      </P>

      <P>And the list goes on… you can check it here.</P>

      <Quote>
        We can build skyscrapers hundreds and hundreds of stories tall and
        thousands of feet tall with elevators that just shoot to the top in a
        matter of a minute or two but we can't edit out tweets. —MKBHD
      </Quote>

      <H2>How could it affect Twitter's experience?</H2>

      <H3>If a tweet get a lot of retweets or likes and the OP edits it</H3>

      <P>
        If I tweet <Bold>"I like [insert band name]"</Bold> and get 10k retweets
        and 20k likes and then I edit it to <Bold>"I hate [band name]"</Bold>.
        Not good!
      </P>

      <H3>Embedded Tweets</H3>

      <P>
        A lot of sites and blogs embed tweets, like whatI'm doing in this
        article. What if the user was able to edit their tweet? It may cause
        problems. Not good!
      </P>

      <H2>How could we solve those issues?</H2>

      <H3>User cannot edit their tweet after Xs</H3>

      <P>
        After posting a tweet, the user can edit their tweet within 60s after
        posting it. It can be 60 seconds, 30 seconds, 3 minutes. I don't know,
        I'll let Twitter try and see which works for them.
      </P>

      <P>
        <Bold>Why?</Bold> The feature to edit a tweet is mainly focused on
        solving the issue when the user has a typo on their tweet. And it's
        something you usually realize a couple of seconds after tweeting.
      </P>

      <P>
        Having the ability to edit the tweet anytime is risky and may cause a
        lot of problems. So let's play safe at the beginning since it's a new
        feature, it may need some testing before doing something big that
        changes the whole experience.
      </P>

      <H3>User cannot edit their tweet after a couple of interactions</H3>

      <P>
        If the tweet gets more than X likes or retweets, the user can no longer
        edit their tweet.
      </P>

      <P>
        <Bold>Why?</Bold> Like explained before, the user may edit their tweet
        to something harmful or bad. So to prevent something bad to spread, the
        user can no longer edit their tweet after a couple of interactions.
        Again, playing safe.
      </P>

      <H2>How should do it?</H2>
      <P>
        I've been thinking about how should do it? So I took a look at how other
        websites does it.
      </P>

      <H3>Reddit</H3>
      <P>
        You can only edit the post on Reddit in a period of 3 minutes If I
        recall correctly. It shows when the user edits it but doesn't show the
        edit history.
      </P>

      <Image src={`/static/posts/${post.id}/reddit.png`} />

      <H3>Facebook</H3>
      <P>
        In another hand, Facebook let users edit what they post anytime they
        want and make it visible to anyone the edit history.
      </P>

      <Image src={`/static/posts/${post.id}/edit-history.png`} />

      <Image src={`/static/posts/${post.id}/timeline.png`} />

      <P>
        After looking at some examples around the web, I came to the conclusion
        that this new feature should be something more discreet. So I kept the
        UI basically the same and just added the text “Edited” if the tweet was
        edited.
      </P>

      <Image src={`/static/posts/${post.id}/tweet.png`} />

      <P>
        And when the user clicks on the “Edited” text it will open the tweet
        with the edit history.
      </P>

      <H2>How the animations should look like and how it should work</H2>

      <Image src={`/static/posts/${post.id}/animation.gif`} />

      <H2>Conclusion</H2>

      <P>
        Even though it may look something pretty simple for them to do, they
        still need to be really careful when adding a new feature. Recently they
        changed the "reply tweet" feature and so many users didn't like it, so
        they tweaked again.
      </P>

      <P>
        Let me know if you think that by adding this feature can cause more
        issues or If you have a different way to solve it. Feedback please! :)
      </P>
    </Post>
  )
}
