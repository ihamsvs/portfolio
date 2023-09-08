
interface Proyecto {
  id: number;
  url: string;
  nombre: string;
  descripcion: string;
  stack1: string;
  stack2: string;
  stack3: string;
  stack4?: string;
  stack5?: string;
  demo?: string
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    url: "/emoji.png",
    nombre: "Emoji-Info",
    descripcion:
      "Proyecto en el que se visualizan tablas con emojis, permitiendo la búsqueda por grupos y proporcionando más información sobre estos emojis.",
    stack1: "/react.svg",
    stack2: "/next.svg",
    stack3: "/js.svg",
    stack4: "/tailwind.svg"
  },
  {
    id: 2,
    url: "/useLLM.png",
    nombre: "Chat con IA",
    descripcion:
      "Proyecto que utiliza las tecnologías de la página useLLM para aprovechar sus diversas opciones de inteligencia artificial.",
    stack1: "/react.svg",
    stack2: "/next.svg",
    stack3: "/js.svg",
    stack4: "/tailwind.svg"
  },
  {
    id: 3,
    url: "/weathersnap.png",
    nombre: "Weather Snap",
    descripcion:
      "Proyecto que emplea dos APIs (OpenWeather y Unsplash), donde las personas pueden consultar información sobre el clima de una ciudad a través de un enlace, y acceder a fotos relacionadas con ese lugar a través de otro enlace.",
    stack1: "/react.svg",
    stack2: "/js.svg",
    stack3: "/tailwind.svg",
    demo: "https://weather-snap-neon.vercel.app/"

  },
  {
    id: 4,
    url: "/circulo.png",
    nombre: "Proyecto Circulo Delta",
    descripcion:
      "Proyecto de mi práctica profesional que involucra la renovación de una página web, siguiendo los diseños proporcionados por el dueño de la empresa, y realizando ajustes según criterios y necesidades identificadas durante el desarrollo.",
    stack1: "/react.svg",
    stack2: "/next.svg",
    stack3: "/typescript.svg",
    stack4: "/tailwind.svg",
    demo: "https://web-delta-nu.vercel.app/"
  },
  {
    id: 5,
    url: "weather.png",
    nombre: "Weather App",
    descripcion:
      "Proyecto realizado utilizando la API de OpenWeather para consultar datos sobre el clima en diferentes lugares en todo el mundo",
    stack1: "/react.svg",
    stack2: "js.svg",
    stack3: "css3.svg",
    demo: "https://weather-app-ihamv.netlify.app/"
  },
  {
    id: 6,
    url: "uizard.png",
    nombre: "UIzard Challenge ",
    descripcion:
      "Reto de front-end de Uizard en el que se requiere consumir una API y mostrar la información en diferentes iframes, organizando los datos en función de sus IDs.",
    stack1: "/react.svg",
    stack2: "/next.svg",
    stack3: "/typescript.svg",
    stack4: "/tailwind.svg"
  },
  {
    id:7,
    url:"tracker.png",
    nombre:"Tracker Expense",
    descripcion:"Una aplicación para gestionar los gastos personales y representarlos gráficamente para visualizar las pérdidas y ganancias financieras.",
    stack1: "/react.svg",
    stack2: "/css3.svg",
    stack3: "js.svg"
  },
  {
    id:8,
    url:"images.png",
    nombre:"Images Search",
    descripcion:"Aplicación que utiliza la API de Unsplash para realizar búsquedas de imágenes capturadas por usuarios de la plataforma en diversos lugares del mundo, acompañadas de breves descripciones.",
    stack1: "/react.svg",
    stack2:"js.svg",
    stack3:"css3.svg"
  }

  // Agrega más proyectos según sea necesario
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8 my-8" id="project">
      <h1 className="text-6xl font-bold text-center uppercase">Proyectos 🠚</h1>

      {proyectos.map((proyecto) => (
        <div
          className="max-w-sm bg-white border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={proyecto.id}
        >
          <a href="#">
            <img
              className="rounded-t-lg"
              src={proyecto.url}
              alt={proyecto.nombre}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {proyecto.nombre}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {proyecto.descripcion}
            </p>
            <a
              href={proyecto.demo ? proyecto.demo : '#'}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border-section-dark border rounded-md gap-4 hover:shadow-xl hover:transform hover:translate-y-[-2px] transition duration-300 ease-in-out"
            >
              <img src={proyecto.stack1} className="w-7 h-7" alt="Stack 1" />
              <img src={proyecto.stack2} className="w-7 h-7" alt="Stack 2" />
              <img src={proyecto.stack3} className="w-7 h-7" alt="Stack 3" />
              {proyecto.stack4 ? <img src={proyecto.stack4} alt="stack 4" className="w-7 h-7"/> : null }
              <p className="text-gray-700">{proyecto.demo ? 'Ver demo' : null}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
