"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { FiCheckCircle, FiMessageSquare, FiBarChart2, FiSmartphone, FiHeart } from "react-icons/fi"

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const featuresRef = useRef(null)
  const whyRef = useRef(null)
  const testimonialsRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const whyInView = useInView(whyRef, { once: true, amount: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  const featuresControls = useAnimation()
  const whyControls = useAnimation()
  const testimonialsControls = useAnimation()

  useEffect(() => {
    if (featuresInView) featuresControls.start("visible")
    if (whyInView) whyControls.start("visible")
    if (testimonialsInView) testimonialsControls.start("visible")
  }, [featuresInView, whyInView, testimonialsInView, featuresControls, whyControls, testimonialsControls])

  const testimonials = [
    {
      name: "Jamie Smith",
      role: "Career Changer",
      content: "I took the quiz and found a career path I didn't even know existed! Thanks, SkillSync!",
      avatar: "/img.svg",
    },
    {
      name: "Taylor Rodriguez",
      role: "Recent Graduate",
      content: "The AI gave me a personalized roadmap for my career. I'm not even kidding, this is my new best friend.",
      avatar: "/img1.svg",
    },
    {
      name: "Jordan Lee",
      role: "Mid-Career Professional",
      content: "Best career advice I've ever gotten. And I didn't have to pay for it!",
      avatar: "/img2.svg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative">
        {/* Simple gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
        </div>

        <div className="container mx-auto px-4 py-28 md:py-40 flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to SkillSync – Built with Curiosity and Code{" "}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Hi, I’m Gitanjali!
            SkillSync is a project I built to make career decisions simpler (and a bit more fun).
            It’s got a quick quiz and an AI you can chat with — like a career coach, but always online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              href="/quiz"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-[#B797FA] hover:from-indigo-700 hover:to-purple-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Let's Get Started!</span>
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            It only takes a few minutes. Here’s how it works:
            </h2>
            <div className="w-20 h-1 bg-[#B797FA] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCheckCircle className="h-10 w-10 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Step 1",
                description: "Take a quick quiz. (Not one of those boring ones.)",
              },
              {
                icon: <FiBarChart2 className="h-10 w-10 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Step 2",
                description:
                  "Get personalized career suggestions. (Sorry, “Netflix binge-watcher” didn’t make the list.)",
              },
              {
                icon: <FiMessageSquare className="h-10 w-10 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Step 3",
                description: "Chat with our AI (It's like talking to your smartest friend who never sleeps.)",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyRef} className="w-full py-20 rounded-xl bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why I Built This</h2>
            <div className="w-20 h-1 bg-[#B797FA] mx-auto rounded-full"></div>
            <p>I wanted to make something that feels helpful, playful, and actually fun to use.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiHeart  className="h-8 w-8 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Designed From Scratch",
                description:
                  "Everything from layout to animations built by me.",
              },
              {
                icon: <FiMessageSquare className="h-8 w-8 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Real AI Chatbot ",
                description: "It gives actual career advice (not just generic fluff).",
              },
              {
                icon: <FiSmartphone className="h-8 w-8 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Fully Responsive",
                description:
                  "Works beautifully on any screen — mobile, tablet, or desktop.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 text-indigo-600 dark:text-[#B797FA]">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What People Might Say
            </h2>
            <div className="w-20 h-1 bg-[#B797FA] mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 rounded-full overflow-hidden h-12 w-12 relative">
                    <Image
                      src={testimonials[testimonialIndex].avatar || "/home.svg"}
                      alt={testimonials[testimonialIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{testimonials[testimonialIndex].name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[testimonialIndex].role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonials[testimonialIndex].content}"</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === testimonialIndex ? "bg-[#B797FA] w-6" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full rounded-xl py-20 bg-gradient-to-tr from-indigo-600/90 to-purple-700/90 dark:from-purple-800/90 dark:to-indigo-900/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try It?</h2>
            <p className="text-xl mb-8 text-white/90">Take the quiz and see where your skills might take you.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/quiz"
                className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Started Now!</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating animated circles for visual interest */}
      <div className="fixed bottom-0 left-0 w-full h-64 -z-10 overflow-hidden">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white dark:bg-gray-900"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>
    </main>
  )
}
