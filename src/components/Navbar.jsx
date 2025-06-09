import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import logo from '../assets/logos/logo_azul.png';

export default function Inicio() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 sticky top-0 z-50 text-white">
      <div className="flex justify-between items-center px-2 md:px-20 py-3">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-[50px] md:h-[75px] object-contain" />

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-around items-center gap-6">
          <NavLinks />
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:block">
          {user ? (
            <button
              onClick={logout}
              className="bg-sky-800 text-white font-bold py-2 px-6 rounded text-sm md:text-xl"
            >
              Cerrar Sesión
            </button>
          ) : (
            <Link to="/iniciar-sesion">
              <button className="bg-sky-800 text-white font-bold py-2 px-6 rounded text-sm md:text-xl">
                Iniciar Sesión
              </button>
            </Link>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <NavLinks onClick={() => setIsOpen(false)} />
          {user ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="block w-full bg-sky-800 text-white font-bold py-2 rounded"
            >
              Cerrar Sesión
            </button>
          ) : (
            <Link to="/iniciar-sesion" onClick={() => setIsOpen(false)}>
              <button className="block w-full bg-sky-800 text-white font-bold py-2 rounded">
                Iniciar Sesión
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function NavLinks({ onClick = () => {} }) {
  return (
    <>
      <Link to="/" onClick={onClick}>
        <p className="text-sm md:text-xl font-bold pb-2 md:pb-0">Bienvenida</p>
      </Link>
      <Link to="/nosotros" onClick={onClick}>
        <p className="text-sm md:text-xl font-bold pb-2 md:pb-0">Nosotros</p>
      </Link>
      <Link to="/contacto" onClick={onClick}>
        <p className="text-sm md:text-xl font-bold pb-2 md:pb-0">Contacto</p>
      </Link>
      <Link to="/jugar" onClick={onClick}>
        <p className="text-sm md:text-xl font-bold pb-2 md:pb-0">Jugar</p>
      </Link>
    </>
  );
}
