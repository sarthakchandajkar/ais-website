'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Settings, Zap, GraduationCap, Factory, ShieldCheck, Activity, Cpu, TrendingDown, AlertTriangle, Wrench, Target } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import PFCurveDiagram from '@/components/PFCurveDiagram'

// Dynamically import VideoBackground to prevent hydration issues
const VideoBackground = dynamic(() => import('@/components/VideoBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/60 to-transparent dark:from-charcoal/60"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 dark:bg-teal-green/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-green/10 dark:bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  )
})

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Reliability',
      description: 'Comprehensive reliability engineering solutions including Root Cause Analysis (RCA), Reliability Centered Maintenance (RCM), and asset optimization strategies.',
      features: ['Root Cause Analysis (RCA)', 'Reliability Centered Maintenance (RCM)', 'Asset Optimization', 'Performance Monitoring']
    },
    {
      icon: Activity,
      title: 'Predictive Maintenance',
      description: 'Advanced predictive maintenance solutions leveraging AI/ML algorithms, IoT sensors, and data analytics to predict equipment failures before they occur.',
      features: ['AI/ML Algorithms', 'IoT Sensor Integration', 'Data Analytics', 'Failure Prediction']
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'World-class certification programs including CMRP, SMRP, RCA, and RCM training with globally recognized credentials and expert-led courses.',
      features: ['CMRP Certification', 'SMRP Standards', 'RCA Training', 'RCM Programs']
    },
    {
      icon: Cpu,
      title: 'Industry 4.0',
      description: 'Cutting-edge digital transformation solutions including IoT implementations, AI/ML integration, and smart manufacturing technologies.',
      features: ['IoT Implementation', 'Digital Transformation', 'Smart Manufacturing', 'Custom Software Development']
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pillars.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [pillars.length])

  const handlePillarClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Video Background with Text */}
        <VideoBackground 
          headline="INNOVATION THAT WORKS. RELIABILITY THAT LASTS."
          subheading=""
          showText={true}
        />
        
        {/* Action Buttons - Bottom Left Below Text */}
        <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 xl:bottom-36 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 z-10">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <Link 
              href="/services"
              className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base inline-block text-center"
            >
              LEARN MORE
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base inline-block text-center"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black text-foreground mb-4 sm:mb-6 uppercase tracking-wide leading-tight break-words">
              Our Four Pillars of Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed break-words">
              Comprehensive solutions built on four foundational pillars driving industrial transformation
            </p>
          </div>
          
          {/* Pillars Slider */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-white/30">
            <div className="relative min-h-[400px] sm:min-h-[450px] md:h-96">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-4 sm:p-6 md:p-8 transition-all duration-800 ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-8'
                  }`}
                >
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                      <pillar.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-foreground mb-3 sm:mb-4 break-words">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-steel-gray dark:text-muted-foreground mb-4 sm:mb-6 leading-relaxed break-words">
                      {pillar.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-full">
                      {pillar.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-xs sm:text-sm text-foreground bg-accent px-2 sm:px-3 py-2 rounded-lg font-medium break-words"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="bg-muted">
              <div className="flex justify-between items-center p-2 sm:p-4">
                {pillars.map((pillar, index) => (
                  <button
                    key={index}
                    onClick={() => handlePillarClick(index)}
                    className={`flex-1 flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 text-center transition-all duration-300 hover:scale-105 ${
                      index === currentSlide
                        ? 'bg-teal-green text-white'
                        : 'text-steel-gray dark:text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mb-1 flex items-center justify-center">
                      <pillar.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="text-xs sm:text-sm font-medium break-words leading-tight text-center">{pillar.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Engineering Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-black text-foreground mb-4 sm:mb-6 uppercase tracking-wide leading-tight break-words">
              Reliability Engineering Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-steel-gray dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed break-words">
              Understanding asset degradation patterns and implementing optimal maintenance strategies through the P-F Curve methodology
            </p>
          </div>

          {/* P-F Curve Diagram */}
          <div className="mb-12">
            <PFCurveDiagram />
          </div>

          {/* Key Concepts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">P-F Interval</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                The critical window between detectable failure and functional failure, determining optimal maintenance timing
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Predictive Maintenance</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Early detection using advanced monitoring technologies to prevent failures before they occur
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Preventive Maintenance</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Scheduled maintenance based on time or usage patterns to maintain optimal asset performance
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Corrective Maintenance</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Reactive maintenance after failure detection, typically more costly and disruptive
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-lg max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Optimize Your Asset Reliability Strategy
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our reliability engineering experts help you implement the right maintenance strategies at the right time, 
                maximizing asset performance while minimizing costs and downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/reliability-engineering"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-sm"
                >
                  Learn More About Reliability Engineering
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-sm"
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-electric-blue mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm md:text-base text-steel-gray dark:text-muted-foreground break-words">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-electric-blue mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-steel-gray dark:text-muted-foreground break-words">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-electric-blue mb-1 sm:mb-2">3</div>
              <div className="text-xs sm:text-sm md:text-base text-steel-gray dark:text-muted-foreground break-words">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-electric-blue mb-1 sm:mb-2">100+</div>
              <div className="text-xs sm:text-sm md:text-base text-steel-gray dark:text-muted-foreground break-words">Professionals Trained</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
