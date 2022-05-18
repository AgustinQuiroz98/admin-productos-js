import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Deleteproduct = () => {
  const { _id } = useParams();
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/producto/traer/${_id}`)
      .then((response) => {
        setNombre(response.data.nombre);
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
    <>
      <h1>
        Seguro que desea eliminar el producto: <b>{nombre}</b>
        <button onClick={eliminar}>Si, quiero eliminarlo</button>
        <button onClick={() => navigate("/")}>
          No, llevame a la Pagina Principal
        </button>
      </h1>
    </>
  );
};

export default Deleteproduct;
