import React, { useState } from "react";
import axios from "axios";
const ProductForm = () => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new Product
    axios
      .post("http://localhost:8000/api/product", {
        title, // this is shortcut syntax for firstName: firstName,
        price, // this is shortcut syntax for lastName: lastName
        description,
      })
      .then((res) => {
        console.log(res); // always console log to get used to tracking your data!
        console.log(res.data);
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
