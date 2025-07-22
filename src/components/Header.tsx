'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'על המרתון', href: '#על-המרתון' },
    { name: 'מה נלמד', href: '#מה-נלמד' },
    { name: 'למי זה מתאים', href: '#למי-זה-מתאים' },
    { name: 'על המורה', href: '#על-המורה' },
    { name: 'לוגיסטיקה', href: '#לוגיסטיקה' },
    { name: 'הרשמה', href: '#הרשמה' },
  ]

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-soft border-b border-pastel-pink/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-center py-4">
        <div className="flex items-center justify-between">
          {/* לוגו */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-pastel-coral to-pastel-pink rounded-full flex items-center justify-center shadow-soft mr-3">
              <span className="text-white font-black text-xl">E</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-black text-xl text-text-black">מרתון כיתה ה&rsquo;</h1>
              <p className="text-sm text-text-black/70">באנגלית</p>
        </div>
          </div>

          {/* ניווט למחשב */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleMenuClick(item.href)
                }}
                className="text-text-black hover:text-pastel-coral transition-colors duration-300 font-semibold text-lg relative group"
                >
                  {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pastel-coral transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* כפתור וואטסאפ למחשב */}
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/972545886779"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-button px-6 py-3 font-bold rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              שאלות? וואטסאפ
            </a>
          </div>

          {/* המבורגר למובייל */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-full bg-pastel-pink/10 hover:bg-pastel-pink/20 transition-colors duration-300"
            aria-label="פתח תפריט"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-text-black rounded-full"
                animate={isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-text-black rounded-full"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-text-black rounded-full"
                animate={isMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
      </div>

        {/* תפריט נייד */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 rounded-5xl mt-4 border border-pastel-pink/20 shadow-soft"
            >
              <div className="p-6 space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMenuClick(item.href)
                    }}
                    className="block text-text-black hover:text-pastel-coral transition-colors duration-300 font-semibold text-lg py-2 border-b border-pastel-pink/10 last:border-b-0"
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="pt-4">
                  <a 
                    href="https://wa.me/972545886779"
        target="_blank"
        rel="noopener noreferrer"
                    className="accent-button w-full text-center py-4 font-bold rounded-full shadow-soft"
                  >
                    שאלות? וואטסאפ
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header 