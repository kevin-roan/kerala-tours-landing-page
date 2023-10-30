import "./HeroStyles.scss";

export default function Hero({
  hero_image,
  btnClass,
  title,
  text,
  button_text,
  cName,
}) {
  return (
    <>
      <div className={cName}>
        <img alt="hero-image" src={hero_image} />
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <a className={btnClass}>{button_text}</a>
        </div>
      </div>
    </>
  );
}
