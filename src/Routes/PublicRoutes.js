import { Routes, Route } from "react-router-dom";
import Proyectos from "../components/Proyectos/Proyectos";
import Layout from "../components/layouts/Layout";
import Infantes from "../components/Infantes/Infantes";
import Objetivos from "../components/Objetivos/Objetivos";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Proyectos />} />
        <Route exact path="infantes" element={<Infantes />} />
        <Route exact path="objetivos" element={<Objetivos />} />
      </Route>
    </Routes>
  );
}
export default PublicRoutes;
