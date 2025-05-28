import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignup from "../hooks/useSignup";

export default function Registrar() {
  const { signup, isLoading, error } = useSignup();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const success = await signup({ email, password, confirmPassword });
    if (success) navigate("/"); // redirect to homepage or dashboard
  };

  return (
    <div id="registrar" className="min-h-screen w-full flex flex-col">
      <div className="md:h-32 p-8 md:p-0 bg-sky-800 flex items-center justify-center">
        <h1 className="text-xl md:text-6xl font-bold text-white md:py-4">Registro</h1>
      </div>

      <div className="py-8 bg-sky-700 flex flex-col items-center justify-center px-4">
        <label className="text-white text-lg md:text-2xl">Correo</label>
        <input
          type="text"
          placeholder="Ingresa tu correo..."
          className="border p-2 rounded border-white text-white m-6 w-80 bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="text-white text-lg md:text-2xl">Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña..."
          className="border p-2 rounded border-white text-white m-2 w-80 bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="text-white text-lg md:text-2xl">Confirmar Contraseña</label>
        <input
          type="password"
          placeholder="Confirma tu contraseña..."
          className="border p-2 rounded border-white text-white m-6 w-80 bg-transparent"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
        {isLoading && <p className="text-white mt-2">Registrando...</p>}

        <p className="text-white m-4">¿Ya tienes una cuenta?</p>
        <Link to="/iniciar-sesion">
          <p className="hover:underline text-white mb-4">Iniciar Sesión</p>
        </Link>

        <button
          className="bg-white text-black px-6 py-2 rounded border-2 border-black hover:bg-gray-200 transition m-4"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Registrate
        </button>
      </div>
    </div>
  );
}
