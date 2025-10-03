'use client'

import React from 'react'
import Link from 'next/link'
import { Settings, Zap, GraduationCap, Factory, CheckCircle, ArrowRight, Sparkles, Shield, Target, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Reliability Engineering',
      description: 'Comprehensive reliability engineering solutions to maximize equipment performance and minimize downtime.',
      features: [
        'Root Cause Analysis (RCA)',
        'Reliability Centered Maintenance (RCM)',
        'Asset Optimization Strategies',
        'Performance Monitoring Systems',
        'Failure Mode Analysis',
        'Maintenance Strategy Development'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600',
      path: '/reliability-engineering'
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description: 'Advanced predictive maintenance solutions leveraging cutting-edge AI/ML algorithms and IoT technologies.',
      features: [
        'AI/ML Algorithm Implementation',
        'IoT Sensor Integration',
        'Real-time Data Analytics',
        'Failure Prediction Models',
        'Condition Monitoring Systems',
        'Maintenance Optimization'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500',
      path: '/predictive-maintenance'
    },
    {
      icon: GraduationCap,
      title: 'Professional Training',
      description: 'World-class certification programs with globally recognized credentials and expert-led courses.',
      features: [
        'CMRP Certification Programs',
        'SMRP Standards Training',
        'RCA Methodology Training',
        'RCM Implementation Programs',
        'Custom Training Solutions',
        'Online Learning Platforms'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500',
      path: '/professional-training'
    },
    {
      icon: Factory,
      title: 'Industry 4.0 Solutions',
      description: 'Cutting-edge digital transformation solutions for the connected industrial ecosystem.',
      features: [
        'IoT Implementation',
        'Digital Transformation Strategy',
        'Smart Manufacturing Solutions',
        'Custom Software Development',
        'System Integration',
        'Data Analytics Platforms'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500',
      path: '/industry-4-solutions'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Target },
    { number: '15+', label: 'Years Experience', icon: Shield },
    { number: '100+', label: 'Professionals Trained', icon: Users },
    { number: '3', label: 'Countries Served', icon: Sparkles }
  ]

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 flex items-center overflow-hidden hero-gradient min-h-[600px]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/20 to-transparent dark:from-charcoal/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 dark:bg-teal-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-green/10 dark:bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Comprehensive Solutions</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Our <span className="text-teal-green dark:text-electric-blue hero-text-accent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed hero-text">
            Comprehensive solutions built on four foundational pillars driving industrial transformation across UAE, Oman, and India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              EXPLORE SERVICES
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              GET CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-deep-navy" />
                </div>
                <div className="text-3xl md:text-4xl font-sans font-bold text-electric-blue mb-2">{stat.number}</div>
                <div className="text-steel-gray dark:text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Delivering cutting-edge solutions that drive operational excellence and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-1 bg-white/20"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-${service.accent} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-deep-navy" />
                        </div>
                        <span className="text-foreground group-hover/item:text-electric-blue transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href={service.path}>
                      <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300 uppercase tracking-wide font-semibold">
                        LEARN MORE
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your challenges and objectives' },
              { step: '02', title: 'Strategy', description: 'Developing tailored solutions and roadmaps' },
              { step: '03', title: 'Implementation', description: 'Executing with precision and expertise' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-sans font-bold text-deep-navy">{item.step}</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-steel-gray dark:text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Ready to Transform?</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Ready to Transform Your Operations?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 hero-text">
            Let&apos;s discuss how our expertise can drive your success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              GET STARTED TODAY
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
