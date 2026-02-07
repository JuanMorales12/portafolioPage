import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { scrollToSection } from '@hooks/useScrollToSection'
import { useActiveSection } from '@hooks/useActiveSection'
import SpainFlag from './SpainFlag'
import USAFlag from './USAFlag'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'

const SECTION_IDS = ['hero', 'services', 'portfolio', 'testimonials', 'contact']

const Header = () => {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(SECTION_IDS)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
          >
            JM
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-800 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side: Theme, Language, Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-3 border-l border-gray-300 dark:border-gray-700 pl-4">
              <button
                onClick={() => setLanguage('es')}
                className={`transition-all duration-200 rounded-md overflow-hidden ${
                  language === 'es'
                    ? 'ring-2 ring-primary scale-110 shadow-lg shadow-primary/50'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                title="Español"
                aria-label="Cambiar a Español"
              >
                <SpainFlag />
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-all duration-200 rounded-md overflow-hidden ${
                  language === 'en'
                    ? 'ring-2 ring-primary scale-110 shadow-lg shadow-primary/50'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
                title="English"
                aria-label="Change to English"
              >
                <USAFlag />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-lg font-medium transition-colors duration-200 hover:text-primary w-full text-left ${
                      activeSection === item.id ? 'text-primary' : 'text-gray-800 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
