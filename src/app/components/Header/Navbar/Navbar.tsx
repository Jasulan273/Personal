"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Menu, House } from 'lucide-react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href')?.slice(1)
    const targetElement = targetId ? document.getElementById(targetId) : null
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="w-full bg-white">
      <div className="hidden md:container mx-auto md:flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold text-black">Personal</span>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center mb-4 md:mb-0">
          <a href="#aboutme" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            About Me
          </a>
          <a href="#skills" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            Skills
          </a>
          <a href="#projects" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            Projects
          </a>
          <a href="#contacts" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            Contacts
          </a>
        </nav>
        <a href="/Resume.pdf" download>
          <Button className="flex items-center gap-2 hover:cursor-pointer">Resume <Download /></Button>
        </a>
      </div>
       <div className="container mx-auto flex justify-between items-center md:hidden lg:hidden">
        <a className="flex items-center md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold text-black">Personal</span>
        </a>
        {/*<nav className="flex flex-wrap items-center text-base justify-center mb-4 md:mb-0">
          <a href="#aboutme" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            About Me
          </a>
          <a href="#skills" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            Skills
          </a>
          <a href="#projects" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            Projects
          </a>
          <a href="#contacts" onClick={handleScroll} className="mr-4 md:mr-8 font-bold text-black hover:text-indigo-500 transition">
            Contacts
          </a>
        </nav>
        <a href="/Resume.pdf" download>
          <Button className="flex items-center gap-2 hover:cursor-pointer">Resume <Download /></Button>
        </a>*/}
        <Menubar>
  <MenubarMenu>
    <MenubarTrigger><Menu /></MenubarTrigger>
    <MenubarContent>
      <MenubarItem><a href="#skills" onClick={handleScroll} className="mr-4 md:mr-8 text-black hover:text-indigo-500 transition">
            About Me
          </a></MenubarItem>
      <MenubarSeparator />
      <MenubarItem> <a href="#skills" onClick={handleScroll} className="mr-4 md:mr-8 text-black hover:text-indigo-500 transition">
            Skills
          </a></MenubarItem>
      <MenubarSeparator />
      <MenubarItem><a href="#skills" onClick={handleScroll} className="mr-4 md:mr-8 text-black hover:text-indigo-500 transition">
            Projects
          </a></MenubarItem>
      <MenubarSeparator />
      <MenubarItem><a href="#skills" onClick={handleScroll} className="mr-4 md:mr-8 text-black hover:text-indigo-500 transition">
            Contacts
          </a></MenubarItem>
   <MenubarSeparator />
           <MenubarItem><a href="/Resume.pdf" download>
          <Button className="flex items-center gap-2 hover:cursor-pointer">Resume <Download /></Button>
        </a></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
      </div>
    </header>
  )
}
