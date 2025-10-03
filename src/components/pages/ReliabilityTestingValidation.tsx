'use client'

import React from 'react'
import Link from 'next/link'
import { 
  TestTube, 
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
  Thermometer,
  Droplets,
  Volume2,
  Building,
  Eye,
  Microscope,
  Beaker,
  FlaskConical,
  Zap as Lightning,
  CheckSquare as Validation,
  TrendingUp,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ReliabilityTestingValidation = () => {
  const testingTypes = [
    {
      icon: Thermometer,
      title: 'Environmental Testing',
      description: 'Testing equipment under various environmental conditions to ensure reliability across different operating environments.',
      features: [
        'Temperature Cycling',
        'Humidity Testing',
        'Vibration Testing',
        'Shock Testing',
        'Altitude Testing',
        'Corrosion Testing'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue'
    },
    {
      icon: Zap,
      title: 'Stress Testing',
      description: 'Subjecting equipment to extreme conditions to identify failure points and validate design margins.',
      features: [
        'Overload Testing',
        'Endurance Testing',
        'Fatigue Testing',
        'Creep Testing',
        'Thermal Shock',
        'Electrical Stress'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green'
    },
    {
      icon: Target,
      title: 'Performance Validation',
      description: 'Comprehensive testing to verify that equipment meets specified performance requirements and standards.',
      features: [
        'Functional Testing',
        'Performance Metrics',
        'Efficiency Testing',
        'Accuracy Validation',
        'Repeatability Testing',
        'Compliance Verification'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber'
    },
    {
      icon: Shield,
      title: 'Safety Testing',
      description: 'Critical safety validation to ensure equipment operates safely under all conditions.',
      features: [
        'Safety System Testing',
        'Emergency Shutdown',
        'Fail-Safe Validation',
        'Hazard Analysis',
        'Risk Assessment',
        'Compliance Testing'
      ],
      gradient: 'from-info to-electric-blue',
      accent: 'info'
    },
    {
      icon: Clock,
      title: 'Life Cycle Testing',
      description: 'Long-term testing to validate equipment performance throughout its expected operational life.',
      features: [
        'Accelerated Life Testing',
        'Wear Testing',
        'Aging Studies',
        'Durability Testing',
        'Maintenance Testing',
        'End-of-Life Analysis'
      ],
      gradient: 'from-warning to-electric-blue',
      accent: 'warning'
    },
    {
      icon: CheckSquare,
      title: 'Quality Assurance',
      description: 'Comprehensive quality validation to ensure consistent performance and reliability standards.',
      features: [
        'Quality Control Testing',
        'Statistical Process Control',
        'Defect Analysis',
        'Root Cause Analysis',
        'Corrective Actions',
        'Continuous Improvement'
      ],
      gradient: 'from-electric-blue to-warning',
      accent: 'electric-blue'
    }
  ]

  const testingStandards = [
    {
      icon: FileText,
      title: 'ISO 9001',
      description: 'Quality management systems - Requirements for testing and validation processes.'
    },
    {
      icon: Shield,
      title: 'IEC 61508',
      description: 'Functional safety of electrical/electronic/programmable electronic safety-related systems.'
    },
    {
      icon: Target,
      title: 'MIL-STD-810',
      description: 'Environmental engineering considerations and laboratory tests for military equipment.'
    },
    {
      icon: CheckCircle,
      title: 'ASTM Standards',
      description: 'American Society for Testing and Materials standards for material and product testing.'
    }
  ]

  const testingPhases = [
    {
      step: '01',
      title: 'Test Planning',
      description: 'Develop comprehensive test plans based on requirements and standards.',
      icon: FileText
    },
    {
      step: '02',
      title: 'Test Setup',
      description: 'Configure test equipment and prepare test specimens for validation.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Test Execution',
      description: 'Conduct tests according to established protocols and procedures.',
      icon: TestTube
    },
    {
      step: '04',
      title: 'Data Collection',
      description: 'Collect and record test data using advanced measurement systems.',
      icon: Database
    },
    {
      step: '05',
      title: 'Analysis',
      description: 'Analyze test results and compare against acceptance criteria.',
      icon: BarChart3
    },
    {
      step: '06',
      title: 'Reporting',
      description: 'Generate comprehensive test reports with recommendations.',
      icon: FileText
    }
  ]

  const applications = [
    {
      icon: Settings,
      title: 'Manufacturing',
      description: 'Production equipment testing and validation for quality assurance.',
      examples: ['CNC Machines', 'Assembly Equipment', 'Quality Control Systems', 'Packaging Machinery']
    },
    {
      icon: Zap,
      title: 'Power Generation',
      description: 'Power plant equipment testing and safety validation.',
      examples: ['Turbines', 'Generators', 'Transformers', 'Control Systems']
    },
    {
      icon: Globe,
      title: 'Aerospace',
      description: 'Aircraft systems testing and certification validation.',
      examples: ['Engine Components', 'Avionics', 'Structural Elements', 'Safety Systems']
    },
    {
      icon: Wrench,
      title: 'Automotive',
      description: 'Vehicle component testing and performance validation.',
      examples: ['Engine Systems', 'Brake Components', 'Electronic Systems', 'Safety Equipment']
    },
    {
      icon: Activity,
      title: 'Medical Devices',
      description: 'Medical equipment testing and regulatory compliance validation.',
      examples: ['Diagnostic Equipment', 'Surgical Instruments', 'Patient Monitoring', 'Therapeutic Devices']
    },
    {
      icon: Building,
      title: 'Infrastructure',
      description: 'Building systems and infrastructure testing and validation.',
      examples: ['HVAC Systems', 'Elevators', 'Fire Safety Systems', 'Security Systems']
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Early identification of potential failures and design issues.',
      percentage: '70%'
    },
    {
      icon: TrendingUp,
      title: 'Quality Improvement',
      description: 'Enhanced product quality through comprehensive testing validation.',
      percentage: '50%'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduced warranty claims and field failures through thorough testing.',
      percentage: '40%'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Assurance',
      description: 'Ensured compliance with industry standards and regulations.',
      percentage: '100%'
    }
  ]

  const standards = [
    { name: 'ISO 9001', description: 'Quality management systems - Requirements' },
    { name: 'IEC 61508', description: 'Functional safety of electrical/electronic/programmable electronic safety-related systems' },
    { name: 'MIL-STD-810', description: 'Environmental engineering considerations and laboratory tests' },
    { name: 'ASTM E8', description: 'Standard test methods for tension testing of metallic materials' },
    { name: 'ISO 14224', description: 'Petroleum, petrochemical and natural gas industries - Collection and exchange of reliability and maintenance data' },
    { name: 'IEC 60068', description: 'Environmental testing - Part 1: General and guidance'
    }
  ]

  const stats = [
    { number: '70%', label: 'Risk Reduction', icon: Shield },
    { number: '50%', label: 'Quality Improvement', icon: TrendingUp },
    { number: '40%', label: 'Cost Reduction', icon: DollarSign },
    { number: '100%', label: 'Compliance Rate', icon: CheckCircle }
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
                  <span className="text-sm font-medium text-white">Quality Assurance</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Reliability Testing & Validation</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Structured testing protocols to validate system reliability under various operating conditions, ensuring compliance with design specifications and performance standards
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  EXPLORE TESTING TYPES
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
                  title="Reliability Testing & Validation Overview"
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

      {/* Testing Types Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Testing Types & Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive testing protocols to validate system reliability and performance under various conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingTypes.map((type, index) => (
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

      {/* Testing Standards Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Testing Standards & Certifications
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Compliance with international standards and best practices for testing and validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingStandards.map((standard, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <standard.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {standard.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Testing Process
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to reliability testing and validation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingPhases.map((phase, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-sans font-bold text-deep-navy">{phase.step}</span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <phase.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Testing Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements achieved through comprehensive testing and validation
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
              Reliability testing and validation applied across diverse industries for quality assurance
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
                Our testing practices are aligned with international standards and best practices, ensuring compliance and excellence.
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
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our Testing Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Advanced Facilities</h4>
                        <p className="text-white/90 text-sm">State-of-the-art testing equipment and controlled environments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Certified Personnel</h4>
                        <p className="text-white/90 text-sm">Qualified and experienced testing engineers and technicians</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Comprehensive Reports</h4>
                        <p className="text-white/90 text-sm">Detailed test reports with actionable recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Regulatory Compliance</h4>
                        <p className="text-white/90 text-sm">Full compliance with industry standards and regulations</p>
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
              <span className="text-sm font-medium text-white">Ready to Validate Reliability?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Ensure Quality & Reliability Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our experts help you validate system reliability through comprehensive testing and validation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              START TESTING PROGRAM
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

export default ReliabilityTestingValidation

