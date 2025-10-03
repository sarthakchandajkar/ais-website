'use client'

import React from 'react'
import { 
  Monitor, 
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
  Package,
  UserCheck,
  Zap,
  Gauge,
  Database,
  Wifi,
  Shield,
  Eye,
  Layers,
  PieChart,
  LineChart,
  Smartphone,
  Cloud,
  Bell,
  Radio,
  Satellite,
  Camera,
  Mic,
  Thermometer,
  GaugeCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const RealTimeMonitoring = () => {
  const monitoringFeatures = [
    {
      step: '1',
      title: 'Live Dashboards',
      description: 'Real-time visualization of equipment status, performance metrics, and health indicators.',
      icon: Monitor,
      details: [
        'Customizable dashboard views',
        'Real-time data visualization',
        'Interactive charts and graphs',
        'Multi-device compatibility'
      ]
    },
    {
      step: '2',
      title: 'Instant Alerts',
      description: 'Immediate notification system that alerts maintenance teams when anomalies are detected.',
      icon: Bell,
      details: [
        'Multi-channel notifications',
        'Priority-based alerting',
        'Escalation protocols',
        'Custom alert thresholds'
      ]
    },
    {
      step: '3',
      title: 'Status Monitoring',
      description: 'Continuous tracking of equipment operational status and performance parameters.',
      icon: Activity,
      details: [
        'Equipment status tracking',
        'Performance parameter monitoring',
        'Health score calculation',
        'Trend analysis'
      ]
    },
    {
      step: '4',
      title: 'Performance Tracking',
      description: 'Comprehensive monitoring of equipment efficiency, output, and operational metrics.',
      icon: TrendingUp,
      details: [
        'Efficiency monitoring',
        'Output tracking',
        'Performance benchmarking',
        'KPI visualization'
      ]
    },
    {
      step: '5',
      title: 'Remote Access',
      description: 'Secure remote monitoring capabilities for off-site equipment management and control.',
      icon: Wifi,
      details: [
        'Secure remote connections',
        'Mobile app access',
        'Cloud-based monitoring',
        'VPN integration'
      ]
    },
    {
      step: '6',
      title: 'Mobile Notifications',
      description: 'Push notifications and mobile alerts for immediate response to critical issues.',
      icon: Smartphone,
      details: [
        'Push notifications',
        'SMS alerts',
        'Email notifications',
        'Mobile app integration'
      ]
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous equipment monitoring ensures immediate detection of issues and anomalies.',
      metric: '24/7'
    },
    {
      icon: Shield,
      title: 'Rapid Response',
      description: 'Instant alerts enable quick response to critical issues, minimizing downtime.',
      metric: '90%'
    },
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description: 'Real-time insights help optimize equipment performance and operational efficiency.',
      metric: '25%'
    },
    {
      icon: Database,
      title: 'Data-Driven Decisions',
      description: 'Continuous data collection enables informed decision-making and process optimization.',
      metric: '100%'
    }
  ]

  const capabilities = [
    {
      icon: Monitor,
      title: 'Live Dashboards',
      description: 'Comprehensive real-time visualization tools for equipment monitoring and analysis.',
      features: [
        'Customizable dashboard layouts',
        'Real-time data streaming',
        'Interactive visualizations',
        'Multi-screen support'
      ]
    },
    {
      icon: Bell,
      title: 'Alert Systems',
      description: 'Advanced notification systems that ensure critical issues are addressed immediately.',
      features: [
        'Smart alert filtering',
        'Priority-based routing',
        'Escalation management',
        'Alert history tracking'
      ]
    },
    {
      icon: Wifi,
      title: 'Remote Monitoring',
      description: 'Secure remote access capabilities for monitoring equipment from anywhere.',
      features: [
        'Secure remote connections',
        'Mobile accessibility',
        'Cloud integration',
        'Multi-location support'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line monitoring and optimization' },
    { name: 'Oil & Gas', icon: Zap, description: 'Critical asset monitoring in remote locations' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid monitoring and power plant operations' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft systems monitoring and maintenance' },
    { name: 'Marine', icon: Package, description: 'Vessel monitoring and maritime operations' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment monitoring in harsh environments' }
  ]

  const technologies = [
    {
      icon: Wifi,
      title: 'IoT Sensors',
      description: 'Advanced sensor networks for comprehensive equipment monitoring'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure for real-time data processing'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native mobile applications for on-the-go monitoring'
    },
    {
      icon: Database,
      title: 'Real-time Databases',
      description: 'High-performance databases for instant data access'
    },
    {
      icon: Radio,
      title: 'Wireless Communication',
      description: 'Reliable wireless communication protocols'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security for monitoring systems'
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
              <Monitor className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">24/7 Real-Time Intelligence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Real-Time <span className="text-teal-green dark:text-electric-blue hero-text-accent">Monitoring</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Comprehensive 24/7 monitoring systems that track equipment performance and immediately alert maintenance teams when anomalies are detected, ensuring optimal operational efficiency.
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

      {/* What is Real-Time Monitoring Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Real-Time Monitoring?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Real-Time Monitoring is a comprehensive system that continuously tracks equipment performance, operational parameters, and health indicators 24/7. This advanced monitoring solution provides instant visibility into equipment status and immediately alerts maintenance teams when anomalies or potential issues are detected.
                </p>
                <p>
                  Our monitoring systems utilize IoT sensors, wireless communication networks, and cloud-based analytics to provide real-time insights into equipment behavior. This enables proactive maintenance strategies and ensures optimal equipment performance while minimizing unplanned downtime.
                </p>
                <p>
                  The system features customizable dashboards, mobile accessibility, and intelligent alerting capabilities that keep maintenance teams informed and ready to respond to any equipment issues immediately.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Live Dashboards</h3>
                    <p className="text-sm text-steel-gray">Real-time visualization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Bell className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Instant Alerts</h3>
                    <p className="text-sm text-steel-gray">Immediate notifications</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Remote Access</h3>
                    <p className="text-sm text-steel-gray">Monitor from anywhere</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Mobile Ready</h3>
                    <p className="text-sm text-steel-gray">Mobile app support</p>
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
              Comprehensive suite of real-time monitoring capabilities for optimal equipment management
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
              Transform your maintenance operations with comprehensive real-time monitoring capabilities
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
              Advanced technologies and methodologies powering our real-time monitoring solutions
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
              Cutting-edge technologies that power our real-time monitoring systems
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
              Real-time monitoring solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Monitor in Real-Time?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Real-Time Monitoring Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our advanced monitoring systems help you track equipment performance and respond to issues immediately
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

export default RealTimeMonitoring
