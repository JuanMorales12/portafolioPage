import { useScrollToTop } from '@hooks/useScrollToTop'
import { useLanguage } from '../contexts/LanguageContext'
import Skills from './Skills'
import userPhoto from '@assets/image/personal.jpg'
import CV from '@assets/cv/Cv_Juan_Morales.pdf'

const About = () => {
  useScrollToTop()
  const { t } = useLanguage()

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
                {t.about.title}
              </h1>

              <div className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300">
                <p>
                  {t.about.intro}
                </p>

                <p>
                  {t.about.paragraph1}
                </p>

                <p>
                  {t.about.paragraph2}
                </p>

                <p className="text-sm">
                  <strong>{t.about.techLabel}</strong> {t.about.techList}
                </p>
              </div>

              <hr className="border-gray-700" />

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  {t.about.whatCanIDo}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <h3 className="text-2xl font-semibold text-primary mb-4">{t.about.frontendTitle}</h3>
                    <p className="text-gray-300">
                      {t.about.frontendText}
                    </p>
                  </div>

                  <div className="bg-dark-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                    <h3 className="text-2xl font-semibold text-secondary mb-4">{t.about.backendTitle}</h3>
                    <p className="text-gray-300">
                      {t.about.backendText}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300">
                  {t.about.experience}
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
                  {t.about.downloadCV}
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
