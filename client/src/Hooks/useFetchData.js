import React, { useState, useEffect } from 'react';

export function useFetchData() {
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    try {
      (async function () {
        const response = await fetch('/api');
        const result = await response.json();
        setDoc(result.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { doc };
}
