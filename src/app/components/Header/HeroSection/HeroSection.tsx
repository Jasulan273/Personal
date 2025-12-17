"use client";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function useTypingEffect(text: string, speed = 60) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        setDisplayed("");
        setDone(false);
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i === text.length) {
                setDone(true);
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return { displayed, done };
}

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { displayed, done } = useTypingEffect("Welcome!", 60);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.slice(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const colors = ["#7f5af0","#ffd803","#2cb67d","#f15bb5","#00aaff","#ff6f61"];
        const isMobile = width < 768;

        const particleCount = isMobile ? 40 : 120;
        const maxRadius = isMobile ? 1.5 : 3;
        const speedFactor = isMobile ? 0.5 : 1.2;
        const lineDistance = isMobile ? 80 : 120;

        const particles: { x: number; y: number; r: number; dx: number; dy: number; color: string }[] = [];
        for (let i = 0; i < particleCount; i++) {
            const r = Math.random() * maxRadius + 1;
            const x = Math.random() * width;
            const y = Math.random() * height;
            const dx = (Math.random() - 0.5) * speedFactor;
            const dy = (Math.random() - 0.5) * speedFactor;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push({ x, y, r, dx, dy, color });
        }

        function draw() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            for (let p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color + "88";
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                    if (dist < lineDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = p1.color + "44";
                        ctx.lineWidth = (isMobile ? 0.5 : 1.2) - dist / lineDistance;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            for (let p of particles) {
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > width) p.dx *= -1;
                if (p.y < 0 || p.y > height) p.dy *= -1;
            }
            draw();
            requestAnimationFrame(animate);
        }

        animate();

        function handleResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative w-[90%] mx-auto overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
            <Navbar />
            <section className="relative z-10 text-gray-900 body-font">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-12 min-h-screen gap-8">
                    <div className="flex flex-col md:w-1/2 lg:pr-24 md:pr-16 items-center md:items-start text-center md:text-left">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                            <span className="flex items-center gap-2">
                                {displayed}
                                <span className={`inline-block w-2 h-8 bg-indigo-500 rounded-sm ${done ? "animate-blink" : ""}`}></span>
                            </span>
                        </h1>
                        <p className="mb-6 leading-relaxed max-w-xl">
                            Web developer from Astana, specializing in building modern web applications.
                            I create websites for different purposes such as e-commerce, landing pages,
                            educational platforms, and more. 2 years and 8 months of experience bringing
                            creative solutions to life.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a href="#contacts" onClick={handleScroll}>
                                <Button className="bg-indigo-500 px-8 py-4 hover:cursor-pointer">Contact me</Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2 w-full items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.3 }}
                            whileHover={{ scale: 1.04, boxShadow: "0 16px 48px rgba(127,90,240,0.25), 0 2px 16px rgba(0,0,0,0.14)", y: -6 }}
                            className="w-full max-w-2xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center"
                            style={{ backdropFilter: "blur(12px)", border: "1.5px solid rgba(127,90,240,0.10)" }}
                        >
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="mb-6 flex flex-col items-center">
                                <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Zhasulan</span>
                                <span className="text-indigo-500 font-semibold mt-1 md:mt-2 text-lg md:text-xl">Status: Active search</span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="w-full flex flex-col gap-3 mt-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300 text-sm md:text-lg">Experience:</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-lg">1 years 8 months</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300 text-sm md:text-lg">Location:</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-lg">Astana</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 dark:text-gray-300 text-sm md:text-lg">Work format:</span>
                                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm md:text-lg">Online & Offline</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <style jsx global>{`
                @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
                .animate-blink { animation: blink 1s steps(2, start) infinite; }
            `}</style>
        </div>
    );
}
