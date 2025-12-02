import type { SkillProps } from '../types'

const Skill = ({ skill, src, title, alt }: SkillProps) => {
  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <img
        src={src}
        alt={alt}
        title={title}
        className="w-16 h-16 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-sm font-medium text-gray-700 text-center">{skill}</span>
    </div>
  )
}

export default Skill
