import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
const Home = (props) => {
  const [product, setProduct] = useState([]);

  return (
    <div>
      <ProductForm product={product} setProduct={setProduct} />
      <hr />
      <ProductList product={product} setProduct={setProduct} />
    </div>
  );
};
export default Home;
