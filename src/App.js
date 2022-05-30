import { Layout, Home, About, Gallery,Login,HomeCitas,AgregarCitas,Citas,EditarCita} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  // Botón de descarga en Layout
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeCitas />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/agregar-cita" element={<AgregarCitas />} />
        <Route path="/citas" element={<Citas />} />
        <Route path='/edit/:id' element={<EditarCita />} />
      </Routes>
    </Layout>
  );
}

export default App;
