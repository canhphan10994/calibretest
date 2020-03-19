import React, { useState, useContext, useEffect } from "react";
import { BagStoreContext } from "./BagStore";
import { ButtonContext } from "./LayoutProvider";

export const AddToBag = newProduct => {
  const [productsList, setProductsList] = useContext(BagStoreContext);
  const [styleButton, setStyleButton] = useContext(ButtonContext);

  const updateBag = () => {
    let nProduct = {
      id: newProduct.product.id,
      name: newProduct.product.name,
      infor: newProduct.product.infor,
      price: newProduct.product.price,
      uPrice: newProduct.product.price,
      tax: 0,
      duties: newProduct.product.price * 0.045,
      quantity: 1,
      colour: "black",
      img: newProduct.product.img[0]
    };
    setProductsList(preProducts => [...preProducts, nProduct]);
    setStyleButton({
      img: "./img/check_circle_24px_outlined.svg",
      disableEvent: {
        pointerEvents: "none"
      }
    });
  };

  return (
    <div className="addToBag">
      <img src={styleButton.img} alt="bag" />
      <a onClick={updateBag} style={styleButton.disableEvent}>
        ADD TO BAG
      </a>
    </div>
  );
};
