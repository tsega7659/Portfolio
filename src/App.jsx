 import { NavBar } from "./components/NavBar"
import { About } from "./components/About"
import Projects from "./components/Projects"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import EnhancedPortfolio from "./components/EnhancedPortfolio"
import ModernPortfolio from "./components/DarkModernPortfolio"
export default function App() {
  return (
    <div className="bg-customBlue">
      {/* <NavBar />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer /> */}
      {/* <EnhancedPortfolio /> */}
      <ModernPortfolio />
    </div>
  )
}