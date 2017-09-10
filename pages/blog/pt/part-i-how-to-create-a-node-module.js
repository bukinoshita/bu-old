'use strict'

import { Component } from 'react'

import Post from './../../../layouts/post'
import H2 from './../../../components/h2'
import H3 from './../../../components/h3'
import P from './../../../components/p'
import Li from './../../../components/li'
import Ul from './../../../components/ul'
import Bold from './../../../components/bold'
import Url from './../../../components/url'
import Highlight from './../../../components/highlight'
import Code from './../../../components/code'
import GithubEmbed from './../../../components/github-embed'
import Separator from './../../../components/separator'
import BlogPost from './../../../components/blog-post'
import posts from './../../../data/posts'

export default class PartIHowToCreateANodeModule extends Component {
  render() {
    const { url: { pathname } } = this.props
    const url = pathname
    const p = pathname.substring(9, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post} url={url}>
        <P>
          Vamos aprender como criar um pequeno e simples módulo em node com
          features do ES2015 e mais. Esse é a <Bold>parte 1</Bold> onde
          basicamente vamos configurar nosso projeto. Se você quer pular essa
          parte, você pode{' '}
          <Url href="https://github.com/bukinoshita/make-pizza-project">
            clonar o projeto localmente
          </Url>.
        </P>

        <H2>O que vamos criar?</H2>

        <P>
          Nós vamos criar um simple módulo em node para criar uma pizza. Sim, é
          chato. Mas estaremos aprendendo sobre.
        </P>

        <Ul>
          <Li>async/await</Li>
          <Li>destructuring</Li>
          <Li>promises</Li>
          <Li>tests</Li>
          <Li>lint</Li>
          <Li>publicando npm package</Li>
          <Li>semver</Li>
          <Li>continuous integration</Li>
        </Ul>

        <P>E toda essas coisas boas++.</P>

        <H2>O que vamos usar?</H2>

        <Ul>
          <Li>
            <Url href="https://github.com/nodejs/node">nodejs</Url>: Se eu
            lembro bem nodejs adicinou async/await no v7.3.0, então tenha
            certeza que você está nessa versão ou maior. Eu estou usando o
            v8.3.0.
          </Li>
          <Li>
            <Url href="https://www.npmjs.com/">npm</Url>: Estou usando v5.3.0
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

        <H2>Começando</H2>

        <P>
          Primeiro, vamos {' '}
          <Url href="https://github.com/new">criar um repositório novo</Url> no
          Github, clone e rode <Highlight>yarn init</Highlight> ou{' '}
          <Highlight>npm init</Highlight> para criar um package.json básico para
          seu projeto.
        </P>

        <Code>$ yarn init</Code>

        <P>
          Agora que você tem um package.json básico, você pode instalar as
          dependências que iremos usar.
        </P>

        <Code>$ yarn add — dev ava eslint-config-prettier xo</Code>

        <P>
          Seu package.json deve parecer assim. Eu adicionei o{' '}
          <Highlight>test</Highlight> script com{' '}
          <Highlight>xo --quiet && ava</Highlight> então toda vez que você rodar{' '}
          <Highlight>$ yarn test</Highlight> ele vai rodar os dois, XO e AVA. A
          vida é boa.
        </P>

        <P>
          Eu também extendi o XO com uma configuração para usar o {' '}
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
  }
  "devDependencies": {
    "ava": "^0.22.0",
    "eslint-config-prettier": "^2.3.0",
    "xo": "^0.18.2"
  },
  "xo": {
    "extends": ["prettier"]
  }
}`}</Code>

        <H2>Organizando o projeto</H2>

        <P>
          Okay, nós precisamos decidir como vamos fazer a pizza e os comandos
          que devemos ter. Vamos deixar bem simples, então vamos ter apenas
          <Highlight>sabor</Highlight>, <Highlight>tamanho</Highlight> and{' '}
          <Highlight>aquecimento</Highlight>.
        </P>

        <H3>Sabor</H3>

        <P>Uma lista de todos os sabores disponíveis.</P>

        <H3>Tamanho</H3>

        <P>Uma lista com todos os tamanhos disponíveis.</P>

        <H3>Aquecimento</H3>

        <P>Uma função para aquecer a pizza. Sério!</P>

        <P>Com isso em mente, vamos criar as pastas e os arquivos.</P>

        <Code
        >{`$ mkdir lib helpers example && touch index.js test.js lib/check-toppings.js lib/heat-pizza.js lib/is-size.js lib/is-topping.js lib/sleep.js helpers/sizes.json helpers/toppings.json example/index.js`}</Code>

        <P>
          Nós criar 3 pastas: <Highlight>lib</Highlight> ,{' '}
          <Highlight>helpers</Highlight> and <Highlight>example</Highlight>.
        </P>

        <H3>/lib</H3>

        <P>Na past lib criamos esses arquivos:</P>

        <Ul>
          <Li>
            check-toppings.js: Para separar os sabores que não estão disponíveis
            dos que estão.
          </Li>
          <Li>heat-pizza.js: Para aquecer a pizza.</Li>
          <Li>
            is-size.js: Para verificar se o tamanho da pizza está disponível ou
            não.
          </Li>
          <Li>
            is-topping.js: Para verificar se o sabor está disponível ou não.
          </Li>
          <Li>
            sleep.js: Uma promise que espera <Highlight>x ms</Highlight> para
            resolver.
          </Li>
        </Ul>

        <H3>/helpers</H3>

        <Ul>
          <Li>sizes.json: array com os tamanhos disponíveis.</Li>
          <Li>toppings.json: array com os sabores disponíveis.</Li>
        </Ul>

        <P>
          <Highlight>index.js</Highlight> na raiz do projeto onde vamos codar a
          função principal para fazer a pizza. <Highlight>test.js</Highlight>{' '}
          também na raiz onde vamos escrever os testes. E{' '}
          <Highlight>/example</Highlight> onde vamos colocar um pequeno exemplo
          depois.
        </P>

        <H2>Leia a Parte II e Parte III</H2>

        <BlogPost post="part-ii-how-to-create-a-node-module" isPt={true} />

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
