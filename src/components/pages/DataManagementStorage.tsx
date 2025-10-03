'use client'

import React from 'react'
import { 
  Database, 
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
  Monitor,
  Wifi,
  Shield,
  Eye,
  Layers,
  PieChart,
  LineChart,
  Smartphone,
  Cloud,
  HardDrive,
  Archive,
  Lock,
  Server,
  Download,
  Upload
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const DataManagementStorage = () => {
  const storageFeatures = [
    {
      step: '1',
      title: 'Cloud Storage',
      description: 'Secure, scalable cloud-based storage solutions for large volumes of sensor and operational data.',
      icon: Cloud,
      details: [
        'Scalable cloud infrastructure',
        'Global data centers',
        'Automatic backups',
        'Disaster recovery'
      ]
    },
    {
      step: '2',
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect sensitive operational data and ensure compliance.',
      icon: Shield,
      details: [
        'End-to-end encryption',
        'Access control systems',
        'Audit logging',
        'Compliance standards'
      ]
    },
    {
      step: '3',
      title: 'Backup Systems',
      description: 'Comprehensive backup and recovery systems to ensure data integrity and availability.',
      icon: Archive,
      details: [
        'Automated backups',
        'Point-in-time recovery',
        'Cross-region replication',
        'Data validation'
      ]
    },
    {
      step: '4',
      title: 'Data Compression',
      description: 'Advanced compression algorithms to optimize storage efficiency and reduce costs.',
      icon: HardDrive,
      details: [
        'Lossless compression',
        'Real-time compression',
        'Storage optimization',
        'Bandwidth reduction'
      ]
    },
    {
      step: '5',
      title: 'API Integration',
      description: 'RESTful APIs and integration capabilities for seamless data access and system connectivity.',
      icon: Settings,
      details: [
        'RESTful API endpoints',
        'Real-time data streaming',
        'Third-party integrations',
        'Custom connectors'
      ]
    },
    {
      step: '6',
      title: 'Scalable Architecture',
      description: 'Flexible, scalable architecture that grows with your data requirements and business needs.',
      icon: Server,
      details: [
        'Horizontal scaling',
        'Load balancing',
        'Auto-scaling capabilities',
        'Performance optimization'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Unlimited Scalability',
      description: 'Cloud-based storage that scales automatically with your data growth and requirements.',
      metric: '99.9%'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security measures ensure your data is protected and compliant.',
      metric: '100%'
    },
    {
      icon: Clock,
      title: 'High Availability',
      description: 'Redundant systems and backup mechanisms ensure continuous data access and availability.',
      metric: '99.99%'
    },
    {
      icon: Database,
      title: 'Cost Optimization',
      description: 'Efficient storage solutions and compression reduce data management costs significantly.',
      metric: '40%'
    }
  ]

  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust cloud-based storage and processing infrastructure for enterprise applications.',
      features: [
        'Multi-cloud deployment',
        'Global data centers',
        'Edge computing support',
        'Hybrid cloud solutions'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security measures and compliance standards for data protection.',
      features: [
        'Data encryption',
        'Access controls',
        'Audit trails',
        'Regulatory compliance'
      ]
    },
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Flexible architecture that adapts to changing data requirements and business needs.',
      features: [
        'Auto-scaling',
        'Load balancing',
        'Performance monitoring',
        'Resource optimization'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production data management and analytics' },
    { name: 'Oil & Gas', icon: Zap, description: 'Critical data storage for remote operations' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid data management and monitoring' },
    { name: 'Aviation', icon: Globe, description: 'Flight data storage and analysis' },
    { name: 'Marine', icon: Package, description: 'Maritime data management systems' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment data storage' }
  ]

  const technologies = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure for data storage and processing'
    },
    {
      icon: Database,
      title: 'Big Data',
      description: 'Advanced databases for handling large volumes of data'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security for data protection'
    },
    {
      icon: Server,
      title: 'Microservices',
      description: 'Modular architecture for scalable data management'
    },
    {
      icon: Archive,
      title: 'Data Lakes',
      description: 'Centralized repositories for structured and unstructured data'
    },
    {
      icon: Lock,
      title: 'Encryption',
      description: 'Advanced encryption for data security and privacy'
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
              <Database className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Enterprise Data Solutions</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Data Management <span className="text-teal-green dark:text-electric-blue hero-text-accent">& Storage</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Secure cloud-based data storage and management systems that handle large volumes of sensor data with high reliability, accessibility, and enterprise-grade security.
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

      {/* What is Data Management & Storage Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Data Management & Storage?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Data Management & Storage is a comprehensive solution that provides secure, scalable, and reliable storage infrastructure for large volumes of sensor data, operational metrics, and historical records. Our cloud-based systems ensure data integrity, availability, and accessibility while maintaining enterprise-grade security standards.
                </p>
                <p>
                  The system features advanced compression algorithms, automated backup mechanisms, and robust API integration capabilities that enable seamless data access and system connectivity. This ensures that your critical operational data is always available when needed while optimizing storage costs and performance.
                </p>
                <p>
                  Our scalable architecture adapts to your growing data requirements, providing unlimited storage capacity and processing power to support your predictive maintenance and analytics initiatives.
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
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Cloud Storage</h3>
                    <p className="text-sm text-steel-gray">Scalable infrastructure</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Data Security</h3>
                    <p className="text-sm text-steel-gray">Enterprise-grade protection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Archive className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Backup Systems</h3>
                    <p className="text-sm text-steel-gray">Automated data protection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Server className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Scalable Architecture</h3>
                    <p className="text-sm text-steel-gray">Unlimited growth capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Storage Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data management and storage capabilities for enterprise applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {storageFeatures.map((feature, index) => (
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
              Storage Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your data management with enterprise-grade storage solutions
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
              Advanced technologies and methodologies powering our data management solutions
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
              Cutting-edge technologies that power our data management and storage solutions
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
              Data management and storage solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Manage Your Data?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Data Management Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our enterprise-grade storage solutions help you manage, secure, and optimize your operational data
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

export default DataManagementStorage
