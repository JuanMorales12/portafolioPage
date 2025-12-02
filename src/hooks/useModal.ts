import { useState, useCallback } from 'react'
import type { UseModalReturn } from '../types'

export const useModal = (initialValue = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return [isOpen, openModal, closeModal]
}
