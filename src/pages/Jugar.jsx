import { useAuth } from "../context/AuthContext";
import useFAQ from '../hooks/useFAQ';

import logoBlanco from '../assets/logos/logo_blanco.png';
import editIcon from '../assets/imgs/editIcon.png';
import gameStart from '../assets/imgs/gameStart.png';
import profile from '../assets/imgs/profile.webp';
import lupa from '../assets/imgs/lupa.png';
import plusSign2 from '../assets/imgs/plusSign2.png';
import upload from '../assets/imgs/upload.png';

export default function Jugar() {
    const { user,  } = useAuth();
    const { faqs, refresh, deleteFaq } = useFAQ();
    //const { faqs, loading, error, refresh, addFaq, editFaq, deleteFaq } = useFAQ();
    
  return (
    <div id="juego">
        <div className="flex justify-center items-center bg-sky-800 p-8 md:p-16 text-white">
            <h1 className="text-2xl md:text-8xl font-bold">Juegos</h1>
         </div>
         <div className="bg-sky-600 flex flex-col justify-center items-center text-white md:px-20 py-8">
             <div className="flex justify-center items-center py-4">
                 <img src={logoBlanco} alt="Logo" className="w-1/2" />
                {user && user.is_admin && (
                 <img src={editIcon} alt="Logo" style={{ width: "5rem" }}/>
                )}
             </div>
             <div className="w-3/4">
                 <img src={gameStart} alt="Logo" className="w-full" />
             </div>
            
         </div>
         <div className="bg-cyan-700 flex flex-col justify-center items-center text-white px-20 py-16">
             <h2 className="text-xl md:text-5xl font-bold py-4">Scoreboard</h2>
             <div className="md:w-3/4 flex flex-col justify-center items-center gap-4">
                 <div className="flex gap-4 md:gap-16 items-center">
                     <img src={profile} alt="Foto de Integrante" className="object-cover rounded-full text-center w-[3rem] md:w-[6rem]" />
                     <p className="text-md md:text-4xl font-semibold">Jugador 1</p>
                     <p className="text-md md:text-4xl font-semibold">012348</p>
                 </div>
                 <div className="flex gap-4 md:gap-16 items-center">
                     <img src={profile} alt="Foto de Integrante" className="object-cover rounded-full text-center w-[3rem] md:w-[6rem]" />
                     <p className="text-md md:text-4xl font-semibold">Jugador 2</p>
                     <p className="text-md md:text-4xl font-semibold">012348</p>
                 </div>
                 <div className="flex gap-4 md:gap-16 items-center">
                     <img src={profile} alt="Foto de Integrante" className="object-cover rounded-full text-center w-[3rem] md:w-[6rem]" />
                     <p className="text-md md:text-4xl font-semibold">Jugador 3</p>
                     <p className="text-md md:text-4xl font-semibold">012348</p>
                 </div>
                 <div className="flex gap-4 md:gap-16 items-center">
                     <img src={profile} alt="Foto de Integrante" className="object-cover rounded-full text-center w-[3rem] md:w-[6rem]" />
                     <p className="text-md md:text-4xl font-semibold">Jugador 4</p>
                     <p className="text-md md:text-4xl font-semibold">012348</p>
                 </div>
             </div>
         </div>
         <div className="bg-indigo-950 flex flex-col justify-center items-center text-white px-8 md:px-20 py-16">
             <h2 className="text-xl md:text-5xl font-bold py-4 text-center pb-12">Todo lo que necesitas saber sobre <br/>Tec Alert</h2>
             <div className="md:w-3/4 flex flex-col justify-center items-center gap-8">
                 <div className="w-full flex justify-center items-center gap-8">
                    <div className="flex items-center bg-stone-200 rounded-full md:w-3/4 p-4 px-16 relative">
                        <img src={lupa} alt="Imagen del juego" className="object-contain absolute left-0 h-[6rem] md:h-[12rem]"/>
                        <p className="text-md md:text-4xl font-semibold text-black md:pl-20">Buscar...</p>
                    </div>
                    {user && user.is_admin && (
                        <img src={plusSign2} alt="Logo" style={{ width: "2rem" }}/>
                    )}
                 </div>
                 <div className="flex flex-col gap-8 md:w-3/4">
                    {faqs.map(faq => (
                        <div key={faq.id}>
                            <p className="text-md md:text-4xl font-semibold">{faq.question}</p>
                            <p className="text-md md:text-4xl font-nromal">{faq.answer}</p>
                            <button onClick={() => deleteFaq(faq.id).then(refresh)}>Delete</button>
                        </div>
                    ))}
                 </div>
             </div>
         </div>
         <div className="bg-sky-600 flex flex-col justify-center items-center text-white px-8 pb-4 md:px-20 md:py-16">
             <h2 className="text-xl md:text-5xl font-bold py-4 text-center md:pb-12">¿Como Jugar?</h2>
             <div className="md:w-3/4 flex flex-col justify-center items-center gap-8">
                 <img src={gameStart} alt="Logo" className="w-full" />
             </div>
             {user && user.is_admin && (
                <div className="flex bg-white px-8 py-4 m-4 rounded text-black items-center border-2 border-black justify-around">
                    <img src={upload} alt="upload.png" width="28px" height="28px"/>
                    <p className="text-black rounded ">Subir Video</p>
                </div>
             )}
         </div>
    </div>
  );
}


// ¿Cómo se juega?
// El juego consiste en responder preguntas acerca de como actuar en caso de una emergencia.

// ¿Cómo son las preguntas que se hacen?
// Cada pregunta tiene cuatro opciones de respuesta, de las cuales solo una es la más correcta.

// ¿Cómo se gana el juego?
// El jugador debe responer la mayor cantidad de preguntas correctas antes de que se acabe el tiempo.

// ¿Cómo puedo obtener más tiempo?
// Para obtener más tiempo, el jugador puede encontrar comida en el mapa, la cual le dará más tiempo para responder las preguntas.

// ¿Cómo puedo moverme por el mapa y responder a las preguntas?
// El jugador puede moverse por el mapa utilizando las flechas del teclado y responder utilizando el mouse.