import { NavLink } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import SpainFlag from './SpainFlag'
import USAFlag from './USAFlag'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'

const Header = () => {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <ul className="flex items-center justify-center gap-8 flex-1">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-800 dark:text-gray-300'
                  }`
                }
              >
                {t.nav.home}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-800 dark:text-gray-300'
                  }`
                }
              >
                {t.nav.about}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-800 dark:text-gray-300'
                  }`
                }
              >
                {t.nav.portfolio}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-800 dark:text-gray-300'
                  }`
                }
              >
                {t.nav.contact}
              </NavLink>
            </li>
          </ul>

          {/* Theme Toggle & Language Selector */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-200 hover:scale-110"
              title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
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
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
