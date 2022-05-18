import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Productshow = () => {
  const [producto, setProducto] = useState({});
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/producto/traer/${_id}`)
      .then((response) => {
        setProducto(response.data);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }, [_id]);

  const eliminar = () => {
    axios
      .delete(`http://localhost:8000/api/producto/delete/${_id}`)
      .then((response) => console.log("producto eliminado"))
      .catch((err) => console.error(err));

    navigate("/");
  };

  return (
    <div>
      <h1>Nombre: {producto.nombre}</h1>
      <p>Precio: {producto.precio}</p>
      <p>Descripcion: {producto.descripcion}</p>

      <button onClick={eliminar}>Eliminar</button>
      <Link to={`/edit/${_id}`}>Editar Producto</Link>
    </div>
  );
};

export default Productshow;
