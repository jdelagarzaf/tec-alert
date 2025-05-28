import { useState } from "react";

import teusGames from "../assets/logos/teus_games.png";
import scroll from "../assets/imgs/scroll.png";
import telescope from "../assets/imgs/telescope.PNG";
import star from "../assets/imgs/star.png";
import people from "../assets/imgs/people.png";

const users = {
    "humberto": {
        "name": "Humberto Cisneros",
        "photo": "https://media.licdn.com/dms/image/v2/D4E03AQHNAx98kUfuFg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725424057870?e=1751500800&v=beta&t=Bk_u8kHGUaRckxPpg_LJCXd0yE6PnG1h-JvYH5SKthM",
        "desc": "Desarrollador de backend web con experiencia en implementación de APIs para comunicación multi-sistemas, planeación y  gestión de proyectos. Portafolio personal en proyectos full-stack y soluciones de mejora de eficiencia de procesos empresariales por medio de aplicaciones de consola.",
        "skills": "Gestión de proyectos con metodología AGILE, desarrollo en Power Platform, SQL, React, y desarrollo de APIs en JavaScript."    
    },
    "jorge": {
        "name": "Jorge de la Garza",
        "photo": "https://media.licdn.com/dms/image/v2/D5603AQHcoPeCrHdZ2A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696486045335?e=1751500800&v=beta&t=VknQcp6IBa6lkY84McnJY8GLV2gW_Wj8BgdczfQ6EKE",
        "desc": "Desarrollador de páginas web, con experiencia en desarrollo de frontend, manejo de bases de datos, y backend. Experiencia personal en varios proyectos web con diferentes tecnologías, al igual que el desarrollo de paneles administrativos con gestion de datos. Uso principal de Tawilwind y Bootstrap para el desarrollo de frontend.",
        "skills": "Desarrollo web usando herramientas como Ruby on Rails, React, Vue, PHP, Wordpress, MySQL, GraphQL, Firebase."
    },
    "grecia": {
        "name": "Grecia Saucedo",
        "photo": "https://i.imgur.com/I6noQqG.jpeg",
        "desc": "Desarrolladora enfocada en el diseño y experiencia de usuario, con participación en proyectos colaborativos de desarrollo web. Interés en la integración de interfaces intuitivas con tecnologías modernas.",
        "skills": "Diseño UX/UI, desarrollo frontend con HTML, CSS y JavaScript, y trabajo colaborativo en entornos Agile."
    },
    "ale": {
        "name": "Ale Ordaz",
        "photo": "https://i.imgur.com/wZyeKZ0.jpeg",
        "desc": "Aspirante a la concentración en Inteligencia Artificial, específicamente en machine learning. Desarrollado proyectos personales en Unity y experiencia en gestión de proyectos con metodología Agile.",
        "skills": "Desarrolladora de creación de páginas web y videojuegos. Cuento con certificaciones IBM AGILE y AI Fundamentals."
    },
    "carmen": {
        "name": "Carmen Banda",
        "photo": "https://i.imgur.com/FtnmISC.jpeg",
        "desc": "Aspirante a ciberseguridad con experiencia en hackeo y modificaciones de consolas, junto con experiencia en herramientas de pen-testing de kali Linux. Experiencia en el desarrollo web y de videojuegos y parte del equipo de desarrollo detrás de TecAlert",
        "skills": "Certificado IBM AGILE, diseño de personajes, desarrollo de videojuegos y manejo de virtual machines"
    }
};

