import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/auth";
import * as authService from "../services/authService";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // On page refresh, restore the session from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("orbitmind_user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    const { user, token } = await authService.login(email, password);
    localStorage.setItem("orbitmind_user", JSON.stringify(user));
    localStorage.setItem("orbitmind_token", token);
    setUser(user);
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    const { user, token } = await authService.register(name, email, password);
    localStorage.setItem("orbitmind_user", JSON.stringify(user));
    localStorage.setItem("orbitmind_token", token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("orbitmind_user");
    localStorage.removeItem("orbitmind_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login: handleLogin, register: handleRegister, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook so components can just call useAuth()
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}