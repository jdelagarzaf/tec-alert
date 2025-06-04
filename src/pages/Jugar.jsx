import { useAuth } from "../context/AuthContext";
import useFAQ from '../hooks/useFAQ';
import useLeaderboard from "../hooks/useLeaderboard";

import logoBlanco from '../assets/logos/logo_blanco.png';
import gameStart from '../assets/imgs/gameStart.png';
import profile from '../assets/imgs/profile.webp';
import lupa from '../assets/imgs/lupa.png';
import plusSign2 from '../assets/imgs/plusSign2.png';
import upload from '../assets/imgs/upload.png';
import { useState } from "react";
import FaqModal from "../components/FAQmodal";


export default function Jugar() {
    const { user,  } = useAuth();
    const { data, loading } = useLeaderboard();
    const { faqs, refresh, addFaq, editFaq, deleteFaq } = useFAQ();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);


    
  return (
    <div id="juego">
        <div className="flex justify-center items-center bg-sky-800 p-8 md:p-16 text-white">
            <h1 className="text-2xl md:text-8xl font-bold">Juegos</h1>
         </div>
         <div className="bg-sky-600 flex flex-col justify-center items-center text-white md:px-20 py-8">
             <div className="flex justify-center items-center py-4">
                 <img src={logoBlanco} alt="Logo" className="w-1/2" />
             </div>
             <div className="w-3/4">
                <a href="https://elitegentro.github.io/TecAlertGameTest/" target="_blank" rel="noopener noreferrer">
                    <img src={gameStart} alt="Logo" className="w-full" />
                </a>
             </div>
            
         </div>
         <div className="bg-cyan-700 flex flex-col justify-center items-center text-white px-20 py-16">
             <h2 className="text-xl md:text-5xl font-bold py-4">Scoreboard</h2>
             <div className="md:w-3/4 flex flex-col justify-center items-center gap-4">
                {loading ? (
                        <p className="text-lg">Loading...</p>
                ) : (
                    data.map((player, index) => (
                    <div key={index} className="flex items-center gap-4 md:gap-8 text-left">
                        <img  src={profile}  alt="Foto del jugador"  className="object-cover rounded-full w-[3rem] md:w-[4rem]"  />
                        <div className="flex justify-start items-center gap-8 md:gap-16 w-full">
                        <p className="text-md md:text-2xl font-semibold w-50 truncate">{player.email.split('@')[0]}</p>
                        <p className="text-md md:text-2xl font-semibold w-12">{String(player.main_score).padStart(3, '0')}</p>
                        </div>
                    </div>
                    ))

                )}
                 
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
                    {user?.is_admin && (
                        <img src={plusSign2} alt="Agregar FAQ" style={{ width: "2rem", cursor: "pointer" }} onClick={() => { setModalData(null); setModalOpen(true); }} />
                    )}

                 </div>
                 <div className="flex flex-col gap-8 md:w-3/4">
                    {faqs.map(faq => (
                    <div key={faq.question_id} className="text-white rounded w-full">
                        <p className="text-lg md:text-2xl font-bold">{faq.question}</p>
                        <p className="text-md md:text-xl">{faq.answer}</p>

                        {user?.is_admin && (
                        <div className="flex gap-4 mt-4">
                            <button className="bg-yellow-500 text-white px-4 py-1 rounded" onClick={() => { setModalData(faq);  setModalOpen(true); }} >
                                Editar
                            </button>
                            <button className="bg-red-600 text-white px-4 py-1 rounded" onClick={async () => { await deleteFaq(faq.question_id); refresh(); }} >
                                Borrar
                            </button>
                        </div>
                        )}
                    </div>
                    ))}
                 </div>
             </div>
         </div>
         <div className="bg-sky-600 flex flex-col justify-center items-center text-white px-8 pb-4 md:px-20 md:py-16">
             <h2 className="text-xl md:text-5xl font-bold py-4 text-center md:pb-12">¿Como Jugar?</h2>
             <div className="md:w-3/4 flex flex-col justify-center items-center gap-8 hidden md:flex">
                 <iframe width="860" height="515" src="https://www.youtube.com/embed/Bj_XJwibjB4?si=ApyB8JJLMbB3j61K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
             <div className="md:w-3/4 flex flex-col justify-center items-center gap-8 md:hidden">
                 <iframe width="300" height="215" src="https://www.youtube.com/embed/Bj_XJwibjB4?si=ApyB8JJLMbB3j61K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
             {user && user.is_admin && (
                <div className="flex bg-white px-8 py-4 m-4 rounded text-black items-center border-2 border-black justify-around">
                    <img src={upload} alt="upload.png" width="28px" height="28px"/>
                    <p className="text-black rounded ">Subir Video</p>
                </div>
             )}
         </div>
         {modalOpen && (
            <FaqModal initialData={modalData} onClose={() => setModalOpen(false)}
                onSave={async (data) => {
                if (modalData?.question_id) {
                    await editFaq(modalData.question_id, data);
                } else {
                    await addFaq(data);
                }
                setModalOpen(false);
                refresh();
                }}

            />
            )}
    </div>
  );
}
