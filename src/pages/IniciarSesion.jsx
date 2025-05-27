import { Link } from 'react-router-dom';
import { useState } from "react";
import useLogin from "../hooks/useLogin";

export default function IniciarSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login({ email, password });

    if (success) {
      alert("Login OK");
    }
  };

  return (
    <div id="iniciar_sesion" className="bg-sky-800">
        <div className="min-h-screen w-full flex flex-col">
   
            <div className="md:h-32 p-8 md:p-0 bg-sky-800 flex items-center justify-center">
                <h1 className="text-xl md:text-6xl font-bold text-white md:py-4">Iniciar Sesion</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="py-8 bg-sky-700 flex flex-col items-center justify-center px-4">
                
                    <label className="text-white text-lg md:text-2xl">Correo</label>
                    <input type="email" name="email" placeholder="Ingresa tu correo..." value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 rounded border-white text-white m-6 w-80 bg-transparent"/>
        
                    <label className="text-white text-lg md:text-2xl">Contraseña</label>
                    <input type="password" name="password" placeholder="Ingresa tu contraseña..." value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2 rounded border-white text-white m-6 w-80 bg-transparent"/>
                    <p className="text-white m-8">¿No tienes cuenta?</p>
                    <Link to="/registrar">
                      <p href="#" className="hover:underline text-white mb-4">Regístrate</p>
                    </Link>
                    <button type="submit" disabled={isLoading} className="bg-white text-black px-6 py-2 rounded border-2 border-black hover:bg-gray-200 transition m-4 disabled:opacity-50">{isLoading ? "Cargando..." : "Iniciar Sesión"}</button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {user && <p className="text-green-500">¡Bienvenido, ID: {user.user_id}!</p>}
            </form>
        </div>
    </div>
  );
}
