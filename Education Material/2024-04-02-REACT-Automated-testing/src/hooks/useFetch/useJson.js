import { useEffect } from "react";
import { useState } from "react";
import { fetchJson } from "../../utilities/fetchJson/fetchJson";

export function useJson(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const isLoading = !data && !error;

  useEffect(() => {
    fetchJson(url).then(({ data, error }) => {
      setData(data);
      setError(error);
    });
  }, [url]);

  return {
    data,
    error,
    isLoading,
  };
}
