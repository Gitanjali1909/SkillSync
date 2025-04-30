"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-indigo-600 to-purple-700 dark:from-purple-800 dark:to-indigo-900 text-white py-8 mt-20 relative overflow-hidden">
      
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
        className="absolute top-5 left-5 w-28 h-28 bg-indigo-500 opacity-15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-5 right-5 w-36 h-36 bg-purple-500 opacity-15 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-0"
          >
            <h1 className="text-3xl font-bold tracking-wider mb-2">SkillSync</h1>
            <p className="text-white/80">Syncing your skills with your future.</p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex space-x-6"
          >
            <a href="https://github.com/gitanjali1909" className="hover:scale-125 transition-transform">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gitanjali-soni/" className="hover:scale-125 transition-transform">
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </div>

        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-white/70 mb-4 md:mb-0"
          >
            © 2025 SkillSync(Just me, really.)
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
