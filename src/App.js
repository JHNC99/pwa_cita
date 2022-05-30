import { Layout, Home, About, Gallery,Login } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  // Botón de descarga en Layout
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="acerca" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
