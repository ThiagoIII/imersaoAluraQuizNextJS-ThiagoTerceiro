import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget/Widgets'
import Link from '../src/components/Link/Link'
import QuizLogo from '../src/components/QuizLogo/QuizLogo'
import QuizBackground from '../src/components/QuizBackground/QuizBackGround'
import Footer from '../src/components/Footer/Footer'
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner'
import Input from '../src/components/Input/Input'
import Button from '../src/components/Button/Button'

const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`

export default function Home() {
    const router = useRouter()
    const [name, setName] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        router.push(`/quiz?name=${name}`)
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>AluraQuiz -{db.title}</title>
            </Head>
            <QuizContainer>
                <QuizLogo />
                <Widget
                    as={motion.section}
                    transition={{ delay: 0, duration: 0.5 }}
                    variants={{
                        show: { opacity: 1, y: '0' },
                        hidden: { opacity: 0, y: '100%' }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <Widget.Header>
                        <h1>{db.title}</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>{db.description}</p>
                        <form onSubmit={e => handleSubmit(e)}>
                            <input
                                name="nomeDoUsuario"
                                onChange={e => setName(e.target.value)}
                                type="text"
                                placeholder="Digite seu nome aqui"
                                value={name}
                            />
                            <Button type="submit" disabled={name.length === 0}>
                                {`Jogar ${name}`}
                            </Button>
                        </form>
                    </Widget.Content>
                </Widget>
                <Widget
                    as={motion.section}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        show: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <Widget.Content>
                        <h1>Quizes da Galera</h1>

                        <ul>
                            {db.external.map(linkExterno => {
                                const [
                                    projectName,
                                    githubUser
                                ] = linkExterno
                                    .replace(/\//g, '')
                                    .replace('https:', '')
                                    .replace('.vercel.app', '')
                                    .split('.')

                                return (
                                    <li key={linkExterno}>
                                        <Widget.Topic
                                            as={Link}
                                            href={`/quiz/${projectName}___${githubUser}`}
                                        >
                                            {`${githubUser}/${projectName}`}
                                        </Widget.Topic>
                                    </li>
                                )
                            })}
                        </ul>
                    </Widget.Content>
                </Widget>
                <Footer
                    as={motion.footer}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        show: { opacity: 1 },
                        hidden: { opacity: 0 }
                    }}
                    initial="hidden"
                    animate="show"
                />
            </QuizContainer>
            <GitHubCorner projectUrl={'https://github.com/ThiagoIII/'} />
        </QuizBackground>
    )
}
