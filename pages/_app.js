import React from 'react'
import Head from 'next/head';
import { light as t } from '../constants/themes';
import { FirebaseProvider } from '../components/provider';
import Nav from '../components/nav';

function Layout(props) {

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <header>
          <Nav />
        </header>

        <section>
          {props.children}
        </section>

        <footer>
          <p className='container'>
            Created by
            <a href="https://josemorales.me/">
              Jos&eacute; Rafael
            </a>
          </p>
        </footer>
      </main>

      <style>{`
        main {
          display: grid;
          grid-template-rows: auto 1fr auto;
        }
        footer {
          color: ${t.colors.grayWhite};
          background-color: ${t.colors.primary};
          font-weight: bold;
        }
        p a {
          margin-left: .25rem;
        }
      `}</style>
    </>
  )
}

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <FirebaseProvider>
        <Component {...pageProps} />
      </FirebaseProvider>
      <style jsx global>{`

        html {line-height: 1.15;-webkit-text-size-adjust: 100%;}body {margin: 0;}main {display: block;}h1 {font-size: 2em;margin: 0.67em 0;}hr {box-sizing: content-box;height: 0;overflow: visible;}pre {font-family: monospace, monospace;font-size: 1em;}a {background-color: transparent;}abbr[title] {border-bottom: none;text-decoration: underline;-webkit-text-decoration: underline dotted;text-decoration: underline dotted;}b,strong {font-weight: bolder;}code,kbd,samp {font-family: monospace, monospace;font-size: 1em;}small {font-size: 80%;}sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}sub {bottom: -0.25em;}sup {top: -0.5em;}img {border-style: none;}button,input,optgroup,select,textarea {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0;}button,input {overflow: visible;}button,select {text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {border-style: none;padding: 0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {outline: 1px dotted ButtonText;}fieldset {padding: 0.35em 0.75em 0.625em;}legend {box-sizing: border-box;color: inherit;display: table;max-width: 100%;padding: 0;white-space: normal;}progress {vertical-align: baseline;}textarea {overflow: auto;}[type="checkbox"],[type="radio"] {box-sizing: border-box;padding: 0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {height: auto;}[type="search"] {-webkit-appearance: textfield;outline-offset: -2px;}[type="search"]::-webkit-search-decoration {-webkit-appearance: none;}::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}details {display: block;}summary {display: list-item;}template {display: none;}[hidden] {display: none;}html {box-sizing: border-box;font-family: sans-serif;}*,*::before,*::after {box-sizing: inherit;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin: 0;}button {background: transparent;padding: 0;}button:focus {outline: 1px dotted;outline: 5px auto -webkit-focus-ring-color;}fieldset {margin: 0;padding: 0;}ol,ul {list-style: none;margin: 0;padding: 0;}html {font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;}*,*::before,*::after {border-width: 0;border-style: solid;border-color: #e2e8f0;}hr {border-top-width: 1px;}img {border-style: solid;}textarea {resize: vertical;}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color: #a0aec0;}input::-ms-input-placeholder, textarea::-ms-input-placeholder {color: #a0aec0;}input::placeholder,textarea::placeholder {color: #a0aec0;}button,[role="button"] {cursor: pointer;}table {border-collapse: collapse;}h1,h2,h3,h4,h5,h6 {font-size: inherit;font-weight: inherit;}a {color: inherit;text-decoration: inherit;}button,input,optgroup,select,textarea {padding: 0;line-height: inherit;color: inherit;}pre,code,kbd,samp {font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}img,svg,video,canvas,audio,iframe,embed,object {display: block;vertical-align: middle;}img,video {max-width: 100%;height: auto;}

        body {
          color: ${t.colors.grayDark};
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          background: linear-gradient(${t.colors.white}, ${t.colors.grayWhite});
          font-family: ${t.brandFont}, -apple-system, 'Helvetica Neue', 'system-ui', Arial, sans-serif;
          font-size: ${t.sizes.base};
        }

        h1, h2 {
          font-weight: 700;
          color: ${t.colors.grayDark}
        }

        h1, h2, .emoji, .text-shadow {
          text-shadow: ${t.shadows.text};
        }

        .container {
          max-width: 67rem;
          padding: 1rem 2rem;
          margin: 0 auto;
        }

        .rounded { border-radius: .25rem }

        .shadow { box-shadow: ${t.shadows.box} }
        .shadow-md { box-shadow: ${t.shadows.boxMd} }
        .shadow-2xl { box-shadow: ${t.shadows.boxBig} }

        .text-sm { font-size: ${t.sizes.sm} }
        .text-lg { font-size: 1.125rem }
        .text-4xl { font-size: ${t.sizes.large} }
        .text-6xl { font-size: ${t.sizes.biggest} }
      `}</style>
    </Layout>
  )
}

export default App;