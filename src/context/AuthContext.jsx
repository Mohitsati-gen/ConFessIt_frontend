import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 ALWAYS check auth on app load
  const fetchCurrentUser = async () => {
    try {
      const res = await api.get("/users/me");
      setUser(res.data.data.user || res.data.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ RUN ONCE ON REFRESH
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const login = async (credentials) => {
    const res = await api.post("/users/login", credentials);

    // optional: only if you use Authorization header
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.data.accessToken}`;

    await fetchCurrentUser(); // 🔥 re-sync user

    return res;
  };

  const logout = async () => {
    await api.post("/users/logout");

    setUser(null);
    delete api.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
