import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editproduct = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const { _id } = useParams();
  //test

  useEffect(
    () =>
      axios
        .get(`http://localhost:8000/api/producto/traer/${_id}`)
        .then((response) => {
          setNombre(response.data.nombre);
          setPrecio(response.data.precio);
          setDescripcion(response.data.descripcion);
        })
        .catch((err) => console.error(err)),
    [_id]
  );

  const submit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/producto/edit/${_id}`, {
        nombre,
        precio,
        descripcion,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form onSubmit={submit}>
        <h1>Edit Product</h1>

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

        <button>Edit</button>
      </form>
    </>
  );
};

export default Editproduct;
