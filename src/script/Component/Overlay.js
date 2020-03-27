import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "./AccountProvider";

const clickExit = function(e) {
  let listOverlay = document.querySelectorAll(".overlay");
  for (let i = 0; i < 3; i++) {
    listOverlay[i].classList.remove("showOverlay");
  }
};

let MyAccountOverlay = function(props) {
  const [account, setAccount] = useContext(AccountContext);
  const signOut = () => {
    setAccount({ ...account, isLogged: false });
    clickExit();
  };
  return (
    <div className="overlay overlay-account bg-white">
      <div className="overlay__head">
        <h2>my account</h2>
        <div className="overlay-exit" onClick={clickExit}></div>
      </div>
      <ul>
        <li>
          {account.isLogged ? (
            <Link to="/bag" onClick={clickExit}>
              my orders
            </Link>
          ) : (
            <Link to="/signin" onClick={clickExit}>
              my orders
            </Link>
          )}
        </li>
        <li>
          <a>my gift cards</a>
        </li>
        <li>
          <a>account details</a>
        </li>
        <li>
          <a>my email preferences</a>
        </li>
      </ul>
      <div className="button">
        {!account.isLogged ? (
          <Link to="/signin" onClick={clickExit}>
            sign in
          </Link>
        ) : (
          <Link to="/" onClick={signOut}>
            sign out
          </Link>
        )}
      </div>
    </div>
  );
};

let WishListOverlay = function(props) {
  return (
    <div className="overlay overlay-wish_list bg-white">
      <div className="overlay__head">
        <h2>wish list</h2>
        <div className="overlay-exit" onClick={clickExit}></div>
      </div>
      <p>
        If an item in your wish list is low in stock, you will see an alert so
        you don’t miss out on purchasing your favorite piece!
      </p>
      <div className="button">
        <a>view wish list</a>
      </div>
    </div>
  );
};

let ShoppingBagOverlay = function(props) {
  return (
    <div className="overlay overlay-shopping_bag bg-white">
      <div className="overlay__head">
        <h2>shopping bag</h2>
        <div className="overlay-exit" onClick={clickExit}></div>
      </div>
      <p>Free returns and exchanges on all orders</p>
    </div>
  );
};

export { MyAccountOverlay, WishListOverlay, ShoppingBagOverlay };
