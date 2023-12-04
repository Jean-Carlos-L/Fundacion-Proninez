import { Routes, Route } from "react-router-dom";
import Proyectos from "../components/Proyectos/Proyectos";
import Layout from "../components/layouts/Layout";
import Objetivos from "../components/Objetivos/Objetivos";
import Trabajadores from "../components/Trabajadores/Trabajadores";
import Comunidades from "../components/Comunidades/Comunidades";
import Infantes from "../components/Infantes/Infantes";
import Login from "../components/Login/Login";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Proyectos />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="objetivos" element={<Objetivos />} />
        <Route exact path="trabajadores" element={<Trabajadores />} />
        <Route exact path="comunidades" element={<Comunidades />} />
        <Route exact path="infantes" element={<Infantes />} />
      </Route>
    </Routes>
  );
}
export default PublicRoutes;
