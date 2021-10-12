import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html translate="no">
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />

          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="Twitter Creator" key="twhandle" />

          <meta property="og:url" content="https://nextjs-app01-website-pbi7nqqjda-ue.a.run.app" key="ogurl" />
          <meta property="og:image" content="icons/background.svg" key="ogimage" />
          <meta property="og:site_name" content="Move.it" key="ogsitename" />
          <meta property="og:title" content="Move.it" key="ogtitle" />
          <meta property="og:description" content="Move.it" key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}