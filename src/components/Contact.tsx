import { useState, type FormEvent, type ChangeEvent } from 'react'
import Swal from 'sweetalert2'
import { useScrollToTop } from '@hooks/useScrollToTop'
import { useLanguage } from '../contexts/LanguageContext'
import { validateForm } from '@utils/validation'
import type { FormData, ValidationErrors } from '../types'
import ContactNetwork from './ContactNetwork'
import githubIcon from '@assets/image/github (3).png'
import linkedinIcon from '@assets/image/linkedin.png'
import whatsappIcon from '@assets/image/6214499_handset_logo_telephone_whatsapp_icon.png'
import emailIcon from '@assets/image/email (1).png'

const Contact = () => {
  useScrollToTop()
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
    setErrors(validateForm(newData))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validateForm(formData)

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
        throw new Error('Error en el envío')
      }
    } catch (error) {
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
    <section className="min-h-screen bg-gray-50 dark:bg-linear-to-br dark:from-dark dark:via-dark-lighter dark:to-dark py-24 pt-32 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white text-center mb-4 transition-colors duration-300">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 transition-colors duration-300">
            {t.contact.subtitle}
          </p>

          {/* Social Networks */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
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
              href="https://wa.me/5491234567890"
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

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark-lighter/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-2xl transition-colors duration-300"
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
                  } rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300`}
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
                  } rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300`}
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
                className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors duration-300"
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
