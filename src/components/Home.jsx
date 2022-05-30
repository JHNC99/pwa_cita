import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-5xl font-bold text-gray-800">Bienvenido a MediApp</h2>
      <div className="flex flex-wrap">
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-10 py-2 px-4 rounded  m-2">
            Iniciar sesión
          </button>
        </Link>
        <Link to="/registro">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-10 py-2 px-4 rounded  m-2">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}
