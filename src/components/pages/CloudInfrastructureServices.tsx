'use client'

import React from 'react'
import { 
  Cloud, 
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
  Signal,
  Brain,
  Microscope,
  Camera,
  MessageSquare,
  Cpu as Processor,
  Upload,
  Download,
  Archive,
  Network,
  Layers as Stack
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const CloudInfrastructureServices = () => {
  const serviceFeatures = [
    {
      step: '1',
      title: 'Cloud Migration Services',
      description: 'Comprehensive migration services that seamlessly move your applications and data to the cloud with minimal downtime.',
      icon: Upload,
      details: [
        'Application migration',
        'Data migration',
        'Legacy system modernization',
        'Zero-downtime migration'
      ]
    },
    {
      step: '2',
      title: 'Hybrid Cloud Solutions',
      description: 'Flexible hybrid cloud architectures that combine on-premises and cloud resources for optimal performance and security.',
      icon: Network,
      details: [
        'Hybrid architecture design',
        'Multi-cloud management',
        'Data synchronization',
        'Seamless integration'
      ]
    },
    {
      step: '3',
      title: 'Data Lake Implementation',
      description: 'Centralized data repositories that store structured and unstructured data for advanced analytics and insights.',
      icon: Database,
      details: [
        'Data lake architecture',
        'Data ingestion pipelines',
        'Data governance',
        'Analytics integration'
      ]
    },
    {
      step: '4',
      title: 'Serverless Architecture',
      description: 'Event-driven serverless solutions that automatically scale based on demand without server management overhead.',
      icon: Zap,
      details: [
        'Function-as-a-Service',
        'Event-driven processing',
        'Auto-scaling capabilities',
        'Cost optimization'
      ]
    },
    {
      step: '5',
      title: 'Auto-scaling Systems',
      description: 'Intelligent scaling solutions that automatically adjust resources based on real-time demand and performance metrics.',
      icon: Activity,
      details: [
        'Dynamic resource allocation',
        'Performance monitoring',
        'Predictive scaling',
        'Cost optimization'
      ]
    },
    {
      step: '6',
      title: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery solutions that ensure business continuity and data protection in any scenario.',
      icon: Shield,
      details: [
        'Backup and recovery',
        'Business continuity planning',
        'Data replication',
        'RTO/RPO optimization'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Cloud infrastructure automatically scales to meet changing demands without manual intervention.',
      metric: '99.9%'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Enterprise-grade infrastructure ensures high availability and business continuity.',
      metric: '99.99%'
    },
    {
      icon: Clock,
      title: 'Cost Efficiency',
      description: 'Pay-as-you-use model reduces infrastructure costs and optimizes resource utilization.',
      metric: '40-60%'
    },
    {
      icon: Database,
      title: 'Global Access',
      description: 'Worldwide data centers provide low-latency access to applications and data.',
      metric: '24/7'
    }
  ]

  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloud Architecture Design',
      description: 'Comprehensive cloud architecture design that ensures scalability, security, and performance.',
      features: [
        'Multi-cloud strategies',
        'Hybrid cloud design',
        'Security architecture',
        'Performance optimization'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete infrastructure management services including monitoring, maintenance, and optimization.',
      features: [
        'Infrastructure monitoring',
        'Performance tuning',
        'Capacity planning',
        'Cost optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions that protect cloud infrastructure and ensure regulatory compliance.',
      features: [
        'Data encryption',
        'Access controls',
        'Compliance management',
        'Threat protection'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Smart manufacturing and production optimization' },
    { name: 'Oil & Gas', icon: Zap, description: 'Remote operations and data management' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid management and energy optimization' },
    { name: 'Aviation', icon: Globe, description: 'Flight operations and passenger services' },
    { name: 'Marine', icon: Package, description: 'Fleet management and maritime operations' },
    { name: 'Mining', icon: Wrench, description: 'Equipment monitoring and safety systems' }
  ]

  const technologies = [
    {
      icon: Cloud,
      title: 'AWS',
      description: 'Amazon Web Services cloud platform and services'
    },
    {
      icon: Cloud,
      title: 'Azure',
      description: 'Microsoft Azure cloud computing platform'
    },
    {
      icon: Cloud,
      title: 'Google Cloud',
      description: 'Google Cloud Platform infrastructure services'
    },
    {
      icon: Database,
      title: 'Data Lakes',
      description: 'Centralized data storage and analytics platforms'
    },
    {
      icon: Zap,
      title: 'Serverless',
      description: 'Function-as-a-Service and event-driven computing'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Cloud security and compliance solutions'
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
              <Cloud className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Scalable Cloud Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Cloud Infrastructure <span className="text-teal-green dark:text-electric-blue hero-text-accent">& Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Scalable cloud-based solutions for data storage, processing, and management with enterprise-grade security, reliability, and global accessibility.
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

      {/* What are Cloud Infrastructure & Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What are Cloud Infrastructure & Services?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Cloud Infrastructure & Services encompass the complete suite of cloud computing resources, platforms, and services that enable organizations to build, deploy, and manage applications and data in the cloud. This includes servers, storage, networking, databases, and software delivered over the internet.
                </p>
                <p>
                  Our solutions provide scalable, secure, and reliable cloud infrastructure that automatically adapts to your business needs. From cloud migration and hybrid cloud architectures to data lakes and serverless computing, we deliver comprehensive cloud services that drive digital transformation.
                </p>
                <p>
                  With enterprise-grade security, global data centers, and 24/7 support, our cloud infrastructure ensures your applications and data are always available, secure, and performing optimally across all environments.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Scalable Infrastructure</h3>
                    <p className="text-sm text-steel-gray">Auto-scaling capabilities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Enterprise Security</h3>
                    <p className="text-sm text-steel-gray">Advanced protection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Data Management</h3>
                    <p className="text-sm text-steel-gray">Centralized storage</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Global Access</h3>
                    <p className="text-sm text-steel-gray">Worldwide availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Service Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cloud infrastructure and services for modern industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
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
              Cloud Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your operations with scalable and reliable cloud infrastructure
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
              Advanced cloud technologies and methodologies powering our infrastructure solutions
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
              Leading cloud platforms and technologies powering our infrastructure solutions
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
              Cloud infrastructure and services across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Scale in the Cloud?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Cloud Infrastructure Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our cloud experts help you build scalable, secure, and reliable infrastructure that grows with your business
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

export default CloudInfrastructureServices
