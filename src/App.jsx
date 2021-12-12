import React from 'react';
import marlon from '../public/assets/marlon.png';
import pdf from '../public/assets/Marlon-varon.pdf';

export const App = () => {
   return (
      <div className="container">
         <header className="header">
            <nav className="header-nav">
               <div className="header_link">
                  <a href="#inicio">
                     <h5>Inicio</h5>
                  </a>
               </div>
               <div className="header_link">
                  <a href="#habilidades">
                     <h5>Habilidades</h5>
                  </a>
               </div>
               <div className="header_link">
                  <a href="#proyectos">
                     <h5>Proyectos</h5>
                  </a>
               </div>
            </nav>

            <div className="social_links">
               <div>
                  <h5>GitHub</h5>
               </div>
               <div>
                  <h5>LinkedIn</h5>
               </div>
               <div>
                  <a href="mailto:varon.marlon93@gmail.com">
                     <h5>varon.marlon83@gmail.com</h5>
                  </a>
               </div>
            </div>
         </header>
         <main className="main">
            <section id="inicio">
               <div className="inicio_text">
                  <div>
                     <h1>
                        Hola, yo soy Marlon Varon <br /> Desarrollador frontend
                     </h1>
                     <h5>
                        😊Soy una persona amante de la tecnología y el
                        desarrollo web fronted. 👦🏽 Me gusta poner en practica
                        todos los conocimientos que he adquirido. Soy una
                        persona con facilidades para aprender nuevas tecnologias
                        y adaptarme a nuevos grupos de trabajo. 💻
                     </h5>
                     <a href={pdf} download="marlon-CV">
                        <button className="descargar-cv">Descargar CV</button>
                     </a>
                  </div>
               </div>
               <div className="inicio_img">
                  <img src={marlon} alt="mineFoto" />
               </div>
            </section>
            <section id="habilidades"></section>
            <section id="proyectos"></section>
         </main>
      </div>
   );
};
