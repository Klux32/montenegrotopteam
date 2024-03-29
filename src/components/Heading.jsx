const Heading = ({ title, style }) => {
  return (
    <div className={`heading ${style}`}>
      {/* <h3 className='heading__back'>{title}</h3> */}
      <h2 className="heading__front">{title}</h2>
    </div>
  );
};

export default Heading;
