import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li>
          <Link href="/#home">
            <a className="navbar__menu--item">
              <i className="fab fa-react"></i> Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a className="navbar__menu--item">
              <i className="fab fa-react"></i> About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#skills">
            <a className="navbar__menu--item">
              <i className="fab fa-react"></i> Skills
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a className="navbar__menu--item">
              <i className="fab fa-react"></i> Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a className="navbar__menu--item">
              <i className="fab fa-react"></i> Contact
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          width: 100%;
          margin-top: 1rem;
        }
        .navbar__menu li {
          margin: 0 auto;
          width: 50%;
          padding: 2rem 0;
          text-align: justify;
        }
        .navbar__menu--item:hover {
          font-weight: bold;
        }
        .navbar__menu--item:hover .fa-react{
          opacity: 1;
        }

        .fa-react{
          color: #2587ff;
          opacity: 0;
        }

        @media screen and (max-width: 700px){
          .navbar__menu li{
            text-align: center;
          }
          .navbar__menu li a{
            font-size: 1.6rem;
            font-weight: bold;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
