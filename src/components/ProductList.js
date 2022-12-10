import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductList = (props) => {
  const { product, setProduct } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <div>
        <h1>All Products:</h1>
      </div>
      {product.map((prod, id) => (
        <div key={id}>
          <h2>
            <Link to={`/product/${prod._id}`}> {prod.title} </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
