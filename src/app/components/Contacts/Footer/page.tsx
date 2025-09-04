"use client"
import React from "react"
import { motion } from "framer-motion"
import { MoveUp } from "lucide-react"

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative h-[15vh] bg-neutral-950 text-neutral-400 py-[5vh] border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm"
        >
          © {new Date().getFullYear()} Zhasulan. All rights reserved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex space-x-4"
        >
          <a href="#" onClick={handleScrollToTop} className="flex flex-row hover:text-white transition">Move to top <MoveUp /></a>
        </motion.div>
      </div>
    </footer>
  )
}