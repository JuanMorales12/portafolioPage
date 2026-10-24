import type { StatCardProps } from '../types'

const StatCard = ({ number, label, compact = false }: StatCardProps) => (
  <div className="text-center p-4 md:p-6">
    <div className={`${compact ? 'text-xl md:text-2xl leading-tight' : 'text-4xl md:text-5xl'} font-bold text-primary-darker dark:text-primary-light mb-2`}>
      {number}
    </div>
    <div className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">{label}</div>
  </div>
)

export default StatCard
