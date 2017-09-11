'use strict'

import { Component } from 'react'

import Post from './../../../layouts/post'
import H2 from './../../../components/h2'
import H3 from './../../../components/h3'
import P from './../../../components/p'
import Bold from './../../../components/bold'
import Url from './../../../components/url'
import Highlight from './../../../components/highlight'
import Code from './../../../components/code'
import GithubEmbed from './../../../components/github-embed'
import Separator from './../../../components/separator'
import BlogPost from './../../../components/blog-post'
import posts from './../../../data/posts'

export default class PartIIHowToCreateANodeModule extends Component {
  render() {
    const { url: { pathname } } = this.props
    const p = pathname.substring(9, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post} url={pathname}>
        <P>
          Vamos aprender como criar um pequeno e simples módulo em node com
          features do ES2015 e mais. Esse é a <Bold>parte 2</Bold> onde vamos
          codar todas as partes para fazer uma pizza. Se você perdeu a{' '}
          <Bold>parte 1</Bold> onde eu escrevo sobre como configurar nosso
          projeto, clique aqui:
        </P>

        <BlogPost post="part-i-how-to-create-a-node-module" isPt={true} />

        <H2>Escolhendo tamanhos e sabores das pizzas</H2>

        <P>
          Para começar, nós precisamos tamanhos e sabores de pizzas disponíveis.
          Então vamos criar, é um simples json onde possui os dados que
          precisamos.
        </P>

        <P>
          Para deixar bem simples, eu adicionei 2 sabores no{' '}
          <Highlight>/helpers/toppings.json</Highlight>. Você adicinar qualquer
          sabor que você quiser.
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
          E para os tamanhos eu adicionei apenas 3 no{' '}
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

        <H2>Verificando se os tamanhos e os sabores estão disponíveis</H2>

        <P>
          Agora que temos alguns dados, nosso próximo passo é verificar se os
          tamanhos e sabores que nosso cliente está pedindo está disponível.
        </P>

        <H3>Verificando tamanhos</H3>

        <P>
          Vamos verificar os tamanhos primeiro no{' '}
          <Highlight>/lib/is-size.js</Highlight>.
        </P>

        <Code
          label="/lib/is-size.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/is-size.js"
        >{`'use strict'

const sizes = require('./../helpers/sizes')

module.exports = size => sizes.includes(size)`}</Code>

        <P>
          O que estamos fazendo aqui? Na <Bold>linha 3</Bold> nós estamos
          importando <Highlight>sizes.json</Highlight> que contem o array de
          tamanhos.
        </P>

        <P>
          Agora, na Then, on <Bold>linha 5</Bold> nós exportamos uma função onde
          recebe um parâmetro size. Assim, nós podemos verificar se no
          <Highlight>sizes.json</Highlight> array <Bold>includes</Bold> o
          parâmetro recebido e retorna umboolean value.
        </P>

        <P>
          Se você não conhece o {' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">
            includes
          </Url>, ele basicamente determina se um array possui um certo elemento
          ou não e retorna um boolean value.
        </P>

        <H3>Verificando sabores</H3>

        <P>
          Nos sabores eu fiz de uma forma diferente para mostrar as diferenças
          entre <Highlight>indexOf</Highlight> e <Highlight>includes</Highlight>.
          Embora ambos retornam o mesmo resultado,{' '}
          <Url href="https://jsperf.com/str-indexof-vs-str-includes">
            indexOf
          </Url>{' '}
          <Url href="https://jsperf.com/str-indexof-vs-str-includes">
            é uma solução mais rápida
          </Url>{' '}
          nesse caso.
        </P>

        <Code
          label="./lib/is-topping.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/is-topping.js"
        >{`'use strict'

const toppings = require('./../helpers/toppings')

module.exports = topping => toppings.indexOf(topping) > -1`}</Code>

        <P>
          Eu fiz quase da mesma forma que eu fiz com o{' '}
          <Highlight>is-size.js</Highlight>, mas dessa vez usando o{' '}
          <Highlight>indexOf</Highlight>. indexOf vai retornar o index da string
          que estamos procurando. Se não achar, irá retornar{' '}
          <Highlight>-1</Highlight>. Por isso checamos se o{' '}
          <Highlight>indexOf</Highlight> do parâmetro recebido é{' '}
          <Bold>maior que -1</Bold>. Essa função também irá retornar um boolean
          value.
        </P>

        <H3>Filtrando sabores</H3>

        <P>
          O cliente pode pedir por um sabor que não está disponível, então
          precisamos filtrar para não incluir esses sabores.
        </P>

        <Code
          label="./lib/check-toppings.js"
          url="https://github.com/bukinoshita/make-pizza/blob/master/lib/check-toppings.js"
        >{`'use strict'

const isTopping = require('./is-topping')

module.exports = topping => topping.filter(t => isTopping(t))`}</Code>

        <P>
          No{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/check-toppings.js">
            /lib/check-toppings.js
          </Url>{' '}
          recembos um array de sabores que é o sabores que o cliente quer. Nós
          usamos o{' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">
            filter
          </Url>{' '}
          para filtrar os sabores e testamos se é um sabor com{' '}
          <Highlight>isTopping</Highlight>.
        </P>

        <P>
          isTopping é a função que acabamos de criar para verificar se o sabor
          está disponível ou não.
        </P>

        <P>
          O método filter irá criar um array novo com todos os elementos que
          passam no teste implementado.
        </P>

        <H2>Aquecer a pizza leva tempo</H2>

        <P>
          Vamos fingir que demora algum tempo para aquecer a pizza. Para fazer
          isso vamos criar{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/sleep.js">
            /lib/sleep.js
          </Url>{' '}
          e{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/heat-pizza.js">
            /lib/heat-pizza.js
          </Url>.
        </P>

        <P>
          No <Highlight>sleep.js</Highlight> nós retornamos uma{' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise">
            Promise
          </Url>{' '}
          que irá resolver depois de um tempo.
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
          No{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/lib/heat-pizza.js">
            /lib/heat-pizza.js
          </Url>{' '}
          nós vamos esperar pelo <Highlight>sleep.js</Highlight> Promise
          resolver.
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
          Nós podemos esperar pela Promise ser resolvida de duas formas
          diferentes. Com o{' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then">
            .then()
          </Url>{' '}
          ou com o{' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await">
            await
          </Url>. Vamos usar o <Highlight>await</Highlight> porque a gente é
          legal!
        </P>

        <P>
          O <Highlight>await</Highlight> é um operador usado para esperar a
          Promise e só pode ser usado dentro de uma função<Highlight>async</Highlight>{' '}
          .
        </P>

        <P>
          O que está acontecendo nessa função é que a função recebe um parâmetro{' '}
          <Highlight>timer</Highlight> e espera pela função{' '}
          <Highlight>sleep</Highlight>
          resolver após<Highlight>(1000 * timer) ms</Highlight> e então retorn{' '}
          <Highlight>true</Highlight>.
        </P>

        <H2>Finalmente, fazendo a pizza! 🍕🎉</H2>

        <P>
          Agora que temos todas as partes prontas para fazer a pizza, vamos
          fazer a pizza!
        </P>

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
          Primeiramente, precisamos importar todas as partes que precisamos
          nesse arquivo. É o que eu fiz da linha 3 até a 7.
        </P>

        <P>
          Como a gente tem que esperar para aquecer a pizza, vamos fazer essa
          função <Highlight>async</Highlight>. Essa função aceita um objeto como
          parâmetro que contem <Highlight>size</Highlight>
          e <Highlight>topping</Highlight>.
        </P>

        <P>
          Estou usando{' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">
            destructuring
          </Url>{' '}
          e{' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/default_parameters">
            default parameters
          </Url>{' '}
          no caso do cliente não escolher um tamanho.
        </P>

        <H3>Destructuring</H3>
        <P>
          O <Bold>destructuring assignment</Bold> é uma expressão JavaScript que
          possibilita extrair dados de arrays ou objetos em variáveis distintas.
        </P>

        <H3>Default parameters</H3>
        <P>
          <Bold>Default function parameters</Bold> permitem que parâmetros
          regulares sejam inicializados com com valores iniciais caso{' '}
          <Highlight>undefined</Highlight> ou nenhum valor seja passado.
        </P>

        <P>
          É o velho<Highlight>var size = size || 'small'</Highlight>.
        </P>

        <H2>Verificar os tamanhos e os sabores disponíveis</H2>

        <P>
          Na linha 12 até 20, nós vamos usar as funções{' '}
          <Highlight>is-size</Highlight> e <Highlight>check-toppings</Highlight>{' '}
          para verificar os tamanhos e sabores que o cliente quer. Se falhar,
          nós retornamos um erro.
        </P>

        <P>
          Se não tiver nenhum erro, nós vamos aquecer a pizza. Como o{' '}
          <Highlight>heatPizza</Highlight> está esperando pela Promise, nós
          temos que esperar a Promise resolver para assim continuar.
        </P>

        <H2>Tudo okay, a pizza está quente! 🍕🔥</H2>

        <P>Retornar uma mensagem para o cliente..</P>

        <P>
          Na linha 24 nós usamos o{' '}
          <Url href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals">
            template literal
          </Url>{' '}
          que basicamente é uma <Highlight>string</Highlight> que permitem
          expressões embutidas. Apenas temos que envolver elas com a{' '}
          <Highlight>crase (``)</Highlight>.
        </P>

        <H2>Leia a parte III</H2>

        <BlogPost post="part-iii-how-to-create-a-node-module" isPt={true} />

        <Separator />

        <GithubEmbed
          project="bukinoshita/make-pizza"
          description="Making a pizza with ES2015"
        />
      </Post>
    )
  }
}
