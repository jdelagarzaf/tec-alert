import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function useSignup() {
  const { login: saveSession } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async ({ email, password, confirmPassword }) => {
    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Register the user
      const signupResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const signupData = await signupResponse.json();

      if (!signupResponse.ok || !signupData.user_id) {
        setError("Error al registrarse. Intenta con otro correo.");
        return false;
      }

      const user_id = signupData.user_id;

      // Step 2: Try to get the user's role
      let role = "user"; // default
      let is_admin = false;

      try {
        const roleResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/web/checkroleid`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id }),
        });

        if (roleResponse.ok) {
          const roleData = await roleResponse.json();
          if (roleData.role) {
            role = roleData.role.toLowerCase();
            is_admin = role === "admin";
          }
        }
      } catch (roleError) {
        console.warn("No se pudo obtener el rol del usuario. Se asumirá 'user'.");
      }

      // Step 3: Save session (auto-login)
      saveSession({
        user_id,
        email,
        role,
        is_admin,
      });

      return true;

    } catch (err) {
      console.error("Signup error:", err);
      setError("Error al conectar con el servidor");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
}
