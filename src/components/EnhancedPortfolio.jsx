import React, { useState, useEffect } from "react"
import { TypeAnimation } from "react-type-animation"
import {
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa"
import Yeabsira_resume from "../assets/Yeabsira_Zelalem_CV_Resume.pdf"
import image from "../assets/me.png"
import image2 from "../assets/image2.jpg"
import badge from "../assets/badge.jpg"
import rita from "../assets/rita.jpg"
import tsimona from "../assets/tsimona.jpg"
import front from "../assets/newfronr.png"
import dev from "../assets/newdev.png"
import tutor from "../assets/tutor.jpeg"

const EnhancedPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = Yeabsira_resume
    link.download = "Yeabsira_resume"
    link.click()
  }

  return (
    <div className="font-roboto bg-customBlue text-white">
      {/* NavBar */}
      <nav className="sticky top-0 z-50 bg-customBlue shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="font-bold text-2xl">PORTFOLIO</h1>
          <button
            onClick={handleDownload}
            className="bg-customBlue text-white border-2 border-customTeal rounded-full py-2 px-6 hover:bg-customBlue1 hover:text-customBlue transition duration-300"
          >
            Download CV
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">I'm Yeabsira Zelalem</h1>
        <TypeAnimation
          sequence={["Software Engineer", 2000, "Developer", 2000, "Programmer", 2000, "Poet", 2000]}
          wrapper="div"
          speed={50}
          className="text-3xl md:text-4xl text-customBlue1"
          repeat={Number.POSITIVE_INFINITY}
        />
        <div className="flex justify-center mt-8 space-x-4">
          {[
            { href: "https://t.me/y_a_b_u_Z", icon: FaTelegram },
            { href: "https://github.com/tsega7659", icon: FaGithub },
            { href: "https://www.linkedin.com/in/yeabsira-zelalem-8455052ab/", icon: FaLinkedin },
            { href: "mailto:yeabsirazelalem791@gmail.com", icon: FaEnvelope },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-customBlue1 hover:text-customTeal transition duration-300"
            >
              <social.icon size={32} />
            </a>
          ))}
        </div>
        <hr className="border-t-4 border-customTeal w-64 mx-auto mt-12" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-customTeal">
        <div className="container mx-auto px-6">
          <div className="lg:flex items-center justify-center">
            <img
              className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-8 lg:mb-0 shadow-lg"
              src={image || "/placeholder.svg"}
              alt="Yeabsira Zelalem"
            />
            <div className="lg:ml-12 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-4">About me</h2>
              <p className="max-w-2xl">
                Hello, my name is Yeabsira Zelalem. I'm a software engineering student and a front-end developer. I have
                hands-on experience working on various projects, focusing on creating responsive pages loaded with
                functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-customBlue1 mb-8">Experience</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            I have intermediate-level experience in developing user interfaces and projects across multiple domains.
            Through practical exposure, I've refined my skills in creating user-friendly UI designs that prioritize
            usability and aesthetics.
          </p>
          {[
            {
              image: "https://images.wondershare.com/mockitt/ui-design/ui-example-round-corners-trend.png",
              description:
                "My experience encompasses aspects such as layout design, color theory and user interaction, enabling me to craft UIs that are both functional and aesthetically pleasing.",
              buttonText: "Visit My Github",
              buttonLink: "https://github.com/tsega7659",
            },
            {
              image: image2,
              description:
                "I have extensive experience as a front-end developer for a federal prison, where I honed my skills in designing user-friendly and responsive UIs.",
              buttonText: "Visit My Project",
              buttonLink: "https://github.com/tsega7659",
            },
            {
              image: badge,
              description:
                "By completing courses offered by IBM, I cultivated a wide range of valuable skills including enhanced interpersonal capabilities and strong problem-solving skills.",
              buttonText: "Visit My Credly",
              buttonLink: "https://www.credly.com/badges/e8126e73-5d34-435b-9d05-3d756348d2da/public_url",
            },
            {
              image: rita,
              description:
                "Delighted to showcase my journey in front-end web development, where I crafted a website using React and Tailwind CSS.",
              buttonText: "Visit My Project",
              buttonLink: "https://ritta-flowers.netlify.app/",
            },
            {
              image: tsimona,
              description:
                "I have practiced many techniques for handling APIs using React and Tailwind CSS. Creating responsive pages has been particularly rewarding.",
              buttonText: "Visit My Project",
              buttonLink: "https://tsimonabooks.netlify.app/",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center mb-12 bg-customBlue1 rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Project ${index + 1}`}
                className="w-full lg:w-1/2 h-64 object-cover"
              />
              <div className="p-8 lg:w-1/2">
                <p className="text-gray-800 mb-4">{project.description}</p>
                <a
                  href={project.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-customBlue text-white border-2 border-customTeal rounded-full py-2 px-6 hover:bg-customTeal hover:text-customBlue transition duration-300"
                >
                  {project.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skill" className="py-16 bg-customTeal">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-customBlue mb-8">Skills</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Front-end Developer proficient in developing cutting-edge solutions. Skilled in front-end development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: front,
                title: "Front-end Development",
                description:
                  "Crafting visually stunning digital experiences. Specializing in creating beautiful interfaces that captivate and engage users.",
                skills: ["React.js", "jQuery", "JavaScript", "Tailwind", "Bootstrap", "HTML", "CSS"],
              },
              {
                icon: dev,
                title: "Web Development",
                description:
                  "Full-Stack Developer in developing cutting-edge solutions. Skilled in front-end development.",
                skills: ["PHP", "Node.js", "Express.js", "MySQL"],
              },
              {
                icon: tutor,
                title: "Tutoring",
                description:
                  "Tutoring enables me to share my expertise and passion for learning while helping students reach their academic goals.",
                skills: [],
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 transform transition duration-300 hover:-translate-y-2"
              >
                <img src={skill.icon || "/placeholder.svg"} alt={skill.title} className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-customBlue4 mb-2">{skill.title}</h3>
                <p className="text-customBlue3 mb-4">{skill.description}</p>
                {skill.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((s, i) => (
                      <span key={i} className="bg-customBlue text-white px-2 py-1 rounded-full text-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-customBlue1 mb-12">Contact Me</h2>
          <div className="bg-customTeal rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                {[
                  { icon: FaUser, title: "Name", value: "Yeabsira Zelalem" },
                  { icon: FaPhone, title: "Phone", value: "+251-976-647-859" },
                  { icon: FaMapMarkerAlt, title: "Address", value: "Ethiopia, Addis Ababa" },
                  { icon: FaEnvelope, title: "Email", value: "yeabsirazelalem791@gmail.com" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center mb-6">
                    <contact.icon size={24} className="text-customBlue1 mr-4" />
                    <div>
                      <h3 className="font-bold">{contact.title}</h3>
                      <p>{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:w-1/2 p-8">
                <form action="mailto:yeabsirazelalem791@gmail.com" method="post" encType="text/plain">
                  {["Name", "Email", "Subject"].map((field) => (
                    <div key={field} className="mb-4">
                      <label className="block text-sm font-bold mb-2" htmlFor={field.toLowerCase()}>
                        {field}
                      </label>
                      <input
                        type={field === "Email" ? "email" : "text"}
                        id={field.toLowerCase()}
                        name={field.toLowerCase()}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-customBlue1"
                        required
                      />
                    </div>
                  ))}
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-customBlue1"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-customBlue text-white font-bold py-2 px-4 rounded-lg hover:bg-customBlue1 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-customBlue1 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Yeabsira Zelalem. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-customBlue1 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-customTeal"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default EnhancedPortfolio

