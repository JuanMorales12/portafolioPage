import { useState, type FormEvent, type ChangeEvent } from 'react'
import Swal from 'sweetalert2'
import { useScrollToTop } from '@hooks/useScrollToTop'
import { validateForm } from '@utils/validation'
import type { FormData, ValidationErrors } from '../types'
import ContactNetwork from './ContactNetwork'
import githubIcon from '@assets/image/github (3).png'
import linkedinIcon from '@assets/image/linkedin.png'
import whatsappIcon from '@assets/image/6214499_handset_logo_telephone_whatsapp_icon.png'
import emailIcon from '@assets/image/email (1).png'

const Contact = () => {
  useScrollToTop()

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
        title: 'Error',
        text: 'Debe completar el formulario correctamente antes de enviarlo.',
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
          title: 'Formulario Enviado',
          text: 'Gracias por tus comentarios, me comunicaré con usted en la brevedad posible.',
          icon: 'success',
          confirmButtonColor: '#11ABB0',
        })
        setFormData({ fullname: '', email: '', message: '' })
      } else {
        throw new Error('Error en el envío')
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error inesperado, por favor intenta nuevamente.',
        icon: 'error',
        confirmButtonColor: '#F06000',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark via-dark-lighter to-dark py-24 pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-4">
            Contáctame
          </h2>
          <p className="text-gray-400 text-center mb-12">
            ¿Tienes un proyecto en mente? ¡Hablemos!
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
            className="bg-dark-lighter/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark border ${
                    errors.fullname ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                  placeholder="Tu nombre completo"
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                maxLength={5000}
                className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
