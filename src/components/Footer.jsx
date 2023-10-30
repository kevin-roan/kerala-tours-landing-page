import "./FooterStyles.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Kerala Tours</h1>
          <p> Choose your favourite destination.</p>
        </div>
        <div>
          <a herf="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a herf="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a herf="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a herf="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
        </div>
      </div>
    </div>
  );
}
