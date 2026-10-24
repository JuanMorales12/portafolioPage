import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../contexts/LanguageContext'
import type { ProjectImage } from '../types'

const CaseStudyGallery = ({ images }: { images: ProjectImage[] }) => {
  const { language, t } = useLanguage()
  const stripRef = useRef<HTMLUListElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const [active, setActive] = useState<ProjectImage | null>(null)

  const open = (image: ProjectImage, button: HTMLButtonElement) => {
    openerRef.current = button
    setActive(image)
  }

  const close = () => {
    setActive(null)
    openerRef.current?.focus()
  }

  const moveFocus = (direction: 1 | -1) => {
    const buttons = [...(stripRef.current?.querySelectorAll('button') ?? [])]
    const index = buttons.indexOf(document.activeElement as HTMLButtonElement)
    if (index < 0) return
    const next = buttons[index + direction]
    next?.focus()
  }

  return (
    <div>
      <ul
        ref={stripRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-2"
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            moveFocus(1)
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            moveFocus(-1)
          }
        }}
      >
        {images.map((image) => {
          const caption = image.caption?.[language] ?? image.alt[language]
          const portrait = (image.height ?? 1) > (image.width ?? 1)
          return (
            <li key={image.src} className={`snap-start ${portrait ? 'w-44 shrink-0 sm:w-52' : 'w-[85%] shrink-0 sm:w-[70%]'}`}>
              <figure>
                <button
                  type="button"
                  onClick={(event) => open(image, event.currentTarget)}
                  aria-label={`${caption}. ${t.portfolio.viewFullSize}`}
                  className="block w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker dark:border-gray-700 dark:bg-dark"
                >
                  <img
                    src={image.src}
                    alt={image.alt[language]}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                </button>
                <figcaption className="mt-2 text-sm leading-snug text-gray-700 dark:text-gray-300">{caption}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{t.portfolio.demoScreens}</p>
      <ImageLightbox image={active} onClose={close} />
    </div>
  )
}

const ImageLightbox = ({ image, onClose }: { image: ProjectImage | null; onClose: () => void }) => {
  const { language, t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !image) return

    if (!dialog.open) dialog.showModal()
    closeRef.current?.focus()

    return () => {
      dialog.dataset.cleanup = 'true'
      if (dialog.open) dialog.close()
    }
  }, [image])

  if (!image) return null

  const caption = image.caption?.[language] ?? image.alt[language]

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="image-lightbox"
      onClose={(event) => {
        event.stopPropagation()
        const dialog = event.currentTarget
        if (dialog.dataset.cleanup === 'true') {
          delete dialog.dataset.cleanup
          return
        }
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
    >
      <figure className="relative" onClick={(event) => event.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-2 top-2 rounded-lg bg-gray-950/80 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={t.portfolio.closeImage}
        >
          {t.portfolio.closeImage}
        </button>
        <img
          src={image.src}
          alt={image.alt[language]}
          width={image.width}
          height={image.height}
          className="max-h-[85vh] w-auto max-w-full rounded-lg bg-white"
        />
        <figcaption id={titleId} className="mt-3 text-center text-sm text-white">
          {caption}
        </figcaption>
      </figure>
    </dialog>,
    document.body,
  )
}

export default CaseStudyGallery
