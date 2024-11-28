"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { API } from "@/services/api";
import { User } from "@/Types/user";

interface AuthContextProps {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getUserData: () => Promise<User | null>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]);

  const getUserData = async () => {
    try {
      // https://horadecodar.com.br/como-enviar-bearer-token-com-o-axios/
      const response = await API.get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData: User = response.data;
      setUser(userData);
      return userData;
    } catch (error) {
      console.error(
        "Error ao tentar obter dados do user no AuthContext:",
        error
      );
      logout();
      return null;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await API.post("/users/sessions", { email, password });
      const token = response.data.token;

      localStorage.setItem("token", token);
      setToken(token);
      getUserData();
    } catch (error) {
      console.error("Error ao fazer o login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, getUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
