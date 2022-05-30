import React from "react";
import Navbar from "./Navbar";
export default function Layout(props) {
  return (
    <>
      <Navbar />
      {/*  <header>
        <h1> Citas al instante</h1>
        {isReadyForInstall && (
          <button onClick={downloadApp}> Descargar </button>
        )}
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/galeria">Galería</Link>
          </li>
        </ul>
      </nav> */}

      <main className="container mx-auto px-4">{props.children}</main>
    </>
  );
}
