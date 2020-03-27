import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { TrackLine } from "./Other";
import { BillingContext } from "./BillingData";
import { AccountContext } from "./AccountProvider";

let PaymentForm = ({ bill, setBill }) => {
  const cardInfor = bill.cardInfor;
  const updateCardHolder = e => {
    setBill({
      ...bill,
      cardInfor: { ...cardInfor, cardHolder: e.target.value }
    });
  };
  const updateCardNumber1 = e => {
    if (e.target.value < 10000) {
      setBill({
        ...bill,
        cardInfor: { ...cardInfor, cardNumber1: e.target.value }
      });
    }
  };
  const updateCardNumber2 = e => {
    if (e.target.value < 10000) {
      setBill({
        ...bill,
        cardInfor: { ...cardInfor, cardNumber2: e.target.value }
      });
    }
  };
  const updateCardNumber3 = e => {
    if (e.target.value < 10000) {
      setBill({
        ...bill,
        cardInfor: { ...cardInfor, cardNumber3: e.target.value }
      });
    }
  };
  const updateCardNumber4 = e => {
    if (e.target.value < 10000) {
      setBill({
        ...bill,
        cardInfor: { ...cardInfor, cardNumber4: e.target.value }
      });
    }
  };
  const updateCardExpYears = e => {
    setBill({
      ...bill,
      cardInfor: { ...cardInfor, cardExpYears: e.target.value }
    });
  };
  const updateCardExpMonth = e => {
    setBill({
      ...bill,
      cardInfor: { ...cardInfor, cardExpMonth: e.target.value }
    });
  };
  const updateCardCvv = e => {
    if (e.target.value < 1000) {
      setBill({
        ...bill,
        cardInfor: { ...cardInfor, cardCvv: e.target.value }
      });
    }
  };

  return (
    <div className="payment__form">
      <h2>payment method</h2>
      <form>
        <label>
          cardholder name
          <input
            className="cardName"
            type="text"
            value={bill.cardInfor.cardHolder}
            onChange={updateCardHolder}
          />
        </label>
        <label>
          card number
          <div className="cardNumber">
            <input
              type="number"
              value={bill.cardInfor.cardNumber1}
              onChange={updateCardNumber1}
            />
            <input
              type="number"
              value={bill.cardInfor.cardNumber2}
              onChange={updateCardNumber2}
            />
            <input
              type="number"
              value={bill.cardInfor.cardNumber3}
              onChange={updateCardNumber3}
            />
            <input
              type="number"
              value={bill.cardInfor.cardNumber4}
              onChange={updateCardNumber4}
            />
          </div>
        </label>
        <div className="expiration-wrap">
          <label className="exp__months">
            expiration date
            <select
              value={bill.cardInfor.cardExpMonth}
              onChange={updateCardExpMonth}
            >
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </label>
          <label className="exp__years">
            <select
              value={bill.cardInfor.cardExpYears}
              onChange={updateCardExpYears}
            >
              <option>Year</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </label>
          <label>
            CVV
            <input
              type="number"
              value={bill.cardInfor.cardCvv}
              onChange={updateCardCvv}
            />
          </label>
        </div>
        <label className="card__secure">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Securely store payment details for next purchase.
        </label>
      </form>
    </div>
  );
};

let DeliveryMehod = props => (
  <div className="delivery-wrap">
    <div className="delivery__express">
      <h2>
        express delivery <span>($Free)</span>
      </h2>
      <p>Delivered in 3-4 business days</p>
    </div>
    <div className="delivery__packing">
      <h2>PACKAGING OPTIONS</h2>
      <p>Same as Shipping Address</p>
      <a href="#">gift message & personalised labels available</a>
    </div>
  </div>
);

let BillingReview = ({ bill }) => (
  <div className="billing_review">
    <div className="shipping_address">
      <h2>shipping address</h2>
      <p>{bill.firstName + bill.lastName}</p>
      <p>{bill.address1}</p>
      <p>{bill.city}</p>
      <p>{bill.county}</p>
      <p>{bill.zip}</p>
      <a href="#">change shipping adress</a>
    </div>
    <div className="billing_adress">
      <h2>shipping address</h2>
      <p>Same as Shipping Address</p>
      <a href="#">edit billing address</a>
    </div>
  </div>
);

export const OrderSummary = ({ bill }) => {
  return (
    <div className="order_summary">
      <div className="order_list">
        <table>
          <thead>
            <tr>
              <th>item</th>
              <th>colour</th>
              <th>quantity</th>
              <th>unit price</th>
              <th>shipping</th>
              <th>tax</th>
              <th>duties</th>
            </tr>
          </thead>
          <tbody>
            {bill.productList.map(product => (
              <tr key={product}>
                <td className="order_item-des">
                  <img src={"./img/" + product.img} alt="item" />
                  <div className="order_item-des-main">
                    <h4>{product.name}</h4>
                    <p>{product.infor}</p>
                  </div>
                </td>
                <td>{product.colour}</td>
                <td>{product.quantity}</td>
                <td>${product.uPrice}</td>
                <td>${bill.shippingFee}</td>
                <td>${product.tax}</td>
                <td>${product.duties}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="order_totals">
        <a href="#">add a gift card or promotion code</a>
        <div className="order_totals-price">
          <p>totals</p>
          <p>${bill.totals}</p>
        </div>
      </div>
    </div>
  );
};

const Billing = props => {
  const [isFilled, setIsFilled] = useState(false);
  const [bill, setBill] = useContext(BillingContext);
  const [account] = useContext(AccountContext);
  useEffect(() => {
    setIsFilled(true);
    for (const item in bill.cardInfor) {
      switch (item) {
        case "cardHolder":
          if (bill.cardInfor[item].length < 1) {
            setIsFilled(false);
            break;
          }
          break;
        case "cardNumber1":
          if (bill.cardInfor[item].length < 4) {
            setIsFilled(false);
            break;
          }
          break;
        case "cardNumber2":
          if (bill.cardInfor[item].length < 4) {
            setIsFilled(false);
            break;
          }
          break;
        case "cardNumber3":
          if (bill.cardInfor[item].length < 4) {
            setIsFilled(false);
            break;
          }
          break;
        case "cardNumber4":
          if (bill.cardInfor[item].length < 4) {
            setIsFilled(false);
            break;
          }
          break;
        case "cardExpYears":
          if (bill.cardInfor[item].length < 1) {
            setIsFilled(false);
            break;
          }
          break;
        case "cardExpMonth":
          if (bill.cardInfor[item].length < 1) {
            setIsFilled(false);
            break;
          }
          break;
        case "cardCvv":
          if (bill.cardInfor[item].length < 3) {
            setIsFilled(false);
            break;
          }
          break;
      }
    }
  }, [bill]);

  if (!account.isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="billing-wrap">
      <h1 className="h1-head">billing</h1>
      <TrackLine />
      <h2>1. your order summary</h2>
      <OrderSummary bill={bill} />
      <h2>2. review shipping and billing address</h2>
      <BillingReview bill={bill} />
      <h2>3. delivery method</h2>
      <DeliveryMehod />
      <h2>4. payment details</h2>
      <PaymentForm bill={bill} setBill={setBill} />
      {isFilled ? (
        <Link to="/confirm">complete purchase</Link>
      ) : (
        <Link
          style={{ pointerEvents: "none", backgroundColor: "#eeee" }}
          to="/confirm"
        >
          complete purchase
        </Link>
      )}
    </div>
  );
};

export default Billing;
