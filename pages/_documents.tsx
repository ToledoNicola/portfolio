import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // recuepro tema attivo nello state management ed imposto classe su body

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument