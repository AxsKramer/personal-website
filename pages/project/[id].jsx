import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/containers/Layout/Layout";
import Image from 'next/image';

const project = () => {

  const [project, setProject] = useState({});
  const router = useRouter();

  useEffect(() => {
    const getProject = async () => {
      const {data: {data: project}} = await axios.get(`/api/projects/${router.query.id}`);
      setProject(project);
    }
    getProject()
  },[router.query.id]);


  return (
    <Layout>
      <Head>
        <title>Project {project.name}</title>
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

      <div className="project">
        <div className='project-image'>
          <Image src={`/images/phone_${project.image}`} width={250} height={450} layout={"fixed"} />
        </div>
        <div className="project__details">
          <p className="project__detail">
            Project name: <span> {project.name}</span>
          </p>
          <p className="project__detail"> 
            Project description: <span> {project.description}</span>
          </p>
          <p className="project__detail">
            Project built for: <span> {project.type}</span>
          </p>
          <p className="project__detail">
            Deployed: <span> {project.deployed}</span>
          </p>
          <p className="project__detail">
            Technologies used: <span> {project.techs}</span>
          </p>
          <div className="icon_link">
            <a href={project.github} target="_blank" title="github">
              <i className="fab fa-github"></i>
            </a>
            <a href={project.website} target="_blank" title="website">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </div>

      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
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
          .project {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100vh;
            justify-content: space-around;
            align-items: center;
            text-align: center;
          }
          .project__details {
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 1rem;
            display: flex;
            height: 450px;
            max-height: fit-content;
            flex-direction: column;
            justify-content: center;
            text-align: start;
          }
          .project__detail {
            padding: 1rem 0;
            font-weight: 700;
            font-size: 1.3rem;
            color: #2587ff;
          }
          .project__detail span{
            font-weight: normal;
            font-size: 1.2rem;
            color: white;
          } 
          .icon_link{
            margin-top: 1rem;
          }

          .icon_link a{
            margin-right: 2rem;
          }
          .icon_link a:hover{
          color: #2587ff;
          }
          .icon_link a i{
           font-size: 3rem;
          }
          @media screen and (max-width: 700px){
            .project-image,
            .project__details {
              width: 95%
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default project;
