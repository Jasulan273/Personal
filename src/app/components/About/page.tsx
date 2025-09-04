"use client"
import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
  return (
    <div id="aboutme" className="relative h-screen flex flex-col items-center justify-center bg-black text-white px-8 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/4 left-10 w-1/3 h-[2px] bg-gradient-to-r from-pink-500 to-orange-400 origin-left"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-20 top-0 h-1/2 w-[2px] bg-gradient-to-b from-orange-500 to-pink-500 origin-top"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-10"
      >
        About <span className="text-gray-400">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-2xl text-center text-lg mb-16 leading-relaxed"
      >
        I graduated from <span className="text-orange-400 font-semibold">AITU (Astana)</span> and I am currently pursuing my master's degree in{" "}
        <span className="text-pink-400 font-semibold">Software Engineering</span>.  
        I have more than <span className="text-orange-300 font-bold">20 successful projects</span> and almost{" "}
        <span className="text-pink-300 font-bold">3 years of experience</span> in development.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center p-8 border border-white/20 bg-white/5 rounded-2xl shadow-lg backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
        >
          <GraduationCap size={40} className="mb-4 text-orange-400" />
          <h3 className="text-3xl font-bold">AITU</h3>
          <p className="mt-2 text-sm text-center">Bachelor and Master in Software Engineering</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center p-8 border border-white/20 bg-white/5 rounded-2xl shadow-lg backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
        >
          <Briefcase size={40} className="mb-4 text-pink-400" />
          <h3 className="text-3xl font-bold">20+</h3>
          <p className="mt-2 text-sm text-center">Completed projects</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center justify-center p-8 border border-white/20 bg-white/5 rounded-2xl shadow-lg backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
        >
          <Award size={40} className="mb-4 text-orange-300" />
          <h3 className="text-3xl font-bold">3 Years</h3>
          <p className="mt-2 text-sm text-center">Experience in development</p>
        </motion.div>
      </div>
    </div>
  )
}
