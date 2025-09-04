"use client";
import HeroSection from "./components/Header/HeroSection/HeroSection";
import Skills from "./components/Skills/page";
import Experience from "./components/Experience/page";
import About from "./components/About/page";
import Projects from "./components/Projects/page";
import Contacts from "./components/Contacts/page";

export default function Home() {
  const panels = [
    { id: 0, content: <HeroSection /> },
    { id: 1, content: <Skills /> },
    { id: 2, content: <Experience /> },
    { id: 3, content: <About /> },
    { id: 4, content: <Projects /> },
    { id: 5, content: <Contacts /> },
  ];

  return (
    <div className="w-full">
      {panels.map((panel, idx) => (
        <section
          key={panel.id}
          className={` w-full flex items-center justify-center ${
            idx === 1 ? "bg-black text-white" : idx === 2 ? "bg-white text-black" : ""
          }`}
        >
          <div className="inner w-full">{panel.content}</div>
        </section>
      ))}
    </div>
  );
}
