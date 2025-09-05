"use client";
import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { Code, Layers, Database, Cpu, Globe, GitBranch, Rocket, Box } from "lucide-react"

const skills = [
  { name: "React", icon: <Globe size={32} /> },
  { name: "Vue", icon: <Box size={32} /> },
  { name: "TypeScript", icon: <Code size={32} /> },
  { name: "HTML / CSS", icon: <Layers size={32} /> },
  { name: "Node.js", icon: <Cpu size={32} /> },
  { name: "Python", icon: <Database size={32} /> },
  { name: "PHP", icon: <Code size={32} /> },
  { name: "Django", icon: <Rocket size={32} /> },
  { name: "Git", icon: <GitBranch size={32} /> },
  { name: "Docker", icon: <Box size={32} /> },
  { name: "Linux", icon: <Globe size={32} /> },
  { name: "SOLID", icon: <Layers size={32} /> },
]

const techs = [
  "JavaScript", "PHP", "MySQL", "Git", "HTML", "Node.js", "Python", "Linux",
  "PostgreSQL", "SQL", "Docker", "Django", "FastAPI", "Laravel", "React JS",
  "TypeScript", ".NET Framework", "CMS Wordpress", "GitHub", "Figma", "VueJS",
  "REST API", "SOLID", "ООП"
]

function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const isMobile = width < 768
    const words: any[] = []

    function spawnWord() {
      if (isMobile && words.length >= 10) return
      const text = techs[Math.floor(Math.random() * techs.length)]
      words.push({
        text,
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
        dy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
        opacity: 0,
        fadeIn: true
      })
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, width, height)

      words.forEach((w, i) => {
        ctx.font = `${isMobile ? 14 : 20}px Arial`
        ctx.fillStyle = `rgba(255,255,255,${w.opacity})`
        ctx.fillText(w.text, w.x, w.y)

        w.x += w.dx
        w.y += w.dy

        if (w.fadeIn) {
          w.opacity += 0.015
          if (w.opacity >= 1) w.fadeIn = false
        } else {
          w.opacity -= 0.008
          if (w.opacity <= 0) words.splice(i, 1)
        }
      })
    }

    const interval = setInterval(spawnWord, isMobile ? 1500 : 1000)
    function animate() {
      draw()
      requestAnimationFrame(animate)
    }
    animate()

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
      clearInterval(interval)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default function Skills() {
  return (
    <div id="skills" className="relative h-screen w-full flex flex-col items-center justify-center text-white px-6 overflow-hidden">
      <CanvasBackground />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-[1200px] max-w-full mx-auto flex flex-col items-center relative z-10"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">
          My <span className="text-gray-400">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          {skills.map((skill, index) => (
            <Tilt key={index} tiltMaxAngleX={12} tiltMaxAngleY={12} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="w-full cursor-pointer border border-white bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center font-medium text-md hover:bg-white hover:text-black transition-all duration-300 mx-auto
                  sm:w-32 sm:h-32
                  md:w-40 md:h-40
                  lg:w-40 lg:h-40
                "
              >
                <div className="mb-2">{skill.icon}</div>
                {skill.name}
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
