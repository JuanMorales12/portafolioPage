import { useEffect } from 'react'
import type { ModalProps } from '../types'

const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-4xl bg-dark-lighter rounded-2xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="Cerrar modal"
        >
          <span className="text-2xl">×</span>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
