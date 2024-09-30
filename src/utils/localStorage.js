const getDefaultData = (dataName, defaultData) => {
   const storedData = localStorage.getItem(dataName);
   return storedData ? JSON.parse(storedData) : defaultData;
};

const saveData = (dataName, newData) => {
   const updatedData = JSON.stringify(newData);
   localStorage.setItem(dataName, updatedData);
};

export { getDefaultData, saveData };
