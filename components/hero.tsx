"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

const floatAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function Hero() {
  const ref = useRef(null)
  const router = useRouter()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleGetStarted = () => {
    router.push("/auth")
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100" />
      
      {/* Parallax Decorative Orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-sky-300/30 to-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/40 to-indigo-400/30 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-indigo-200/40 to-sky-300/30 rounded-full blur-3xl"
      />

      {/* Floating Elements */}
      <motion.div
        variants={floatAnimation}
        animate="animate"
        className="absolute top-1/4 left-1/6 w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg shadow-blue-200/20"
      />
      <motion.div
        variants={floatAnimation}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-1/3 right-1/6 w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-lg shadow-blue-200/20"
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-blue-200/50 mb-8 shadow-lg shadow-blue-100/50"
        >
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-blue-700">Where creativity comes alive</span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight text-slate-800 text-balance"
        >
          Beautiful designs
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            for your vision
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto text-pretty"
        >
          We craft elegant digital experiences that resonate with your audience 
          and bring your creative ideas to life with care and attention to detail.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-500 ease-in-out group hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="rounded-full px-8 border-blue-200 hover:border-blue-300 bg-white/50 backdrop-blur-md hover:bg-white/70 text-slate-700 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-100/50"
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "5", label: "Years Experience" },
            { value: "15+", label: "Awards Won" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg shadow-blue-100/30 hover:bg-white/60 hover:shadow-xl hover:shadow-blue-200/40 transition-all duration-500 ease-in-out hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="font-serif text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
