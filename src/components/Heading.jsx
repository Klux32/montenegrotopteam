const Heading = ({ title, style }) => {
  return (
    <div className={`heading ${style}`}>
      <h2 className="heading__front">{title}</h2>
    </div>
  );
};

export default Heading;
