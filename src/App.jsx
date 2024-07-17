 import { NavBar } from "./components/NavBar"
import { About } from "./components/About"
import Projects from "./components/Projects"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
export default function App() {
  return (
    <div className="bg-customBlue">
      <NavBar />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}