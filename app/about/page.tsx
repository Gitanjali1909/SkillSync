"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  FiArrowRight,
  FiCheckCircle,
  FiMessageSquare,
  FiBarChart2,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
} from "react-icons/fi"

export default function AboutPage() {
  const [hovered, setHovered] = useState(false)
  const howItWorksRef = useRef(null)
  const aboutRef = useRef(null)
  const techStackRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  const howItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const techStackInView = useInView(techStackRef, { once: true, amount: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const testimonials = [
    {
      quote:
        "SkillSync helped me figure out my dream job. (I now tell my friends I'm a 'professional problem solver'.)",
      name: "Alex Johnson",
      role: "UX Designer",
    },
    {
      quote:
        "I took the quiz and found out I'm a 'Creative Visionary'. Don't know what that means, but it sounds cool.",
      name: "Sarah Williams",
      role: "Marketing Specialist",
    },
    {
      quote: "AI gave me some solid career advice, now I trust robots more than my parents.",
      name: "Michael Chen",
      role: "Software Engineer",
    },
  ]

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to SkillSync —<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-[#B797FA]">
              Where Careers Get a Little More Fun
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            I made this to help you figure out your strengths, explore career paths, and chat with an AI 
            that’s actually helpful (and won’t judge your coffee addiction).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/quiz"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-[#B797FA] hover:from-indigo-700 hover:to-purple-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span>{hovered ? "Let's Launch! 🚀" : "Ready to level up? Let's Sync!"}</span>
              <motion.div animate={{ x: hovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                <FiArrowRight className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

     
      <section ref={howItWorksRef} className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-[#B797FA] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FiCheckCircle className="h-10 w-10 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Step 1: Take the Quiz",
                description: "No boring tests — just quick, fun questions about you.",
              },
              {
                icon: <FiBarChart2 className="h-10 w-10 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Step 2: Get Career Recommendations",
                description: "Think of it as a sneak peek into your potential.",
              },
              {
                icon: <FiMessageSquare className="h-10 w-10 text-indigo-600 dark:text-[#B797FA]" />,
                title: "Step 3: Chat with AI",
                description: "Ask anything. Seriously, it’s like a 24/7 career buddy.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section ref={aboutRef} className="w-full rounded-lg py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Built by Me — Gitanjali Soni 
            </h2>

            <div className="mb-8 relative w-32 h-32 mx-auto">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="rounded-full overflow-hidden border-4 border-[#B797FA]"
  >
    <Image
      src="/gitanjali.jpg"
      alt="Gitanjali Soni"
      width={128}
      height={128}  // Match width and height to create a perfect circle
      className="object-cover"  // Ensure the image fully fills the circle
    />
  </motion.div>
</div>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Frontend dev who loves smooth UI, clever copy, and late-night bug fixing. 
            </motion.p>

          </motion.div>
        </div>
      </section>

      
      <section ref={techStackRef} className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={techStackInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Powers This?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">(No magic — just some awesome tools:)</p>
            <div className="w-20 h-1 bg-[#B797FA] mx-auto rounded-full mt-4"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={techStackInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            {[
              { name: "Next.js", description: "Fast, like a good first impression" },
              {
                name: "TypeScript",
                description: "For catching bugs before they happen",
              },
              {
                name: "Tailwind CSS",
                description: "Clean designs, fast",
              },
              { name: "Zustand", description: "Managing state without the headache" },
              { name: "Framer Motion", description: "Smooth animations for smooth vibes" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-r from-indigo-600/10 to-purple-600/10 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-full">
                  <span className="text-xl font-bold text-indigo-600 dark:text-[#B797FA]">{tech.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     
      <section ref={testimonialsRef} className="w-full rounded-lg py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What People Might Say</h2>
            <div className="w-20 h-1 bg-[#B797FA] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 text-[#B797FA]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.667 13.333H5.33366C5.33366 8 8.00033 5.333 12.0003 5.333V8C10.667 8 8.00033 8.667 8.00033 13.333H10.667C11.4074 13.333 12.1177 13.6143 12.6428 14.1144C13.1679 14.6145 13.467 15.3043 13.467 16.0203V22.6667C13.467 23.3826 13.1679 24.0725 12.6428 24.5726C12.1177 25.0726 11.4074 25.3539 10.667 25.3539H4.00033C3.25989 25.3539 2.54961 25.0726 2.02451 24.5726C1.49942 24.0725 1.20033 23.3826 1.20033 22.6667V16.0203C1.20033 15.3043 1.49942 14.6145 2.02451 14.1144C2.54961 13.6143 3.25989 13.333 4.00033 13.333H10.667ZM26.667 13.333H21.3337C21.3337 8 24.0003 5.333 28.0003 5.333V8C26.667 8 24.0003 8.667 24.0003 13.333H26.667C27.4074 13.333 28.1177 13.6143 28.6428 14.1144C29.1679 14.6145 29.467 15.3043 29.467 16.0203V22.6667C29.467 23.3826 29.1679 24.0725 28.6428 24.5726C28.1177 25.0726 27.4074 25.3539 26.667 25.3539H20.0003C19.2599 25.3539 18.5496 25.0726 18.0245 24.5726C17.4994 24.0725 17.2003 23.3826 17.2003 22.6667V16.0203C17.2003 15.3043 17.4994 14.6145 18.0245 14.1144C18.5496 13.6143 19.2599 13.333 20.0003 13.333H26.667Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-[#B797FA] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={contactRef} className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Got Questions or Feedback?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Drop me a line at - 
            </p>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:gitanjalisoni2003@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-[#B797FA] hover:from-indigo-700 hover:to-purple-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <FiMail className="h-5 w-5" />
                <span>Gitanjalisoni2003@gmail.com — I’d love to hear from you!</span>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
