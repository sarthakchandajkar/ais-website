'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Activity, 
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
  Monitor,
  Cpu,
  Database,
  LineChart,
  Gauge,
  AlertTriangle,
  RefreshCw,
  Layers,
  Target,
  TrendingUp,
  Bell,
  Eye,
  Smartphone,
  Wifi,
  Cloud,
  Thermometer,
  Droplets,
  Volume2,
  DollarSign,
  Building
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ConditionBasedMaintenance = () => {
  const cbmTechnologies = [
    {
      icon: Monitor,
      title: 'Real-time Sensor Monitoring',
      description: 'Continuous monitoring of equipment condition using advanced sensors and IoT devices.',
      features: [
        'Vibration Analysis',
        'Temperature Monitoring',
        'Pressure Sensors',
        'Oil Analysis',
        'Acoustic Monitoring',
        'Electrical Monitoring'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue'
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered analysis of sensor data to predict equipment failures before they occur.',
      features: [
        'Machine Learning Algorithms',
        'Pattern Recognition',
        'Anomaly Detection',
        'Failure Prediction Models',
        'Trend Analysis',
        'Risk Assessment'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data collection, storage, and analysis systems for condition monitoring.',
      features: [
        'Data Historians',
        'Cloud Storage',
        'Real-time Processing',
        'Data Visualization',
        'Report Generation',
        'Integration APIs'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber'
    },
    {
      icon: Bell,
      title: 'Alert Systems',
      description: 'Intelligent alerting systems that notify maintenance teams of potential issues.',
      features: [
        'Threshold Monitoring',
        'Escalation Procedures',
        'Mobile Notifications',
        'Email Alerts',
        'Dashboard Alerts',
        'Custom Rules'
      ],
      gradient: 'from-info to-electric-blue',
      accent: 'info'
    },
    {
      icon: Wrench,
      title: 'Maintenance Scheduling',
      description: 'Automated scheduling of maintenance activities based on equipment condition.',
      features: [
        'Work Order Generation',
        'Resource Planning',
        'Priority Assignment',
        'Scheduling Optimization',
        'Maintenance History',
        'Performance Tracking'
      ],
      gradient: 'from-warning to-electric-blue',
      accent: 'warning'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Continuous optimization of maintenance strategies based on condition data.',
      features: [
        'KPI Monitoring',
        'Cost Analysis',
        'Efficiency Metrics',
        'ROI Calculation',
        'Strategy Refinement',
        'Continuous Improvement'
      ],
      gradient: 'from-electric-blue to-warning',
      accent: 'electric-blue'
    }
  ]

  const monitoringTechniques = [
    {
      icon: Activity,
      title: 'Vibration Analysis',
      description: 'Monitoring equipment vibration patterns to detect mechanical issues and imbalances.'
    },
    {
      icon: Thermometer,
      title: 'Thermal Imaging',
      description: 'Infrared monitoring to detect temperature anomalies and potential failures.'
    },
    {
      icon: Droplets,
      title: 'Oil Analysis',
      description: 'Laboratory analysis of lubricants to assess equipment condition and contamination.'
    },
    {
      icon: Volume2,
      title: 'Acoustic Monitoring',
      description: 'Sound analysis to detect bearing failures, cavitation, and other mechanical issues.'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Reduced Downtime',
      description: 'Proactive maintenance prevents unexpected failures and minimizes equipment downtime.',
      percentage: '50%'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Optimized maintenance schedules reduce unnecessary maintenance and extend asset life.',
      percentage: '30%'
    },
    {
      icon: Shield,
      title: 'Improved Reliability',
      description: 'Continuous monitoring ensures equipment operates at optimal performance levels.',
      percentage: '40%'
    },
    {
      icon: Users,
      title: 'Enhanced Safety',
      description: 'Early detection of potential failures improves workplace safety and reduces risks.',
      percentage: '60%'
    }
  ]

  const applications = [
    {
      icon: Settings,
      title: 'Manufacturing',
      description: 'Production equipment monitoring and maintenance optimization.',
      examples: ['CNC Machines', 'Conveyor Systems', 'Robotic Systems', 'Assembly Lines']
    },
    {
      icon: Zap,
      title: 'Power Generation',
      description: 'Power plant equipment monitoring and predictive maintenance.',
      examples: ['Turbines', 'Generators', 'Transformers', 'Boilers']
    },
    {
      icon: Wrench,
      title: 'Oil & Gas',
      description: 'Upstream and downstream equipment condition monitoring.',
      examples: ['Pumps', 'Compressors', 'Heat Exchangers', 'Valves']
    },
    {
      icon: Globe,
      title: 'Transportation',
      description: 'Fleet and infrastructure monitoring for optimal performance.',
      examples: ['Aircraft Engines', 'Railway Systems', 'Marine Vessels', 'Fleet Vehicles']
    },
    {
      icon: Activity,
      title: 'Mining',
      description: 'Heavy machinery monitoring in harsh operating conditions.',
      examples: ['Excavators', 'Haul Trucks', 'Crushers', 'Conveyors']
    },
    {
      icon: Building,
      title: 'Facilities',
      description: 'Building systems and infrastructure monitoring.',
      examples: ['HVAC Systems', 'Elevators', 'Water Systems', 'Electrical Systems']
    }
  ]

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current maintenance practices and identify critical equipment for monitoring.',
      icon: Search
    },
    {
      step: '02',
      title: 'Sensor Installation',
      description: 'Install appropriate sensors and monitoring devices on critical equipment.',
      icon: Monitor
    },
    {
      step: '03',
      title: 'Data Collection',
      description: 'Establish data collection systems and begin gathering condition data.',
      icon: Database
    },
    {
      step: '04',
      title: 'Analysis Setup',
      description: 'Configure analytics systems and establish baseline condition parameters.',
      icon: Brain
    },
    {
      step: '05',
      title: 'Alert Configuration',
      description: 'Set up alert systems and maintenance workflow automation.',
      icon: Bell
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Continuously optimize maintenance strategies based on condition data.',
      icon: Target
    }
  ]

  const standards = [
    { name: 'ISO 13373', description: 'Condition monitoring and diagnostics of machines - Vibration condition monitoring' },
    { name: 'ISO 18436', description: 'Condition monitoring and diagnostics of machines - Requirements for training and certification of personnel' },
    { name: 'ISO 17359', description: 'Condition monitoring and diagnostics of machines - General guidelines' },
    { name: 'API 670', description: 'Machinery Protection Systems' },
    { name: 'IEC 61850', description: 'Communication networks and systems for power utility automation' },
    { name: 'NEMA MG-1', description: 'Motors and Generators'
    }
  ]

  const stats = [
    { number: '50%', label: 'Downtime Reduction', icon: Clock },
    { number: '30%', label: 'Maintenance Cost Savings', icon: DollarSign },
    { number: '40%', label: 'Equipment Life Extension', icon: Shield },
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
                  <span className="text-sm font-medium text-white">Smart Maintenance</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Condition-Based Maintenance</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Utilization of real-time data from sensors and monitoring systems to perform maintenance only when necessary, optimizing resource allocation and minimizing downtime
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  EXPLORE CBM TECHNOLOGIES
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
                  title="Condition-Based Maintenance Overview"
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

      {/* CBM Technologies Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              CBM Technologies & Solutions
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Advanced technologies and systems for comprehensive condition-based maintenance implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cbmTechnologies.map((technology, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className={`h-1 bg-gradient-to-r ${technology.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${technology.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <technology.icon className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">
                        {technology.title}
                      </CardTitle>
                      <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                        {technology.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="space-y-3 flex-1">
                    {technology.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-${technology.accent} flex items-center justify-center flex-shrink-0`}>
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

      {/* Monitoring Techniques Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Monitoring Techniques
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Advanced monitoring methods for comprehensive equipment condition assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringTechniques.map((technique, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <technique.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {technique.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {technique.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              CBM Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements achieved through condition-based maintenance implementation
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

      {/* Implementation Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to implementing condition-based maintenance in your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
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

      {/* Applications Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Condition-based maintenance applied across diverse industries for optimal performance
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
                Our CBM practices are aligned with international standards and best practices, ensuring compliance and excellence.
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
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our CBM Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Advanced Technology</h4>
                        <p className="text-white/90 text-sm">Latest sensors, IoT devices, and analytics platforms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Industry Experience</h4>
                        <p className="text-white/90 text-sm">Extensive experience across multiple industries and equipment types</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Results</h4>
                        <p className="text-white/90 text-sm">Track record of delivering measurable improvements and cost savings</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">End-to-End Support</h4>
                        <p className="text-white/90 text-sm">Complete implementation support from assessment to optimization</p>
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
              <span className="text-sm font-medium text-white">Ready to Implement CBM?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Transform Your Maintenance Strategy Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our experts help you implement condition-based maintenance for optimal equipment performance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              START CBM IMPLEMENTATION
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

export default ConditionBasedMaintenance

