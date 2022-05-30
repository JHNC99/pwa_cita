import React, { useState, useEffect } from "react";

import "./Cita.css";
const AgregarCita = () => {
  const [cita, setCita] = useState({
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    sintomas: "",
    telefono: "",
    status: "NA",
  });

  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cita.nombre.trim() === "" ||
      cita.apellido.trim() === "" ||
      cita.fecha.trim() === "" ||
      cita.telefono.trim() === "" ||
      cita.hora.trim() === ""
    ) {
      setError(true);
      setErrorMessage("Revisa los campos");
      
    } else {
      setError(false);
      alert("Cita agregada");
      cita.id = Date.now()+parseInt(Math.random()*100);
      setItems([...items, cita]);
    }
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className="agregar-cita">
      <h2 className="title-cita">Agendar cita</h2>

      <div className="flex mb-4 justify-between">
        <form className="w-1/2  m-2" onSubmit={handleSubmit}>
          {error && (
            <div
              className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3"
              role="alert"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
              </svg>
              <p>{errorMessage}</p>
            </div>

          )
          }
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="nombre"
              type="text"
              value={cita.nombre}
              onChange={handleChange}
              placeholder="Nombre"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Apellido
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              name="apellido"
              type="text"
              value={cita.apellido}
              onChange={handleChange}
              placeholder="Apellido"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Correo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              value={cita.email}
              onChange={handleChange}
              type="email"
              placeholder="Correo"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Teléfono
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              name="telefono"
              value={cita.telefono}
              onChange={handleChange}
              type="number"
              placeholder="Teléfono"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fecha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fecha"
              type="date"
              name="fecha"
              placeholder="Fecha"
              value={cita.fecha}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Hora
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hora"
              name="hora"
              type="time"
              placeholder="Hora de la cita"
              value={cita.hora}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sintomas
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sintomas"
              name="sintomas"
              type="text"
              value={cita.sintomas}
              onChange={handleChange}
              placeholder="Sintomas"
            />
          </div>
          <button className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Agendar cita
          </button>
        </form>
        <div className="w-1/2 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default AgregarCita;
