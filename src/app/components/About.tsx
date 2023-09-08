import React from "react";
import Presentation from "./Presentatio";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-10 my-8 rounded-xl bg-blue-200 shadow-2xl" id="about">
      <section className="flex flex-col items-center space-y-8">
        <article>
          <h2 className="text-8xl font-bold text-center uppercase text-accent mb-6">Acerca de mí</h2>
        </article>
        <article className="text-lg text-center px-8">
          ¡Hola, soy Iham! Soy un desarrollador Fullstack apasionado con
          experiencia en Python, Node.js, Express.js y React, entre otras
          tecnologías. Mi enfoque es crear soluciones tecnológicas innovadoras y
          colaborar en equipos remotos. Siempre estoy buscando desafíos
          emocionantes y oportunidades para crecer. ¡Conéctate conmigo para
          hablar de proyectos interesantes!
        </article>
        <article>
            <Presentation/>
        </article>
      </section>
    </div>
  );
}
