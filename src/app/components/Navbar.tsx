;

export default function Navbar() {
  return (
    <nav className='flex flex-col bg-bg-navbar py-[20px]'>
        <ul className="flex gap-4 justify-end px-8">
            <a href="#hero" className="font-bold text-xl text-white hover:text-blue-500 transition-colors">    
                Inicio
            </a>
            <a href="#about" className="font-bold text-xl  text-white hover:text-blue-500  transition-colors">
                Sobre mi
            </a>
            <a href="#project" className="font-bold text-xl text-white hover:text-blue-500 e transition-colors">
                Proyectos
            </a>
        </ul>
    </nav>
  )
}
