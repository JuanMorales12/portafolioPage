import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Error404 = () => {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark pt-20">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-primary mb-4">{t.error404.title}</h1>
        <h2 className="text-3xl font-semibold text-white mb-6">{t.error404.subtitle}</h2>
        <p className="text-gray-400 mb-8">
          {t.error404.description}
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:scale-105 transform transition-all duration-200"
        >
          {t.error404.button}
        </Link>
      </div>
    </section>
  )
}

export default Error404
