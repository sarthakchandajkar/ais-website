'use client'

import React from 'react'
import { 
  Network, 
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
  Monitor,
  Shield,
  Eye,
  Layers,
  PieChart,
  LineChart,
  Smartphone,
  Cloud,
  Radio,
  Satellite,
  HardDrive,
  Lock,
  RefreshCw,
  Server,
  Workflow,
  GitBranch,
  Code,
  Terminal,
  Router,
  Bluetooth,
  Signal
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const IoTImplementationIntegration = () => {
  const implementationFeatures = [
    {
      step: '1',
      title: 'Sensor Network Deployment',
      description: 'Comprehensive deployment of IoT sensors and devices across industrial environments for real-time data collection.',
      icon: Radio,
      details: [
        'Industrial sensor installation',
        'Wireless sensor networks',
        'Environmental monitoring',
        'Asset tracking systems'
      ]
    },
    {
      step: '2',
      title: 'Device Connectivity Solutions',
      description: 'Advanced connectivity solutions that ensure seamless communication between IoT devices and central systems.',
      icon: Wifi,
      details: [
        'Wireless connectivity protocols',
        'Mesh network implementation',
        'Gateway configuration',
        'Protocol standardization'
      ]
    },
    {
      step: '3',
      title: 'Data Collection Systems',
      description: 'Robust data collection infrastructure that captures, processes, and transmits sensor data in real-time.',
      icon: Database,
      details: [
        'Real-time data streaming',
        'Data preprocessing',
        'Edge data processing',
        'Cloud data integration'
      ]
    },
    {
      step: '4',
      title: 'Edge Computing Integration',
      description: 'Local data processing capabilities that enable real-time decision making and reduced latency.',
      icon: Cpu,
      details: [
        'Edge device deployment',
        'Local data processing',
        'Real-time analytics',
        'Latency optimization'
      ]
    },
    {
      step: '5',
      title: 'Protocol Standardization',
      description: 'Implementation of industry-standard protocols to ensure interoperability and seamless integration.',
      icon: Settings,
      details: [
        'MQTT protocol implementation',
        'OPC-UA integration',
        'CoAP standardization',
        'RESTful API development'
      ]
    },
    {
      step: '6',
      title: 'Security Implementation',
      description: 'Comprehensive security measures to protect IoT networks and data from cyber threats.',
      icon: Shield,
      details: [
        'Device authentication',
        'Data encryption',
        'Network security',
        'Access control systems'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'Real-time monitoring and automation significantly improve operational efficiency and productivity.',
      metric: '40-60%'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Comprehensive security measures protect industrial systems and sensitive data from cyber threats.',
      metric: '99.9%'
    },
    {
      icon: Clock,
      title: 'Real-Time Insights',
      description: 'Instant access to operational data enables quick decision making and proactive management.',
      metric: '24/7'
    },
    {
      icon: Database,
      title: 'Data-Driven Decisions',
      description: 'Rich data analytics provide actionable insights for optimization and continuous improvement.',
      metric: '100%'
    }
  ]

  const capabilities = [
    {
      icon: Network,
      title: 'IoT Architecture Design',
      description: 'Comprehensive IoT architecture design that ensures scalability, reliability, and performance.',
      features: [
        'System architecture planning',
        'Scalability design',
        'Performance optimization',
        'Integration strategies'
      ]
    },
    {
      icon: Wifi,
      title: 'Connectivity Solutions',
      description: 'Advanced connectivity solutions that enable seamless communication across diverse IoT ecosystems.',
      features: [
        'Multi-protocol support',
        'Wireless mesh networks',
        'Gateway management',
        'Protocol conversion'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions that protect IoT networks and ensure regulatory compliance.',
      features: [
        'End-to-end encryption',
        'Device authentication',
        'Threat monitoring',
        'Compliance management'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Smart factory implementation and connected machinery' },
    { name: 'Oil & Gas', icon: Zap, description: 'Remote monitoring and asset management in harsh environments' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid monitoring and power plant optimization' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft systems monitoring and maintenance' },
    { name: 'Marine', icon: Package, description: 'Vessel tracking and maritime operations' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment monitoring and safety systems' }
  ]

  const technologies = [
    {
      icon: Wifi,
      title: 'Wireless Protocols',
      description: 'MQTT, CoAP, OPC-UA, and other industrial IoT protocols'
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'AWS IoT, Azure IoT, Google Cloud IoT for scalable solutions'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Local processing and real-time analytics capabilities'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Big data processing and machine learning integration'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security protocols and threat protection'
    },
    {
      icon: Network,
      title: '5G Networks',
      description: 'High-speed, low-latency connectivity for industrial applications'
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
              <Network className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Connected Industrial Solutions</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            IoT Implementation <span className="text-teal-green dark:text-electric-blue hero-text-accent">& Integration</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Comprehensive Internet of Things solutions that connect your industrial equipment and systems for real-time monitoring, control, and optimization.
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

      {/* What is IoT Implementation & Integration Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is IoT Implementation & Integration?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  IoT Implementation & Integration is the comprehensive process of deploying Internet of Things technologies across industrial environments to create connected, intelligent systems. This involves strategically placing sensors, establishing communication networks, and integrating data flows to enable real-time monitoring, control, and optimization of industrial operations.
                </p>
                <p>
                  Our solutions encompass everything from sensor network deployment and device connectivity to data collection systems and edge computing integration. We ensure seamless interoperability through protocol standardization and implement robust security measures to protect your industrial IoT infrastructure.
                </p>
                <p>
                  The result is a fully connected ecosystem that provides real-time insights, enables predictive maintenance, optimizes resource utilization, and drives operational excellence across your entire industrial operation.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Network className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Connected Systems</h3>
                    <p className="text-sm text-steel-gray">Seamless device integration</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Wireless Connectivity</h3>
                    <p className="text-sm text-steel-gray">Advanced communication protocols</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Edge Computing</h3>
                    <p className="text-sm text-steel-gray">Real-time data processing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Enterprise Security</h3>
                    <p className="text-sm text-steel-gray">Comprehensive protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Implementation Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IoT implementation capabilities for industrial environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationFeatures.map((feature, index) => (
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
              IoT Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your industrial operations with comprehensive IoT solutions
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
              Advanced technologies and methodologies powering our IoT implementation solutions
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
              Cutting-edge technologies that power our IoT implementation and integration solutions
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
              IoT implementation and integration solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Connect Your Industry?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement IoT Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our IoT experts help you create connected, intelligent industrial systems that drive efficiency and innovation
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

export default IoTImplementationIntegration
