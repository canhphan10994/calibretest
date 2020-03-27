import React, { useContext } from "react";
import { ButtonContext } from "./LayoutProvider";
import { Button } from "./Other";
import { BagStoreContext } from "./BagStore";
import { AccountContext } from "./AccountProvider";

let ProductDes = ({
  name,
  infor,
  price,
  uPrice,
  colour,
  img,
  quantity,
  id
}) => {
  const [productsList, setProductsList] = useContext(BagStoreContext);

  const Add = () => {
    if (quantity < 5) {
      setProductsList(
        productsList.map(product =>
          product.id === id
            ? { ...product, quantity: ++quantity, uPrice: price * quantity }
            : product
        )
      );
    }
  };

  const Subt = () => {
    if (quantity > 1) {
      setProductsList(
        productsList.map(product =>
          product.id === id
            ? { ...product, quantity: --quantity, uPrice: price * quantity }
            : product
        )
      );
    }
  };

  return (
    <tr className="product">
      <td className="product__image">
        <img src={"./img/" + img} alt="item" />
      </td>
      <td className="product__description-wrap">
        <div className="product__description">
          <h4>{name}</h4>
          <p>{infor}</p>
        </div>
      </td>
      <td className="product__color">{colour}</td>
      <td className="product__quantity">
        <p onClick={Subt}>-</p>
        <p>{quantity}</p>
        <p onClick={Add}>+</p>
      </td>
      <td className="product__price">${uPrice}</td>
    </tr>
  );
};

let ProductAction = ({ id }) => {
  const [productsList, setProductsList] = useContext(BagStoreContext);
  const [styleButton, setStyleButton] = useContext(ButtonContext);
  const RemoveItem = () => {
    setProductsList(productsList.filter(product => product.id !== id));
    setStyleButton({
      img: "./img/Bag AA.png",
      disableEvent: {}
    });
  };

  return (
    <tr className="product__action">
      <td></td>
      <td></td>
      <td></td>
      <td>
        <button>move to wish list</button>
      </td>
      <td>
        <button onClick={RemoveItem}>remove this item</button>
      </td>
    </tr>
  );
};

const ProductList = props => {
  const [productsList] = useContext(BagStoreContext);

  return (
    <div className="product_list">
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>description</th>
            <th>colour</th>
            <th>quantity</th>
            <th>unit price</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "14px" }}></tr>
          {productsList.map(product => [
            <ProductDes
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              uPrice={product.uPrice}
              infor={product.infor}
              colour={product.colour}
              img={product.img}
              quantity={product.quantity}
            />,
            <ProductAction key={product.infor} id={product.id} />
          ])}
        </tbody>
      </table>
    </div>
  );
};

const ShoppingBag = props => {
  const [productsList] = useContext(BagStoreContext);
  const [account] = useContext(AccountContext);

  let subTotal = 0;

  if (productsList.length > 0) {
    subTotal = productsList
      .map(product => product.uPrice)
      .reduce((total, curr) => total + curr);
  }

  return (
    <div className="shoppingBag">
      <h1>shopping</h1>
      {account.isLogged ? (
        productsList.length > 0 ? (
          <Button content="buy now" rUrl="/ship" />
        ) : (
          <Button content="back" rUrl="/" />
        )
      ) : productsList.length > 0 ? (
        <Button content="buy now" rUrl="/signin" />
      ) : (
        <Button content="back" rUrl="/" />
      )}
      <div className="productList">
        <ProductList />
      </div>
      <div className="bagSum-wrap">
        <div className="bagSum">
          <p>subtotal</p>
          <p>${subTotal}</p>
        </div>
        <div className="bagSum">
          <p>shipping</p>
          <p>$free</p>
        </div>
        <div className="bagSum">
          <p>taxes</p>
          <p>$0</p>
        </div>
        <div className="bagSum bagSum-total">
          <p>total</p>
          <p>${subTotal}</p>
        </div>
        {account.isLogged ? (
          productsList.length > 0 ? (
            <Button content="buy now" rUrl="/ship" />
          ) : (
            <Button content="back" rUrl="/" />
          )
        ) : productsList.length > 0 ? (
          <Button content="buy now" rUrl="/signin" />
        ) : (
          <Button content="back" rUrl="/" />
        )}
      </div>
      <div className="help">
        <p>
          <strong>need help</strong>
        </p>
        <p className="help-contact">call us: +44 (0)010 2345 6789</p>
        <a href="#">email customer care</a>
        <a href="#">shipping information</a>
        <a href="#">returns & exchanges</a>
      </div>
    </div>
  );
};

export default ShoppingBag;
