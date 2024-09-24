import { useEffect, useState } from 'react';

const useLocalStorage = (dataName, defaultData) => {
   const getInitialData = () => {
      const parsedData = localStorage.getItem(dataName);
      return parsedData ? JSON.parse(parsedData) : defaultData;
   };

   const [localData, setLocalData] = useState(getInitialData);

   useEffect(() => {
      localStorage.setItem(dataName, JSON.stringify(localData));
   }, [localData]);

   const saveAllData = (newData) => {
      localStorage.setItem(dataName, JSON.stringify(newData));
      setLocalData(newData);
   };

   return [localData, saveAllData];
};

export { useLocalStorage };
