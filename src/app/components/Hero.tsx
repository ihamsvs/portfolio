import React from 'react'

export default function Hero() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-center">
        Bienvenido a mi portafolio
      </h1>
      <a 
        className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
        href="#project"
      >
        Ver mis trabajos 
        <svg 
          className="w-6 h-6 ml-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </a>
      <div className='flex flex-row gap-4 my-4'>
        <a href='https://github.com/ihamsvs' target='_blank'>
        <img src='/github.svg' className='w-10 h-10 hover:scale-110 transition-transform'/>
        </a>
        <a href='https://www.linkedin.com/in/iham-vivanco-09357a213/' target='_blank'>
        <img src='/linkedin.svg' className='w-10 h-10 hover:scale-110 transition-transform'/>
        </a>
      </div>
    </div>








  )
}
