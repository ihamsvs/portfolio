;

export default function Navbar() {
  return (
    <nav className='flex flex-col bg-bg-navbar py-[20px]'>
        <ul className="flex gap-4 justify-end px-8">
            <a href="#hero" className="font-bold text-xl text-white">    
                Home
            </a>
            <a href="#about" className="font-bold text-xl  text-white">
                Sobre mi
            </a>
            <a href="#project" className="font-bold text-xl text-white">
                Proyectos
            </a>
        </ul>
    </nav>
  )
}
