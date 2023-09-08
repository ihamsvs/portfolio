
import React from 'react';

const ContactForm = () => {


  return (
    <form className="w-full max-w-lg mx-auto p-10 my-8 rounded-xl bg-slate-500 shadow-2xl" method='POST' action="https://formspree.io/f/mbjvybez">
        <h5 className='text-gray-950 font-bold text-3xl text-center mb-8'>Contáctame</h5>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Nombre
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="Nombre" required/>
          
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Email
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" name="Email" required/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2" htmlFor="grid-password">
            Mensaje
          </label>
          <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="Mensaje" required></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Enviar
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
};

export default ContactForm;


