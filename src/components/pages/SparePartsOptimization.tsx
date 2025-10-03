'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Package, 
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
  Truck,
  Warehouse,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  AlertCircle as Warning,
  CheckSquare as Inventory,
  Layers as Stock,
  Package2,
  Box,
  Archive
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const SparePartsOptimization = () => {
  const optimizationAreas = [
    {
      icon: Inventory,
      title: 'Inventory Management',
      description: 'Strategic management of spare parts inventory to ensure availability while minimizing costs.',
      features: [
        'ABC Analysis',
        'Criticality Assessment',
        'Stock Level Optimization',
        'Reorder Point Calculation',
        'Safety Stock Planning',
        'Inventory Turnover Analysis'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue'
    },
    {
      icon: Target,
      title: 'Critical Parts Identification',
      description: 'Systematic identification and prioritization of critical spare parts based on equipment importance.',
      features: [
        'Equipment Criticality Analysis',
        'Failure Impact Assessment',
        'Lead Time Analysis',
        'Availability Requirements',
        'Cost-Benefit Analysis',
        'Risk Assessment'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green'
    },
    {
      icon: Clock,
      title: 'Lead Time Reduction',
      description: 'Strategies to minimize lead times and improve spare parts availability.',
      features: [
        'Supplier Relationship Management',
        'Local Sourcing Strategies',
        'Emergency Procurement',
        'Vendor Managed Inventory',
        'Consignment Agreements',
        'Strategic Partnerships'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber'
    },
    {
      icon: TrendingUp,
      title: 'Uptime Improvement',
      description: 'Optimization strategies to maximize equipment uptime through effective spare parts management.',
      features: [
        'MTTR Reduction',
        'Availability Optimization',
        'Preventive Maintenance Support',
        'Emergency Response Planning',
        'Spare Parts Kitting',
        'Mobile Maintenance Support'
      ],
      gradient: 'from-info to-electric-blue',
      accent: 'info'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Comprehensive cost management strategies for spare parts procurement and inventory.',
      features: [
        'Total Cost of Ownership',
        'Procurement Optimization',
        'Bulk Purchasing Strategies',
        'Price Negotiation',
        'Cost-Benefit Analysis',
        'ROI Optimization'
      ],
      gradient: 'from-warning to-electric-blue',
      accent: 'warning'
    },
    {
      icon: Globe,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization for spare parts procurement and distribution.',
      features: [
        'Supplier Evaluation',
        'Supply Chain Mapping',
        'Risk Management',
        'Logistics Optimization',
        'Quality Assurance',
        'Performance Monitoring'
      ],
      gradient: 'from-electric-blue to-warning',
      accent: 'electric-blue'
    }
  ]

  const methodologies = [
    {
      icon: BarChart3,
      title: 'ABC Analysis',
      description: 'Classification of spare parts based on value and criticality for optimal inventory management.'
    },
    {
      icon: Target,
      title: 'Criticality Assessment',
      description: 'Systematic evaluation of spare parts importance based on equipment criticality and failure impact.'
    },
    {
      icon: Calculator,
      title: 'Economic Order Quantity',
      description: 'Mathematical optimization of order quantities to minimize total inventory costs.'
    },
    {
      icon: Database,
      title: 'Demand Forecasting',
      description: 'Statistical analysis and prediction of spare parts demand patterns.'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improved Availability',
      description: 'Enhanced spare parts availability leading to reduced downtime.',
      percentage: '40%'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Optimized inventory levels and procurement strategies reduce costs.',
      percentage: '25%'
    },
    {
      icon: Clock,
      title: 'Lead Time Reduction',
      description: 'Faster spare parts delivery through optimized supply chain management.',
      percentage: '35%'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduced risk of stockouts and equipment downtime.',
      percentage: '60%'
    }
  ]

  const applications = [
    {
      icon: Settings,
      title: 'Manufacturing',
      description: 'Production equipment spare parts optimization and inventory management.',
      examples: ['CNC Machines', 'Assembly Equipment', 'Quality Control Systems', 'Packaging Machinery']
    },
    {
      icon: Zap,
      title: 'Power Generation',
      description: 'Power plant equipment spare parts and critical component management.',
      examples: ['Turbines', 'Generators', 'Transformers', 'Control Systems']
    },
    {
      icon: Wrench,
      title: 'Oil & Gas',
      description: 'Upstream and downstream equipment spare parts optimization.',
      examples: ['Pumps', 'Compressors', 'Heat Exchangers', 'Valves']
    },
    {
      icon: Globe,
      title: 'Aerospace',
      description: 'Aircraft systems spare parts and component management.',
      examples: ['Engine Components', 'Avionics', 'Structural Elements', 'Safety Systems']
    },
    {
      icon: Activity,
      title: 'Mining',
      description: 'Heavy machinery spare parts optimization in harsh operating conditions.',
      examples: ['Excavators', 'Haul Trucks', 'Crushers', 'Conveyors']
    },
    {
      icon: Building,
      title: 'Facilities',
      description: 'Building systems and infrastructure spare parts management.',
      examples: ['HVAC Systems', 'Elevators', 'Fire Safety Systems', 'Security Systems']
    }
  ]

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current spare parts inventory and identify optimization opportunities.',
      icon: Search
    },
    {
      step: '02',
      title: 'Analysis',
      description: 'Analyze spare parts usage patterns, criticality, and cost factors.',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Develop customized spare parts optimization strategies and policies.',
      icon: Target
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Implement optimization strategies and establish monitoring systems.',
      icon: Wrench
    },
    {
      step: '05',
      title: 'Monitoring',
      description: 'Continuously monitor performance and adjust strategies as needed.',
      icon: Activity
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Continuously optimize spare parts management based on performance data.',
      icon: TrendingUp
    }
  ]

  const standards = [
    { name: 'ISO 55000', description: 'Asset management - Overview, principles and terminology' },
    { name: 'ISO 14224', description: 'Petroleum, petrochemical and natural gas industries - Collection and exchange of reliability and maintenance data' },
    { name: 'API 580', description: 'Risk-Based Inspection (RBI) methodology for pressure equipment' },
    { name: 'IEC 60300-3-1', description: 'Dependability management - Application guide - Analysis techniques for dependability' },
    { name: 'MIL-STD-1629A', description: 'Military standard for procedures for performing a failure mode, effects, and criticality analysis' },
    { name: 'ISO 9001', description: 'Quality management systems - Requirements'
    }
  ]

  const stats = [
    { number: '40%', label: 'Availability Improvement', icon: TrendingUp },
    { number: '25%', label: 'Cost Reduction', icon: DollarSign },
    { number: '35%', label: 'Lead Time Reduction', icon: Clock },
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
                  <span className="text-sm font-medium text-white">Strategic Management</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Spare Parts Optimization</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Strategic management of inventory to ensure availability of critical spare parts, reducing lead times and improving system uptime
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
                  EXPLORE OPTIMIZATION AREAS
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
                  title="Spare Parts Optimization Overview"
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

      {/* Optimization Areas Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Optimization Areas
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive spare parts optimization strategies to maximize availability and minimize costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className={`h-1 bg-gradient-to-r ${area.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">
                        {area.title}
                      </CardTitle>
                      <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                        {area.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="space-y-3 flex-1">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-${area.accent} flex items-center justify-center flex-shrink-0`}>
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
              Optimization Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Proven methodologies for effective spare parts optimization and inventory management
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

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Optimization Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements achieved through strategic spare parts optimization
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
              A systematic approach to implementing spare parts optimization strategies
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
              Spare parts optimization applied across diverse industries for optimal performance
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
                Our spare parts optimization practices are aligned with international standards and best practices, ensuring compliance and excellence.
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
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our Optimization Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Strategic Approach</h4>
                        <p className="text-white/90 text-sm">Comprehensive analysis and optimization strategies tailored to your needs</p>
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
                        <h4 className="font-semibold text-white mb-1">Technology Integration</h4>
                        <p className="text-white/90 text-sm">Advanced tools and systems for optimal spare parts management</p>
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
              <span className="text-sm font-medium text-white">Ready to Optimize Spare Parts?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Maximize Availability & Minimize Costs Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our experts help you optimize your spare parts management for maximum efficiency and cost savings
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              START OPTIMIZATION
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

export default SparePartsOptimization

