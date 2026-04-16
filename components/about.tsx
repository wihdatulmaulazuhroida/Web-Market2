"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Lightbulb, Users } from "lucide-react"
import { useRef } from "react"

const values = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We pour our heart into every project, treating your brand as if it were our own.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "We push creative boundaries while maintaining elegance and purpose in our designs.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Your vision guides our work. We believe the best results come from true partnership.",
  },
]

const floatAnimation = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 via-blue-50 to-indigo-100/80" />
      
      {/* Parallax Decorative Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-sky-400/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-blue-400/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-800 leading-tight">
              Dedicated to
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                creativity & growth
              </span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Bloom Studio is a creative agency that specializes in helping brands 
              find their voice and visual identity. Founded in 2019, we&apos;ve grown 
              from a small team of dreamers to a full-service creative studio.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We believe that great design is more than aesthetics—it&apos;s about 
              creating meaningful connections between brands and the people they serve. 
              Every project we take on is an opportunity to create something beautiful 
              and impactful.
            </p>

            {/* Values */}
            <div className="mt-10 space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-white/70 backdrop-blur-md border border-blue-100/50 flex items-center justify-center shrink-0 shadow-lg shadow-blue-50/50 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-sky-100 group-hover:border-blue-200/80 transition-all duration-500"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <value.icon className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div 
                variants={floatAnimation}
                animate="animate"
                className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-200/60 to-sky-300/60 backdrop-blur-md border border-white/50 shadow-xl shadow-blue-200/30 overflow-hidden hover:shadow-2xl hover:shadow-blue-300/40 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-indigo-400/30" />
              </motion.div>
              <motion.div 
                variants={floatAnimation}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-sky-100/80 to-blue-200/80 backdrop-blur-md border border-white/50 shadow-xl shadow-blue-200/30 overflow-hidden hover:shadow-2xl hover:shadow-blue-300/40 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-sky-300/30 to-blue-400/30" />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div 
                variants={floatAnimation}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-200/60 to-blue-300/60 backdrop-blur-md border border-white/50 shadow-xl shadow-blue-200/30 overflow-hidden hover:shadow-2xl hover:shadow-blue-300/40 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-indigo-300/30 to-sky-400/30" />
              </motion.div>
              <motion.div 
                variants={floatAnimation}
                animate="animate"
                style={{ animationDelay: "3s" }}
                className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-300/60 to-indigo-200/60 backdrop-blur-md border border-white/50 shadow-xl shadow-blue-200/30 overflow-hidden hover:shadow-2xl hover:shadow-blue-300/40 transition-all duration-500"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-indigo-300/30" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
