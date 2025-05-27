import { Link } from 'react-router-dom';

export default function Registrar() {
  return (
    <div id="registrar">
        <div class="min-h-screen w-full flex flex-col">
        
            <div className="md:h-32 p-8 md:p-0 bg-sky-800 flex items-center justify-center">
                <h1 className="text-xl md:text-6xl font-bold text-white md:py-4">Registro</h1>
            </div>
    
            <div class="py-8 bg-sky-700 flex flex-col items-center justify-center px-4">
                <label class="text-white text-lg md:text-2xl">Correo</label>
                <input type="text" placeholder="Ingresa tu correo..." class="border p-2 rounded border-white text-white m-6 w-80 bg-transparent" />
    
                <label class="text-white text-lg md:text-2xl">Contraseña</label>
                <input type="password" placeholder="Ingresa tu contraseña..." class="border p-2 rounded border-white text-white m-6 w-80 bg-transparent" />
                <p class="text-white m-8">¿Ya tienes una cuenta?</p>
                <Link to="/iniciar-sesion">
                    <p class="hover:underline text-white mb-4">Iniciar Sesion</p>
                </Link>
                <button class="bg-white text-black px-6 py-2 rounded border-2 border-black hover:bg-gray-200 transition m-4">Registrate</button>
            </div>
        </div>
    </div>
  );
}
