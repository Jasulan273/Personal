"use client"
import { motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Project Work",
    role: "Fullstack Developer",
    period: "Sep 2022 – Jun 2025",
    description:
      "Developed various platforms, from educational to commercial ones. Wrote program code, managed version control, integrated software modules, and assembled applications and their components. Fixed identified bugs.",
    color: "border-gray-500",
  },
  {
    company: "HardCode",
    role: "Backend Developer",
    period: "Jun 2024 – Nov 2024",
    description:
      "Intern backend developer using C# and Python, with a focus on .NET framework. Worked on remote/external projects for government agencies. Corrected identified bugs.",
    color: "border-indigo-500",
  },
  {
    company: "AstanaHub",
    role: "Frontend Developer",
    period: "Sep 2023 – Dec 2023",
    description:
      "Intern Frontend Developer. Wrote program code.",
    color: "border-red-500",
  },
  {
    company: "Project Work",
    role: "Frontend Developer",
    period: "Jun 2022 – Sep 2022",
    description:
      "Finalized the client part of the project. Wrote program code.",
    color: "border-blue-500",
  },
]

export default function Experience() {
  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8 sm:mb-12 text-center"
      >
        My <span className="text-gray-500">Experience</span>
      </motion.h2>

      <ScrollArea
        className="w-full max-w-[900px] min-h-[400px] sm:min-h-[500px] max-h-[80vh] rounded-xl border border-gray-200 bg-white shadow-xl"
      >
        <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card className={`border-l-4 ${exp.color}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Briefcase size={18} className="text-gray-500" />
                      {exp.role} at {exp.company}
                    </h3>
                    <span className="text-gray-500 text-sm sm:text-base mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
