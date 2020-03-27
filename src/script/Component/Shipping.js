import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { TrackLine, Button } from "./Other";
import { BillingContext } from "./BillingData";
import { AccountContext } from "./AccountProvider";

const Shipping = props => {
  const [isFilled, setIsFilled] = useState(false);
  const [bill, setBill] = useContext(BillingContext);
  const [account] = useContext(AccountContext);

  useEffect(() => {
    setIsFilled(true);
    for (const item in bill) {
      if (typeof bill[item] === "string") {
        switch (item) {
          case "title":
            if (!bill[item].length > 0) {
              setIsFilled(false);
              break;
            }
            break;
          case "firstName":
            if (!bill[item].length > 0) {
              setIsFilled(false);
            }
            break;
          case "lastName":
            if (!bill[item].length > 0) {
              setIsFilled(false);
            }
            break;
          case "address1":
            if (!bill[item].length > 0) {
              setIsFilled(false);
            }
            break;
          case "city":
            if (!bill[item].length > 0) {
              setIsFilled(false);
            }
            break;
          case "county":
            if (!bill[item].length > 0) {
              setIsFilled(false);
            }
            break;
          case "zip":
            if (!bill[item].length > 0) {
              setIsFilled(false);
            }
            break;
          case "telephone":
            if (!bill[item].length > 0) {
              setIsFilled(false);
            }
            break;
        }
      }
    }
  }, [bill]);

  const updateTitle = e => {
    setBill({ ...bill, title: e.target.value });
  };
  const updateFirstName = e => {
    setBill({ ...bill, firstName: e.target.value });
  };
  const updateLastName = e => {
    setBill({ ...bill, lastName: e.target.value });
  };
  const updateCountry = e => {
    setBill({ ...bill, country: e.target.value });
  };
  const updateAddress1 = e => {
    setBill({ ...bill, address1: e.target.value });
  };
  const updateAddress2 = e => {
    setBill({ ...bill, address2: e.target.value });
  };
  const updateCity = e => {
    setBill({ ...bill, city: e.target.value });
  };
  const updateCounty = e => {
    setBill({ ...bill, county: e.target.value });
  };
  const updateZip = e => {
    setBill({ ...bill, zip: e.target.value });
  };
  const updateTelephone = e => {
    setBill({ ...bill, telephone: e.target.value });
  };
  const updateMobile = e => {
    setBill({ ...bill, mobile: e.target.value });
  };

  const updateShippingAddress = e => {
    setBill({ ...bill, shippingAddress: e.target.value });
  };
  if (!account.isLogged) {
    return <Redirect to="/" />;
  }
  return (
    <div className="shipping-wrap">
      <h1 className="h1-head">shipping</h1>
      <TrackLine />
      {isFilled ? (
        <Button content="buy now" rUrl="/billing" />
      ) : (
        <Button
          style={{ pointerEvents: "none", backgroundColor: "#eeee" }}
          content="buy now"
          rUrl="/billing"
        />
      )}
      <div className="shipping__main">
        <div className="shipping-form">
          <form>
            <label>
              title *
              <input
                type="text"
                name="title"
                value={bill.title}
                onChange={updateTitle}
              />
            </label>
            <label>
              first name *
              <input
                type="text"
                name="firstName"
                value={bill.firstName}
                onChange={updateFirstName}
              />
            </label>
            <label>
              last name *
              <input
                type="text"
                name="lastName"
                value={bill.lastName}
                onChange={updateLastName}
              />
            </label>
            <label>
              country *
              <select value={bill.country} onChange={updateCountry}>
                <option value="vn">VN</option>
                <option value="cam">CAM</option>
                <option value="lao">LAO</option>
                <option value="thai">THAI</option>
              </select>
            </label>
            <label>
              address line 1 *
              <input
                type="text"
                name="address1"
                value={bill.address1}
                onChange={updateAddress1}
              />
            </label>
            <label>
              address line 2
              <input
                type="text"
                name="address2"
                value={bill.address2}
                onChange={updateAddress2}
              />
            </label>
            <label>
              city *
              <input
                type="text"
                name="city"
                value={bill.city}
                onChange={updateCity}
              />
            </label>
            <label>
              county / province *
              <input
                type="text"
                name="county"
                value={bill.county}
                onChange={updateCounty}
              />
            </label>
            <label>
              postcode / zip *
              <input
                type="text"
                name="zip"
                value={bill.zip}
                onChange={updateZip}
              />
            </label>
            <label>
              telephone *
              <input
                type="text"
                name="telephone"
                value={bill.telephone}
                onChange={updateTelephone}
              />
            </label>
            <label>
              mobile
              <input
                type="text"
                name="mobile"
                value={bill.mobile}
                onChange={updateMobile}
              />
            </label>
            <label id="asBill">
              <input
                type="radio"
                name="ship address"
                onChange={updateShippingAddress}
                value="false"
                checked
              />
              Use shipping address as billing address
            </label>
            <label id="seperate-address">
              <input
                type="radio"
                name="ship address"
                value="true"
                onChange={updateShippingAddress}
              />
              Enter separate billing address
            </label>
          </form>
          <p>* required fields</p>
        </div>
        <div className="shipping-help">
          <div>
            <h4>shipping restrictions and duties may apply</h4>
            <p>
              <strong>need help?</strong>
            </p>
            <p>call us: +44 (0)10 2345 6789</p>
            <p>email customer care | shipping information</p>
            <p>returns & exchanges</p>
          </div>
        </div>
      </div>
      {isFilled ? (
        <Button content="buy now" rUrl="/billing" />
      ) : (
        <Button
          style={{ pointerEvents: "none", backgroundColor: "#eeee" }}
          content="buy now"
          rUrl="/billing"
        />
      )}
    </div>
  );
};

export default Shipping;
