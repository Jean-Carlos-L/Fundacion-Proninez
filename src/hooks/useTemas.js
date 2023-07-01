import axios from "axios";
import { useEffect, useState } from "react";

export const useTemas = () => {
  const [temas, setTemas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = `${process.env.REACT_APP_URL}/fundacion_proninez/temas`;
        const { data } = await axios.get(url);
        setTemas(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return { temas, isLoading, error };
};
