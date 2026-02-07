import { useLanguage } from '../contexts/LanguageContext'
import StatCard from './StatCard'

const Testimonials = () => {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-white dark:bg-dark-lighter rounded-2xl p-6 border border-gray-200 dark:border-gray-800 transition-colors duration-300">
          <StatCard number="2+" label={t.testimonials.yearsExp} />
          <StatCard number="10+" label={t.testimonials.projectsDelivered} />
          <StatCard number="5+" label={t.testimonials.techStacks} />
          <StatCard number="100%" label={t.testimonials.completionRate} />
        </div>

        {/* Testimonial Quotes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {t.testimonials.quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-lighter rounded-xl p-8 border border-gray-200 dark:border-gray-800 transition-colors duration-300"
            >
              <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
              </svg>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic transition-colors duration-300">
                "{quote.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {quote.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  {quote.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-dark-lighter rounded-xl p-8 border border-gray-200 dark:border-gray-800 flex gap-6 items-start transition-colors duration-300">
            <div className="text-primary shrink-0">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {t.testimonials.highlights.clean.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {t.testimonials.highlights.clean.description}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-lighter rounded-xl p-8 border border-gray-200 dark:border-gray-800 flex gap-6 items-start transition-colors duration-300">
            <div className="text-secondary shrink-0">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {t.testimonials.highlights.communication.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {t.testimonials.highlights.communication.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
