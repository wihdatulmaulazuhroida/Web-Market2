"use client"

import { motion } from "framer-motion"
import { Palette, Code, Megaphone, Camera, PenTool, Layers } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Create a memorable brand that tells your unique story and connects with your audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Beautiful, responsive websites built with modern technologies and best practices.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that increase visibility and drive meaningful engagement.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Stunning visuals that capture the essence of your brand and products.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive interfaces that delight users and create seamless experiences.",
  },
  {
    icon: Layers,
    title: "Print Design",
    description: "Elegant print materials from business cards to comprehensive brand collateral.",
  },
]

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-sky-50/50" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-800">
            Our Services
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of creative services to help your brand flourish
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-blue-100/50 hover:border-blue-200/80 shadow-lg shadow-blue-50/50 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-500 ease-in-out cursor-pointer"
            >
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-sky-200 transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </motion.div>
              <h3 className="font-serif text-xl font-medium text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
