import { useScrollToTop } from '@hooks/useScrollToTop'
import Skills from './Skills'
import userPhoto from '@assets/image/personal.jpg'
import CV from '@assets/cv/Cv_Juan_Morales.pdf'

const About = () => {
  useScrollToTop()

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-dark via-dark-lighter to-dark py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <img
                  src={userPhoto}
                  alt="Juan Morales"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-8">
              <h1 className="text-5xl font-bold text-white mb-6">
                Sobre Mí
              </h1>

              <div className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300">
                <p>
                  Hola, mi nombre es Juan Morales, Full Stack Developer.
                </p>

                <p>
                  Soy un apasionado desarrollador full stack con más de 2 años de experiencia profesional.
                  He tenido la oportunidad de trabajar en proyectos de mediano y largo alcance, implementando
                  clientes con React y React Native, además de trabajar en el lado del servidor implementando
                  APIs y trabajando bajo la arquitectura de micro servicios. Siempre prestando especial atención
                  a los detalles, trabajando bajo principios SOLID y arquitecturas como hexagonal y MCV para
                  garantizar un código limpio y mantenible.
                </p>

                <p>
                  La comunicación y el trabajo en equipo es para mí esencial para poder crecer como desarrollador.
                  Soy proactivo y metódico, siempre busco nuevos retos y me adapto fácilmente a los cambios,
                  estoy abierto a aprender nuevas tecnologías y lenguajes.
                </p>

                <p className="text-sm">
                  <strong>Tecnologías:</strong> HTML, CSS, JavaScript, React JS/React Native, Next JS, Redux JS,
                  TypeScript, Bootstrap, Less, Node JS, Nest JS, Express, SQL, PostgreSQL, Sequelize, MongoDB,
                  Mongoose, JsonWebToken, Figma, Git.
                </p>
              </div>

              <hr className="border-gray-700" />

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  ¿Qué puedo hacer?
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Front-End</h3>
                    <p className="text-gray-300">
                      Como desarrollador frontend, tengo experiencia en el manejo de HTML y CSS, además del
                      manejo de frameworks y liberías, especialmente React JS y React Native. He trabajado en
                      proyectos de escala mediana y grandes, implementando soluciones de código eficientes,
                      trabajado con arquitecturas de software escalables y fácilmente mantenibles.
                    </p>
                  </div>

                  <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <h3 className="text-2xl font-semibold text-secondary mb-4">Back-End</h3>
                    <p className="text-gray-300">
                      Utilizando Express y Node, puedo crear rutas para APIs REST, protegerlas e implementar
                      bases de datos SQL y NoSQL como PostgreSQL y MongoDB. De igual manera he trabajado con
                      arquitecturas de software escalables y mantenibles, implementando módulos manteniendo
                      separadas las distintas capas de un proyecto.
                    </p>
                  </div>
                </div>

                <p className="text-gray-300">
                  He trabajado en proyectos medianos y grandes, desde su planteamiento a su ejecución final,
                  teniendo cada día la oportunidad de aprender cada día acerca de como ayudar al cliente a
                  desarrollar su producto deseado resolviendo cualquier problema presentado. He tenido la
                  oportunidad de trabajar en el desarrollo de aplicaciones web y móbiles, empleando las mejores
                  prácticas, escribiendo código limpio, legible y mantenible, siempre teniendo en mente optimizar
                  al máximo el rendimiento del producto final.
                </p>
              </div>

              <hr className="border-gray-700" />

              <div className="flex justify-center lg:justify-start">
                <a
                  href={CV}
                  download="Juan_Morales_CV"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-primary/50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </>
  )
}

export default About
