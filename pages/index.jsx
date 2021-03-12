import React from "react";
import Head from 'next/head';
import Layout from "../components/containers/Layout/Layout";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import axios from "axios";

export async function getStaticProps(context){
  const {data: {data}} = await axios.get('http://localhost:3000/api/projects');

  if(!data){
    return {
      notFound: true
    }
  }

  return {
    props: {projects: data}
  }
}

const App = ({projects}) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Alexis Portfolio</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects}/>
        <Contact />
        <style global jsx>
          {`
            * {
              margin: 0;
              padding: 0;
            }
            html {
              font-size: 62.5%;
            }
            body {
              width: 100vw;
              height: 100vh;
              overflow: hidden;
              font-family: 'Lato', sans-serif;
            }
            a {
              text-decoration: none;
              color: white;
              font-size: 1.5rem;
              font-family: sans-serif;
            }
            ul {
              list-style: none;
            }
            h3 {
              font-size: 5rem;
              text-align: center;
              padding: 2rem 0;
              color: white;
              text-shadow: 2px 2px 5px black;
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default App;
