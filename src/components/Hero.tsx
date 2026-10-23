import { useLanguage } from '../contexts/LanguageContext'
import { scrollToSection } from '@hooks/useScrollToSection'
import HeroSocial from './HeroSocial'
import UpworkLink from './UpworkLink'
import linkedinLogo from '@assets/image/linkedin.png'
import githubLogo from '@assets/image/github (3).png'
import userPhoto from '@assets/image/personal.jpg'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark dark:to-dark pt-20 transition-colors duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:via-transparent dark:to-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {t.hero.availableBadge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                {t.hero.name}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white leading-tight transition-colors duration-300">
              {t.hero.title}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              {t.hero.subtitle}
            </p>

            <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
              {t.hero.trustLine}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <HeroSocial
                href="https://www.linkedin.com/in/juansfff/"
                src={linkedinLogo}
                alt="LinkedIn logo"
                title="LinkedIn"
              />
              <HeroSocial
                href="https://github.com/JuanMorales12"
                src={githubLogo}
                alt="GitHub logo"
                title="Github"
              />
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <UpworkLink className="w-full sm:w-auto" />
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="min-h-11 w-full sm:w-auto px-6 py-3 border-2 border-secondary-darker text-secondary-darker dark:border-secondary-light dark:text-secondary-light font-semibold rounded-lg hover:bg-secondary-darker hover:text-white dark:hover:bg-secondary-light dark:hover:text-gray-950 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-darker focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-dark"
              >
                {t.hero.contactButton}
              </button>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => scrollToSection('portfolio')}
                className="min-h-11 text-sm font-semibold text-gray-800 dark:text-gray-100 underline underline-offset-4 hover:text-primary-darker dark:hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker rounded-sm"
              >
                {t.hero.projectsButton}
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-75 animate-pulse" />
              <img
                src={userPhoto}
                alt="Juan Morales"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
