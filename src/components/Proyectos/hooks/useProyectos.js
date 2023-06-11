import axios from "axios";
import { useEffect, useState } from "react";

export const useProyectos = (filtros) => {
  const [proyectos, setProyectos] = useState([
    { titulo: "Hola", descripcion: "Des", alcance: "Este es el alcance" },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
        const { data } = await axios.get(url);
        setProyectos(data.results);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [filtros]);

  return { proyectos, isLoading, error };
};
