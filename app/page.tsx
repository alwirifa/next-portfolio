'use client'

import About from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Project } from "./components/Project"
import HelloScreen from "./hello/page"


export default function Home() {
  return (
    <div className="relative">
      <HelloScreen />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
