import Image from "next/image";

const ProfilePicture = () => (
  <figure className="figure">
    <Image
      src="/images/me1.png"
      layout="fixed"
      width={150}
      height={150}
      alt="Me"
    />
    
    <style jsx>{`
      .figure {
        border-radius: 50%;
        border: 2px solid white;
        background: rgba(0, 0, 0, 0.5);
        min-height: 150px;
        min-width: 150px;
        width: 150px;
        height: 150px;
        box-shadow: 1px 1px 12px 1px white, -1px -1px 12px 1px white;
        overflow: hidden;
        transition: transform 0.5s;
      }

      .figure:hover {
        transform: scale(1.3);
      }
      @media screen and (max-width: 700px){
        .figure{
          width: 120px;
          height: 120px;
          min-height: 120px;
          min-width: 120px;
        }
      }
    `}</style>
  </figure>
);

export default ProfilePicture;
