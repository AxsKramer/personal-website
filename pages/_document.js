import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="React Developer Alexis Dueñas Aviña, know my projects and my skills and let´s start to work together to create something new" />
          <meta name="keywords" content="React dev, portfolio, Web dev, developer, jr, Alexis" />
          <meta name="author" content="Alexis Dueñas Aviña" />
          <link rel="canonical" href="https://axs-react-dev.vercel.app/" />
          <meta
            property="og:url"
            content="https://axs-react-dev.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Alexis Dueñas Aviña" />
          <meta property="og:title" content="React Developer with MERN Stack" />
          <meta
            property="og:description"
            content="Find my best works and contact me to develop something amazing together"
          />
          <meta
            property="og:image"
            content='/images/portfolio.png'
          />
          <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
