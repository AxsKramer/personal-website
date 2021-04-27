import React from "react";
import loadable from '@loadable/component';
import Head from 'next/head';
import Layout from "../components/containers/Layout/Layout";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Contact from "../components/Sections/Contact";
import {get} from "axios";
import Spinner from '../components/Spinner';
import Phrase from "../components/Sections/Phrase";

const Projects = loadable(() => import('../components/Sections/Projects'), {
  fallback: <Spinner />
});


export async function getServerSideProps(context) {
  const {
    data: { data },
  } = await get("https://axs-react-dev.vercel.app/api/projects");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: data },
  };
}


const App = ({ projects }) => {
  return (
    <>
    <Head>
      <title>Alexis Dueñas Portfolio</title>
    </Head>
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Phrase />
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
            font-family: "Lato", sans-serif;
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
