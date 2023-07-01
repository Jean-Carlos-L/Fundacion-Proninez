import { Routes, Route } from "react-router-dom";
import Proyectos from "../components/Proyectos/Proyectos";
import Layout from "../components/layouts/Layout";
import Objetivos from "../components/Objetivos/Objetivos";
import Trabajadores from "../components/Trabajadores/Trabajadores";
import Comunidades from "../components/Comunidades/Comunidades";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Proyectos />} />
        <Route exact path="objetivos" element={<Objetivos />} />
        <Route exact path="trabajadores" element={<Trabajadores />} />
        <Route exact path="comunidades" element={<Comunidades />} />
      </Route>
    </Routes>
  );
}
export default PublicRoutes;
