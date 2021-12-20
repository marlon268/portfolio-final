import React from 'react';
import 'animate.css';

import marlon from '../public/assets/marlon.png';
import html from '../public/assets/html.svg';
import css from '../public/assets/css.svg';
import javaScript from '../public/assets/js.svg';
import react from '../public/assets/react.svg';
import sass from '../public/assets/sass.svg';
import redux from '../public/assets/redux.svg';
import npm from '../public/assets/npm.svg';
import nodejs from '../public/assets/nodejs.svg';
import webpack from '../public/assets/webpack.svg';
import git from '../public/assets/git.svg';
import github from '../public/assets/github.svg';
import linkedin from '../public/assets/linkedin.svg';
import pdf from '../public/assets/Marlon-varon.pdf';

export const App = () => {
	return (
		<div className="container animate__animated animate__fadeInTopLeft">
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
					<a href="https://github.com/marlon268" target="_blank">
						<div>
							<img src={github} alt="githud-logo" />
							<h2>GitHub</h2>
						</div>
					</a>
					<a
						href="https://www.linkedin.com/in/marlon-estiben-varon-gonzalez-3167ba194/"
						target="_blank"
					>
						<div>
							<img src={linkedin} alt="linkedin-logo" />
							<h2>LinkedIn</h2>
						</div>
					</a>

					<div>
						<a href="mailto:varon.marlon83@gmail.com">
							<h3>varon.marlon83@gmail.com</h3>
						</a>
					</div>
				</div>
			</header>

			<main className="main">
				<section id="inicio">
					<div className="inicio_container">
						<div className="inicio_text">
							<div>
								<h1>
									Hola, yo soy Marlon Varon <br /> Desarrollador
									frontend
								</h1>
								<h2>
									😊Soy una persona amante de la tecnología y el
									desarrollo web fronted. 👦🏽 Me gusta poner en practica
									todos los conocimientos que he adquirido. Soy una
									persona con facilidades para aprender nuevas
									tecnologias y adaptarme a nuevos grupos de trabajo.
									💻
								</h2>
								<a href={pdf} download="marlon-CV">
									<button className="descargar-cv">
										<h2>Descargar CV</h2>{' '}
									</button>
								</a>
							</div>
						</div>
						<div className="inicio_img">
							<img src={marlon} alt="mineFoto" />
						</div>
					</div>
				</section>
				<section id="habilidades">
					<div className="habilidades_container">
						<div className="habilidades_habilidad habilidades_animacion">
							<div className="habilidades_havilidad-titulo">
								<h1>Tecnologias</h1>
							</div>
							<div className="habilidades_habilidad-container">
								<div className="habilidades_habilidad-tecnologia">
									<img src={html} alt="html-logo" />
									<h2>HTML</h2>
								</div>
								<div className="habilidades_habilidad-tecnologia">
									<img src={css} alt="css-logo" />
									<h2>CSS</h2>
								</div>
								<div className="habilidades_habilidad-tecnologia">
									<img src={javaScript} alt="js-logo" />
									<h2>JavaScript</h2>
								</div>
							</div>
						</div>
						<div className="habilidades_habilidad habilidades_animacion">
							<div className="habilidades_havilidad-titulo">
								<h1>Frameworks</h1>
							</div>
							<div className="habilidades_habilidad-container">
								<div className="habilidades_habilidad-tecnologia">
									<img src={react} alt="react-logo" />
									<h2>React</h2>
								</div>
								<div className="habilidades_habilidad-tecnologia">
									<img src={sass} alt="sass-logo" />
									<h2>SASS</h2>
								</div>
								<div className="habilidades_habilidad-tecnologia">
									<img src={redux} alt="redux-logo" />
									<h2>Redux</h2>
								</div>
							</div>
						</div>
						<div className="habilidades_habilidad habilidades_animacion">
							<div className="habilidades_havilidad-titulo">
								<h1>Herramientas</h1>
							</div>
							<div className="habilidades_habilidad-container">
								<div className="habilidades_habilidad-tecnologia">
									<img src={npm} alt="npm-logo" />
									<h2>NPM</h2>
								</div>
								<div className="habilidades_habilidad-tecnologia">
									<img src={nodejs} alt="node-logo" />
									<h2>NodeJS</h2>
								</div>
								<div className="habilidades_habilidad-tecnologia">
									<img src={webpack} alt="webpack-logo" />
									<h2>Webpack</h2>
								</div>
								<div className="habilidades_habilidad-tecnologia">
									<img src={git} alt="git-logo" />
									<h2>Git</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="proyectos"></section>
			</main>
		</div>
	);
};
