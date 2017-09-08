'use strict'

import { Component } from 'react'

import Post from './../../layouts/post'
import H2 from './../../components/h2'
import H3 from './../../components/h3'
import P from './../../components/p'
import Bold from './../../components/bold'
import Url from './../../components/url'
import Highlight from './../../components/highlight'
import Code from './../../components/code'
import GithubEmbed from './../../components/github-embed'
import Separator from './../../components/separator'
import BlogPost from './../../components/blog-post'
import posts from './../../data/posts'

export default class PartIIHowToCreateANodeModule extends Component {
  render() {
    const { url: { pathname } } = this.props
    const p = pathname.substring(6, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post}>
        <P>
          Let’s learn how to create a small and simple node module with some
          ES2015 features and more. This is <Bold>part 2</Bold> where we code
          all parts to make it possible to make the pizza. If you missed{' '}
          <Bold>part 1</Bold> where I cover an introduction and how to set up
          the project, check here:
        </P>

        <BlogPost post="part-i-how-to-create-a-node-module" />

        <H2>Choosing pizzas sizes and toppings</H2>

        <P>
          To get started we will need pizzas sizes and toppings available. So
          let's create them. It's a simple json file where it contains the data
          we want.
        </P>

        <P>
          To make really simple I just added 2 toppings on my
          <Highlight>/helpers/toppings.json</Highlight> file. You can add any
          topping you want.
        </P>

        <Code
          label="./helpers/toppings.json"
          url="https://github.com/bukinoshita/make-pizza/blob/master/helpers/toppings.json"
        >
          {`[
  "Sunny Side Up",
  "BBQ Chicken"
]`}
        </Code>

        <P>
          And for sizes I added only 3 on{' '}
          <Highlight>/helpers/sizes.json</Highlight>.
        </P>

        <Code
          label="./helpers/sizes.json"
          url="https://github.com/bukinoshita/make-pizza/blob/master/helpers/sizes.json"
        >
          {`[
  "small",
  "medium",
  "large"
]`}
        </Code>

        <H2>Checking if sizes and toppings are available</H2>

        <P>
          Now that we have some data, our next step is to check if the sizes and
          toppings the customer is asking are available.
        </P>

        <H3>Checking sizes</H3>

        <P>
          Let's check the sizes first on <Highlight>/lib/is-size.js</Highlight>.
        </P>

        <Code
          label="/lib/is-size.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/is-size.js"
        >{`'use strict'

const sizes = require('./../helpers/sizes')

module.exports = size => sizes.includes(size)`}</Code>

        <P>
          What are we doing here? On <Bold>line 3</Bold> we a requiring the
          <Highlight>sizes.json</Highlight> file that contains the sizes array.
        </P>

        <P>
          Then, on <Bold>line 5</Bold> we are exporting a function where it
          receives a parameter size. So we can check if the{' '}
          <Highlight>sizes.json</Highlight> array <Bold>includes</Bold> the
          parameter received and return a boolean value.
        </P>

        <P>
          If you don't know about{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">
            includes
          </Url>, it basically determines whether an array includes a certain
          element or not and return a boolean value.
        </P>

        <H3>Checking toppings</H3>

        <P>
          On toppings, I used a different approach to show the differences
          between <Highlight>indexOf</Highlight> and{' '}
          <Highlight>includes</Highlight>. Although both of them returns the
          same result,{' '}
          <Url href="https://jsperf.com/str-indexof-vs-str-includes">
            indexOf
          </Url>{' '}
          <Url href="https://jsperf.com/str-indexof-vs-str-includes">
            is a faster solution
          </Url>{' '}
          in this case.
        </P>

        <Code
          label="./lib/is-topping.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/is-topping.js"
        >{`'use strict'

const toppings = require('./../helpers/toppings')

module.exports = topping => toppings.indexOf(topping) > -1`}</Code>

        <P>
          I did almost the same way I did with <Highlight>is-size.js</Highlight>{' '}
          but this time using <Highlight>indexOf</Highlight>. indexOf will
          return the index of the string that we are searching for. If it does
          not find, it will return <Highlight>-1</Highlight>. That's why we
          check if <Highlight>indexOf</Highlight> of the parameter received is{' '}
          <Bold>higher than -1</Bold>. This function will also return a boolean
          value.
        </P>

        <H3>Filtering toppings</H3>

        <P>
          The customer may ask for a topping that it's not available, so we need
          to filter to not include those toppings.
        </P>

        <Code
          label="./lib/check-toppings.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/check-toppings.js"
        >{`'use strict'

const isTopping = require('./is-topping')

module.exports = topping => topping.filter(t => isTopping(t))`}</Code>

        <P>
          On{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/check-toppings.js">
            /lib/check-toppings.js
          </Url>{' '}
          we receive an array of toppings which is the toppings the customer
          wants. We{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">
            filter
          </Url>{' '}
          the toppings and test if <Highlight>isTopping</Highlight>.
        </P>

        <P>
          isTopping is the function we just created to check if the topping is
          available or not.
        </P>

        <P>
          The filter method will create a new array with all elements that pass
          the test implemented.
        </P>

        <H2>Heating the pizza takes some time</H2>

        <P>
          We will fake that it takes some time to heat the pizza. In order to do
          that, let's create{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/sleep.js">
            /lib/sleep.js
          </Url>{' '}
          and{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/heat-pizza.js">
            /lib/heat-pizza.js
          </Url>.
        </P>

        <P>
          On <Highlight>sleep.js</Highlight> we return a{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
            Promise
          </Url>{' '}
          that will resolve after some time.
        </P>

        <Code
          label="./lib/sleep.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/sleep.js"
        >{`'use strict'

module.exports = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}`}</Code>

        <P>
          On{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/heat-pizza.js">
            /lib/heat-pizza.js
          </Url>{' '}
          we have to wait the <Highlight>sleep.js</Highlight> Promise to be
          resolved.
        </P>

        <Code
          label="./lib/heat-pizza.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/heat-pizza.js"
        >{`'use strict'

const sleep = require('./sleep')

module.exports = async timer => {
  await sleep(1000 * timer)
  return true
}`}</Code>

        <P>
          We can wait for the Promise to be resolved in two different ways. With{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then">
            .then()
          </Url>{' '}
          or with{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await">
            await
          </Url>. We will use <Highlight>await</Highlight> because we are cool!
        </P>

        <P>
          The <Highlight>await</Highlight> operator is used to wait for a
          Promise and it can only be used inside an <Highlight>async</Highlight>{' '}
          function.
        </P>

        <P>
          What's really happening on this function is that the function receives
          a <Highlight>timer</Highlight> parameter and waits to the{' '}
          <Highlight>sleep</Highlight>
          function to be resolved after <Highlight>
            (1000 * timer) ms
          </Highlight>{' '}
          and then returns <Highlight>true</Highlight>.
        </P>

        <H2>Finally, making the pizza! 🍕🎉</H2>

        <P>Now that we have all parts to make a pizza, let's make a pizza!</P>

        <Code
          label="./index.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/index.js"
        >{`'use strict'

const sizes = require('./helpers/sizes')
const toppings = require('./helpers/toppings')
const checkToppings = require('./lib/check-toppings')
const isSize = require('./lib/is-size')
const heatPizza = require('./lib/heat-pizza')

module.exports = async ({ size = 'small', topping = [] } = {}) => {
  const pizzas = checkToppings(topping).length

  if (!isSize(size)) {
    const sizesList = sizes.join(', ')
    throw new Error(\`Choose on of these sizes: \${sizesList}.\`)
  }

  if (pizzas <= 0) {
    const toppingsList = toppings.join(', ')
    throw new Error(\`Choose on of these toppings: \${toppingsList}.\`)
  }

  await heatPizza(pizzas)

  return \`Your \${pizzas} \${size} \${checkToppings(topping).length > 1
          ? 'pizzas are'
          : 'pizza is'} ready! \${checkToppings(topping).join(', ')}\`
}`}</Code>

        <P>
          First thing first, we need to require all needed parts to this files.
          That's what I did from line 3 to 7.
        </P>

        <P>
          Since we have to wait to heat the pizza, let's make it an{' '}
          <Highlight>async</Highlight>
          function. This function accepts an object as a parameter that has{' '}
          <Highlight>size</Highlight>
          and <Highlight>topping</Highlight>.
        </P>

        <P>
          I'm{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">
            destructuring
          </Url>{' '}
          the object and using{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters">
            default parameters
          </Url>{' '}
          in case the customer doesn't choose a size.
        </P>

        <H3>Destructuring</H3>
        <P>
          The <Bold>destructuring assignment</Bold> syntax is a JavaScript
          expression that makes it possible to unpack values from arrays, or
          properties from objects, into distinct variables.
        </P>

        <H3>Default parameters</H3>
        <P>
          <Bold>Default function parameters</Bold> allow formal parameters to be
          initialized with default values if no value or{' '}
          <Highlight>undefined</Highlight> is passed.
        </P>

        <P>
          It's the old <Highlight>var size = size || 'small'</Highlight>.
        </P>

        <H2>Check if sizes and toppings are available</H2>

        <P>
          On line 12 to 20, we will use the <Highlight>is-size</Highlight> and{' '}
          <Highlight>check-toppings</Highlight> functions to check the sizes and
          toppings the customer wants. If it fails, we throw an error.
        </P>

        <P>
          If there are no errors, we will <Bold>heat the pizza</Bold>. Life's is
          good! Since <Highlight>heatPizza</Highlight> is waiting for a Promise,
          we have to wait to be resolved and then continue.
        </P>

        <H2>All good, pizza is hot! 🍕🔥</H2>

        <P>Return a message to the customer.</P>

        <P>
          On line 24 we use a{' '}
          <Url href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">
            template literal
          </Url>{' '}
          that is basically a <Highlight>string</Highlight> that allows
          embedding <Highlight>expressions</Highlight>. We just need to enclose
          it with a <Highlight>back-tick (``)</Highlight>.
        </P>

        <Separator />

        <GithubEmbed
          project="bukinoshita/make-pizza"
          description="Making a pizza with ES2015"
        />
      </Post>
    )
  }
}
