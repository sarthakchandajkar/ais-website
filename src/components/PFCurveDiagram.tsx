'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PFCurveDiagramProps {
  className?: string
}

const PLOT = {
  left: 120,
  right: 930,
  top: 48,
  bottom: 390,
}

const coord = (value: number) => Number(value.toFixed(2))

const xAt = (t: number) => coord(PLOT.left + t * (PLOT.right - PLOT.left))

const yAt = (t: number) => {
  // Classic P-F shape: high condition at the start, accelerating drop toward failure.
  // Use a polynomial instead of t ** 1.85 so Node and the browser agree on the bits.
  const condition = 1 - t * t * (0.85 + 0.15 * t)
  const yGood = PLOT.top + 10
  const yFail = PLOT.bottom - 14
  return coord(yGood + (1 - condition) * (yFail - yGood))
}

const sampleCurve = (t0: number, t1: number, steps = 24) => {
  const points: Array<{ x: number; y: number }> = []
  for (let i = 0; i <= steps; i++) {
    const t = t0 + (t1 - t0) * (i / steps)
    points.push({ x: xAt(t), y: yAt(t) })
  }
  return points
}

const toPath = (points: Array<{ x: number; y: number }>, closeToAxis = false) => {
  if (points.length === 0) return ''
  const head = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`
  const line = points
    .slice(1)
    .map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ')
  if (!closeToAxis) return `${head} ${line}`
  const last = points[points.length - 1]
  const first = points[0]
  return `${head} ${line} L ${last.x.toFixed(2)} ${PLOT.bottom} L ${first.x.toFixed(2)} ${PLOT.bottom} Z`
}

const PFCurveDiagram: React.FC<PFCurveDiagramProps> = ({ className = '' }) => {
  const [activePoint, setActivePoint] = useState<number | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)

  const failurePoints = useMemo(
    () => [
      {
        id: 0,
        t: 0.24,
        label: 'Ultrasonic Spike Energy (HFD)',
        description: 'High-frequency detection of early failure indicators',
        maintenance: 'CBM/Predictive Maintenance',
      },
      {
        id: 1,
        t: 0.34,
        label: 'Vibration Analysis',
        description: 'Mechanical vibration patterns indicating wear',
        maintenance: 'CBM/Predictive Maintenance',
      },
      {
        id: 2,
        t: 0.44,
        label: 'Oil Analysis',
        description: 'Contamination and wear particle detection',
        maintenance: 'CBM/Predictive Maintenance',
      },
      {
        id: 3,
        t: 0.56,
        label: 'Audible Noise',
        description: 'Sensory inspection detecting operational changes',
        maintenance: 'Preventive Maintenance',
      },
      {
        id: 4,
        t: 0.68,
        label: 'Hot to Touch',
        description: 'Thermography detecting temperature anomalies',
        maintenance: 'Preventive Maintenance',
      },
      {
        id: 5,
        t: 0.8,
        label: 'Mechanically Loose',
        description: 'Physical inspection revealing structural issues',
        maintenance: 'Corrective Maintenance',
      },
      {
        id: 6,
        t: 0.9,
        label: 'Ancillary Damage',
        description: 'Secondary damage from primary failure',
        maintenance: 'Corrective Maintenance',
      },
    ].map((point) => ({
      ...point,
      x: xAt(point.t),
      y: yAt(point.t),
    })),
    []
  )

  const keyPoints = useMemo(
    () => ({
      I: { t: 0.03, x: xAt(0.03), y: yAt(0.03) },
      P: { t: 0.2, x: xAt(0.2), y: yAt(0.2) },
      F: { t: 1, x: xAt(1), y: yAt(1) },
    }),
    []
  )

  const curvePath = useMemo(() => toPath(sampleCurve(0, 1, 48)), [])

  const maintenanceStrategies = [
    {
      name: 'Precision Maintenance',
      description: 'Precision Installation, Laser Alignment, Thermal Growth, Pipe Strain',
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-400/30',
      textColor: 'text-blue-600 dark:text-blue-400',
      t0: 0,
      t1: 0.2,
    },
    {
      name: 'CBM/Predictive Maintenance',
      description: 'Early detection using advanced monitoring technologies',
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-400/30',
      textColor: 'text-green-600 dark:text-green-400',
      t0: 0.2,
      t1: 0.56,
    },
    {
      name: 'Preventive Maintenance',
      description: 'Scheduled maintenance based on time or usage',
      color: 'from-yellow-500/20 to-yellow-600/20',
      borderColor: 'border-yellow-400/30',
      textColor: 'text-yellow-600 dark:text-yellow-400',
      t0: 0.56,
      t1: 0.8,
    },
    {
      name: 'Corrective Maintenance',
      description: 'Reactive maintenance after failure detection',
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-400/30',
      textColor: 'text-red-600 dark:text-red-400',
      t0: 0.8,
      t1: 1,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative w-full max-w-5xl mx-auto ${className}`}>
      <div className="bg-white dark:bg-card rounded-xl shadow-lg border border-border p-4 sm:p-6">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 uppercase tracking-wide">
            P-F CURVE: ASSET DEGRADATION & MAINTENANCE STRATEGIES
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Understanding failure progression and optimal maintenance timing
          </p>
        </div>

        <div className="relative w-full">
          <svg
            viewBox="0 0 1000 540"
            className="w-full h-auto overflow-visible"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="P-F curve showing asset condition declining over time from installation to functional failure"
          >
            <defs>
              <pattern id="pf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  opacity="0.12"
                />
              </pattern>
              <marker
                id="arrow-start"
                markerWidth="8"
                markerHeight="8"
                refX="0"
                refY="4"
                orient="auto"
              >
                <path d="M 8 0 L 0 4 L 8 8 Z" className="fill-current text-foreground" />
              </marker>
              <marker
                id="arrow-end"
                markerWidth="8"
                markerHeight="8"
                refX="8"
                refY="4"
                orient="auto"
              >
                <path d="M 0 0 L 8 4 L 0 8 Z" className="fill-current text-foreground" />
              </marker>
              <linearGradient id="gradient-0" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="gradient-3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <rect
              x={PLOT.left}
              y={PLOT.top}
              width={PLOT.right - PLOT.left}
              height={PLOT.bottom - PLOT.top}
              fill="url(#pf-grid)"
            />

            {maintenanceStrategies.map((strategy, index) => (
              <motion.path
                key={strategy.name}
                d={toPath(sampleCurve(strategy.t0, strategy.t1, 20), true)}
                fill={`url(#gradient-${index})`}
                stroke="none"
                initial={false}
                animate={{ opacity: animationPhase === index ? 0.95 : 0.45 }}
                transition={{ duration: 0.5 }}
              />
            ))}

            {/* Axes */}
            <line
              x1={PLOT.left}
              y1={PLOT.top}
              x2={PLOT.left}
              y2={PLOT.bottom}
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground"
            />
            <line
              x1={PLOT.left}
              y1={PLOT.bottom}
              x2={PLOT.right}
              y2={PLOT.bottom}
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground"
            />

            <text
              x="36"
              y={(PLOT.top + PLOT.bottom) / 2}
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              className="fill-current text-foreground"
              transform={`rotate(-90, 36, ${(PLOT.top + PLOT.bottom) / 2})`}
            >
              Asset Condition
            </text>
            <text
              x="48"
              y={PLOT.top + 14}
              textAnchor="start"
              fontSize="11"
              className="fill-current text-muted-foreground"
            >
              Good
            </text>
            <text
              x="48"
              y={PLOT.bottom - 8}
              textAnchor="start"
              fontSize="11"
              className="fill-current text-muted-foreground"
            >
              Failed
            </text>
            <text
              x={(PLOT.left + PLOT.right) / 2}
              y="528"
              textAnchor="middle"
              fontSize="14"
              fontWeight="600"
              className="fill-current text-foreground"
            >
              Time / Asset Life
            </text>

            {/* I / P / F guides */}
            <line
              x1={keyPoints.I.x}
              y1={keyPoints.I.y}
              x2={keyPoints.I.x}
              y2={PLOT.bottom}
              stroke="#3B82F6"
              strokeWidth="1.5"
            />
            <line
              x1={keyPoints.P.x}
              y1={keyPoints.P.y}
              x2={keyPoints.P.x}
              y2={PLOT.bottom}
              stroke="#3B82F6"
              strokeWidth="1.25"
              strokeDasharray="5 4"
            />
            <line
              x1={keyPoints.F.x}
              y1={keyPoints.F.y}
              x2={keyPoints.F.x}
              y2={PLOT.bottom}
              stroke="#DC2626"
              strokeWidth="1.25"
              strokeDasharray="5 4"
            />

            <path
              d={curvePath}
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              className="text-foreground"
              strokeLinecap="round"
            />

            {/* Key point markers */}
            <circle cx={keyPoints.I.x} cy={keyPoints.I.y} r="6" fill="#3B82F6" />
            <circle cx={keyPoints.P.x} cy={keyPoints.P.y} r="6" fill="#3B82F6" />
            <circle cx={keyPoints.F.x} cy={keyPoints.F.y} r="6" fill="#DC2626" />

            <text
              x={keyPoints.I.x}
              y={keyPoints.I.y - 14}
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              className="fill-current text-blue-600 dark:text-blue-400"
            >
              I
            </text>
            <text
              x={keyPoints.P.x + 14}
              y={keyPoints.P.y - 12}
              textAnchor="start"
              fontSize="16"
              fontWeight="700"
              className="fill-current text-blue-600 dark:text-blue-400"
            >
              P
            </text>
            <text
              x={keyPoints.F.x}
              y={keyPoints.F.y - 14}
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#DC2626"
            >
              F
            </text>

            {/* Axis tick labels — staggered so they never collide */}
            <text
              x={keyPoints.I.x}
              y="412"
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              className="fill-current text-foreground"
            >
              Installation
            </text>
            <text
              x={keyPoints.P.x}
              y="412"
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              className="fill-current text-foreground"
            >
              Potential Failure
            </text>
            <text
              x={keyPoints.F.x - 8}
              y="412"
              textAnchor="end"
              fontSize="12"
              fontWeight="600"
              className="fill-current text-foreground"
            >
              Functional Failure
            </text>

            {/* Interval dimension lines sit in a dedicated band below the axis labels */}
            <line
              x1={keyPoints.I.x}
              y1="448"
              x2={keyPoints.P.x}
              y2="448"
              stroke="#D97706"
              strokeWidth="2.5"
              markerStart="url(#arrow-start)"
              markerEnd="url(#arrow-end)"
            />
            <text
              x={coord((keyPoints.I.x + keyPoints.P.x) / 2)}
              y="440"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="#D97706"
            >
              I-P Interval
            </text>

            <line
              x1={keyPoints.P.x}
              y1="448"
              x2={keyPoints.F.x}
              y2="448"
              stroke="#DC2626"
              strokeWidth="2.5"
              markerStart="url(#arrow-start)"
              markerEnd="url(#arrow-end)"
            />
            <text
              x={coord((keyPoints.P.x + keyPoints.F.x) / 2)}
              y="440"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#DC2626"
            >
              P-F Interval
            </text>

            {failurePoints.map((point) => (
              <g key={point.id}>
                <motion.circle
                  cx={point.x.toFixed(2)}
                  cy={point.y.toFixed(2)}
                  r={8}
                  fill={point.id === 4 ? '#F59E0B' : point.id >= 5 ? '#DC2626' : '#3B82F6'}
                  className="cursor-pointer"
                  initial={false}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                  animate={{
                    r: activePoint === point.id ? 11 : 8,
                    fillOpacity: activePoint === point.id ? 1 : 0.95,
                  }}
                />
                <text
                  x={point.x.toFixed(2)}
                  y={coord(point.y + 4).toFixed(2)}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="#ffffff"
                  className="pointer-events-none"
                >
                  {point.id + 1}
                </text>
              </g>
            ))}
          </svg>

          <AnimatePresence>
            {activePoint !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-3 right-3 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs z-10"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {failurePoints[activePoint]?.label}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {failurePoints[activePoint]?.description}
                </p>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Strategy: {failurePoints[activePoint]?.maintenance}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {maintenanceStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.name}
              className={`p-4 rounded-lg border ${strategy.borderColor} bg-gradient-to-br ${strategy.color}`}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className={`font-bold text-base uppercase tracking-wide ${strategy.textColor} mb-2`}>
                {strategy.name}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-bold text-foreground mb-4 text-base uppercase tracking-wide">
            Failure Detection Methods
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {failurePoints.map((point, index) => (
              <button
                key={point.id}
                type="button"
                className="flex items-center space-x-3 text-sm text-left"
                onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
              >
                <div
                  className={`w-4 h-4 rounded-full shrink-0 ${point.id === 4 ? 'bg-orange-500' : point.id >= 5 ? 'bg-red-600' : 'bg-blue-500'}`}
                />
                <span className="text-muted-foreground font-medium">
                  {index + 1}. {point.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PFCurveDiagram
