import React from "react";

import marlon from "../public/assets/marlon.png";
import html from "../public/assets/html.svg";
import css from "../public/assets/css.svg";
import javaScript from "../public/assets/js.svg";
import react from "../public/assets/react.svg";
import sass from "../public/assets/sass.svg";
import redux from "../public/assets/redux.svg";
import npm from "../public/assets/npm.svg";
import nodejs from "../public/assets/nodejs.svg";
import webpack from "../public/assets/webpack.svg";
import git from "../public/assets/git.svg";
import github from "../public/assets/github.svg";
import linkedin from "../public/assets/linkedin.svg";

import pdf from "../public/assets/Marlon-varon.pdf";

export const App = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="header-nav">
          <div className="header_link">
            <a href="#inicio">
              <h2>Inicio</h2>
            </a>
          </div>
          <div className="header_link">
            <a href="#habilidades">
              <h2>Habilidades</h2>
            </a>
          </div>
          <div className="header_link">
            <a href="#proyectos">
              <h2>Proyectos</h2>
            </a>
          </div>
        </nav>

        <div className="social_links">
          <a href="#">
            <div>
              <img src={github} alt="githud-logo" /><h2>GitHub</h2>
            </div>
          </a>
          <a href="">
            <div>
              <img src={linkedin} alt="linkedin-logo" /><h2>LinkedIn</h2>
            </div>
          </a>
          
          <div>
            <a href="mailto:varon.marlon93@gmail.com">
              <h3>varon.marlon83@gmail.com</h3>
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
              <h2>
                😊Soy una persona amante de la tecnología y el desarrollo web
                fronted. 👦🏽 Me gusta poner en practica todos los conocimientos
                que he adquirido. Soy una persona con facilidades para aprender
                nuevas tecnologias y adaptarme a nuevos grupos de trabajo. 💻
              </h2>
              <a href={pdf} download="marlon-CV">
                <button className="descargar-cv">
                  <h2>Descargar CV</h2>{" "}
                </button>
              </a>
            </div>
          </div>
          <div className="inicio_img">
            <img src={marlon} alt="mineFoto" />
          </div>
        </section>
        <section id="habilidades">
          <div className="habilidades_habilidad">
            <h1>Tecnologias</h1>
            <div className="habilidades_habilidad-tecnologia">
              <img src={html} alt="html-logo" />
            <h2>HTML</h2>
              <progress id="file" max="100" value="100" />
            </div>
            <div className="habilidades_habilidad-tecnologia">
              <img src={css} alt="css-logo" />
              <h2>CSS</h2>
              <progress id="file" max="100" value="100" />
            </div>
            <div className="habilidades_habilidad-tecnologia">
              <img src={javaScript} alt="js-logo" />
              <h2>JavaScript</h2>
              <progress id="file" max="100" value="80" />
            </div>
          </div>

          <div className="habilidades_habilidad">
            <h1>Frameworks</h1>
            <div className="habilidades_habilidad-tecnologia">
              <img src={react} alt="react-logo" />
              <h2>React</h2>
              <progress id="file" max="100" value="80" />
            </div>
            <div className="habilidades_habilidad-tecnologia">
              <img src={sass} alt="sass-logo" />
              <h2>SASS</h2>
              <progress id="file" max="100" value="80" />
            </div>
            <div className="habilidades_habilidad-tecnologia">
              <img src={redux} alt="redux-logo" />
              <h2>Redux</h2>
              <progress id="file" max="100" value="80" />
            </div>
          </div>

          <div className="habilidades_habilidad">
            <h1>Herramientas</h1>
            <div className="habilidades_habilidad-tecnologia">
              <img src={npm} alt="npm-logo" />
              <h2>NPM</h2>
              <progress id="file" max="100" value="80" />
            </div>
            <div className="habilidades_habilidad-tecnologia">
              <img src={nodejs} alt="node-logo" />
              <h2>NodeJS</h2>
              <progress id="file" max="100" value="80" />
            </div>
            <div className="habilidades_habilidad-tecnologia">
              <img src={webpack} alt="webpack-logo" />
              <h2>Webpack</h2>
              <progress id="file" max="100" value="80" />
            </div>
            <div className="habilidades_habilidad-tecnologia">
              <img src={git} alt="git-logo" />
              <h2>Git</h2>
              <progress id="file" max="100" value="80" />
            </div>
          </div>
        </section>
        <section id="proyectos"></section>
      </main>
    </div>
  );
};
