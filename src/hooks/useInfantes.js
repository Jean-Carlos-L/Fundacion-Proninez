import axios from "axios";
import { useEffect, useState } from "react";

export const useInfantes = (refresh, { proyecto, sexo, comunidad }) => {
  const [infantes, setInfantes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/infantes/?sexo=${sexo}&proyecto=${proyecto}&comunidad=${comunidad}`;
        const { data } = await axios.get(url);
        setInfantes(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [refresh, proyecto, sexo, comunidad]);

  return { infantes, isLoading, error };
};
