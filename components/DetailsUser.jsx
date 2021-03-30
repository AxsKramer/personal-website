const DetailsUser = () => {
  return (
    <>
      <h3 className="name">Alexis Dueñas Aviña</h3>
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>
        <span>Guadalajara, Jalisco, Mexico</span>
      </div>
      
      <style jsx>{`
        .name {
          color: white;
          margin: 0;
          font-size: 1.5rem;
        }
        .location {
          color: white;
          padding-bottom: 2rem;
        }
        .location i {
          margin-right: 1rem;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default DetailsUser;
