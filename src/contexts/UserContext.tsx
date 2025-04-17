// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type UserContextType = {
  name: string;
  role: "aluno" | "professor" | "";
  setName: (name: string) => void;
  setRole: (role: "aluno" | "professor") => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [name, setNameState] = useState("");
  const [role, setRoleState] = useState<"aluno" | "professor" | "">("");

  // Carrega do localStorage quando o app inicia
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedRole = localStorage.getItem("userRole") as "aluno" | "professor" | null;
    if (storedName) setNameState(storedName);
    if (storedRole) setRoleState(storedRole);
  }, []);

  // Salva sempre que mudar
  const setName = (newName: string) => {
    localStorage.setItem("userName", newName);
    setNameState(newName);
  };

  const setRole = (newRole: "aluno" | "professor") => {
    localStorage.setItem("userRole", newRole);
    setRoleState(newRole);
  };

  return (
    <UserContext.Provider value={{ name, role, setName, setRole }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
}
