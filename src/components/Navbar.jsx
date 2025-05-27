import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

import logo from '../assets/logos/logo_azul.png';

export default function Inicio() {
    const { user, logout } = useAuth();
  return (
    <div className="bg-slate-900 flex justify-between items-center px-2 md:px-20 sticky top-0 z-50 text-white">
        <div className="">
            <img src={logo} alt="Logo" className="h-[20px] md:h-[75px] object-contain" />
        </div>
        <div className="flex justify-around items-center p-4 md:w-1/2 gap-2 md:gap-0">
            <Link to="/">
                <p className="text-xs md:text-xl font-bold">Bienvenida</p>
            </Link>
            <Link to="/nosotros">
                <p className="text-xs md:text-xl font-bold">Nosotros</p>
            </Link>
            <Link to="/contacto">
                <p className="text-xs md:text-xl font-bold">Contacto</p>
            </Link>
            <Link to="/jugar">
                <p className="text-xs md:text-xl font-bold">Jugar</p>
            </Link>
        </div>
        <div className="">
             {user ? (
                <button onClick={logout} className="bg-sky-800 text-white font-bold md:py-2 md:px-8 rounded text-xs md:text-xl" >Cerrar Sesión</button>
            ) : (
                <Link to="/iniciar-sesion">
                    <button className="bg-sky-800 text-white font-bold md:py-2 md:px-8 rounded text-xs md:text-xl">Iniciar Sesion</button>
                </Link>
            )}
        </div>
    </div>
  );
}
