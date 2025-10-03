'use client'

import React from 'react'
import { 
  Package, 
  Target, 
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
  Cpu,
  TestTube,
  UserCheck,
  Zap,
  Gauge,
  Database,
  Wifi,
  Monitor,
  Shield,
  Eye,
  Layers,
  PieChart,
  LineChart,
  Smartphone,
  Cloud,
  Calendar,
  Clipboard,
  MapPin,
  Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PredictiveMaintenancePlanning = () => {
  const planningFeatures = [
    {
      step: '1',
      title: 'Smart Scheduling',
      description: 'Intelligent maintenance scheduling based on predictive insights and equipment condition data.',
      icon: Calendar,
      details: [
        'Predictive scheduling algorithms',
        'Resource optimization',
        'Priority-based planning',
        'Dynamic schedule updates'
      ]
    },
    {
      step: '2',
      title: 'Resource Optimization',
      description: 'Optimal allocation of maintenance resources including personnel, tools, and spare parts.',
      icon: Users,
      details: [
        'Workforce planning',
        'Tool allocation',
        'Spare parts management',
        'Skill matching'
      ]
    },
    {
      step: '3',
      title: 'Downtime Minimization',
      description: 'Strategic planning to minimize equipment downtime while ensuring optimal maintenance coverage.',
      icon: Clock,
      details: [
        'Downtime analysis',
        'Maintenance windows',
        'Production impact assessment',
        'Schedule optimization'
      ]
    },
    {
      step: '4',
      title: 'Cost Reduction',
      description: 'Data-driven cost optimization strategies that reduce maintenance expenses while maintaining reliability.',
      icon: TrendingUp,
      details: [
        'Cost analysis and tracking',
        'Budget optimization',
        'ROI calculations',
        'Expense forecasting'
      ]
    },
    {
      step: '5',
      title: 'Work Order Management',
      description: 'Comprehensive work order system that streamlines maintenance operations and tracks progress.',
      icon: Clipboard,
      details: [
        'Digital work orders',
        'Progress tracking',
        'Status updates',
        'Completion verification'
      ]
    },
    {
      step: '6',
      title: 'Inventory Planning',
      description: 'Intelligent inventory management that ensures availability of critical spare parts and materials.',
      icon: Package,
      details: [
        'Spare parts forecasting',
        'Inventory optimization',
        'Supplier management',
        'Stock level monitoring'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Intelligent planning reduces maintenance costs while ensuring optimal equipment performance.',
      metric: '25-40%'
    },
    {
      icon: Clock,
      title: 'Reduced Downtime',
      description: 'Strategic scheduling minimizes equipment downtime and maximizes operational efficiency.',
      metric: '50%'
    },
    {
      icon: Shield,
      title: 'Improved Reliability',
      description: 'Proactive planning ensures equipment reliability and prevents unexpected failures.',
      metric: '95%'
    },
    {
      icon: Database,
      title: 'Resource Efficiency',
      description: 'Optimal resource allocation maximizes maintenance team productivity and effectiveness.',
      metric: '30%'
    }
  ]

  const capabilities = [
    {
      icon: Calendar,
      title: 'Intelligent Scheduling',
      description: 'Advanced scheduling algorithms that optimize maintenance activities based on predictive insights.',
      features: [
        'Predictive scheduling models',
        'Resource constraint optimization',
        'Dynamic schedule updates',
        'Multi-objective optimization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Optimization',
      description: 'Comprehensive analytics suite that optimizes maintenance planning and resource allocation.',
      features: [
        'Performance analytics',
        'Cost optimization',
        'Trend analysis',
        'Predictive insights'
      ]
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Smart inventory management system that ensures availability of critical spare parts.',
      features: [
        'Demand forecasting',
        'Stock optimization',
        'Supplier integration',
        'Automated reordering'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line maintenance planning' },
    { name: 'Oil & Gas', icon: Zap, description: 'Critical asset maintenance scheduling' },
    { name: 'Power Generation', icon: Gauge, description: 'Power plant maintenance optimization' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft maintenance planning' },
    { name: 'Marine', icon: Package, description: 'Vessel maintenance scheduling' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment maintenance planning' }
  ]

  const technologies = [
    {
      icon: Calendar,
      title: 'Scheduling Algorithms',
      description: 'Advanced algorithms for optimal maintenance scheduling'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data analytics for maintenance planning optimization'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure for planning systems'
    },
    {
      icon: Database,
      title: 'Big Data',
      description: 'Large-scale data processing for maintenance insights'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Mobile applications for field maintenance planning'
    },
    {
      icon: Shield,
      title: 'Integration',
      description: 'Seamless integration with existing systems'
    }
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Package className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Intelligent Maintenance Planning</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Predictive Maintenance <span className="text-teal-green dark:text-electric-blue hero-text-accent">Planning</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Intelligent maintenance scheduling that optimizes resource allocation and minimizes downtime through predictive insights and data-driven planning strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              GET STARTED TODAY
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </section>

      {/* What is Predictive Maintenance Planning Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Predictive Maintenance Planning?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Predictive Maintenance Planning is an intelligent approach to maintenance scheduling that leverages predictive analytics, equipment condition data, and optimization algorithms to create optimal maintenance schedules. This strategy ensures that maintenance activities are performed at the right time with the right resources.
                </p>
                <p>
                  Our planning systems analyze historical data, current equipment condition, and predictive insights to optimize resource allocation, minimize downtime, and reduce maintenance costs. The system considers multiple factors including equipment criticality, resource availability, and operational constraints.
                </p>
                <p>
                  The result is a comprehensive maintenance planning solution that maximizes equipment reliability while minimizing costs and operational disruptions through intelligent scheduling and resource optimization.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Smart Scheduling</h3>
                    <p className="text-sm text-steel-gray">Intelligent planning algorithms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Resource Optimization</h3>
                    <p className="text-sm text-steel-gray">Optimal resource allocation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Downtime Minimization</h3>
                    <p className="text-sm text-steel-gray">Strategic scheduling</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Inventory Planning</h3>
                    <p className="text-sm text-steel-gray">Smart parts management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Planning Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive predictive maintenance planning capabilities for optimal resource management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="h-1 bg-gradient-to-r from-electric-blue to-teal-green"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center text-black dark:text-white text-xl font-bold">
                      {feature.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <p className="text-steel-gray dark:text-muted-foreground mb-6 flex-1">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 bg-electric-blue rounded-full group-hover/item:bg-teal-green transition-colors duration-200"></div>
                        <span className="text-sm text-foreground group-hover/item:text-electric-blue transition-colors duration-200">{detail}</span>
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Planning Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your maintenance operations with intelligent planning and optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-deep-navy" />
                </div>
                <div className="text-4xl font-sans font-black text-electric-blue mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-sans font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-steel-gray dark:text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Advanced technologies and methodologies powering our predictive maintenance planning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="h-1 bg-gradient-to-r from-electric-blue to-teal-green"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center">
                      <capability.icon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {capability.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <p className="text-steel-gray dark:text-muted-foreground mb-6 flex-1">
                    {capability.description}
                  </p>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 bg-electric-blue rounded-full group-hover/item:bg-teal-green transition-colors duration-200"></div>
                        <span className="text-sm text-foreground group-hover/item:text-electric-blue transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies that power our predictive maintenance planning systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="text-lg font-sans font-bold text-foreground mb-2">{tech.title}</h3>
                <p className="text-sm text-steel-gray dark:text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Predictive maintenance planning solutions across diverse industries and critical applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="text-lg font-sans font-bold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-steel-gray dark:text-muted-foreground">{industry.description}</p>
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
              <span className="text-sm font-medium text-white">Ready to Plan Intelligently?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Predictive Planning Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our intelligent planning systems help you optimize maintenance operations and maximize efficiency
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              GET STARTED TODAY
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              SCHEDULE DEMO
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PredictiveMaintenancePlanning
