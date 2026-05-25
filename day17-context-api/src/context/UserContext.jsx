import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const user = "Nithin";

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;