import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function useLogin() {
  const { login: saveSession } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const testing = false; 

  const mockUsers = [
    { user_id: 1, email: "admin@gmail.com", password: "password", role: "admin" },
    { user_id: 2, email: "user1@gmail.com", password: "userpass", role: "user" },
    { user_id: 3, email: "user2@gmail.com", password: "userpass", role: "user" }
  ];

  const mockLogin = ({ email, password }) => {
    const matchedUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      const { password, ...userWithoutPassword } = matchedUser;
      const is_admin = matchedUser.role === "admin";
      saveSession({ ...userWithoutPassword, is_admin });
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
        await new Promise((r) => setTimeout(r, 500));
        return mockLogin({ email, password });
      }

      // Step 1: Login to get user_id
      const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginResponse.json();

      if (!loginResponse.ok || !loginData.user_id) {
        setError("Usuario o contraseña incorrectos");
        return false;
      }

      // Step 2: Get role from user_id
      const roleResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/web/checkroleid`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: loginData.user_id }),
      });

      const roleData = await roleResponse.json();

      if (!roleResponse.ok || !roleData.role) {
        roleData.role = "user"; // Default to user if role not found
        console.warn("No se encontró el rol del usuario, asignando 'user' por defecto");
        //setError("Error al obtener el rol del usuario");
        //return false;
      }

      // Determine is_admin flag
      const is_admin = roleData.role.toLowerCase() === "admin";

      // Save full session
      saveSession({
        user_id: loginData.user_id,
        email,
        role: roleData.role,
        is_admin
      });

      return true;

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
