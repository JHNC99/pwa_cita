import React from "react";
import Blog from "./Blog/Blog";
import Medicos from "./Medicos/Medicos";
import "./Blog/Blog.css";
function HomeCitas() {
  return (
    <section className="home-principal">
      <div className="medicos">
        <h2 className="title-home">Medicos recomendados</h2>
        <div className="row">
          <Medicos />
          <Medicos />
          <Medicos />
        </div>
        <h2 className="view-more">Ver mas..</h2>
      </div>
      <div className="blog">
      <h2 className="title-home">Blogs</h2>
        <div className="grid lg:grid-cols-2">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </section>
  );
}

export default HomeCitas;
