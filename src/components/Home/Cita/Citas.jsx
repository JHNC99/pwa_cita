import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cita.css";
const Citas = () => {
  let [cita, setCita] = useState([]);
  const getCitas = () => {
    const citas = JSON.parse(localStorage.getItem("items"));
    setCita(citas);
  };
  useEffect(() => {
    getCitas();
  }, []);

  return (
    <div className="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-teal-600 dark:bg-teal-500 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Correo
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Correo
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              <span className="sr-only">Acción</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {cita ? (
            cita.map((cita) => (
              <tr key={cita.id}>
                <td className="border px-6 py-4">{cita.nombre}</td>
                <td className="border px-6 py-4">{cita.email}</td>
                <td className="border px-6 py-4">{cita.telefono}</td>
                <td className="border px-6 py-4">{cita.fecha}</td>
                <td className="border px-6 py-4">{cita.status}</td>
                <td className="border px-6 py-4">
                  <Link to={`/edit/${cita.id}`}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border px-6 py-4">
                No hay citas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Citas;
