import { createContext, useEffect, useState } from "react";
import { observeAuth } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = observeAuth((user) => {
      setAdmin(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ admin }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
