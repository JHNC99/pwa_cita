import { Layout, Home, About, Gallery,Login,HomeCitas,AgregarCitas,Citas,EditarCita} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  // Botón de descarga en Layout
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homecitas" element={<HomeCitas />} />
        <Route path="/agregar-cita" element={<AgregarCitas />} />
        <Route path="/citas" element={<Citas />} />
        <Route path='/edit/:id' element={<EditarCita />} />
      </Routes>
    </Layout>
  );
}

export default App;
