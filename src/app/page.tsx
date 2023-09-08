import Image from 'next/image'
import About from './components/About'
import Projects from './components/Projects'
import Presentation from './components/Presentatio'
import Hero from './components/Hero'
import ContactForm from './components/Forms'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <hr></hr>
      <About/>
      <hr></hr>
      <Projects/>
      <ContactForm/>
    </main>
  )
}
