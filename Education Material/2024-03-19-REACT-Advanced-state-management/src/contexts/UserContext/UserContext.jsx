import { createContext, useState, useContext } from "react";

const userContext = createContext(null);

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  function signin() {
    setUser({
      name: "lars",
    });
  }

  function signout() {
    setUser(null);
  }

  const context = {
    user,
    signin,
    signout,
  };

  return (
    <userContext.Provider value={context}>
      {props.children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("useUserContext must be a child of a UserContextProvider");
  }

  return context;
}
