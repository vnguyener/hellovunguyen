import { useState } from "react";

const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  return [value, setValue]; 
};

export default useLocalStorageState;
