import { useLanguage } from '../contexts/LanguageContext'
import { UPWORK_PROFILE_URL } from '../data/site'

interface UpworkLinkProps {
  variant?: 'primary' | 'header' | 'onDark'
  className?: string
}

const UpworkLink = ({ variant = 'primary', className = '' }: UpworkLinkProps) => {
  const { t } = useLanguage()

  const styles = {
    primary:
      'min-h-11 px-6 py-3 bg-primary-darker hover:bg-primary-dark text-white text-base font-semibold rounded-lg shadow-lg shadow-primary-darker/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark',
    header:
      'min-h-11 px-3 py-2 sm:px-4 bg-primary-darker hover:bg-primary-dark text-white text-sm font-semibold rounded-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark',
    onDark:
      'min-h-11 px-6 py-3 bg-primary-darker hover:bg-primary-dark text-white text-base font-semibold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
  }

  const label = `${t.hero.hireButton} (${t.cta.newTab})`

  return (
    <a
      href={UPWORK_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {variant === 'header' ? (
        <>
          <span className="lg:hidden">{t.hero.hireShort}</span>
          <span className="hidden lg:inline">{t.hero.hireButton}</span>
        </>
      ) : (
        t.hero.hireButton
      )}
      <ExternalIcon />
    </a>
  )
}

const ExternalIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h5m0 0v5m0-5L10 14" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v6a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h6" />
  </svg>
)

export default UpworkLink
