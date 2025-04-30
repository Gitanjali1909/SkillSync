"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi"
import { create } from "zustand"

// Store for navbar scroll state
interface NavbarStore {
  isScrolled: boolean
  setIsScrolled: (value: boolean) => void
}
const useNavbarStore = create<NavbarStore>((set) => ({
  isScrolled: false,
  setIsScrolled: (value) => set({ isScrolled: value }),
}))

// Custom media-query hook
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [query])
  return matches
}

// Utility for conditional classes
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ")

interface NavLink {
  href: string
  label: string
  dropdown?: { href: string; label: string }[]
}

const Navbar = () => {
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { isScrolled, setIsScrolled } = useNavbarStore()

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    {
      href: "/quiz",
      label: "Quiz",
      dropdown: [
        { href: "/quiz/beginner", label: "Beginner" },
        { href: "/quiz/intermediate", label: "Intermediate" },
        { href: "/quiz/advanced", label: "Advanced" },
      ],
    },
    { href: "/results", label: "Results" },
    { href: "/chat", label: "Chat" },
    { href: "/about", label: "About" },
  ]

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [setIsScrolled])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const toggleDropdown = (href: string) => {
    setActiveDropdown(activeDropdown === href ? null : href)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-white dark:bg-gray-900",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/logo.svg" alt="SkillSync Logo" width={140} height={40} className="h-8 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.dropdown && toggleDropdown(link.href)}
                onMouseLeave={() => link.dropdown && toggleDropdown(link.href)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors",
                    pathname === link.href ? "text-[#B797FA]" : "text-gray-700 dark:text-gray-300 hover:text-[#B797FA]",
                  )}
                >
                  {link.label}
                  {link.dropdown && (
                    <motion.span
                      animate={{ rotate: activeDropdown === link.href ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1"
                    >
                      <FiChevronDown className="h-4 w-4" />
                    </motion.span>
                  )}
                </Link>

                {/* Active underline */}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B797FA] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-48 origin-top-left rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
                    >
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setMobileOpen(false)
                              setActiveDropdown(null)
                            }}
                            className={cn(
                              "block px-4 py-2 text-sm transition-colors",
                              pathname === item.href
                                ? "bg-gray-100 dark:bg-gray-700 text-[#B797FA]"
                                : "text-gray-700 dark:text-gray-300 hover:text-[#B797FA] hover:bg-gray-100 dark:hover:bg-gray-700",
                            )}
                          >
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-center"
                            >
                              <FiChevronRight className="mr-2 h-4 w-4 text-gray-400 dark:text-gray-500" />
                              {item.label}
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => {
                        setMobileOpen(false)
                        setActiveDropdown(null)
                      }}
                      className={cn(
                        "flex-grow block px-3 py-2 rounded-md text-base font-medium",
                        pathname === link.href
                          ? "bg-blue-50 dark:bg-blue-900/30 text-[#B797FA]"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <motion.button
                        animate={{ rotate: activeDropdown === link.href ? 180 : 0 }}
                        onClick={() => toggleDropdown(link.href)}
                        className="ml-2"
                      >
                        <FiChevronDown className="h-5 w-5" />
                      </motion.button>
                    )}
                  </div>
                  {link.dropdown && activeDropdown === link.href && (
                    <div className="ml-5 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block px-3 py-2 text-base font-medium",
                            pathname === item.href
                              ? "bg-gray-200 dark:bg-gray-700 text-[#B797FA]"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
