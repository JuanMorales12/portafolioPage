import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark pt-20">
      <div className="text-center px-6">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-6">Página no encontrada</h2>
        <p className="text-gray-400 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:scale-105 transform transition-all duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default Error404
