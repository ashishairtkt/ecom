import axios from "axios";
import { useState, useEffect } from "react";

export const useAxiosFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {
      // cleanup
    };
  }, [url]);

  return { data, isLoading, error };
};
