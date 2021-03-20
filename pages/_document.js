import Document, { Html, Head, Main, NextScript } from "next/document";
import image from '../public/images/portfolio.png';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta
            name="description"
            content="Alexis Dueñas Aviña porfolio, React Developer, discover what my skills and knowledge are to be able to work together and create something new."
          />
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
            content={image}
          />
          <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
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
