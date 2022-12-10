import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Detail = (props) => {
  const [prod, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>{prod.title}</h2>
      <h2>Price: ${prod.price}</h2>
      <h2>Description: {prod.description}</h2>
    </div>
  );
};
export default Detail;
