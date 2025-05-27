import mapa from '../assets/imgs/mapa.png';

export default function Contacto() {
  return (
    <div id="contacto">
        <div className="flex bg-indigo-950 w-full h-30 items-center justify-center text-white">
            <h1 className="text-2xl md:text-8xl font-bold">Contacto</h1>
        </div>
        <div className="flex flex-col bg-sky-800 w-full items-center py-10">
            <h1 className="text-white text-xl md:text-5xl mb-8 text-center">¡Envíanos un mensaje!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 pb-8">
                <input type="text" placeholder="Nombre" className="border p-2 rounded border-white text-white text-sm" />
                <input type="text" placeholder="Correo" className="border p-2 rounded border-white text-white text-sm" />
                <input type="text" placeholder="Asunto" className="border p-2 rounded border-white text-white text-sm" />
                <input type="text" placeholder="Compañía" className="border p-2 rounded border-white text-white text-sm" />
                <input type="text" placeholder="Teléfono" className="border p-2 rounded border-white text-white text-sm" />
                <textarea placeholder="Mensaje" className="border p-2 rounded col-span-1 md:col-span-2 h-32 border-white text-white text-sm"></textarea>
            </div>
            <button className="bg-emerald-300 p-4 text-black text-lg md:text-3xl rounded-lg">Enviar Mensaje</button>
            <img src={mapa} alt="mapa.png" width="500px" height="500px" className="m-8"/>
        </div>
    </div>
  );
}