export default function Nosotros() {
    const [bio, setBio] = useState(users.humberto);

  const mostrarBio = (nombre) => {
    setBio(users[nombre]);
  };
  return (
    <div id="nosotros">
        <div className="flex justify-center items-center bg-sky-800 py-8 md:p-16 text-white">
            <h1 className="text-2xl md:text-8xl font-bold">¿Quienes Somos?</h1>
         </div>
         <div className="bg-sky-600 flex justify-center items-center text-white md:px-20">
             <div className="w-3/4 md:flex justify-center items-center md:py-16">
                 <div className="md:w-1/2">
                     <h2 className="text-xl md:text-5xl font-bold py-4">Teus Games</h2>
                     <p className="text-md md:text-3xl">
                        Somos un equipo de estudiantes del Tecnológico de Monterrey, apasionados por el desarrollo de videojuegos y la creación de experiencias interactivas. Nuestro objetivo es educar a los estudiantes sobre la seguridad en el campus a través de juegos divertidos y educativos. <br/>
                     </p>
                 </div>
                 <div className="flex justify-center items-center md:w-1/2 py-8">
                     <img src={teusGames} alt="Imagen del juego" className="h-auto object-contain w-1/2 md:w-auto" />
                 </div>
             </div>
         </div>
         <div className="bg-indigo-950 flex flex-col justify-center items-center text-white px-20 py-16 md:gap-8">
             <h2 className="text-4xl md:text-5xl font-bold w-full text-center pb-8">Nosotros</h2>
             <div className="md:w-3/4 md:flex md:space-x-20">
                 <div className="flex flex-col pb-8 md:pb-0 md:w-1/3 md:gap-4">
                     <div className="md:flex justify-center items-center w-full pb-4">
                        {bio.photo && (
                         <img src={bio.photo} alt="Foto de Integrante" className="h-auto object-cover rounded-full text-center" style={{ width: "12rem", height: "12rem" }} />
                        )}
                        <h2 className="text-2xl font-bold w-full text-center md:hidden">{bio.name}</h2>
                     </div>
                     <h4 className="text-lg md:text-2xl font-semibold text-center">Habilidades</h4>
                     <p className="text-md md:text-xl">{bio.skills}</p>
                 </div>
                 <div className="md:w-1/3 pb-8 md:pb-0">
                     <h2 className="text-3xl font-bold hidden md:flex">{bio.name}</h2>
                     <p className="text-md md:text-xl">{bio.desc}</p>
                 </div>
                 <div className="flex flex-wrap md:flex-col md:w-1/3 md:gap-4">
                     <button className="bg-blue-950 border-3 border-stone-900 hover:border-stone-200 py-4 px-4 md:px-8 w-1/2 md:w-full text-md md:text-xl text-center md:text-start font-semibold rounded" onClick={() => mostrarBio("humberto")}>Humberto</button>
                     <button className="bg-blue-950 border-3 border-stone-900 hover:border-stone-200 py-4 px-4 md:px-8 w-1/2 md:w-full text-md md:text-xl text-center md:text-start font-semibold rounded" onClick={() => mostrarBio("ale")}>Alejandra</button>
                     <button className="bg-blue-950 border-3 border-stone-900 hover:border-stone-200 py-4 px-4 md:px-8 w-1/2 md:w-full text-md md:text-xl text-center md:text-start font-semibold rounded" onClick={() => mostrarBio("grecia")}>Grecia</button>
                     <button className="bg-blue-950 border-3 border-stone-900 hover:border-stone-200 py-4 px-4 md:px-8 w-1/2 md:w-full text-md md:text-xl text-center md:text-start font-semibold rounded" onClick={() => mostrarBio("carmen")}>Carmen</button>
                     <button className="bg-blue-950 border-3 border-stone-900 hover:border-stone-200 py-4 px-4 md:px-8 w-1/2 md:w-full text-md md:text-xl text-center md:text-start font-semibold rounded" onClick={() => mostrarBio("jorge")}>Jorge</button>
                 </div>
             </div>
         </div>
         <div className="bg-sky-600 flex justify-center items-center text-white md:px-20">
             <div className="md:w-3/4 md:flex justify-center items-center py-16">
                 <div className="md:w-1/3 flex flex-col justify-center items-center">
                     <img src={scroll} alt="Imagen del juego" className="h-auto object-contain" style={{ height: "12rem" }}/>
                     <h2 className="text-xl md:text-5xl font-bold md:py-4">Mision</h2>
                     <p className="text-md md:text-xl text-center">
                        Nuestra misión es educar a los estudiantes del Tecnológico de Monterrey sobre la seguridad en el campus a través de experiencias interactivas y entretenidas. Buscamos fomentar una cultura de prevención y seguridad, preparando a los estudiantes para actuar adecuadamente en caso de una emergencia.
                     </p>
                 </div>
                 <div className="md:w-1/3 flex flex-col justify-center items-center">
                     <img src={telescope} alt="Imagen del juego" className="h-auto object-contain" style={{ height: "12rem" }}/>
                     <h2 className="text-xl md:text-5xl font-bold md:py-4">Vision</h2>
                     <p className="text-md md:text-xl text-center">
                        Nuestra visión es ser reconocidos como un referente en la educación sobre seguridad en el campus a través de videojuegos. Queremos que nuestros juegos sean una herramienta valiosa para los estudiantes, ayudándoles a comprender la importancia de la seguridad y cómo actuar en situaciones de emergencia.
                     </p>
                 </div>
                 <div className="md:w-1/3 flex flex-col justify-center items-center">
                     <img src={star} alt="Imagen del juego" className="h-auto object-contain" style={{ height: "12rem" }}/>
                     <h2 className="text-xl md:text-5xl font-bold md:py-4">Valores</h2>
                     <p className="text-md md:text-xl text-center">
                        Nuestros valores son la seguridad, la innovación y la colaboración. Creemos que la seguridad es una prioridad en el campus, y trabajamos para crear juegos que sean innovadores y colaborativos, fomentando el trabajo en equipo y la participación activa de los estudiantes. Queremos que nuestros juegos sean una experiencia divertida y educativa para todos.
                     </p>
                 </div>
             </div>
         </div>
         <div className="bg-indigo-950 flex flex-col justify-center items-center text-white md:px-20 py-16">
             <h2 className="text-2xl md:text-5xl font-bold pb-8">Tecnologias</h2>
             <div className="md:w-3/4 flex flex-wrap justify-center items-center gap-4 md:gap-12">
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-unity-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">Unity Engine</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-microsoftsqlserver-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">SQL Server</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-typescript-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">Typescript</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-react-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">React</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-firebase-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">Firebase</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-csharp-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">C#</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-nodejs-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">Node</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-npm-original-wordmark colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">NPM</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-tailwindcss-original colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">Tailwind</p>
                 </div>
                 <div className="w-1/3 flex bg-stone-200 rounded-xl px-4 md:p-8 gap-4 items-center">
                    <div className="text-black text-4xl text-center align-center"><i class="devicon-azuredevops-plain colored"></i></div>
                    <p className="text-black text-md md:text-4xl font-bold">Devops</p>
                 </div>
             </div>
         </div>
         <div className="bg-cyan-700 flex flex-col justify-center items-center text-white md:px-20 py-4 md:py-16">
             <h2 className="text-xl md:text-5xl font-bold py-4">Alcance</h2>
             <div className="w-3/4 md:flex justify-center items-center">
                 <div className="md:w-1/2">
                     <p className="text-md md:text-3xl">
                        Tec Alert es un juego educativo diseñado para estudiantes del Tecnológico de Monterrey, específicamente para aquellos que están en los primeros semestres de la carrera. El objetivo es que los estudiantes aprendan a actuar en caso de una emergencia, ya sea un sismo, un incendio o cualquier otra situación de riesgo. El juego es una herramienta educativa que busca fomentar la cultura de la prevención y la seguridad en el campus.
                     </p>
                 </div>
                 <div className="flex justify-center items-center md:w-1/2">
                     <img src={people} alt="Imagen del juego" className="h-auto object-contain" />
                 </div>
             </div>
         </div>
     </div>
  );
}
