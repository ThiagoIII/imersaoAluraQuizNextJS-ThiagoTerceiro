import styled from 'styled-components'
import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground/QuizBackGround'
import QuizContainer from '../src/components/QuizContainer/QuizContainer'
import Widget from '../src/components/Widget/Widgets'
import Footer from '../src/components/Footer/Footer'
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner'

export default function Home() {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>Titulo widget 1</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>Paragrafo wid1</p>
                    </Widget.Content>
                </Widget>
                <Widget>
                    <Widget.Header>
                        <h1>Titulo widget 2</h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>Paragrafo wid1</p>
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl={'https://github.com/ThiagoIII/'} />
        </QuizBackground>
    )
}
