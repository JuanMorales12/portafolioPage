import type { ContactNetworkProps } from '../types'

const ContactNetwork = ({ href, src, alt, title }: ContactNetworkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="group flex flex-col items-center gap-2"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-dark-lighter rounded-full border-2 border-gray-700 group-hover:border-primary transition-all duration-200 group-hover:scale-110">
        <img src={src} alt={alt} className="w-8 h-8 object-contain" />
      </div>
      {title && (
        <span className="text-sm text-gray-400 group-hover:text-primary transition-colors">
          {title}
        </span>
      )}
    </a>
  )
}

export default ContactNetwork
