import { useState } from "react";

function useLocalStorage(key, initial = null) {
  const initalValue = localStorage.getItem(key) || initial;
  const [storedValue, setStoredValue] = useState(initalValue);

  const setValue = (value) => {
    try {
      if (value) {
        localStorage.setItem(key, value);
        setStoredValue(value);
      } else {
        localStorage.removeItem(key);
        setStoredValue(null);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
