import {Provider} from 'next-auth/client'
import SignUpProvider from '../context/SignUpContext'
import SignInProvider from '../context/SignInContext'
import { createGlobalStyle } from 'styled-components'

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
        <SignUpProvider>
        <SignInProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </SignInProvider>
        </SignUpProvider>
        </Provider> //passing user session to pages
    )
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gotham Rounded 500';
        src: url('../assets/fonts/GothamRounded-Medium.woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham Rounded Bold Italic';
        src: url('../assests/fonts/GothamRounded-BoldItalic.woff');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham Rounded 300';
        src: url('..assets/fonts/GothamRounded-Light.woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham Rounded Bold';
        src: url('../assets/fonts/GothamRounded-Bold.woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham Rounded Italic';
        src: url('../assets/fonts/GothamRounded-LightItalic.woff');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham Rounded Book';
        src: url('../assets/fonts/GothamRounded-Book.woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Gotham Rounded Italic 500';
        src: url('../assets/fonts/GothamRounded-MediumItalic.woff');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Gotham Rounded', sans-serif, Arial, Helvetica;
    }

  
`
