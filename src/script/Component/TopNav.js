import React from "react";
import {
  MyAccountOverlay,
  WishListOverlay,
  ShoppingBagOverlay
} from "./Overlay";

import { Link } from "react-router-dom";

let Search = function(props) {
  return (
    <div className="search">
      <form>
        <span>
          <img src="./img/Search Glyph.svg" alt="Search" />
        </span>
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
};

let clickOverlay = function(e) {
  let eTarget = e.target.getAttribute("alt");
  let listOverlay = document.querySelectorAll(".overlay");
  for (let i = 0; i < 3; i++) {
    listOverlay[i].classList.remove("showOverlay");
  }

  if (eTarget.includes("acc")) listOverlay[0].classList.add("showOverlay");
  if (eTarget.includes("wish")) listOverlay[1].classList.add("showOverlay");
  if (eTarget.includes("shop")) listOverlay[2].classList.add("showOverlay");
};

let TopSide = function(props) {
  return (
    <div className="topSide">
      <div className="mAccount">
        <img
          src="./img/Bag AA-1.png"
          alt="account icon"
          onClick={clickOverlay}
        />
        <MyAccountOverlay />
      </div>
      <div className="wList">
        <img
          src="./img/star_border_24px_outlined.png"
          alt="wish list icon"
          onClick={clickOverlay}
        />
        <WishListOverlay />
      </div>
      <Link to="/bag">
        <div className="sBag">
          <img src="./img/Bag AA-1.png" alt="shopping bag icon" />
          <ShoppingBagOverlay />
        </div>
      </Link>
    </div>
  );
};

let TopNav = function(props) {
  return (
    <div className="topNav-wrap">
      <h1>
        <Link to="/" style={{ color: "black" }}>
          calibre
        </Link>
      </h1>

      <div>
        <Search />
        <TopSide />
      </div>
    </div>
  );
};

export default TopNav;
