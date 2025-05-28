import { useAuth } from "../context/AuthContext";
import useContent from "../hooks/useContent";
import EditableTextSection from "../components/EditableTextSection";

import logoBlanco from '../assets/logos/logo_blanco.png';
import bandera from '../assets/imgs/bandera.png';
import arbol from '../assets/imgs/Arbol.png';
import casita from '../assets/imgs/Frame 2.png';
import inicioFoto from '../assets/imgs/Inicio.png';
import corazon from '../assets/imgs/Corazon.png';
import bienestar from '../assets/imgs/Bienestar.png';
import juego1 from '../assets/imgs/Juego1.png';
import juego2 from '../assets/imgs/Juego2.png';
import juego3 from '../assets/imgs/Juego3.png';
import juego4 from '../assets/imgs/Juego4.png';
import carrito from '../assets/imgs/carrito.png';
import plusSign from '../assets/imgs/plusSign.png';


export default function Inicio() {
    const { user,  } = useAuth();
    const requisitosText = useContent("requisitos_basicos");
    const alcanceText = useContent("alcance");
    const bienestarText = useContent("salud_bienestar");


  return (
    <div id="bienvenida">
        <div className="flex justify-center items-center bg-sky-800 p-4">
            <img src={logoBlanco} alt="Logo_blanco.png" className="w-3/4" />
        </div> 
        <div className="bg-indigo-950 flex justify-center items-center text-white md:px-20">
            <div className="w-3/4 md:flex justify-center items-center py-8 md:py-16 ">
                <div className="w-full md:w-1/2">
                    <EditableTextSection title="Requisitos Básicos" contentHook={requisitosText} user={user} titleClass="text-xl md:text-5xl font-bold py-4" textClass="text-md md:text-3xl" containerClass="flex items-center"/>
                </div>
                <div className="flex justify-center items-center py-8 md:py-2 md:w-1/2">
                    <img src={bandera} alt="Bandera.png" className="h-auto object-contain w-1/2 md:w-auto" />
                </div>
            </div>
        </div>
        <div className="bg-sky-700 flex justify-center items-center text-white md:px-20">
            <div className="w-3/4 md:flex justify-center items-center py-8 md:py-16 ">
                <div className="flex justify-between md:justify-center items-center md:pr-8 md:w-1/3">
                    <img src={arbol} alt="Casita.png" width="300px" height="300 px" className="w-1/4 md:w-1/2"></img>
                    <img src={casita} alt="Casita.png" width="250px" height="300 px" className="w-1/4 md:w-1/2 hidden md:flex"></img>
                </div>
                <div className="md:w-2/3">
                    <EditableTextSection title="Alcance" contentHook={alcanceText} user={user} titleClass="text-xl md:text-5xl font-bold py-4" textClass="text-md md:text-3xl" containerClass="flex items-center"/>
                </div>
            </div>
        </div>
        <div className="bg-sky-800 flex flex-col justify-center items-center text-white md:px-20 md:py-10 md:h-[800px]">
            <h1 className="text-xl md:text-5xl font-bold py-4">Nuestros Juegos</h1>
            <div id="controls-carousel" className="relative w-full md:max-w-4xl mx-4 px-4" data-carousel="static">
                
                <div className="relative  overflow-hidden rounded-lg md:h-[500px] h-[300px]">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={inicioFoto} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="inicio.png"></img>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={juego1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="imagen1.png"></img>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={juego2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="imagen2.png"></img>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={juego3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="imagen3.png"></img>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={juego4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="imagen4.png"></img>
                    </div>
                </div>
        
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="flex bg-white px-8 py-4 mb-8 md:m-4 rounded text-black items-center border-2 border-black justify-around" id="comprarJuego">
                <img src={carrito} alt="carrito.png" width="28px" height="28px"></img>
                <p className="text-black rounded ">Comprar</p>
            </div>
            {user && user.is_admin && (
                <div className="flex bg-white px-8 py-4 mb-8 md:m-4 rounded text-black items-center border-2 border-black justify-around">
                    <img src={plusSign} alt="carrito.png" width="28px" height="28px"></img>
                    <p className="text-black rounded ">Agregar Juego</p>
                </div>
            )}
        </div>

        <div className="bg-sky-950 md:flex justify-center items-center text-white py-8 md:px-20 md:h-[800px]">
            <div className="flex jmd:ustify-center items-center pl-8 md:pl-0 md:w-1/3">
                <img src={corazon} alt="Corazon.png" width="250px" height="250px" className="w-1/6 md:w-1/2"></img>
            </div>
            <div className="md:w-1/3">
                <EditableTextSection title="Salud y Bienestar" contentHook={bienestarText} user={user} titleClass="text-xl md:text-5xl font-bold py-4" textClass="text-md md:text-3xl" containerClass="flex items-center"/>
            </div>
            <div className="flex justify-center items-center md:w-1/3">
                <img src={bienestar} alt="Bienestar.png" width="250px" height="250px" className="w-1/4 md:w-1/2"></img>
            </div>
        </div>
    </div>
  );
}
