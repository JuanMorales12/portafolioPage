import type { Translations } from '../i18n/translations'

export const validateEmail = (value: string): boolean => {
  return /\S+@\S+\.\S+/.test(value)
}

export const validateForm = (
  data: { fullname: string; email: string; message?: string },
  t: Translations
): Record<string, string> => {
  const errors: Record<string, string> = {}

  if (!data.fullname.trim()) {
    errors.fullname = t.contact.validation.nameRequired
  } else if (data.fullname.trim().length < 3) {
    errors.fullname = t.contact.validation.nameMin
  }

  if (!data.email.trim()) {
    errors.email = t.contact.validation.emailRequired
  } else if (!validateEmail(data.email)) {
    errors.email = t.contact.validation.emailInvalid
  }

  return errors
}
