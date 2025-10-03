'use client'

import React, { useState, useEffect } from 'react'
import { ChevronRight, Settings, Zap, GraduationCap, Factory } from 'lucide-react'
import dynamic from 'next/dynamic'

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
      icon: '⚙️',
      title: 'Reliability',
      description: 'Comprehensive reliability engineering solutions including Root Cause Analysis (RCA), Reliability Centered Maintenance (RCM), and asset optimization strategies.',
      features: ['Root Cause Analysis (RCA)', 'Reliability Centered Maintenance (RCM)', 'Asset Optimization', 'Performance Monitoring']
    },
    {
      icon: '🔮',
      title: 'Predictive Maintenance',
      description: 'Advanced predictive maintenance solutions leveraging AI/ML algorithms, IoT sensors, and data analytics to predict equipment failures before they occur.',
      features: ['AI/ML Algorithms', 'IoT Sensor Integration', 'Data Analytics', 'Failure Prediction']
    },
    {
      icon: '🎓',
      title: 'Professional Training',
      description: 'World-class certification programs including CMRP, SMRP, RCA, and RCM training with globally recognized credentials and expert-led courses.',
      features: ['CMRP Certification', 'SMRP Standards', 'RCA Training', 'RCM Programs']
    },
    {
      icon: '🏭',
      title: 'Industry 4.0 Solutions',
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
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              LEARN MORE
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              CONTACT US
            </button>
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
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-sans font-black text-foreground mb-6 uppercase tracking-wide">
              Our Four Pillars of Excellence
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions built on four foundational pillars driving industrial transformation
            </p>
          </div>
          
          {/* Pillars Slider */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-white/30">
            <div className="relative h-96">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-8 transition-all duration-800 ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-8'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-steel-gray dark:text-muted-foreground mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {pillar.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-sm text-foreground bg-accent px-3 py-2 rounded-lg font-medium"
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
            <div className="flex bg-muted">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  onClick={() => handlePillarClick(index)}
                  className={`flex-1 p-4 text-center transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-electric-blue text-white'
                      : 'text-steel-gray dark:text-muted-foreground hover:bg-accent'
                  }`}
                >
                  <div className="text-lg mb-1">{pillar.icon}</div>
                  <div className="text-xs font-medium">{pillar.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-sans font-bold text-electric-blue mb-2">15+</div>
              <div className="text-steel-gray dark:text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-sans font-bold text-electric-blue mb-2">500+</div>
              <div className="text-steel-gray dark:text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-sans font-bold text-electric-blue mb-2">3</div>
              <div className="text-steel-gray dark:text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-sans font-bold text-electric-blue mb-2">100+</div>
              <div className="text-steel-gray dark:text-muted-foreground">Professionals Trained</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
