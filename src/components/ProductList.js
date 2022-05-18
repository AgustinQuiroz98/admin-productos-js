import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [productos, setProductos] = useState([]);

  useEffect(
    () =>
      axios
        .get("http://localhost:8000/api/producto/traer")
        .then((res) => {
          setProductos(res.data);
        })
        .catch((err) => console.error(err)),
    []
  );

  return (
    <div>
      <h1>All Products:</h1>
      <ul>
        {productos.map((producto, i) => (
          <li key={i}>
            <Link to={`/${producto._id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;
