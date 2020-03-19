import React from "react";

let Footer = function(props) {
  return (
    <footer>
      <div className="footer__address">
        <h3>calibre</h3>
        <address>
          call us
          <br />
          +44 (0)10 2345 6789
          <br />
          EMAIL CUSTOMER CARE
        </address>
      </div>
      <div className="footer__links">
        <ul>
          <li>
            <a href="#">STYLE & FIT ADVICE</a>
          </li>
          <li>
            <a href="#">FAQS</a>
          </li>
          <li>
            <a href="#">DELIVERY</a>
          </li>
          <li>
            <a href="#">EXCHANGES & RETURNS</a>
          </li>
          <li>
            <a href="#">TERMS & CONDITIONS</a>
          </li>
          <li>
            <a href="#">PRIVACY & COOKIES</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
          <li>
            <a href="#">AFFILIATES</a>
          </li>
          <li>
            <a href="#">ADVERTISING</a>
          </li>
        </ul>
      </div>
      <div className="footer__contact">
        <p>SIGN UP FOR OUR NEWSLETTER</p>
        <form>
          <input type="text" placeholder="Your Email" />
          <a href="#">submit</a>
        </form>
        <div className="socials">
          <img src="./img/fb svg.svg" alt="socials" />
          <img src="./img/twittersvg.svg" alt="socials" />
          <img src="./img/instasvg.svg" alt="socials" />
          <img src="./img/ytbsvg.svg" alt="socials" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
