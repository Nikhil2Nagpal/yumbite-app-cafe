import "./footer.css";

function Footer() {
  return (
    <div className="footer-first">
      <div className="footer-second">
        <div className="footer-third">
          <h2>
            Yum<span className="f-h2">Bite</span>
          </h2>
          <p>@ YumBite 2023 Tech pvt. ltd</p>
        </div>
        <div className="footer-third">
          <h2>Company</h2>
          <div className="footer-third-name">
            <p>About</p>
            <p>Careers</p>
            <p>Team</p>
            <p>YumBite Corporate</p>
          </div>
        </div>
        <div className="footer-third">
          <h2>Contact us</h2>
          <div className="footer-third-name">
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
        </div>
        <div className="footer-third">
          <h2>Available in</h2>
          <div className="footer-third-name">
            <p>Delhi</p>
            <p>Banglore</p>
            <p>Ambala</p>
            <p>Gujrat</p>
          </div>
        </div>
        <div className="footer-third">
          <h2>Connect Yum<span className="f-h2">Bite</span></h2>
          <div className="footer-third-name">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram"></i> Instagram
            </a>

            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook"></i> Facebook
            </a>

            <a href="mailto:youremail@example.com">
              <i className="fa fa-envelope"></i> Email
            </a>

            <a href="tel:+919876543210">
              <i className="fa fa-phone"></i> +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
