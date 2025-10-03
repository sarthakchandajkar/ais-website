'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Shield, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Settings,
  BarChart3,
  Wrench,
  AlertTriangle,
  Clock,
  FileText,
  Activity,
  Brain,
  TestTube,
  Package,
  UserCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ReliabilityEngineering = () => {
  const services = [
    {
      icon: Shield,
      title: 'Reliability-Centered Maintenance (RCM)',
      description: 'Systematic approach to maintenance strategy development that prioritizes critical assets and optimizes maintenance activities.',
      features: [
        'Criticality Analysis',
        'Failure Mode Analysis',
        'Maintenance Strategy Optimization',
        'Cost-Benefit Analysis',
        'Implementation Planning',
        'Performance Monitoring'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue',
      path: '/reliability-centered-maintenance'
    },
    {
      icon: Target,
      title: 'Root Cause Analysis (RCA)',
      description: 'Comprehensive investigation methodology to identify underlying causes of failures and implement effective corrective actions.',
      features: [
        '5-Why Analysis',
        'Fishbone Diagrams',
        'Fault Tree Analysis',
        'Event and Causal Factor Analysis',
        'Corrective Action Planning',
        'Prevention Strategies'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green',
      path: '/root-cause-analysis'
    },
    {
      icon: BarChart3,
      title: 'Failure Modes & Effects Analysis (FMEA)',
      description: 'Proactive risk assessment methodology to identify potential failure modes and their impact on system performance.',
      features: [
        'System FMEA',
        'Design FMEA',
        'Process FMEA',
        'Risk Priority Number (RPN)',
        'Mitigation Strategies',
        'Continuous Improvement'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber',
      path: '/failure-modes-effects-analysis'
    },
    {
      icon: TrendingUp,
      title: 'Reliability Predictions & Analysis',
      description: 'Advanced statistical analysis and modeling to predict system reliability and optimize performance metrics.',
      features: [
        'MTBF Calculations',
        'Reliability Block Diagrams',
        'Weibull Analysis',
        'Life Data Analysis',
        'Accelerated Life Testing',
        'Reliability Growth Modeling'
      ],
      gradient: 'from-info to-electric-blue',
      accent: 'info',
      path: '/reliability-predictions-analysis'
    },
    {
      icon: Activity,
      title: 'Condition-Based Maintenance (CBM)',
      description: 'Utilization of real-time data from sensors and monitoring systems to perform maintenance only when necessary, optimizing resource allocation and minimizing downtime.',
      features: [
        'Real-time Sensor Monitoring',
        'Condition Assessment',
        'Predictive Analytics',
        'Maintenance Scheduling',
        'Resource Optimization',
        'Downtime Minimization'
      ],
      gradient: 'from-teal-green to-amber',
      accent: 'teal-green',
      path: '/condition-based-maintenance'
    },
    {
      icon: TestTube,
      title: 'Reliability Testing & Validation',
      description: 'Structured testing protocols to validate system reliability under various operating conditions, ensuring compliance with design specifications and performance standards.',
      features: [
        'Environmental Testing',
        'Stress Testing',
        'Performance Validation',
        'Compliance Verification',
        'Design Specification Testing',
        'Quality Assurance'
      ],
      gradient: 'from-info to-teal-green',
      accent: 'info',
      path: '/reliability-testing-validation'
    },
    {
      icon: Package,
      title: 'Spare Parts Optimization',
      description: 'Strategic management of inventory to ensure availability of critical spare parts, reducing lead times and improving system uptime.',
      features: [
        'Inventory Management',
        'Critical Parts Identification',
        'Lead Time Reduction',
        'Uptime Improvement',
        'Cost Optimization',
        'Supply Chain Management'
      ],
      gradient: 'from-warning to-electric-blue',
      accent: 'warning',
      path: '/spare-parts-optimization'
    },
    {
      icon: UserCheck,
      title: 'Human Reliability Analysis (HRA)',
      description: 'Assessment of human factors that may impact system reliability, including error prevention and training program development.',
      features: [
        'Human Factor Assessment',
        'Error Prevention Strategies',
        'Training Program Development',
        'Performance Analysis',
        'Risk Mitigation',
        'Competency Management'
      ],
      gradient: 'from-electric-blue to-warning',
      accent: 'electric-blue',
      path: '/human-reliability-analysis'
    }
  ]

  const methodologies = [
    {
      icon: Settings,
      title: 'Design for Reliability (DfR)',
      description: 'Integrating reliability considerations into the design phase to enhance product durability and performance from the ground up.'
    },
    {
      icon: Wrench,
      title: 'Condition-Based Maintenance',
      description: 'Implementing real-time monitoring systems to perform maintenance only when equipment condition indicates it\'s necessary.'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment & Management',
      description: 'Comprehensive risk evaluation and mitigation strategies to minimize operational risks and ensure system reliability.'
    },
    {
      icon: Clock,
      title: 'Life Cycle Management',
      description: 'Optimizing asset performance throughout its entire lifecycle from design and installation to decommissioning.'
    }
  ]

  const standards = [
    { name: 'ISO 14224', description: 'Petroleum, petrochemical and natural gas industries - Collection and exchange of reliability and maintenance data' },
    { name: 'API 580', description: 'Risk-Based Inspection (RBI) methodology for pressure equipment' },
    { name: 'IEC 61508', description: 'Functional safety of electrical/electronic/programmable electronic safety-related systems' },
    { name: 'ISO 55000', description: 'Asset management - Overview, principles and terminology' },
    { name: 'MIL-STD-217F', description: 'Reliability prediction of electronic equipment' },
    { name: 'IEEE 1413', description: 'IEEE Standard Framework for Reliability Prediction of Hardware'
    }
  ]

  const stats = [
    { number: '40%', label: 'Reduction in Unplanned Downtime', icon: TrendingUp },
    { number: '25%', label: 'Maintenance Cost Savings', icon: Award },
    { number: '60%', label: 'Improvement in MTBF', icon: Shield },
    { number: '95%', label: 'Client Satisfaction Rate', icon: Users }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center overflow-hidden hero-gradient min-h-[700px]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/20 to-transparent dark:from-charcoal/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 dark:bg-teal-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-green/10 dark:bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-teal-green" />
                  <span className="text-sm font-medium text-white">Reliability Engineering Excellence</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Reliability Engineering</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Maximize equipment performance, minimize downtime, and optimize maintenance strategies with our comprehensive reliability engineering solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  EXPLORE OUR SERVICES
                  <ArrowRight className="ml-2 w-4 h-4 inline" />
                </button>
                <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  GET CONSULTATION
                </button>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                <iframe
                  src="https://www.youtube.com/embed/H5_kV_xpJaU?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0&loop=1&playlist=H5_kV_xpJaU&start=0&end=300&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0&enablejsapi=1"
                  title="Reliability Engineering Services Overview"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video overlay elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-electric-blue to-teal-green rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-teal-green to-electric-blue rounded-full animate-pulse delay-1000"></div>
            </div>
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

      {/* Core Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive reliability engineering solutions designed to enhance system performance and reduce operational risks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-deep-navy" />
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
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="space-y-3 flex-1">
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
                    {service.path ? (
                      <Link href={service.path}>
                        <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300 uppercase tracking-wide font-semibold">
                          LEARN MORE
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300 uppercase tracking-wide font-semibold">
                        LEARN MORE
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Methodologies Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Proven approaches and best practices that drive reliability excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <methodology.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {methodology.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {methodology.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8">
                Industry Standards & Certifications
              </h2>
              <p className="text-lg text-steel-gray dark:text-muted-foreground leading-relaxed mb-8">
                Our reliability engineering practices are aligned with international standards and best practices, ensuring compliance and excellence in every project.
              </p>
              <div className="space-y-4">
                {standards.map((standard, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg group hover:bg-electric-blue/10 transition-colors duration-200">
                    <div className="w-2 h-2 bg-electric-blue rounded-full group-hover:bg-teal-green transition-colors duration-200 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-200">{standard.name}</h4>
                      <p className="text-steel-gray dark:text-muted-foreground text-sm">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-electric-blue to-teal-green text-white border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">15+ Years Experience</h4>
                        <p className="text-white/90 text-sm">Extensive experience across multiple industries and complex systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Certified Professionals</h4>
                        <p className="text-white/90 text-sm">CMRP and SMRP certified reliability engineers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Results</h4>
                        <p className="text-white/90 text-sm">Track record of delivering measurable improvements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Global Reach</h4>
                        <p className="text-white/90 text-sm">Serving clients across UAE, Oman, and India</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              A systematic approach to delivering exceptional reliability engineering results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Comprehensive evaluation of current reliability performance and identification of improvement opportunities' },
              { step: '02', title: 'Analysis', description: 'Detailed analysis using advanced methodologies to understand failure modes and root causes' },
              { step: '03', title: 'Strategy', description: 'Development of customized reliability strategies and maintenance optimization plans' },
              { step: '04', title: 'Implementation', description: 'Execution of reliability programs with continuous monitoring and performance tracking' }
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
              <span className="text-sm font-medium text-white">Ready to Enhance Reliability?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Transform Your Asset Reliability Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our experts help you achieve optimal equipment performance and operational excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              GET STARTED
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

export default ReliabilityEngineering
