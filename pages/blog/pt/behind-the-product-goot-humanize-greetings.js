'use strict'

import { Component } from 'react'
import goot from 'goot'
import spacetime from 'spacetime'

import Post from './../../../layouts/post'
import H2 from './../../../components/h2'
import H3 from './../../../components/h3'
import P from './../../../components/p'
import Bold from './../../../components/bold'
import Image from './../../../components/image'
import Url from './../../../components/url'
import Highlight from './../../../components/highlight'
import GithubEmbed from './../../../components/github-embed'
import posts from './../../../data/posts'

export default class GootHumanizeGreeting extends Component {
  render() {
    const now = spacetime().hour()
    const g = goot(now, 'pt')
    const greeting = g === 'dia' ? `bom ${g}` : `boa ${g}`
    const { url: { pathname } } = this.props
    const p = pathname.substring(9, pathname.length)
    const post = posts.filter(({ id }) => id === p)[0]

    return (
      <Post post={post} url={pathname}>
        <P>
          Hey, <strong>{greeting}</strong>!
        </P>
        <P>
          Assim que o projeto começa. Apenas dizendo{' '}
          <Highlight>bom dia</Highlight>, <Highlight>boa tarde</Highlight> ou{' '}
          <Highlight>boa noite</Highlight> baseado em seu fuso horário. Se você
          está lendo esse post de manhã, você verá um <Bold>bom dia</Bold> no
          começo, se você estiver lendo a tarde, você verá um{' '}
          <Bold>boa tarde</Bold> e se você estiver lendo... okay, você entendeu!
        </P>
        <P>
          Eu sei que pode soar bobo, é apenas um módulo que retona uma{' '}
          <Highlight>string</Highlight>. É por isso que esse projeto é um dos
          meus favoritos, porque é tão simples e pode fazer a diferença para os
          usuário que estão vendo isso em seu site.
        </P>
        <P>
          Os pequenos detalhes como um simples bom dia quando está de manhã para
          seus usuário. Eles podem se sentir mais humanos quando estão usando
          seu site e não se sentirem que estão conversando com um robô porque
          tem um pequeno toque humano em um simples bom dia.
        </P>
        <P>
          É o que nós estamos tentando fazer com a tecnologia. Por exemplo{' '}
          <Highlight>inteligência artificial</Highlight> como{' '}
          <Highlight>Siri</Highlight>. Apple vem trabalhando bastante com AI
          para fazer o Siri soar mais humano. Ou até menos o{' '}
          <Highlight>Google Assistant</Highlight> com uma conversa mais natural.
        </P>
        <H2>De onde veio a ideia?</H2>
        <P>
          Eu estava olhando o <Url href="https://dribbble.com">Dribbble</Url> {' '}
          quando eu vi um redesign do login do Facebook. Eu curti, era simple e
          certo. A imagem tinha uma mensagem de boas vindas{' '}
          <Highlight>Boa tarde! ...</Highlight>. E isso chamou minha atenção, eu
          achei que seria legal criar algo para dar boas vindas aos usuários
          baseado no fuso horário dele. Uma mensagem simples de boas vindas.
        </P>
        <Image
          src={`/static/posts/${post.id}/facebook.png`}
          label="Facebook Redesign [Sign in on Desktop] by Pedro Henrique Marques"
        />
        <H2>Criando goot!</H2>
        <H3>v0.0.1</H3>
        <P>
          No <Highlight>v0.0.1</Highlight> goot era muito mais simple do que é
          hoje. Era apenas uma função que retornava uma `string` sem nenhum
          parâmetro. Goot tentava pegar o horário certo e retornava uma
          mensagem, estava funcionando bem até eu por em um site demo,{' '}
          <Url href="https://github.com/bukinoshita/goot-web">goot-web</Url>.
        </P>
        <P>
          Eu estava tendo problemas para rodar o `goot` com React localmente e
          quando eu colocava em produção onde retornava dois horários
          diferentes.
        </P>
        <H3>v0.0.2 & v0.0.3</H3>
        <P>
          <Highlight>v0.0.2</Highlight> e <Highlight>v0.0.3</Highlight> foi
          apenas para deixar a API mais estável, arrumar alguns bugs e adicionar
          testes.
        </P>
        <H3>v0.0.4</H3>
        <P>
          No <Highlight>v0.0.4</Highlight> eu adicionei um parâmetro na função
          onde o desenvolvedor pode passar o horário e o goot apenas retorna uma
          mensagem baseado nesse horário. Apenas para tornar as coisas mais
          fáceis e não ficar tentando adivinhar o horário certo de cada fuso
          horário.
        </P>
        <H3>v0.0.5</H3>
        <P>
          Esse foi um ótimo release para mim. Eu adicionei suporte para
          diferentes línguas como <Bold>português</Bold>, <Bold>espanhol</Bold>,{' '}
          <Bold>françês</Bold> e <Bold>alemão</Bold>.
        </P>
        <Image
          src={`/static/posts/${post.id}/goot-web.png`}
          label="`goot-web` with different languages support built with React"
        />
        <H3>v0.0.6 & v0.0.7</H3>

        <P>
          No <Highlight>v0.0.6</Highlight> e <Highlight>v0.0.7</Highlight> foram
          apenas para arrumar alguns bugs e melhoramentos. E eu lançei o
          `goot-web` com um design novo e mais simples.
        </P>

        <Image
          src={`/static/posts/${post.id}/cover.png`}
          label="new `goot-web`"
        />

        <H2>O futuro do goot</H2>

        <P>
          Eu vim usando o `goot` em alguns{' '}
          <Url href="https://github.com/bukinoshita/goot#example">
            projetos
          </Url>{' '}
          que eu fiz e funcionou muito bem. Agora o `goot` retorna uma `promise`
          que é algo que eu não gosto muito, seria muito mais fácil se
          retornasse uma `string` já que o `goot` não precisa de `promises`.
          Isso sendo dito, no próximo release
          <Highlight>v1.0.0</Highlight> (major release) onde eu farei a API mais
          estável e fácil de usar. ❤️
        </P>

        <P>
          Faça uma tentativa com goot em seus projetos também! É bem fácil de
          usar, código{' '}
          <Url href="https://github.com/bukinoshita/goot">aqui</Url>.
        </P>

        <GithubEmbed
          project="bukinoshita/goot"
          description="Goot humazine greetings 👋"
        />
      </Post>
    )
  }
}
