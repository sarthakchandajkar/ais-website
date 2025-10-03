'use client'

import React from 'react'
import { 
  TestTube, 
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
  Package,
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
  Thermometer,
  GaugeCircle,
  Mic,
  Camera,
  Radio,
  Brain
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ConditionBasedMonitoring = () => {
  const monitoringFeatures = [
    {
      step: '1',
      title: 'Multi-Parameter Analysis',
      description: 'Comprehensive monitoring of multiple equipment parameters to assess overall health and performance.',
      icon: BarChart3,
      details: [
        'Vibration analysis',
        'Temperature monitoring',
        'Pressure measurements',
        'Acoustic analysis'
      ]
    },
    {
      step: '2',
      title: 'Condition Assessment',
      description: 'Advanced algorithms that evaluate equipment condition based on multiple data points and trends.',
      icon: Eye,
      details: [
        'Health scoring algorithms',
        'Degradation analysis',
        'Performance benchmarking',
        'Trend identification'
      ]
    },
    {
      step: '3',
      title: 'Health Scoring',
      description: 'Quantitative health scores that provide clear indicators of equipment condition and remaining useful life.',
      icon: Gauge,
      details: [
        'Numerical health scores',
        'Risk level indicators',
        'Performance metrics',
        'Predictive indicators'
      ]
    },
    {
      step: '4',
      title: 'Maintenance Scheduling',
      description: 'Intelligent scheduling based on actual equipment condition rather than time-based intervals.',
      icon: Clock,
      details: [
        'Condition-based scheduling',
        'Priority-based planning',
        'Resource optimization',
        'Work order management'
      ]
    },
    {
      step: '5',
      title: 'Performance Optimization',
      description: 'Continuous optimization of equipment performance through real-time monitoring and adjustment.',
      icon: TrendingUp,
      details: [
        'Performance tuning',
        'Efficiency optimization',
        'Parameter adjustment',
        'Process improvement'
      ]
    },
    {
      step: '6',
      title: 'Life Extension',
      description: 'Proactive strategies to extend equipment life through optimal maintenance and operation.',
      icon: Shield,
      details: [
        'Life extension strategies',
        'Preventive measures',
        'Optimal operation guidance',
        'Maintenance optimization'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Extended Equipment Life',
      description: 'Proactive maintenance strategies extend equipment lifespan and optimize performance.',
      metric: '30-50%'
    },
    {
      icon: Shield,
      title: 'Reduced Failures',
      description: 'Early detection of issues prevents catastrophic failures and unplanned downtime.',
      metric: '70%'
    },
    {
      icon: Clock,
      title: 'Optimized Maintenance',
      description: 'Condition-based scheduling reduces unnecessary maintenance while ensuring reliability.',
      metric: '25-35%'
    },
    {
      icon: Database,
      title: 'Data-Driven Decisions',
      description: 'Comprehensive monitoring data enables informed maintenance and operational decisions.',
      metric: '100%'
    }
  ]

  const capabilities = [
    {
      icon: TestTube,
      title: 'Advanced Monitoring',
      description: 'Sophisticated monitoring techniques that assess equipment condition through multiple parameters.',
      features: [
        'Multi-sensor integration',
        'Real-time data analysis',
        'Pattern recognition',
        'Anomaly detection'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics suite that transforms monitoring data into actionable insights.',
      features: [
        'Trend analysis',
        'Performance reporting',
        'Health dashboards',
        'Predictive insights'
      ]
    },
    {
      icon: Settings,
      title: 'Automated Systems',
      description: 'Intelligent automation that optimizes maintenance schedules and operational parameters.',
      features: [
        'Automated scheduling',
        'Smart alerts',
        'Self-optimization',
        'Predictive maintenance'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line condition monitoring' },
    { name: 'Oil & Gas', icon: Zap, description: 'Critical asset health monitoring' },
    { name: 'Power Generation', icon: Gauge, description: 'Power plant equipment monitoring' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft system condition assessment' },
    { name: 'Marine', icon: Package, description: 'Vessel equipment monitoring' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment condition tracking' }
  ]

  const technologies = [
    {
      icon: TestTube,
      title: 'Sensor Technology',
      description: 'Advanced sensors for comprehensive equipment monitoring'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI algorithms for condition assessment and prediction'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Advanced analytics for condition-based insights'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure for data processing'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Internet of Things for connected monitoring'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Secure monitoring and data protection'
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
              <TestTube className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Advanced Condition Intelligence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Condition-Based <span className="text-teal-green dark:text-electric-blue hero-text-accent">Monitoring</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Advanced monitoring techniques that assess equipment condition through multiple parameters to determine optimal maintenance timing and extend equipment life.
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

      {/* What is Condition-Based Monitoring Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Condition-Based Monitoring?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Condition-Based Monitoring (CBM) is an advanced maintenance strategy that continuously monitors equipment condition through multiple parameters to determine the optimal timing for maintenance activities. Unlike traditional time-based maintenance, CBM focuses on actual equipment health rather than predetermined schedules.
                </p>
                <p>
                  Our CBM systems utilize advanced sensors, data analytics, and machine learning algorithms to assess equipment condition in real-time. This enables maintenance teams to make data-driven decisions about when maintenance is truly needed, optimizing both performance and costs.
                </p>
                <p>
                  The system provides quantitative health scores, predictive insights, and automated scheduling recommendations that help extend equipment life while ensuring optimal performance and reliability.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TestTube className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Multi-Parameter</h3>
                    <p className="text-sm text-steel-gray">Comprehensive monitoring</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Gauge className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Health Scoring</h3>
                    <p className="text-sm text-steel-gray">Quantitative assessment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Smart Scheduling</h3>
                    <p className="text-sm text-steel-gray">Condition-based timing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Life Extension</h3>
                    <p className="text-sm text-steel-gray">Optimized maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Monitoring Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive condition-based monitoring capabilities for optimal equipment management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monitoringFeatures.map((feature, index) => (
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
              Monitoring Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your maintenance operations with condition-based monitoring capabilities
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
              Advanced technologies and methodologies powering our condition-based monitoring solutions
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
              Cutting-edge technologies that power our condition-based monitoring systems
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
              Condition-based monitoring solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Monitor Conditions?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Condition-Based Monitoring Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our advanced monitoring systems help you optimize equipment performance and extend asset life
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

export default ConditionBasedMonitoring
