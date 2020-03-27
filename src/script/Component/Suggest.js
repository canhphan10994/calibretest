import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

let Recommendation = function(props) {
  const options = {
    items: 4,
    margin: 20,
    dots: false
  };
  return (
    <div className="suggest">
      <h3 className="suggest__head">you may also like</h3>
      <div className="suggest__list">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src="./img/Main Image -11.png" alt="pic" />
            <p>junghans</p>
            <p>£2,800</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -9.png" alt="pic" />
            <p>junghans</p>
            <p>£2,800</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -8.png" alt="pic" />
            <p>junghans</p>
            <p>£2,800</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -10.png" alt="pic" />
            <p>junghans</p>
            <p>£2,800</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -7.png" alt="pic" />
            <p>junghans</p>
            <p>£2,800</p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

let Recently = function(props) {
  const options = {
    items: 5,
    margin: 20,
    dots: false
  };

  return (
    <div className="suggest">
      <h3 className="suggest__head">recently viewed</h3>
      <div className="suggest__list">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src="./img/Main Image -11.png" alt="pic" />
            <p>junghans</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -9.png" alt="pic" />
            <p>junghans</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -8.png" alt="pic" />
            <p>junghans</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -10.png" alt="pic" />
            <p>junghans</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -7.png" alt="pic" />
            <p>junghans</p>
          </div>
          <div className="item">
            <img src="./img/Main Image -5.png" alt="pic" />
            <p>junghans</p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

let Suggest = function(props) {
  return (
    <div className="suggest-wrap">
      <Recommendation />
      <Recently />
    </div>
  );
};

export default Suggest;
