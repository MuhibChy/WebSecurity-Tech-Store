'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function GlassCard({ children, className = '', hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      className={`glass-card neon-glow cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
