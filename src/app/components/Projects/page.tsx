"use client"
import React from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  text: string
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [displayed, setDisplayed] = React.useState("")
  const [index, setIndex] = React.useState(0)
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        if (index < text.length) {
          setDisplayed((prev) => prev + text[index])
          setIndex((prev) => prev + 1)
        } else {
          setTimeout(() => setDeleting(true), 2000)
        }
      } else {
        if (index > 0) {
          setDisplayed((prev) => prev.slice(0, -1))
          setIndex((prev) => prev - 1)
        } else {
          setTimeout(() => setDeleting(false), 500)
        }
      }
    }, deleting ? 80 : 120)
    return () => clearInterval(interval)
  }, [index, deleting, text])

  return (
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center mb-12">
      {displayed}
      <span className="animate-pulse">|</span>
    </h2>
  )
}

const projects = [
  { title: "Quanta Up", link: "https://quantaup.netlify.app/home", image: "/quantup.png" },
  { title: "Duck IT", link: "https://github.com/DAKExDUCK/duck-it", image: "/duckit.png" },
  { title: "Drive Now", link: "https://jasulan273.github.io/Drive.Now/", image: "/drivenow.png" },
  { title: "Restaurant", link: "https://github.com/Jasulan273/Restaurant", image: "/restaurant.png" },
  { title: "Plant Store", link: "https://github.com/Jasulan273/PlantStore", image: "/greenshop.png" },
  { title: "Project Six", link: "https://github.com/Talap-creator/BlogAPP", image: "/blog.png" },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gray-50 pb-40 flex flex-col items-center justify-start sm:justify-center overflow-hidden px-4 sm:px-6 py-16">
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Typewriter text="My Projects" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 2xl:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-base sm:text-lg font-semibold text-white tracking-wide">
                  View Project
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
