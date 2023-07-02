import axios from "axios";
import { useEffect, useState } from "react";

export const useProyectos = (
  refresh,
  { id, documento, valoracion, fecha_inicio, fecha_fin }
) => {
  const [proyectos, setProyectos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/proyectos/?id=${id}&documento=${documento}&valoracion=${valoracion}&fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`;
        const { data } = await axios.get(url);
        setProyectos(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [id, documento, valoracion, fecha_inicio, fecha_fin, refresh]);

  return { proyectos, isLoading, error };
};
