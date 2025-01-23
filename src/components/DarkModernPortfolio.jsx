import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaTelegram, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import me from "../assets/me.png"
import ritta from "../assets/rita.jpg"
import tsimona from "../assets/tsimona.jpg"
import kefta from "../assets/kefta.jpg"
import planning from "../assets/planner.jpg"


const DarkModernPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div
      className="min-h-screen text-gray-100 font-sans"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background.jpg-Te8LGQLJd2Xz5NpHab9xXbAukeN5W3.jpeg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen lg:h-auto bg-black/90 backdrop-blur-sm">
        <nav className="fixed w-full z-10 bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a
              href="#home"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D00] to-[#6B0099] glitter-shadow"
            >
              YZ
            </a>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`hover:text-[#FF4D00] transition duration-300 ${
                    activeSection === item.id ? "text-[#6B0099]" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-100 hover:text-[#FF4D00] transition duration-300">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black/90 backdrop-blur-md"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block py-2 px-4 text-sm hover:bg-[#6B0099]/20 transition duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </nav>

        <section id="home" className="h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 glitter-shadow"
            >
              Yeabsira Zelalem
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D00] to-[#6B0099]"
            >
              Software Engineer & Front-end Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              {[
                { href: "https://github.com/tsega7659", icon: FaGithub },
                { href: "https://www.linkedin.com/in/yeabsira-zelalem-8455052ab/", icon: FaLinkedin },
                { href: "mailto:yeabsirazelalem791@gmail.com", icon: FaEnvelope },
                { href: "https://t.me/yeabsiraZelalem", icon: FaTelegram },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF4D00] transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={24} className="glitter-shadow" />
                </a>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D00] to-[#6B0099] glitter-shadow">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row  max-w-5xl mx-auto ">
              <div className="w-full mb-8 md:mb-0 md:mr-32">
                <div className="gradient-border rounded-full overflow-hidden glitter-shadow">
                  <img
                    src={me || "/placeholder.svg"}
                    alt="Yeabsira Zelalem"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D00] to-[#6B0099]">
                  Hello, I'm Yeabsira!
                </h3>
                <p className="text-lg mb-4 text-gray-300">
                  I'm a passionate software engineering student and front-end developer based in Ethiopia. With a strong
                  foundation in web technologies and a keen eye for design, I create responsive and user-friendly web
                  applications that leave a lasting impression.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  My journey in tech has equipped me with expertise in React, Node.js, and modern web development
                  practices. I'm constantly learning and exploring new technologies to stay at the forefront of web
                  development.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF4D00]">Location:</span>
                    <span>Ethiopia, Addis Ababa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF4D00]">Email:</span>
                    <span>yeabsirazelalem791@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF4D00]">Education:</span>
                    <span>Software Engineering Student</span>
                  </div>
                </div>
                <a
                  href="/placeholder.svg"
                  download="Yeabsira_resume.pdf"
                  className="inline-block px-6 mt-2 py-3 border border-[#FF4D00] text-[#FF4D00] rounded-full hover:bg-gradient-to-r from-[#FF4D00] to-[#6B0099] hover:text-white transition-all duration-300 glitter-shadow"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-purple-400 glitter-shadow">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Ritta Flowers",
                  description: "A React and Tailwind CSS website showcasing a flower shop's products and services.",
                  image: ritta,
                  link: "https://ritta-flowers.netlify.app/",
                  languages: ["React", "Tailwind CSS"],
                },
                {
                  title: "Tsimona Books",
                  description: "An online bookstore built with React, featuring API integration and responsive design.",
                  image:tsimona,
                  link: "https://tsimonabooks.netlify.app/",
                  languages: ["React", "Tailwind CSS", "RESTful API"],
                },
                {
                  title: "Plannig Management System",
                  description: "A comprehensive system for managing planning and reporting process. Not Deployed yet.",
                  image: planning,
                  link: "#",
                  languages: ["Next JS", "Tailwind CSS", "Go"],
                },
                {
                  title: "Kefta Plc Website",
                  description: "A full-stack blog application built with React, Node.js, Express, and MySql. Not Deployed yet.",
                  image:kefta,
                  link: "#",
                  languages: ["Node.js", "Express", "MySql", "React", "Tailwind CSS" ],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group border border-gray-800 hover:border-[#FF4D00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-orange-300 group-hover:text-[#FF4D00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.languages.map((lang, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-sm bg-black/40 border border-purple-400/30 rounded-full text-purple-300 group-hover:border-purple-400/60 transition-colors duration-300"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-orange-300 hover:text-[#FF4D00] transition-colors duration-300"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-black/60">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D00] to-[#6B0099] glitter-shadow">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Front-end",
                  skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
                },
                {
                  category: "Tools & Others",
                  skills: ["Git", "RESTful APIs", "Responsive Design", "UI/UX Principles"],
                },
                { category: "Volunteer", skills: ["Tutoring", "Mentoring"] },
              
              ].map((skillSet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/80 rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D00] to-[#6B0099]">
                    {skillSet.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-[#FF4D00] to-[#6B0099] rounded-full mr-2"></span>
                        <span className="text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black/60">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D00] to-[#6B0099] glitter-shadow">
              Get In Touch
            </h2>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-[#FF4D00]">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaPhone className="mr-2 text-[#6B0099]" />
                    <span>+251 976647859</span>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="mr-2 text-[#6B0099]" />
                    <span>yeabsirazelalem791@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-[#6B0099]" />
                    <span>Addis Ababa, Ethiopia</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-4 py-2 bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                      required
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-2 bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                      required
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="w-full px-4 py-2 bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                      required
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-2 bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-[#FF4D00]"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#FF4D00] to-[#6B0099] text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 bg-black/60 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-4">&copy; {new Date().getFullYear()} Yeabsira Zelalem. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              {[
                { href: "https://github.com/tsega7659", icon: FaGithub },
                { href: "https://www.linkedin.com/in/yeabsira-zelalem-8455052ab/", icon: FaLinkedin },
                { href: "mailto:yeabsirazelalem791@gmail.com", icon: FaEnvelope },
                { href: "https://t.me/yeabsiraZelalem", icon: FaTelegram },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-300 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={24} className="glitter-shadow" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DarkModernPortfolio

