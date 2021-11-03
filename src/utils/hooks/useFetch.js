import { useState, useCallback } from 'react';

export default function useFetch(fetchFunction) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = useCallback(
    async (...args) => {
      setLoading(true);
      const response = await fetchFunction(...args)
        .then((data) => {
          setData(data);
          return data;
        })
        .catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
        });

      return response;
    },
    [fetchFunction]
  );

  return {
    data,
    loading,
    error,
    fetchData,
  };
}
