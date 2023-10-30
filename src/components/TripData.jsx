import "./TripStyles.scss";

const TripData = ({ image, heading, text }) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="trip image" src={image} />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
};
export default TripData;
