import React, { useState, useContext } from "react";
import { Redirect } from "react-router";
import { AccountContext } from "./AccountProvider";
import { BillingContext } from "./BillingData";
import { Link } from "react-router-dom";
import TrackLine from "./Other";

const SignIn = props => {
  const [account, setAccount] = useContext(AccountContext);
  const [bill] = useContext(BillingContext);
  const [exAccount, setExAccount] = useState({
    id: "",
    password: ""
  });
  const [path, setPath] = useState("/signin");

  const updateExId = e => {
    setExAccount({ ...exAccount, id: e.target.value });
  };

  const updateExPass = e => {
    setExAccount({ ...exAccount, password: e.target.value });
  };

  const updatePath = props => {
    props.preventDefault();
    if (
      exAccount.id === account.id &&
      exAccount.password === account.password
    ) {
      if (bill.productList.length > 0) {
        setPath("/ship");
      } else {
        setPath("/");
      }
    } else {
      setPath("/signin");
    }
  };

  const checkLogged = () => {
    if (
      exAccount.id === account.id &&
      exAccount.password === account.password
    ) {
      setAccount({ ...account, isLogged: true });
    }
  };

  if (account.isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="sign_in-wrap">
      <h1 className="h1-head">sign in</h1>
      <TrackLine />
      <div className="sign_in__form">
        <div className="existing_customer">
          <h2>existing customer</h2>
          <p>
            Make purchases faster using previously saved details. Track previous
            orders and easily request returns from the website.
          </p>
          <form className="form-general">
            <input
              className="form-input"
              placeholder="Email"
              type="text"
              value={exAccount.id}
              onChange={updateExId}
            />
            <input
              className="form-input"
              placeholder="Password"
              type="password"
              value={exAccount.password}
              onChange={updateExPass}
            />
            <a href="#">forgot password?</a>
            <Link onClick={checkLogged} to={path}>
              <button type="submit" onMouseEnter={updatePath}>
                sign in
              </button>
            </Link>
          </form>
        </div>
        <div className="new_customer">
          <h2>new customer</h2>
          <p>
            You’ll need an account to purchase watches, track and review orders,
            and manage your personal details.
          </p>
          <form className="form-general">
            <input className="form-input" placeholder="Full Name" type="text" />
            <input className="form-input" placeholder="Email" type="text" />
            <input className="form-input" placeholder="Password" type="text" />
            <input
              className="form-input"
              placeholder="Confirm Password"
              type="text"
            />

            <button type="submit" style={{ pointerEvents: "none" }}>
              register
            </button>
            <p>
              By registering you agree to our <span>Terms and Conditions</span>{" "}
              and <span>Privacy Policy.</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
