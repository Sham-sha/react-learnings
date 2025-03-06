import React, { useState } from "react";
import "./styles.css";
import products from "../assets/product.json";
import PropsChild from "./PropsChild";

function Props() {

  let [product, setproduct] = useState(products);

  return (
    <div>
      <div className="div">Welcome to my shop</div>
      <PropsChild product = {product}/>
    </div>
  );
}

export default Props;
