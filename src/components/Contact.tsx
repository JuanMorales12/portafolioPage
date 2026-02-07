import { useState, type FormEvent, type ChangeEvent } from 'react'
import Swal from 'sweetalert2'
import { useLanguage } from '../contexts/LanguageContext'
import { validateForm } from '@utils/validation'
import type { FormData, ValidationErrors } from '../types'
import ContactNetwork from './ContactNetwork'
import CV from '@assets/cv/Cv_Juan_Morales.pdf'
import githubIcon from '@assets/image/github (3).png'
import linkedinIcon from '@assets/image/linkedin.png'
import whatsappIcon from '@assets/image/6214499_handset_logo_telephone_whatsapp_icon.png'
import emailIcon from '@assets/image/email (1).png'

const Contact = () => {
  const { t } = useLanguage()

  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const newData = { ...formData, [name]: value }
    setFormData(newData)
    setErrors(validateForm(newData, t))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validateForm(formData, t)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      Swal.fire({
        title: t.contact.error.title,
        text: t.contact.error.text,
        icon: 'error',
        confirmButtonColor: '#11ABB0',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/juandejauretche@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await Swal.fire({
          title: t.contact.success.title,
          text: t.contact.success.text,
          icon: 'success',
          confirmButtonColor: '#11ABB0',
        })
        setFormData({ fullname: '', email: '', message: '' })
      } else {
        throw new Error('Error')
      }
    } catch {
      Swal.fire({
        title: t.contact.error.title,
        text: t.contact.error.text,
        icon: 'error',
        confirmButtonColor: '#F06000',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-lighter transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Social Networks */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <ContactNetwork
              href="https://github.com/JuanMorales12"
              src={githubIcon}
              alt="GitHub"
              title="GitHub"
            />
            <ContactNetwork
              href="https://www.linkedin.com/in/juansfff/"
              src={linkedinIcon}
              alt="LinkedIn"
              title="LinkedIn"
            />
            <ContactNetwork
              href="https://wa.me/541164464754"
              src={whatsappIcon}
              alt="WhatsApp"
              title="WhatsApp"
            />
            <ContactNetwork
              href="mailto:juandejauretche@gmail.com"
              src={emailIcon}
              alt="Email"
              title="Email"
            />
          </div>

          {/* CV Download */}
          <div className="flex justify-center mb-12">
            <a
              href={CV}
              download="Juan_Morales_CV"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-dark text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.contact.downloadCV}
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl transition-colors duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark border ${
                    errors.fullname ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300`}
                  placeholder={t.contact.form.namePlaceholder}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  {t.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-dark border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300`}
                  placeholder={t.contact.form.emailPlaceholder}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                maxLength={5000}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors duration-300"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? t.contact.form.sending : t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
