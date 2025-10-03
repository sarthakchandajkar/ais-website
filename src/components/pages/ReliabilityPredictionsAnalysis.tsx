'use client'

import React from 'react'
import Link from 'next/link'
import { 
  TrendingUp, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
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
  Info,
  Calculator,
  Target,
  Database,
  Cpu,
  LineChart,
  Gauge,
  AlertTriangle,
  RefreshCw,
  Layers,
  GitBranch,
  Zap as Lightning
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ReliabilityPredictionsAnalysis = () => {
  const analysisTypes = [
    {
      icon: Calculator,
      title: 'MTBF Calculations',
      description: 'Mean Time Between Failures analysis to predict equipment reliability and optimize maintenance intervals.',
      features: [
        'Statistical Analysis',
        'Failure Rate Modeling',
        'Confidence Intervals',
        'Reliability Predictions',
        'Maintenance Optimization',
        'Life Cycle Cost Analysis'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue'
    },
    {
      icon: GitBranch,
      title: 'Reliability Block Diagrams',
      description: 'Visual representation of system reliability using block diagrams to identify critical paths and bottlenecks.',
      features: [
        'System Architecture Modeling',
        'Critical Path Analysis',
        'Redundancy Assessment',
        'Fault Tree Integration',
        'Performance Optimization',
        'Risk Evaluation'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green'
    },
    {
      icon: LineChart,
      title: 'Weibull Analysis',
      description: 'Advanced statistical analysis using Weibull distribution to model failure patterns and predict reliability.',
      features: [
        'Weibull Distribution Fitting',
        'Shape Parameter Analysis',
        'Scale Parameter Estimation',
        'Failure Pattern Recognition',
        'Reliability Forecasting',
        'Maintenance Strategy Optimization'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber'
    },
    {
      icon: Database,
      title: 'Life Data Analysis',
      description: 'Comprehensive analysis of equipment life data to understand failure patterns and optimize performance.',
      features: [
        'Censored Data Analysis',
        'Failure Mode Identification',
        'Life Distribution Fitting',
        'Reliability Estimation',
        'Confidence Bounds',
        'Statistical Validation'
      ],
      gradient: 'from-info to-electric-blue',
      accent: 'info'
    },
    {
      icon: TestTube,
      title: 'Accelerated Life Testing',
      description: 'Accelerated testing methodologies to predict long-term reliability in shorter time frames.',
      features: [
        'Stress Testing Protocols',
        'Acceleration Factor Calculation',
        'Arrhenius Modeling',
        'Eyring Model Application',
        'Reliability Extrapolation',
        'Test Plan Optimization'
      ],
      gradient: 'from-warning to-electric-blue',
      accent: 'warning'
    },
    {
      icon: TrendingUp,
      title: 'Reliability Growth Modeling',
      description: 'Mathematical modeling of reliability improvement over time during development and operation phases.',
      features: [
        'Growth Curve Fitting',
        'Duane Model Application',
        'Crow-AMSAA Analysis',
        'Reliability Projections',
        'Improvement Tracking',
        'Development Planning'
      ],
      gradient: 'from-electric-blue to-warning',
      accent: 'electric-blue'
    }
  ]

  const methodologies = [
    {
      icon: Calculator,
      title: 'Statistical Analysis',
      description: 'Advanced statistical methods for reliability data analysis and prediction modeling.'
    },
    {
      icon: Target,
      title: 'Monte Carlo Simulation',
      description: 'Probabilistic modeling to assess system reliability under various operating conditions.'
    },
    {
      icon: BarChart3,
      title: 'Bayesian Analysis',
      description: 'Bayesian statistical methods for updating reliability estimates with new data.'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'AI-powered algorithms for predictive reliability modeling and failure prediction.'
    }
  ]

  const softwareTools = [
    {
      name: 'ReliaSoft Weibull++',
      description: 'Comprehensive reliability analysis software for life data analysis and Weibull modeling'
    },
    {
      name: 'Minitab Reliability',
      description: 'Statistical software for reliability analysis, survival analysis, and quality improvement'
    },
    {
      name: 'JMP Reliability',
      description: 'Advanced analytics platform for reliability engineering and statistical analysis'
    },
    {
      name: 'R Language',
      description: 'Open-source statistical computing environment for custom reliability analysis'
    },
    {
      name: 'Python SciPy',
      description: 'Scientific computing library for statistical analysis and reliability modeling'
    },
    {
      name: 'MATLAB Statistics',
      description: 'Engineering software with comprehensive statistical and reliability analysis tools'
    }
  ]

  const applications = [
    {
      icon: Settings,
      title: 'Manufacturing',
      description: 'Production equipment reliability analysis and maintenance optimization.',
      examples: ['Production Lines', 'Machining Centers', 'Assembly Systems', 'Quality Control Equipment']
    },
    {
      icon: Zap,
      title: 'Power Generation',
      description: 'Power plant equipment reliability and availability analysis.',
      examples: ['Turbines', 'Generators', 'Transformers', 'Control Systems']
    },
    {
      icon: Globe,
      title: 'Aerospace',
      description: 'Aircraft systems reliability analysis and safety assessment.',
      examples: ['Engine Components', 'Avionics Systems', 'Structural Elements', 'Safety Systems']
    },
    {
      icon: Wrench,
      title: 'Automotive',
      description: 'Vehicle component reliability analysis and warranty prediction.',
      examples: ['Engine Systems', 'Transmission', 'Brake Systems', 'Electronic Controls']
    },
    {
      icon: Activity,
      title: 'Oil & Gas',
      description: 'Upstream and downstream equipment reliability analysis.',
      examples: ['Drilling Equipment', 'Refinery Units', 'Pipeline Systems', 'Safety Equipment']
    },
    {
      icon: Shield,
      title: 'Medical Devices',
      description: 'Medical equipment reliability analysis and regulatory compliance.',
      examples: ['Diagnostic Equipment', 'Surgical Instruments', 'Patient Monitoring', 'Therapeutic Devices']
    }
  ]

  const standards = [
    { name: 'MIL-STD-217F', description: 'Reliability prediction of electronic equipment' },
    { name: 'IEEE 1413', description: 'IEEE Standard Framework for Reliability Prediction of Hardware' },
    { name: 'IEC 61508', description: 'Functional safety of electrical/electronic/programmable electronic safety-related systems' },
    { name: 'ISO 14224', description: 'Petroleum, petrochemical and natural gas industries - Collection and exchange of reliability and maintenance data' },
    { name: 'IEC 60300-3-1', description: 'Dependability management - Application guide - Analysis techniques for dependability' },
    { name: 'MIL-HDBK-217F', description: 'Military Handbook for Reliability Prediction of Electronic Equipment'
    }
  ]

  const stats = [
    { number: '95%', label: 'Prediction Accuracy', icon: Target },
    { number: '40%', label: 'Maintenance Cost Reduction', icon: TrendingDown },
    { number: '60%', label: 'Equipment Uptime Improvement', icon: Clock },
    { number: '90%', label: 'Client Satisfaction Rate', icon: Users }
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
                  <span className="text-sm font-medium text-white">Advanced Analytics</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Reliability Predictions & Analysis</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Advanced statistical analysis and modeling to predict system reliability and optimize performance metrics using cutting-edge methodologies
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  EXPLORE ANALYSIS TYPES
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
                  title="Reliability Predictions & Analysis Overview"
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

      {/* Analysis Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Analysis Types & Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive reliability analysis techniques to predict performance and optimize maintenance strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analysisTypes.map((type, index) => (
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

      {/* Methodologies Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Advanced Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge analytical approaches for comprehensive reliability assessment
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

      {/* Software Tools Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Software Tools & Platforms
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Industry-leading software tools for comprehensive reliability analysis and modeling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {tool.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Reliability predictions and analysis applied across diverse industries for optimal performance
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8">
                Industry Standards & Certifications
              </h2>
              <p className="text-lg text-steel-gray dark:text-muted-foreground leading-relaxed mb-8">
                Our reliability analysis practices are aligned with international standards and best practices, ensuring accuracy and compliance.
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
                        <h4 className="font-semibold text-white mb-1">Advanced Analytics</h4>
                        <p className="text-white/90 text-sm">Cutting-edge statistical methods and machine learning algorithms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Industry Experience</h4>
                        <p className="text-white/90 text-sm">Extensive experience across multiple industries and complex systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Results</h4>
                        <p className="text-white/90 text-sm">Track record of delivering accurate predictions and measurable improvements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Software Expertise</h4>
                        <p className="text-white/90 text-sm">Proficiency in leading reliability analysis software and custom solutions</p>
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
              <span className="text-sm font-medium text-white">Ready to Predict Reliability?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Optimize Your System Reliability Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our experts help you predict and improve system reliability with advanced analytics and modeling
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              START RELIABILITY ANALYSIS
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

export default ReliabilityPredictionsAnalysis

