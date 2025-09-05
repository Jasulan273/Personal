"use client";
import React from "react"
import { motion } from "framer-motion"
import Footer from "./Footer/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Heading, Send, Github } from "lucide-react"

export default function Contacts() {
  return (
    <div id="contacts" className="flex flex-col min-h-screen">
      <section className="relative flex-1 bg-black text-white flex items-center justify-center px-4 sm:px-6 py-8 overflow-y-auto">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="relative w-full max-w-6xl grid md:grid-cols-2 gap-12 sm:gap-16 z-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
            <form className="space-y-4 sm:space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-white" />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-white" />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:border-white" />
              </motion.div>
              <Button
                asChild
                className="w-full py-3 rounded-lg bg-white text-black font-bold hover:cursor-pointer hover:bg-gray-200 transition"
              >
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Send Message
                </motion.a>
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-4 sm:space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-2xl sm:text-3xl font-bold"
            >
              Let’s build something unique
            </motion.h3>
            <p className="text-neutral-400 max-w-md text-sm sm:text-base">
              I’m open for collaborations, freelance opportunities, and creative projects. Reach out and let’s create something outstanding together.
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-white" /> texnop30618@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-white" /> +7 (747) 7356316
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-white" /> Astana, Kazakhstan
              </p>
            </div>
            <div className="flex space-x-3 sm:space-x-4 mt-2">
              <motion.a href="https://t.me/zixxxos" whileHover={{ scale: 1.2 }} className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
                <Button variant="ghost" size="icon" className="hover:cursor-pointer">
                  <Send size={18} />
                </Button>
              </motion.a>
              <motion.a href="https://hh.kz/resume/34e64f22ff0f484b010039ed1f70756f536d49" whileHover={{ scale: 1.2 }} className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
                <Button variant="ghost" size="icon">
                  <Heading width={18} height={18} className="hover:cursor-pointer" />
                </Button>
              </motion.a>
              <motion.a href="https://github.com/Jasulan273" whileHover={{ scale: 1.2 }} className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
                <Button variant="ghost" size="icon" className="hover:cursor-pointer">
                  <Github size={18} />
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
