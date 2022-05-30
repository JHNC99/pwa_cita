import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/homecitas");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre de usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value="Admin"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value="123456"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
          <Link
            to="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Mkbits. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
