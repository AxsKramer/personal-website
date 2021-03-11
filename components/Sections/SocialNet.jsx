import Link from 'next/link';

// import platzi from '../../public/images/platzi.svg';

const SocialNet = ({small}) => {
  return ( 
    <div className='icons'>
      <Link href="mailto:kramer.axs1@gmail.com">
        <a  title='Email' ><i className="far fa-envelope icon"></i></a>
      </Link>
      <Link href="https://github.com/AxsKramer" >
        <a title='Github'><i className="fab fa-github icon"></i></a>
      </Link>
      <Link href="https://www.linkedin.com/in/alexis-due%C3%B1as-488976203/" >
        <a title='Linkedin'><i className="fab fa-linkedin icon"></i></a>
      </Link>
      <Link href="https://www.linkedin.com/in/alexis-due%C3%B1as-488976203/" >
        <a title='Slack'><i className="fab fa-slack-hash icon"></i></a>
      </Link>
      {/* <a href="#" title='platzi profile'><img className='platzi-logo' src={platzi} alt="logo platzi"/></a> */}
      
      <style jsx>{`
        .icons{
          text-align: center;
          display: flex;
          flex-direction: ${small ? "row" : "column"};
          justify-content: space-evenly;
          align-items: center;
          width: ${small ? '100%' : '30%'};
          margin: 0 auto;
        }
        .icon{
          font-size: ${small ? "2rem" : "3.5rem"};
          color: white;
        }
        .icon:hover{
          color: #2587ff;
        }
      `}</style>
    </div>
  );
}
 
export default SocialNet;