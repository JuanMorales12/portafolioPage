import type { StatCardProps } from '../types'

const StatCard = ({ number, label }: StatCardProps) => (
  <div className="text-center p-6">
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{number}</div>
    <div className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">{label}</div>
  </div>
)

export default StatCard
