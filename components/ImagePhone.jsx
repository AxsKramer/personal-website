import loadable from '@loadable/component';
import Spinner from './Spinner';

const PhoneImage = loadable(() => import('next/image'), {
  fallback: <Spinner />
});

const ImagePhone = ({image}) => {
  return (
    <div className="project__image">
      <PhoneImage
        src={image}
        width={250}
        height={450}
        layout={"fixed"}
      />
    </div>
  );
};

export default ImagePhone;
