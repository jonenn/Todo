import { useEffect, useState } from 'react';

const useLocalStorage = (dataName, defaultData) => {
   const [dataState, setDataState] = useState({
      loading: true,
      error: null,
   });

   const getInitialData = () => {
      const parsedData = localStorage.getItem(dataName);
      return parsedData ? JSON.parse(parsedData) : defaultData;
   };

   const [localData, setLocalData] = useState(getInitialData);

   useEffect(() => {
      try {
         localStorage.setItem(dataName, JSON.stringify(localData));
         setDataState({ ...dataState, loading: false });
      } catch (err) {
         setDataState({ ...dataState, error: err.message });
      }
   }, [localData]);

   const saveAllData = (newData) => {
      localStorage.setItem(dataName, JSON.stringify(newData));
      setLocalData(newData);
   };

   return { localData, saveAllData, dataState };
};

export { useLocalStorage };
