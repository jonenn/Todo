// import { useEffect, useState } from 'react';

// const useLocalStorage = (dataName, defaultData) => {
//    const [dataState, setDataState] = useState({
//       loading: true,
//       error: false,
//    });

//    const getInitialData = () => {
//       const parsedData = localStorage.getItem(dataName);
//       return parsedData ? JSON.parse(parsedData) : defaultData;
//    };

//    const [localData, setLocalData] = useState(getInitialData);

//    useEffect(() => {
//       // setTimeout(() => {
//       try {
//          localStorage.setItem(dataName, JSON.stringify(localData));
//          setDataState({ ...dataState, loading: false });
//       } catch (err) {
//          setDataState({ loading: false, error: true });
//          console.log(err);
//       }
//       // }, 3000);
//    }, [localData]);

//    const saveAllData = (newData) => {
//       localStorage.setItem(dataName, JSON.stringify(newData));
//       setLocalData(newData);
//    };

//    return { localData, saveAllData, dataState };
// };

// export { useLocalStorage };
