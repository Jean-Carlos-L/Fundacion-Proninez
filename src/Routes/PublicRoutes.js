import { Routes, Route } from "react-router-dom";
import Proyectos from "../components/Proyectos/Proyectos";
import Layout from "../components/layouts/Layout";
import Infantes from "../components/Infantes/Infantes";
import Objetivos from "../components/Objetivos/Objetivos";
import Trabajadores from "../components/Trabajadores/Trabajadores";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Proyectos />} />
        <Route exact path="infantes" element={<Infantes />} />
        <Route exact path="objetivos" element={<Objetivos />} />
        <Route exact path="trabajadores" element={<Trabajadores />} />
      </Route>
    </Routes>
  );
}
export default PublicRoutes;
