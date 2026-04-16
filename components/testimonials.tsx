"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Velvet & Co",
    content: "Working with Bloom Studio transformed our brand completely. They understood our vision and elevated it beyond what we imagined possible.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "CEO, Luminary Tech",
    content: "The attention to detail and creative excellence is unmatched. Our new website has significantly improved our client engagement.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Creative Director, Artisan Collective",
    content: "Bloom Studio doesn't just design—they create experiences. Our brand identity now perfectly reflects who we are.",
    rating: 5,
  },
]

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 via-white to-blue-50/50" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-slate-800">
            Client Love
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Hear from the brands we&apos;ve had the pleasure of working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={slideUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-blue-100/50 hover:border-blue-200/80 shadow-lg shadow-blue-50/50 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-500 ease-in-out cursor-pointer group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-indigo-400 shadow-lg shadow-blue-200/50" />
                <div>
                  <div className="font-medium text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
