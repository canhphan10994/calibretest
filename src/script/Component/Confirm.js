import React, { useContext } from "react";
import { Redirect } from "react-router";
import { TrackLine } from "./Other";
import { BillingContext } from "./BillingData";
import { AccountContext } from "./AccountProvider";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 4,
  margin: 40,
  dots: false
};

let OrderConfirm = ({ bill }) => (
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
      <div className="order_totals-price">
        <p>totals</p>
        <p>${bill.totals}</p>
      </div>
    </div>
  </div>
);

let EssentialsOffer = props => (
  <div className="essentials">
    <h3>the essentials based on your last purchase</h3>
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

let Confirmation = props => {
  const [bill] = useContext(BillingContext);
  const [account] = useContext(AccountContext);
  if (!account.isLogged) {
    return <Redirect to="/" />;
  }
  return (
    <div className="Confirm-wrap">
      <h1 className="h1-head">confirmation</h1>
      <TrackLine />
      <p className="thanks">thank you mr. {bill.cardInfor.cardHolder}</p>
      <p>Thank you for your order. Your order number is 347982</p>
      <h2>order confirmation</h2>
      <OrderConfirm bill={bill} />
      <div className="payments-tracking">
        <div className="payment-confirm">
          <h2>payment method</h2>
          <p>Credit card numbers:</p>
          <p>**** **** **** {bill.cardInfor.cardNumber4}</p>
        </div>
        <div className="tracking">
          <h2>shipping details</h2>
          <p>You will receive your order in 3-4 business days</p>
          <a href="#">track order</a>
        </div>
      </div>
      <EssentialsOffer />
      <div className="help">
        <p>
          <strong>need help?</strong>
        </p>
        <p className="help-contact">call us: +44 (0)010 2345 6789</p>
        <a href="#">email customer care</a>
        <a href="#">shipping information</a>
        <a href="#">returns & exchanges</a>
      </div>
    </div>
  );
};

export default Confirmation;
