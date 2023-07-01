import axios from "axios";
import { useEffect, useState } from "react";

export const useResaponsables = () => {
  const [responsables, setResponsables] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/trabajadores/administrativo`;
        const { data } = await axios.get(url);
        setResponsables(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return { responsables, isLoading, error };
};
