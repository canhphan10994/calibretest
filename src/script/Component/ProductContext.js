import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState([
    {
      id: 668235,
      name: "Junghans",
      infor: "Max Bill Chronoscope 40mm Stainless Steel and Leather Watch",
      price: 2750,
      description:
        "Mr Max Bill was a true creative genius, carving out a career as a painter, architect, sculptor and designer. As well as leaving behind an expansive body of work, he was also an avid collector of watches, and this Junghans chronoscope timepiece is dedicated to his memory. Immaculately housed in a domed Plexiglass case and finished with a handsome leather strap, it’s a highly technical piece in a stylish package.",
      maxStrapLength: 21.5,
      minStrapLength: 17,
      widthFace: 4,
      widthStrap: 2,
      movement:
        "Self-winding movement calibre J880.2, with 48-hour power reserve",
      functions: [
        "Hour, minute and second hands",
        "Date window, stop function"
      ],
      dial: "Black face, luminous metal arms",
      cases: [
        "Stainless steel case",
        "Domed SICRALAN-coated Plexiglass lens",
        "Buckle-fastening black leather (calf) strap"
      ],
      specifications: [
        "Waterproof",
        "Comes in a presentation box",
        "Reference number: 027/4601.00",
        "Manufactured in Germany"
      ],
      images: [
        "Main Image 1.png",
        "Main Image 2.png",
        "Main Image 3.png",
        "Main Image 4.png",
        "Main Image 5.png"
      ],
      colour: "black"
    }
  ]);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
