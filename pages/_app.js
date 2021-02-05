import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import db from '../db.json'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        /* New styles */
        display: flex;
        flex-direction: column;
        font-family: 'Lato', sans-serif;
        // Deixa branco no começo
        color: ${({ theme }) => theme.colors.contrastText};
    }
    html, body {
        min-height: 100vh;
    }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
`

const { theme } = db

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <title>Alura Imersão NextJS Quiz Thiago Terceiro</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    property="og:title"
                    content="Alura Imersão NextJS Quiz by Thiago Terceiro"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://imersao-alura-quiz-next-js-thiago-terceiro.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="https://wallpapercave.com/wp/wp3388505.jpg"
                />
                <meta
                    property="og:description"
                    content="Alura Imersão NextJS Quiz by Thiago Terceiro"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://imersao-alura-quiz-next-js-thiago-terceiro.vercel.app/"
                />
                <meta
                    property="twitter:title"
                    content="Alura Imersão NextJS Quiz by Thiago Terceiro"
                />
                <meta
                    property="twitter:description"
                    content="Alura Imersão NextJS Quiz by Thiago Terceiro"
                />
                <meta
                    property="twitter:image"
                    content="https://wallpapercave.com/wp/wp3388505.jpg"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
