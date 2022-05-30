import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditarCita = () => {
  const { id } = useParams();
  const [filtro, setFiltro] = useState({
    id: "",
    nombre: "",
    apelli: "",
    correo: "",
    telefono: "",
    fecha: "",
    status: "",
  });
  const getCita = () => {
    const citas = JSON.parse(localStorage.getItem("items"));
    let filtro = citas.filter((cita) => cita.id == id);
    setFiltro(filtro[0]);
  };
  console.log(filtro);

  useEffect(() => {
    getCita();
  }, []);

  return (
    <div className="flex mb-4 justify-between mt-10">
      <form className="w-1/2  m-auto">
        <div className="flex flex-col">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Cambiar estado de cita
          </label>
          <select name="select" value={filtro.status} onChange={(e)=>filtro.status=e.target.value}>
            <option value="cerrado" selected>
              Cumplido
            </option>
            <option value="pendiente">Pendiente</option>
          </select>
        </div>

        <button className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditarCita;
