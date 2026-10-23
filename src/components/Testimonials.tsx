import { useLanguage } from '../contexts/LanguageContext'
import { UPWORK_PROFILE_URL } from '../data/site'
import StatCard from './StatCard'

const Testimonials = () => {
  const { t } = useLanguage()

  const stats = [
    { number: '7+', label: t.testimonials.yearsExp, compact: false },
    { number: 'Top Rated Plus', label: t.testimonials.topRated, compact: true },
    { number: '100%', label: t.testimonials.jobSuccess, compact: false },
    { number: '11', label: t.testimonials.jobs, compact: false },
    { number: '756', label: t.testimonials.hours, compact: false },
  ]

  return (
    <section id="testimonials" className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 transition-colors duration-300 dark:text-white md:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 transition-colors duration-300 dark:text-gray-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-2 rounded-2xl border border-gray-200 bg-white p-4 transition-colors duration-300 dark:border-gray-800 dark:bg-dark-lighter md:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} number={stat.number} label={stat.label} compact={stat.compact} />
          ))}
        </div>

        <p className="mb-16 text-center">
          <a
            href={UPWORK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary-darker underline underline-offset-4 hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker dark:text-primary-light"
          >
            {t.testimonials.viewProfile}
            <span className="sr-only"> ({t.cta.newTab})</span>
          </a>
        </p>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {t.testimonials.quotes.map((quote) => (
            <article
              key={quote.role}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 transition-colors duration-300 dark:border-gray-800 dark:bg-dark-lighter"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <svg className="h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                </svg>
                <div role="img" aria-label={t.testimonials.starsLabel} className="flex gap-0.5 text-amber-700 dark:text-amber-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg key={index} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.1 5.06 16.71 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
                    </svg>
                  ))}
                </div>
              </div>

              {quote.translationNote && (
                <p className="mb-3 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300">
                  {quote.translationNote}
                </p>
              )}

              <blockquote className="mb-6 flex-1">
                <p className="leading-relaxed text-gray-800 dark:text-gray-200">“{quote.text}”</p>
              </blockquote>

              <footer>
                <a
                  href={UPWORK_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 underline decoration-primary/50 underline-offset-4 hover:decoration-primary-darker focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker dark:text-white"
                >
                  {quote.name}
                  <span className="sr-only"> ({t.cta.newTab})</span>
                </a>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{quote.role}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex items-start gap-6 rounded-xl border border-gray-200 bg-white p-8 transition-colors duration-300 dark:border-gray-800 dark:bg-dark-lighter">
            <div className="shrink-0 text-primary-darker dark:text-primary-light">
              <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{t.testimonials.highlights.clean.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{t.testimonials.highlights.clean.description}</p>
            </div>
          </div>

          <div className="flex items-start gap-6 rounded-xl border border-gray-200 bg-white p-8 transition-colors duration-300 dark:border-gray-800 dark:bg-dark-lighter">
            <div className="shrink-0 text-secondary-darker dark:text-secondary-light">
              <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {t.testimonials.highlights.communication.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{t.testimonials.highlights.communication.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
