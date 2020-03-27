import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "./AccountProvider";

let NewArrivals = function(props) {
  return (
    <div className="nav nav-new_arrivals bg-gray-2">
      <div className="nav__head">
        <h4>new arrivals</h4>
      </div>
      <div className="nav__main">
        <div className="new_arrivals-links">
          <ul>
            <li>
              <a href="#">this week</a>
            </li>
            <li>
              <a href="#">last week</a>
            </li>
            <li>
              <a href="#">back in stock</a>
            </li>
            <li>
              <a href="#">Exclusives</a>
            </li>
            <li>
              <a href="#">This Season's Trends</a>
            </li>
          </ul>
        </div>
        <div className="nav__main-side">
          <div>
            <h2>gold watches</h2>
            <img src="./img/GoldWatchesImage.png" alt="pic" />
            <a href="#">BREITLING</a>
            <p>Navitimer 1 Rattrapante</p>
          </div>
          <div>
            <h2>DIVING WATCHES</h2>
            <img src="./img/DivingWatchesImage.png" alt="pic" />
            <a href="#">ORIS</a>
            <p>Aquis Regulateur Der…</p>
          </div>
          <div>
            <h2>ACCESSORIES</h2>
            <img src="./img/AccessoriesImage.png" alt="pic" />
            <a href="#">WOLF WINDSOR</a>
            <p>Single Watch Winder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

let NavMens = function(props) {
  return (
    <div className="nav nav-mens bg-gray-2">
      <div className="nav__head">
        <h4>men's</h4>
      </div>
      <div className="nav__main">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">limited editions</a>
            </li>
            <li>
              <a href="#">aviations watches</a>
            </li>
            <li>
              <a href="#">Chronograph Watches</a>
            </li>
            <li>
              <a href="#">Diving Watches</a>
            </li>
            <li>
              <a href="#">Dress Watches</a>
            </li>
            <li>
              <a href="#">Smart Watches</a>
            </li>
            <li>
              <a href="#">Sports Watches</a>
            </li>
          </ul>
        </div>
        <div className="nav__main-side">
          <div>
            <h2>MOST POPULAR</h2>
            <img src="./img/Most Popular Image 1.png" alt="pic" />
            <a href="#">OFFICINE PANERAI</a>
            <p>Luminor 1950 Regatta</p>
          </div>
          <div>
            <h2>MOST POPULAR</h2>
            <img src="./img/Most Popular Image 2.png" alt="pic" />
            <a href="#">BAUME & MERCIER</a>
            <p>Clifton Club Shelby Cobra</p>
          </div>
          <div>
            <h2>MOST POPULAR</h2>
            <img src="./img/Most Popular Image 3.png" alt="pic" />
            <a href="#">BREITLING</a>
            <p>Avenger Blackbird</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* WOMENS */

let NavWomens = function(props) {
  return (
    <div className="nav nav-womens bg-gray-2">
      <div className="nav__head">
        <h4>women's</h4>
      </div>
      <div className="nav__main">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">limited editions</a>
            </li>
            <li>
              <a href="#">aviations watches</a>
            </li>
            <li>
              <a href="#">Chronograph Watches</a>
            </li>
            <li>
              <a href="#">Diving Watches</a>
            </li>
            <li>
              <a href="#">Dress Watches</a>
            </li>
            <li>
              <a href="#">Smart Watches</a>
            </li>
            <li>
              <a href="#">Sports Watches</a>
            </li>
          </ul>
        </div>
        <div className="nav__main-side">
          <div>
            <h2>ALL TIME CLASSICS</h2>
            <img src="./img/All Time Classics Image 1.png" alt="pic" />
            <a href="#">JAEGER-LECOULTRE</a>
            <p>LReverso One Duetto Moon</p>
          </div>
          <div>
            <h2>ALL TIME CLASSICS</h2>
            <img src="./img/All Time Classics Image 2.png" alt="pic" />
            <a href="#">IWC SCHAFFHAUSEN</a>
            <p>Da Vinci Automatic 36</p>
          </div>
          <div>
            <h2>ALL TIME CLASSICS</h2>
            <img src="./img/All Time Classics Image 3.png" alt="pic" />
            <a href="#">BOVET</a>
            <p>Saguaro Chronograph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ACCESSORIES */

let NavAccessories = function(props) {
  return (
    <div className="nav nav-accessories bg-gray-2">
      <div className="nav__head">
        <h4>ACCESSORIES</h4>
      </div>
      <div className="nav__main">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">straps</a>
            </li>
            <li>
              <a href="#">portables cases</a>
            </li>
            <li>
              <a href="#">watch winders</a>
            </li>
            <li>
              <a href="#">Buckles & Deployments</a>
            </li>
            <li>
              <a href="#">Cases, Rolls and Pouches</a>
            </li>
            <li>
              <a href="#">Tools</a>
            </li>
          </ul>
        </div>
        <div className="nav__main-side">
          <div>
            <h2>ALL TIME CLASSICS</h2>
            <img src="./img/Must-haves Image 1.png" alt="pic" />
            <a href="#">JAEGER-LECOULTRE</a>
            <p>LReverso One Duetto Moon</p>
          </div>
          <div>
            <h2>ALL TIME CLASSICS</h2>
            <img src="./img/Must-haves Image 2.png" alt="pic" />
            <a href="#">IWC SCHAFFHAUSEN</a>
            <p>Da Vinci Automatic 36</p>
          </div>
          <div>
            <h2>ALL TIME CLASSICS</h2>
            <img src="./img/Must-haves Image 3.png" alt="pic" />
            <a href="#">BOVET</a>
            <p>Saguaro Chronograph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* BRANDS */

let NavBrands = function(props) {
  return (
    <div className="nav nav-brands bg-gray-2">
      <div className="nav__head">
        <h4>brands</h4>
      </div>
      <div className="nav__main">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">ALL LUXURY WATCHES</a>
            </li>
            <li>
              <a href="#">LUXURY WATCH GUIDE</a>
            </li>
            <li>
              <a href="#">Roger Dubuis</a>
            </li>
            <li>
              <a href="#">Vacheron Constantin</a>
            </li>
            <li>
              <a href="#">Jaeger-LeCoultre</a>
            </li>
            <li>
              <a href="#">IWC Schaffhausen</a>
            </li>
            <li>
              <a href="#">Zenith</a>
            </li>
            <li>
              <a href="#">Maurice de Mauriac</a>
            </li>
            <li>
              <a href="#">aviations watches</a>
            </li>
            <li>
              <a href="#">Ressence</a>
            </li>
            <li>
              <a href="#">Bremont</a>
            </li>
            <li>
              <a href="#">Officine Panerai</a>
            </li>
            <li>
              <a href="#">Breitling</a>
            </li>
            <li>
              <a href="#">Montblanc</a>
            </li>
            <li>
              <a href="#">Cartier</a>
            </li>
            <li>
              <a href="#">TAG Heuer</a>
            </li>
            <li>
              <a href="#">Piaget</a>
            </li>
            <li>
              <a href="#">Oris</a>
            </li>
            <li>
              <a href="#">Bell & Ross</a>
            </li>
            <li>
              <a href="#">NOMOS Glashütte</a>
            </li>
          </ul>
        </div>
        <div className="nav__main-brand">
          <h2>feature brand</h2>
          <div className="nav__item">
            <img src="./img/Featured Brand Image.png" alt="pic" />
            <div className="nav__item__descr">
              <h3>IWC SCHAFFHAUSEN</h3>
              <p>Big Pilot’s 46mm Stainless Steel And Leather Watch</p>
              <a href="#">MORE IWC WATCHES</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* BASELWORLD */

let NavBaselWorld = function(props) {
  return (
    <div className="nav nav-baselworld bg-gray-2">
      <div className="nav__head">
        <h4>BASELWORLD</h4>
      </div>
      <div className="nav__main">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">The Show</a>
            </li>
            <li>
              <a href="#">Exhibitors</a>
            </li>
            <li>
              <a href="#">Showstoppers</a>
            </li>
            <li>
              <a href="#">Baselworld Daily News</a>
            </li>
            <li>
              <a href="#">Social Hub</a>
            </li>
            <li>
              <a href="#">Stars at Baselworld</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Interviews</a>
            </li>
          </ul>
        </div>
        <div className="nav__main-baselworld">
          <h2>2019 IMPRESSIONS</h2>
          <div className="nav__item">
            <img src="./img/Image 3.png" alt="pic" />
            <div className="nav__item__descr">
              <h3>The Brilliance of Baselworld 2019!</h3>
              <p>
                Take just around 1 minute to dive into a Baselworld setting as
                never seen before.
              </p>
              <a href="#">MORE VIDEOS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavAccount = ({ navOut }) => {
  const [account, setAccount] = useContext(AccountContext);

  return (
    <div className="nav nav-womens bg-gray-2">
      <div className="nav__head">
        <h4>Account</h4>
      </div>
      <div className="nav__main">
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/bag" onClick={navOut}>
                My Order
              </Link>
            </li>
            <li>
              {!account.isLogged ? (
                <Link to="/signin" onClick={navOut}>
                  sign in
                </Link>
              ) : (
                <Link to="/" onClick={navOut}>
                  sign out
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* MENU */

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navItem: "" };
    this.navHandle = this.navHandle.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.navOut = this.navOut.bind(this);
  }

  navHandle(e) {
    let res = e.target.textContent;
    this.setState(e => ({
      navItem: res
    }));
  }

  navOut(e) {
    this.setState(e => ({
      navItem: ""
    }));
  }

  renderSwitch(arg) {
    switch (arg) {
      case "new arrivals":
        return <NewArrivals />;

      case "brands":
        return <NavBrands />;

      case "men's":
        return <NavMens />;

      case "women's":
        return <NavWomens />;

      case "accessories":
        return <NavAccessories />;

      case "baselworld":
        return <NavBaselWorld />;
      case "account":
        return <NavAccount navOut={this.navOut} />;
    }
  }

  render() {
    return (
      <div className="menu-wrap" onMouseLeave={this.navOut}>
        <input type="checkbox" className="toggler" onClick={this.navOut} />
        <div className="hamburger">
          <div></div>
        </div>

        <nav className="menu">
          <ul>
            <li className="menu-top">
              <a href="#" onMouseEnter={this.navHandle}>
                <img src="./img/accounticonwhite.svg" alt="account icon" />
                account
              </a>
            </li>
            <li className="menu-top">
              <a href="#">
                <img src="./img/hearticonwhite.svg" alt="wish list icon" />
                wish list
              </a>
            </li>
            <li className="menu-top">
              <Link to="/bag">
                <img src="./img/bagiconwhite.svg" alt="shopping bag icon" />
                bag
              </Link>
            </li>
            <li>
              <a href="#" onMouseEnter={this.navHandle}>
                new arrivals
              </a>
            </li>
            <li>
              <a href="#" onMouseEnter={this.navHandle}>
                brands
              </a>
            </li>
            <li>
              <a href="#" onMouseEnter={this.navHandle}>
                men's
              </a>
            </li>
            <li>
              <a href="#" onMouseEnter={this.navHandle}>
                women's
              </a>
            </li>
            <li>
              <a href="#" onMouseEnter={this.navHandle}>
                accessories
              </a>
            </li>
            <li>
              <a href="#" onMouseEnter={this.navHandle}>
                baselworld
              </a>
            </li>
          </ul>
        </nav>
        <div>{this.renderSwitch(this.state.navItem)}</div>
      </div>
    );
  }
}

export default Menu;
