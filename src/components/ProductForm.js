import React, { useState } from "react";
import axios from "axios";
const ProductForm = (props) => {
  const { product, setProduct } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...product, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>price</label>
        <br />
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Desciption</label>
        <br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};
export default ProductForm;
