import { enqueueSnackbar } from 'notistack';
import { useState, useEffect } from 'react';

import { ERROR_MESSAGE_PREFIX } from '../constants/constants';

const useFetch = (url, method = 'GET', bodyData = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(method === 'GET');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`${ERROR_MESSAGE_PREFIX} ${response.status}: ${response.statusText}`);

        const jsonData = await response.json();
        if (isMounted) setData(jsonData);
      } catch (err) {
        if (isMounted && err?.message) {
          setError(err.message);
          enqueueSnackbar(err.message, { variant: 'error' });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  const executeRequest = async (customMethod, customData = null) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: customMethod,
        headers: { 'Content-Type': 'application/json' },
        body: customData ? JSON.stringify(customData) : null,
      });

      if (!response.ok)
        throw new Error(`${ERROR_MESSAGE_PREFIX} ${response.status}: ${response.statusText}`);

      const jsonData = await response.json();
      setData(jsonData);
      return jsonData;
    } catch (err) {
      if (err?.message) {
        setError(err.message);
        enqueueSnackbar(err.message, { variant: 'error' });
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, setData, executeRequest };
};

export default useFetch;
