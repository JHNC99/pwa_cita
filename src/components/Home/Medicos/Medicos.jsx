import React from "react";
import { Link } from "react-router-dom";
const Medicos = () => {
  return (
    <div className="col">
      <img
        src="https://res.cloudinary.com/moodgiver/image/upload/v1608198254/thumbnail_fashion_1_d66f5610d2.jpg"
        alt="img"
        title="img"
        id="whoobe-7jr8o"
      />
      <h3>Dr. Ana Doe</h3>
        <p><strong>Traumatologo</strong></p>
      <p className="calificacion">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </p>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn-medico"
        to="/agregar-cita"
      >
        Agendar cita
      </Link>
    </div>
  );
};

export default Medicos;
