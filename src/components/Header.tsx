import { NavLink } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import SpainFlag from './SpainFlag'
import USAFlag from './USAFlag'

const Header = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800">
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
                    isActive ? 'text-primary' : 'text-gray-300'
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
                    isActive ? 'text-primary' : 'text-gray-300'
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
                    isActive ? 'text-primary' : 'text-gray-300'
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
                    isActive ? 'text-primary' : 'text-gray-300'
                  }`
                }
              >
                {t.nav.contact}
              </NavLink>
            </li>
          </ul>

          {/* Language Selector */}
          <div className="flex items-center gap-3">
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
      </nav>
    </header>
  )
}

export default Header
