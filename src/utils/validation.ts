export const validateEmail = (value: string): boolean => {
  return /\S+@\S+\.\S+/.test(value)
}

export const validateForm = (data: { fullname: string; email: string; message?: string }): Record<string, string> => {
  const errors: Record<string, string> = {}

  if (!data.fullname.trim()) {
    errors.fullname = 'El nombre completo es requerido'
  }

  if (!data.email.trim()) {
    errors.email = 'El email es requerido'
  } else if (!validateEmail(data.email)) {
    errors.email = 'El email no es válido'
  }

  return errors
}
