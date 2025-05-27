import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function useLogin() {
  const { login: saveSession } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const testing = true;

  const mockUsers = [
    { user_id: 1, email: "admin@gmail.com", password: "password", is_admin: true },
    { user_id: 2, email: "user1@gmail.com", password: "userpass", is_admin: false },
    { user_id: 3, email: "user2@gmail.com", password: "userpass", is_admin: false }
  ];

  const mockLogin = ({ email, password }) => {
    const matchedUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      const { password, ...userWithoutPassword } = matchedUser;
      saveSession(userWithoutPassword);
      return true;
    } else {
      setError("Usuario o contraseña incorrectos");
      return false;
    }
  };

  const login = async ({ email, password }) => {
    setIsLoading(true);
    setError(null);

    try {
      if (testing) {
        await new Promise((r) => setTimeout(r, 500)); // simula retraso
        return mockLogin({ email, password });
      }

      const response = await fetch("http://localhost:5500/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.user_id) {
        saveSession(data);
        return true;
      } else {
        setError("Usuario o contraseña incorrectos");
        return false;
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Error al conectar con el servidor");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}
