import Head from 'next/head';
import {get} from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/containers/Layout/Layout";
import ImagePhone from '../../components/ImagePhone';

const project = () => {

  const [project, setProject] = useState({});
  const router = useRouter();

  useEffect(() => {
    const getProject = async () => {
      const {data: {data: project}} = await get(`https://axs-react-dev.vercel.app/api/projects/${router.query.id}`);
      setProject(project);
    }
    getProject()
  },[router.query.id]);


  return (
    <>
    <Head>
      <title>{project.name}</title>
    </Head>
    <Layout>
      <div className="project">
        <div className="project__details">
          <p className="project__detail">
            Project name:   <span> {project.name}</span>
          </p>
          <p className="project__detail"> 
            Project description:   <span> {project.description}</span>
          </p>
          <p className="project__detail">
            Project built for:   <span> {project.type}</span>
          </p>
          <p className="project__detail">
            Deployed:   <span> {project.deployed}</span>
          </p>
          <p className="project__detail">
            Technologies used:   <span> {project.techs}</span>
          </p>
          <div className="icon_link">
            <a href={project.github} rel="noreferrer" rel="noopener" target="_blank" title="github">
              <i className="fab fa-github"></i>
            </a>
            <a href={project.website} rel="noreferrer" rel="noopener" target="_blank" title="website">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
        <ImagePhone image={`/images/phone_${project.image}`}  className='image-project'/>
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
            max-height: fit-content;
            justify-content: space-evenly;
            align-items: center;
            background: rgba(0, 0, 0, 0.8);
            padding: 2rem 0;
          }
          .project__image div img{
            opacity: 0;
            animation: scaleImage 1s 1s ease forwards;
          }
          .project__details {
            color: white;
            padding: 2rem 1rem;
            display: flex;
            max-height: fit-content;
            flex-direction: column;
            text-align: justify;
            width: 320px;
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
            padding-left: 1rem;
          } 
          .project__image{
            text-align: center;
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
            .project {
              height: fit-content;
            }
          }

          @keyframes scaleImage {
            0%{
              opacity: 0;
              transform: scale(0);
            }
            100%{
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Layout>
    </>
  );
};

export default project;
