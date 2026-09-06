import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Orb Background ───────────────────────────────────────────
export function OrbBackground() {
  return (
    <div className="orb-container" aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  )
}

// ─── BlurText ─────────────────────────────────────────────────
export function BlurText({ text, className = '', delay = 0, duration = 0.6 }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration,
            delay: delay + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// ─── TextLoop ─────────────────────────────────────────────────
export function TextLoop({ texts, interval = 2800, className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts, interval])

  return (
    <span className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'inline-block' }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// ─── FadeInSection ────────────────────────────────────────────
export function FadeInSection({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

// ─── GradientText ─────────────────────────────────────────────
export function GradientText({ children, className = '' }) {
  return (
    <span
      className={className}
      style={{
        background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #BFDBFE 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </span>
  )
}

// ─── CountUp ──────────────────────────────────────────────────
export function CountUp({ target, duration = 1.5, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const numTarget = parseInt(target.replace(/\D/g, ''), 10)
        const startTime = performance.now()
        const animate = (now) => {
          const elapsed = (now - startTime) / 1000
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * numTarget))
          if (progress < 1) requestAnimationFrame(animate)
          else setCount(numTarget)
        }
        requestAnimationFrame(animate)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  const prefix = target.replace(/[\d+K]/g, '')
  const hasSuffix = target.includes('+') || target.includes('K')
  const displaySuffix = hasSuffix ? target.replace(/\d+/g, '') : suffix

  return <span ref={ref}>{prefix}{count}{displaySuffix}</span>
}
