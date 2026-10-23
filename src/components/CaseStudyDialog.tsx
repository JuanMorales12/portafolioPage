import { useEffect, useId, useRef, type ReactNode } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import type { Project } from '../types'
import UpworkLink from './UpworkLink'

interface CaseStudyDialogProps {
  project: Project
  onClose: () => void
}

const CaseStudyDialog = ({ project, onClose }: CaseStudyDialogProps) => {
  const { language, t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleId = useId()
  const study = project.caseStudy

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (!dialog.open) dialog.showModal()
    titleRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      // Strict Mode remounts this effect. Closing must not tell the parent to unmount.
      dialog.dataset.cleanup = 'true'
      if (dialog.open) dialog.close()
    }
  }, [])

  if (!study) return null

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="case-dialog"
      onClose={(event) => {
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
      <div
        className="mx-auto my-4 w-full max-w-3xl rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-2xl dark:border-gray-700 dark:bg-dark dark:text-white sm:my-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-2xl border-b border-gray-200 bg-white/95 px-5 py-4 backdrop-blur-sm dark:border-gray-700 dark:bg-dark/95 sm:px-8">
          <div>
            <p className="text-sm font-medium text-primary-darker dark:text-primary-light">
              {t.portfolio.kinds[project.kind]}
              {study.nda ? ` · ${t.portfolio.nda}` : ''}
            </p>
            <h2
              id={titleId}
              ref={titleRef}
              tabIndex={-1}
              className="mt-1 text-xl font-bold text-gray-900 outline-none dark:text-white sm:text-2xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="shrink-0 rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={t.portfolio.closeCaseStudy}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-8 px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100">{study.hook[language]}</p>

          <Section title={t.portfolio.context}>
            <p>{study.clientContext[language]}</p>
          </Section>

          <Section title={t.portfolio.role}>
            <CopyBlock text={study.role[language]} asList />
          </Section>

          <Section title={t.portfolio.problem}>
            <ul className="list-disc space-y-3 ps-5">
              {study.problem.map((item) => (
                <li key={item.en}>
                  <CopyBlock text={item[language]} />
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.portfolio.solution}>
            <ul className="space-y-4">
              {study.solution.map((item) => (
                <li key={item.en}>
                  <CopyBlock text={item[language]} />
                </li>
              ))}
            </ul>
          </Section>

          {study.stack && (
            <Section title={t.portfolio.stack}>
              <p>{study.stack[language]}</p>
            </Section>
          )}

          <Section title={t.portfolio.results}>
            <ul className="space-y-4">
              {study.results.map((result) => (
                <li key={result.headline.en} className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-dark-lighter">
                  <p className="font-semibold text-gray-900 dark:text-white">{result.headline[language]}</p>
                  {result.detail && (
                    <div className="mt-1 text-gray-700 dark:text-gray-300">
                      <CopyBlock text={result.detail[language]} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Section>

          <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 dark:border-gray-700 sm:flex-row sm:items-center">
            <UpworkLink />
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="min-h-11 rounded-lg px-5 py-3 text-sm font-semibold text-gray-800 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker dark:text-gray-100"
            >
              {t.portfolio.closeCaseStudy}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-2">
    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-darker dark:text-primary-light">{title}</h3>
    <div className="leading-relaxed text-gray-700 dark:text-gray-300">{children}</div>
  </section>
)

const CopyBlock = ({ text, asList = false }: { text: string; asList?: boolean }) => {
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  if (asList && lines.length > 1) {
    return (
      <ul className="list-disc space-y-1 ps-5">
        {lines.map((line, index) => (
          <li key={`${index}-${line}`}>{line}</li>
        ))}
      </ul>
    )
  }

  if (lines.length <= 1) {
    return <p>{emphasizeLead(lines[0] ?? '')}</p>
  }

  return (
    <div className="space-y-2">
      <p className="font-semibold text-gray-900 dark:text-white">{lines[0]}</p>
      <ul className="list-disc space-y-1 ps-5">
        {lines.slice(1).map((line, index) => (
          <li key={`${index}-${line}`}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

function emphasizeLead(value: string) {
  const index = value.indexOf(': ')
  if (index === -1 || index > 80) return value
  return (
    <>
      <span className="font-semibold text-gray-900 dark:text-white">{value.slice(0, index + 1)}</span>
      {value.slice(index + 1)}
    </>
  )
}

export default CaseStudyDialog
