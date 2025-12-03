import { Link } from 'react-router-dom'
import { useScrollToTop } from '@hooks/useScrollToTop'
import { useLanguage } from '../contexts/LanguageContext'
import HeroSocial from './HeroSocial'
import ArgentinaFlag from './ArgentinaFlag'
import linkedinLogo from '@assets/image/linkedin.png'
import githubLogo from '@assets/image/github (3).png'
import userPhoto from '@assets/image/personal.jpg'

const Hero = () => {
  useScrollToTop()
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                {t.hero.name}
              </span>
            </h1>

            <h3 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {t.hero.title}
              <br />
              <span className="text-gray-400">
                {t.hero.subtitle}
              </span>
            </h3>

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
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-primary/50"
              >
                {t.hero.contactButton}
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-3 bg-secondary/20 backdrop-blur-sm text-white font-medium rounded-lg border-2 border-secondary hover:bg-secondary hover:scale-105 transform transition-all duration-200"
              >
                {t.hero.projectsButton}
              </Link>
            </div>
          </div>

          {/* Profile Image with Flag */}
          <div className="flex flex-col items-center gap-6 animate-float">
            <ArgentinaFlag />
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
