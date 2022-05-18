import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Productmanager = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [productos, setProductos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(
    () =>
      axios
        .get("http://localhost:8000/api/producto/traer")
        .then((res) => {
          setProductos(res.data);
          setRefresh(false);
        })
        .catch((err) => console.error(err)),
    [refresh]
  );

  const submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/producto/new", {
        nombre,
        precio,
        descripcion,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    setRefresh(true);
  };

  return (
    <>
      <form onSubmit={submit}>
        <h1>Product Manager</h1>

        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button>Create</button>
      </form>
      <div>
        <h1>All Products:</h1>
        <ul>
          {productos.map((producto, i) => (
            <li key={i}>
              <Link to={`/${producto._id}`}>{producto.nombre}</Link>
              <button onClick={() => navigate(`/delete/${producto._id}`)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Productmanager;
