import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { AddToBag } from "./AddToBag";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Infor = props => {
  const clickHandle = e => {
    let showList = document.querySelectorAll(".productInformation > div > div");
    let spanList = document.querySelectorAll(".productInformation__descr-icon");
    let textElement = e.target.textContent;

    if (textElement.includes("i")) {
      for (let i = 0; i < spanList.length; i++) {
        spanList[i].textContent = "+";
      }
      e.target.childNodes[1].textContent = "-";
    }

    if (textElement === "+") {
      for (let i = 0; i < spanList.length; i++) {
        spanList[i].textContent = "+";
      }
      e.target.textContent = "-";
    }

    for (let i = 0; i < 4; i++) {
      showList[i].classList.remove("productShow");
    }

    if (textElement.includes("descr")) showList[0].classList.add("productShow");
    if (textElement.includes("size")) showList[1].classList.add("productShow");
    if (textElement.includes("detail"))
      showList[2].classList.add("productShow");
    if (textElement.includes("deli")) showList[3].classList.add("productShow");
  };

  return (
    <div className="productInformation">
      <div className="productInformation__head">
        <h1>{props.name}</h1>
        <p className="generalInfor">{props.infor}</p>
        <p className="price">£{props.price}</p>
      </div>
      <div className="productInformation__descr">
        <h3 onClick={clickHandle}>
          description<span className="productInformation__descr-icon">+</span>
        </h3>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="productInformation__size">
        <h3 onClick={clickHandle}>
          size & fit<span className="productInformation__descr-icon">+</span>
        </h3>
        <div>
          <p>
            Max. Strap Length:{" "}
            <span className="maxStrapLength">{props.maxStrapLength}cm</span>
            <br />
            Min. Strap Length:{" "}
            <span className="minStrapLength">{props.minStrapLength}cm</span>
            <br />
            Width of Face:{" "}
            <span className="widthFace">{props.widthFace}cm</span>
            <br />
            Width of Strap:{" "}
            <span className="widthStrap">{props.widthStrap}cm</span>
            <br />
          </p>
        </div>
      </div>
      <div className="productInformation__detail ">
        <h3 onClick={clickHandle}>
          details & care
          <span className="productInformation__descr-icon">+</span>
        </h3>
        <div>
          <ul>
            <li>
              Movement
              <br />
              <span className="movement">{props.movement}</span>
            </li>
            <li>
              Functions
              <br />
              <span className="functions">
                {props.functions.map(func => (
                  <span key={func}>
                    {func} <br />
                  </span>
                ))}
              </span>
            </li>
            <li>
              Dial
              <br />
              <span className="dial">{props.dial}</span>
            </li>
            <li>
              Case
              <br />
              <span className="case">
                {props.cases.map(pCase => (
                  <span key={pCase}>
                    {pCase} <br />
                  </span>
                ))}
              </span>
            </li>
            <li>
              Specifications
              <br />
              <span className="specifications">
                {props.specifications.map(spec => (
                  <span key={spec}>
                    {spec} <br />
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="delivery">
        <h3 onClick={clickHandle}>
          delivery & returns
          <span className="productInformation__descr-icon">+</span>
        </h3>
        <div>
          <p>
            Find out more about our <a href="#">delivery options</a>
          </p>
          <p>
            If you decide not to keep your luxury watch, you have 28 days from
            receiving your order to request a return and send it back to us. The
            luxury watch must be returned unworn with the plastic protective
            cover on the face and in its original packaging including the
            warranty, presentation box and any outer packaging. You must also
            ensure that it has not been wound up to the correct time.
          </p>
        </div>
      </div>
      <div className="productInformation__adding">
        <div className="adding__button productShow">
          <AddToBag product={props} />

          <div className="addWistList">
            <img src="./img/grade_24px_outlined.svg" alt="star" />
            <a href="#">ADD TO WISH LIST</a>
          </div>
        </div>
        <a href="#">Shipping RESTRICTIONS AND DUTIES MAY APPLY</a>
      </div>
      <div className="productInformation__socials">
        <figure>
          <a href="#">
            <img src="./img/fb svg.svg" alt="social" />
          </a>
          <a href="#">
            <img src="./img/instasvg.svg" alt="social" />
          </a>
          <a href="#">
            <img src="./img/twittersvg.svg" alt="social" />
          </a>
          <a href="#">
            <img src="./img/ytbsvg.svg" alt="social" />
          </a>
        </figure>
      </div>
      <div className="productInformation__more">
        <div className="product-code productShow">
          <h3>product code</h3>
          <p>{props.id}</p>
        </div>
        <div className="product-viewmore productShow">
          <h3>view more</h3>
          <a href="#">Dress Watches</a>
        </div>
        <div className="product-contact productShow">
          <h3>contact us</h3>
          <a href="#">Customer Service</a>
        </div>
      </div>
    </div>
  );
};

const ProductImages = props => {
  const [mainImg, setMainImg] = useState(`./img/${props.img[0]}`);
  const options = {
    items: 5,
    margin: 5,
    nav: true
  };

  const clickHandle = e => {
    let srcImg = e.target.getAttribute("src");
    setMainImg(srcImg);
  };

  return (
    <div className="productImages">
      <div className="imageShow">
        <img src={mainImg} alt="product image" />
      </div>
      <div className="imageList">
        <OwlCarousel className="owl-theme" {...options}>
          {props.img.map(image => (
            <div className="item" key={image} onClick={clickHandle}>
              <img src={"./img/" + image} />
            </div>
          ))}
        </OwlCarousel>
      </div>
      <a href="#">view full size image</a>
    </div>
  );
};

const Product = () => {
  const [products] = useContext(ProductContext);
  return (
    <div className="product-wrap">
      <ProductImages img={products[0].images} />
      <Infor
        id={products[0].id}
        name={products[0].name}
        infor={products[0].infor}
        price={products[0].price}
        description={products[0].description}
        maxStrapLength={products[0].maxStrapLength}
        minStrapLength={products[0].minStrapLength}
        widthFace={products[0].widthFace}
        widthStrap={products[0].widthStrap}
        movement={products[0].movement}
        functions={products[0].functions}
        dial={products[0].dial}
        cases={products[0].cases}
        specifications={products[0].specifications}
        img={products[0].images}
      />
    </div>
  );
};

export default Product;
