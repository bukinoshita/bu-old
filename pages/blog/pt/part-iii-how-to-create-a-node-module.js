'use strict'

import { Component } from 'react'

import Post from './../../../layouts/post'
import H2 from './../../../components/h2'
import H3 from './../../../components/h3'
import P from './../../../components/p'
import Bold from './../../../components/bold'
import Url from './../../../components/url'
import Ul from './../../../components/ul'
import Li from './../../../components/li'
import Highlight from './../../../components/highlight'
import Image from './../../../components/image'
import Code from './../../../components/code'
import GithubEmbed from './../../../components/github-embed'
import Separator from './../../../components/separator'
import BlogPost from './../../../components/blog-post'
import posts from './../../../data/posts'

export default class PartIIIHowToCreateANodeModule extends Component {
  render() {
    const { url: { pathname } } = this.props
    const p = pathname.substring(9, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post} url={pathname}>
        <P>
          Vamos aprender como criar um pequeno e simples módulo em node com
          features do ES2015 e mais. Esse é a <Bold>parte 3</Bold> onde eu vou
          mostrar os testes, continuous integration e publicando um módulo node.
          Se você perdeu a <Bold>parte 1</Bold> e <Bold>parte 2</Bold>, leia
          aqui:
        </P>

        <BlogPost post="part-i-how-to-create-a-node-module" isPt={true} />

        <BlogPost post="part-ii-how-to-create-a-node-module" isPt={true} />

        <H2>
          Antes de publicar é sempre bom ter certeza que funciona do jeito que
          esperamos
        </H2>

        <P>
          Agora que temos tudo pronto e funcionando, a gente pode criar alguns
          testes para ter certeza que está funcionando do jeito que a gente
          espera. Algumas pessoas escolhem criar os testes no começo, antes de
          escrever qualquer código. Isso não funciona pra mim, mas é só uma
          preferência pessoal.
        </P>

        <P>
          Por uma questão de simplicidade eu só vou testar a função principal
          que é a que está na raiz do projeto, <Highlight>./index.js</Highlight>.
        </P>

        <P>
          Antes de escrever qualquer teste é bom decidir o que iremos testar.
          Nós sabemos que iremos testar a função principal, e que o output
          esperado é uma messagem dizendo que as pizzas que eu pedi estão
          prontas.
        </P>

        <Image src="https://cdn-images-1.medium.com/max/800/1*4WtKyOUGp6dPxxxwnFTBoA.gif" />

        <Ul>
          <Li>
            Ter certeza que retorna uma mensagem dizer que a pizza que eu pedi
            está pronta com os sabores e tamanho que escolhi.
          </Li>
          <Li>
            Ter certeza que funciona com diferentes tamanhos e mais de um sabor.
          </Li>
          <Li>
            Ter certeza que retorna um error se o tamanho não estiver
            disponível.
          </Li>
        </Ul>

        <H3>
          Ter certeza que retorna uma mensagem dizer que a pizza que eu pedi
          está pronta com os sabores e tamanho que escolhi
        </H3>

        <P>
          No primeiro post, a gente instalou <Highlight>AVA</Highlight> para
          rodar nossos testes. Se você não está familiar com{' '}
          <Highlight>AVA</Highlight> dê uma olhada no repositório deles e na
          documentação só para se familiarizar.
        </P>

        <Code
          label="./test.json — `lines 21:25`"
          url="https://github.com/bukinoshita/make-pizza/blob/master/test.js#L21-L25"
        >{`test('when making one small BBQ Chicken pizza', async t => {
  const pizza = await m({ size: 'small', topping: ['BBQ Chicken'] })

  t.is(pizza, 'Your 1 small pizza is ready! BBQ Chicken')
})`}</Code>

        <P>
          Para criar um teste você chama a função
          <Highlight>test</Highlight> que você importou do AVA. O primeiro
          argumento tem que ser o <Highlight>t</Highlight>.
        </P>

        <P>
          No primeiro teste, eu criei uma <Highlight>const</Highlight> chamada
          pizza onde ele espera pela função ser resolvida.
        </P>

        <P>
          <Highlight>t.is(value, expected, [message])</Highlight> afirma que{' '}
          <Highlight>value</Highlight> é o mesmo que{' '}
          <Highlight>expected</Highlight>. Então a gente afirma que o valor
          resolvido em <Highlight>pizza</Highlight> é o mesmo que a{' '}
          <Highlight>string</Highlight> esperada.
        </P>

        <H3>
          Ter certeza que funciona com diferentes tamanhos e mais de um sabor
        </H3>

        <P>
          Esse teste deve ser do mesmo jeito que fizemos o primeiro teste, mas
          ao invés de usar apenas{' '}
          <Highlight>topping: ['BBQ Chicken']</Highlight>, você deveria
          adicionar mais um sabor e mudar o tamanho da pizza.
        </P>

        <H3>
          Ter certeza que retorna um error se o tamanho não estiver disponível
        </H3>

        <P>
          Dessa vez precisamos ter certeza que nossa função retorna um erro
          quando o cliente escolhe um tamanho que não está disponível.
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
          afirma que a <Highlight>função</Highlight> retorna um erro ou a{' '}
          <Highlight>promise</Highlight> rejeita com um erro.
        </P>
        <P>
          Da mesma que esperamos a promise resolver, aqui a gente tem que
          esperar pela função retornar um error porque{' '}
          <Highlight>tamanho</Highlight> <Bold>`a`</Bold> não está disponível.
        </P>
        <P>
          A gente usa <Highlight>t.is()</Highlight> de novo para afirma que o{' '}
          <Highlight>error.message</Highlight> é o mesmo que a string esperada.
        </P>
        <P>
          Você pode criar quantos testes você quiser. Isso aqui é apenas uma
          introdução de como testar com AVA.
        </P>

        <H2>Continuous Integration</H2>

        <P>
          Bem, continuous integration é ótimo! Se você não está usando, você
          deveria tentar. Iraá ajuda você automatizar seus testes e deployments.
        </P>

        <P>
          Embora <Url href="https://circleci.com/">CircleCI</Url> é o que eu
          mais gosto, nós vamos estar configurando CI com{' '}
          <Url href="https://travis-ci.org/">Travis-CI</Url>.
        </P>

        <P>
          Tenha certeza de criar um conta no Travis com sua conta do Github e
          sincronize seus repositórios.
        </P>

        <Image src="https://cdn-images-1.medium.com/max/800/1*I99GA_cHEPFSsuqP2qZMFA.png" />

        <P>
          Agora que você tem seus repositórios configurado com o Travis, você
          precisa criar um arquivo{' '}
          <Url href="https://github.com/bukinoshita/make-pizza/blob/master/.travis.yml">
            .travis.yml
          </Url>{' '}
          na raiz do seu projeto.
        </P>

        <Code
          label="./.travis.yml"
          url="https://github.com/bukinoshita/make-pizza/blob/master/.travis.yml"
        >{`language: node_js
node_js:
  - '7'
  - '8'`}</Code>

        <P>
          A linguagem e a versão para ser testada. Como async/await foi
          adicionado no node v7.3 nós não queremos rodar os testes no node menor
          que 7, ou os testes irão falhar.
        </P>

        <P>
          Dê um push com as mudanças pro Github e Travis automaticamente vai
          rodar os testes.
        </P>

        <P>
          Se você quiser, você pode adicionar um script para fazer deploy depois
          que os testes passarem.{' '}
          <Url href="https://docs.travis-ci.com/user/languages/javascript-with-nodejs/">
            Veja aqui
          </Url>.
        </P>

        <H2>Publicando um módulo node</H2>

        <P>
          Com todos o meus módulos, eu sempre publico eles usando{' '}
          <Url href="https://github.com/sindresorhus/np">np</Url>.{' '}
          <Highlight>np</Highlight> é um melhor{' '}
          <Highlight>npm publish</Highlight>. E aqui o porque:
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
          Olhe a documentação no{' '}
          <Url href="https://github.com/sindresorhus/np">repositório</Url> deles
          para instalar e usar. O UI interative deles é bem fácil de usar.
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
