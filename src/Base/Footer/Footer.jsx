import React from "react";
import {
  facebookIcon,
  instaIcon,
  pinterestIcon,
  twitterIcon,
  youtubeIcon,
} from "Base/SVG";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__bg">
        <img src={process.env.PUBLIC_URL + "/images/footer.png"} alt="footer" />
      </div>
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footerInfo">
            <div className="footerInfo__logo">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="logo"
              />
            </div>
            <p>
              Founded in 1998, CozyStay Lodge is a luxury boutique hotel in the
              heart of Napa Valley, immersing you in an idyllic setting against
              the pure sky. Stay, sip, and savor the best of Napa wine country
              at CozyStay.
            </p>
            <div className="footerInfo__socials">
              <a href="https://www.facebook.com">{facebookIcon}</a>
              <a href="https://www.facebook.com">{twitterIcon}</a>
              <a href="https://www.facebook.com">{pinterestIcon}</a>
              <a href="https://www.facebook.com">{youtubeIcon}</a>
              <a href="https://www.facebook.com">{instaIcon}</a>
            </div>
          </div>
          <div className="footerNav">
            <div className="footerNav__main">
              <div className="footerNav__reach">
                <h4 className="uniq">Reach Out</h4>
                <p>
                  Email:{" "}
                  <a href="mailto:info@cozystay.com">info@cozystay.com</a>
                </p>
                <p>
                  Telephone: <a href="tel:41223456689">+41 22 345 66 89</a>
                </p>
                <p>Address: 322 Main Street, Napa, CA 94559</p>
              </div>
              <div className="footerNav__gate">
                <h4 className="uniq">Navigate</h4>
                <Link to="">Accommodations</Link>
                <Link to="">Our Story</Link>
                <Link to="">Contact Us</Link>
                <Link to="">Services</Link>
              </div>
            </div>
            <div className="footerNav__links">
              <div className="footerNav__links-item">
                <Link to="">ABRUZZO</Link>
                <Link to="">ALBANIA</Link>
                <Link to="">BASILICATA</Link>
                <Link to="">CALABRIA</Link>
                <Link to="">CAMPANIA</Link>
                <Link to="">CORSICA</Link>
                <Link to="">CROAZIA</Link>
                <Link to="">CROCIERE</Link>
              </div>
              <div className="footerNav__links-item">
                <Link to="">EMILIAROMAGNA</Link>
                <Link to="">GRECIA</Link>
                <Link to="">LAMPEDUSA</Link>
                <Link to="">LOMBARDIA</Link>
                <Link to="">MARCHE</Link>
                <Link to="">MARE ESTERO</Link>
                <Link to="">PUGLIA</Link>
                <Link to="">SARDEGNA</Link>
              </div>
              <div className="footerNav__links-item">
                <Link to="">SICILIA</Link>
                <Link to="">SLOVENIA</Link>
                <Link to="">LAMPEDUSA</Link>
                <Link to="">TOSCANA</Link>
                <Link to="">TRENTINO</Link>
                <Link to="">VALLE D'AOSTA</Link>
                <Link to="">VENETO</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopy">
        <div className="auto__container">
          <div className="footerCopy__inner">
            <p>All rights reserved, Hele LLC. 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
