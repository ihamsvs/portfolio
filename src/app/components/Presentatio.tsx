
interface svg {
    url: string;
    alt?: string
}

const IMAGES : svg[] = [{
    url:"/html.svg",
    alt: "html5"
},
{
    url: "/css3.svg",
    alt:"css"
},
{
    url: "/js.svg",
    alt:"javascript"
},
{
    url:"/react.svg",
    alt: "react js"
},{
    url:"next-js.svg",
    alt:"Next js Framework"
},
{
    url:"/python.svg",
    alt:"pyhton"
},
{
    url:"/django.svg",
    alt:"django framework"
},
{
    url:"/postgresql.svg",
    alt: "postgres SQl"
},
{
    url:"/mongodb.svg",
    alt:"mongo db"
},
{
  url:"/tailwind.svg",
  alt:"tailwind css"
}

]

export default function Presentation() {
  return (
<div className='flex flex-row my-4'>
  <section className="max-w-md">
    <div className="flex flex-row gap-2">
      {IMAGES.map(({url, alt}) => (
        <article key={alt} className="flex flex-col items-center">
          <img src={url} alt={alt} className="max-h-32 hover:scale-110 transition-transform" />
        </article>
      ))}
    </div>
  </section>
</div>
  )
}

