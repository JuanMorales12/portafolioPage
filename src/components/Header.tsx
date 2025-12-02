import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex items-center justify-center gap-8">
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
              Home
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
              About
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
              Portfolio
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
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
