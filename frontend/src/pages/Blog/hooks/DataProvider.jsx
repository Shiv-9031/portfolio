import { createContext, useState } from "react";

export const blogData = createContext(null);

function DataProvider({ children }) {
  const [userData, setUserData] = useState({ name: "", userName: "" });
  return (
    <blogData.Provider value={{ userData, setUserData }}>
      {children}
    </blogData.Provider>
  );
}

export default DataProvider;
