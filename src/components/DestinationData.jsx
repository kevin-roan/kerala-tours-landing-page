import "./DestinationStyles.scss";

const DestinationData = ({ image1, image2, context, heading, classname }) => {
  console.log(classname);
  return (
    <>
      <div className={classname}>
        <div className="des-text">
          <h2>{heading}</h2>
          <p>{context}</p>
        </div>
        <div className="images">
          <img alt="destination-image" src={image1} />
          <img alt="destination-image" src={image2} />
        </div>
      </div>
    </>
  );
};

export default DestinationData;
