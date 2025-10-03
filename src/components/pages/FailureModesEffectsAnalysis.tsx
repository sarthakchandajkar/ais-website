'use client'

import React from 'react'
import Link from 'next/link'
import { 
  AlertTriangle, 
  Target, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Settings,
  Wrench,
  Clock,
  FileText,
  Activity,
  Brain,
  TestTube,
  Package,
  UserCheck,
  Shield,
  Zap,
  Search,
  Filter,
  PieChart,
  TrendingDown,
  AlertCircle,
  CheckSquare,
  XCircle,
  Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const FailureModesEffectsAnalysis = () => {
  const fmeaTypes = [
    {
      icon: Settings,
      title: 'System FMEA',
      description: 'High-level analysis focusing on system-level failures and their effects on overall system performance.',
      features: [
        'System Boundary Definition',
        'Interface Analysis',
        'System-Level Failure Modes',
        'Cascading Effect Analysis',
        'System Performance Impact',
        'Critical Path Identification'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue'
    },
    {
      icon: Wrench,
      title: 'Design FMEA (DFMEA)',
      description: 'Product design analysis to identify potential failure modes during the design phase and their impact on product performance.',
      features: [
        'Design Failure Modes',
        'Design Parameter Analysis',
        'Material Selection Review',
        'Design Validation',
        'Design Robustness Assessment',
        'Design Improvement Recommendations'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green'
    },
    {
      icon: Activity,
      title: 'Process FMEA (PFMEA)',
      description: 'Manufacturing process analysis to identify potential failure modes in production processes and their impact on product quality.',
      features: [
        'Process Step Analysis',
        'Process Parameter Control',
        'Quality Control Points',
        'Process Capability Assessment',
        'Process Improvement Actions',
        'Process Monitoring Systems'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber'
    }
  ]

  const methodologySteps = [
    {
      step: '01',
      title: 'System Definition',
      description: 'Define system boundaries, functions, and interfaces to establish the scope of analysis.',
      icon: Target
    },
    {
      step: '02',
      title: 'Failure Mode Identification',
      description: 'Identify all potential failure modes for each component, subsystem, or process step.',
      icon: AlertTriangle
    },
    {
      step: '03',
      title: 'Effects Analysis',
      description: 'Analyze the effects of each failure mode on system performance, safety, and reliability.',
      icon: BarChart3
    },
    {
      step: '04',
      title: 'Cause Analysis',
      description: 'Identify root causes and mechanisms that could lead to each failure mode.',
      icon: Search
    },
    {
      step: '05',
      title: 'Risk Assessment',
      description: 'Calculate Risk Priority Numbers (RPN) based on severity, occurrence, and detection ratings.',
      icon: PieChart
    },
    {
      step: '06',
      title: 'Action Planning',
      description: 'Develop and implement corrective actions to reduce risk and improve system reliability.',
      icon: CheckSquare
    }
  ]

  const rpnComponents = [
    {
      icon: AlertCircle,
      title: 'Severity (S)',
      description: 'Measures the impact of the failure effect on the system, customer, or end user.',
      scale: '1-10',
      criteria: [
        '1-2: Minor inconvenience',
        '3-4: Customer dissatisfaction',
        '5-6: Customer complaint',
        '7-8: Safety hazard',
        '9-10: Catastrophic failure'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Occurrence (O)',
      description: 'Measures the likelihood that the failure mode will occur during the design life.',
      scale: '1-10',
      criteria: [
        '1-2: Very unlikely',
        '3-4: Unlikely',
        '5-6: Moderate',
        '7-8: High probability',
        '9-10: Almost certain'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Search,
      title: 'Detection (D)',
      description: 'Measures the likelihood that the failure mode will be detected before it reaches the customer.',
      scale: '1-10',
      criteria: [
        '1-2: Almost certain detection',
        '3-4: High detection probability',
        '5-6: Moderate detection',
        '7-8: Low detection probability',
        '9-10: Very unlikely detection'
      ],
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Proactive identification and mitigation of potential failure modes before they occur.',
      percentage: '60%'
    },
    {
      icon: TrendingDown,
      title: 'Cost Savings',
      description: 'Reduction in warranty claims, recalls, and field failures through early problem identification.',
      percentage: '40%'
    },
    {
      icon: CheckCircle,
      title: 'Quality Improvement',
      description: 'Enhanced product and process quality through systematic failure mode analysis.',
      percentage: '50%'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Improved reliability and performance leading to higher customer satisfaction.',
      percentage: '35%'
    }
  ]

  const applications = [
    {
      icon: Settings,
      title: 'Automotive Industry',
      description: 'Vehicle systems, powertrain components, safety systems, and electronic controls.',
      examples: ['Engine Components', 'Brake Systems', 'Airbag Systems', 'Electronic Control Units']
    },
    {
      icon: Wrench,
      title: 'Manufacturing',
      description: 'Production processes, equipment, and quality control systems.',
      examples: ['Assembly Processes', 'Machining Operations', 'Quality Inspection', 'Packaging Systems']
    },
    {
      icon: Activity,
      title: 'Aerospace & Defense',
      description: 'Aircraft systems, avionics, propulsion systems, and safety-critical components.',
      examples: ['Flight Control Systems', 'Navigation Systems', 'Engine Components', 'Safety Systems']
    },
    {
      icon: Shield,
      title: 'Medical Devices',
      description: 'Medical equipment, diagnostic devices, and life-support systems.',
      examples: ['Surgical Instruments', 'Diagnostic Equipment', 'Patient Monitoring', 'Therapeutic Devices']
    },
    {
      icon: Zap,
      title: 'Energy & Power',
      description: 'Power generation, transmission, and distribution systems.',
      examples: ['Turbine Systems', 'Electrical Grid', 'Renewable Energy', 'Power Distribution']
    },
    {
      icon: Globe,
      title: 'Oil & Gas',
      description: 'Drilling equipment, processing facilities, and pipeline systems.',
      examples: ['Drilling Rigs', 'Refinery Equipment', 'Pipeline Systems', 'Safety Systems']
    }
  ]

  const standards = [
    { name: 'AIAG-VDA FMEA', description: 'Automotive Industry Action Group and Verband der Automobilindustrie FMEA standard' },
    { name: 'SAE J1739', description: 'Society of Automotive Engineers FMEA standard for automotive applications' },
    { name: 'IEC 60812', description: 'International Electrotechnical Commission standard for failure modes and effects analysis' },
    { name: 'MIL-STD-1629A', description: 'Military standard for procedures for performing a failure mode, effects, and criticality analysis' },
    { name: 'ISO 14971', description: 'Medical devices - Application of risk management to medical devices' },
    { name: 'IEC 61508', description: 'Functional safety of electrical/electronic/programmable electronic safety-related systems'
    }
  ]

  const stats = [
    { number: '85%', label: 'Risk Reduction Achieved', icon: Shield },
    { number: '50%', label: 'Development Time Savings', icon: Clock },
    { number: '70%', label: 'Quality Improvement', icon: CheckCircle },
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
                  <span className="text-sm font-medium text-white">Proactive Risk Management</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Failure Modes & Effects Analysis</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Proactive risk assessment methodology to identify potential failure modes and their impact on system performance, safety, and reliability
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  EXPLORE FMEA TYPES
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
                  title="FMEA Analysis Overview"
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

      {/* FMEA Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Types of FMEA Analysis
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive failure analysis methodologies tailored to different phases of product and process development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fmeaTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className={`h-1 bg-gradient-to-r ${type.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="space-y-3 flex-1">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-${type.accent} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-deep-navy" />
                        </div>
                        <span className="text-foreground group-hover/item:text-electric-blue transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              FMEA Methodology
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A systematic 6-step process for comprehensive failure mode and effects analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologySteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-sans font-bold text-deep-navy">{step.step}</span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RPN Components Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Risk Priority Number (RPN) Components
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Three key factors that determine the risk level of each identified failure mode
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rpnComponents.map((component, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${component.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <component.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-1">
                        {component.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-electric-blue">
                        Scale: {component.scale}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {component.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {component.criteria.map((criterion, criterionIndex) => (
                      <div key={criterionIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-${component.color.split(' ')[1].replace('to-', '')}`}></div>
                        <span className="text-sm text-foreground">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-electric-blue to-teal-green text-white border-0 overflow-hidden max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Info className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-sans font-bold text-white">RPN Calculation</h3>
                </div>
                <p className="text-white/90 text-lg mb-4">
                  Risk Priority Number = Severity × Occurrence × Detection
                </p>
                <div className="text-3xl font-bold text-white">
                  RPN = S × O × D
                </div>
                <p className="text-white/80 text-sm mt-2">
                  Higher RPN values indicate higher risk and require immediate attention
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              FMEA Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements achieved through systematic failure mode analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <div className="text-4xl font-sans font-bold text-electric-blue mb-2">{benefit.percentage}</div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              FMEA methodology applied across diverse industries for risk management and quality improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <application.icon className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {application.title}
                      </CardTitle>
                      <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                        {application.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-2">Examples:</h4>
                    {application.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-electric-blue rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8">
                Industry Standards & Certifications
              </h2>
              <p className="text-lg text-steel-gray dark:text-muted-foreground leading-relaxed mb-8">
                Our FMEA practices are aligned with international standards and best practices, ensuring compliance and excellence in every analysis.
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
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our FMEA Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Certified FMEA Practitioners</h4>
                        <p className="text-white/90 text-sm">AIAG-VDA and SAE certified FMEA specialists</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Industry Experience</h4>
                        <p className="text-white/90 text-sm">Extensive experience across automotive, aerospace, and manufacturing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Methodology</h4>
                        <p className="text-white/90 text-sm">Systematic approach with measurable results and continuous improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Software Tools</h4>
                        <p className="text-white/90 text-sm">Advanced FMEA software and digital tools for comprehensive analysis</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Ready to Implement FMEA?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Enhance Your Risk Management Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our FMEA experts help you identify and mitigate potential failures before they impact your operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              START FMEA ANALYSIS
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

export default FailureModesEffectsAnalysis


