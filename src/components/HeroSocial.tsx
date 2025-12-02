import type { HeroSocialProps } from '../types'

const HeroSocial = ({ href, src, alt, title }: HeroSocialProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200 hover:scale-110"
    >
      <img src={src} alt={alt} className="w-6 h-6 object-contain" />
    </a>
  )
}

export default HeroSocial
