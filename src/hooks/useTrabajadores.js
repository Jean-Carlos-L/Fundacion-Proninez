import axios from "axios";
import { useEffect, useState } from "react";

export const useTrabajadores = (refresh, tipo = "false") => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/trabajadores/${tipo}`;
        const { data } = await axios.get(url);
        setTrabajadores(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [refresh, tipo]);

  return { trabajadores, isLoading, error };
};
