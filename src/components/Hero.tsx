import { useLanguage } from '../contexts/LanguageContext'
import { scrollToSection } from '@hooks/useScrollToSection'
import HeroSocial from './HeroSocial'
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

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-primary/50"
              >
                {t.hero.contactButton}
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-secondary/20 backdrop-blur-sm text-secondary dark:text-white font-medium rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white hover:scale-105 transform transition-all duration-200"
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
