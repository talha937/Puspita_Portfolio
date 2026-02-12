'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add trail effect
      setTrail(prev => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ])

      // Check if hovering over interactive element
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            left: point.x - 4,
            top: point.y - 4,
            width: 8,
            height: 8,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${0.8 - index * 0.08}) 0%, transparent 70%)`,
          }}
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        className="custom-cursor cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor Outline */}
      <motion.div
        className="custom-cursor cursor-outline"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full blur-xl"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        style={{
          width: 100,
          height: 100,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        }}
      />
    </>
  )
}
