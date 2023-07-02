import axios from "axios";
import { useEffect, useState } from "react";

export const useComunidades = (refresh, change) => {
  const [comunidades, setComunidades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/comunidades`;
        const { data } = await axios.get(url);
        setComunidades(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [refresh, change]);

  return { comunidades, isLoading, error };
};
