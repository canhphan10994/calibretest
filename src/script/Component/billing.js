import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { TrackLine } from "./Other";
import { BillingContext } from "./BillingData";
import { AccountContext } from "./AccountProvider";

let PaymentForm = props => (
  <div className="payment__form">
    <h2>payment method</h2>
    <form>
      <label>
        cardholder name
        <input className="cardName" type="text" />
      </label>
      <label>
        card number
        <div className="cardNumber">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </label>
      <div className="expiration-wrap">
        <label className="exp__months">
          expiration date
          <select>
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
          <select>
            <option>Year</option>
          </select>
        </label>
        <label>
          CVV
          <input type="text" />
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
  const [bill] = useContext(BillingContext);
  const [account] = useContext(AccountContext);
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
      <PaymentForm />
      <a href="#">complete purchase</a>
    </div>
  );
};

export default Billing;
