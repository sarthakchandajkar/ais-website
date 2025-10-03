'use client'

import React from 'react'
import { 
  BarChart3, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Settings,
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
  Layers as Stack,
  Database as DataBase,
  TrendingDown,
  Filter,
  Search,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Layers as DataLayers
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const BigDataAnalyticsPlatform = () => {
  const platformFeatures = [
    {
      step: '1',
      title: 'Data Ingestion & Collection',
      description: 'Comprehensive data collection from multiple sources including sensors, databases, APIs, and real-time streams.',
      icon: Upload,
      details: [
        'Real-time data streaming',
        'Batch data processing',
        'API integration',
        'Sensor data collection'
      ]
    },
    {
      step: '2',
      title: 'Data Processing & ETL',
      description: 'Advanced Extract, Transform, Load (ETL) processes that clean, validate, and prepare data for analysis.',
      icon: Workflow,
      details: [
        'Data transformation',
        'Data validation',
        'Data cleansing',
        'Format standardization'
      ]
    },
    {
      step: '3',
      title: 'Data Storage & Management',
      description: 'Scalable data storage solutions including data lakes, data warehouses, and distributed file systems.',
      icon: Database,
      details: [
        'Data lake architecture',
        'Data warehouse design',
        'Distributed storage',
        'Data governance'
      ]
    },
    {
      step: '4',
      title: 'Real-time Analytics',
      description: 'Streaming analytics capabilities that process and analyze data in real-time for immediate insights.',
      icon: Activity,
      details: [
        'Stream processing',
        'Real-time dashboards',
        'Live monitoring',
        'Instant alerts'
      ]
    },
    {
      step: '5',
      title: 'Machine Learning Integration',
      description: 'Built-in machine learning capabilities that enable predictive analytics and automated insights.',
      icon: Brain,
      details: [
        'Predictive modeling',
        'Anomaly detection',
        'Pattern recognition',
        'Automated insights'
      ]
    },
    {
      step: '6',
      title: 'Data Visualization & BI',
      description: 'Interactive dashboards and business intelligence tools that transform data into actionable insights.',
      icon: BarChart3,
      details: [
        'Interactive dashboards',
        'Custom reports',
        'Data visualization',
        'Self-service analytics'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Transform raw data into actionable insights that drive strategic business decisions.',
      metric: '95%'
    },
    {
      icon: Clock,
      title: 'Real-Time Processing',
      description: 'Process and analyze data in real-time for immediate insights and rapid response.',
      metric: '24/7'
    },
    {
      icon: Database,
      title: 'Scalable Processing',
      description: 'Handle massive datasets with distributed processing and cloud scalability.',
      metric: 'PB+'
    },
    {
      icon: Shield,
      title: 'Data Quality',
      description: 'Ensure data accuracy and reliability through advanced validation and cleansing.',
      metric: '99.9%'
    }
  ]

  const capabilities = [
    {
      icon: Database,
      title: 'Data Lake Architecture',
      description: 'Centralized repositories that store structured and unstructured data for comprehensive analytics.',
      features: [
        'Multi-format data storage',
        'Schema-on-read flexibility',
        'Data cataloging',
        'Metadata management'
      ]
    },
    {
      icon: Activity,
      title: 'Stream Processing',
      description: 'Real-time data processing engines that handle continuous data streams and provide instant insights.',
      features: [
        'Apache Kafka integration',
        'Real-time analytics',
        'Event-driven processing',
        'Low-latency processing'
      ]
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Sophisticated analytics tools that perform complex statistical analysis and machine learning.',
      features: [
        'Statistical analysis',
        'Predictive modeling',
        'Time series analysis',
        'Clustering algorithms'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production optimization and quality control analytics' },
    { name: 'Oil & Gas', icon: Zap, description: 'Reservoir analysis and equipment monitoring' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid optimization and energy forecasting' },
    { name: 'Aviation', icon: Globe, description: 'Flight operations and passenger analytics' },
    { name: 'Marine', icon: Package, description: 'Fleet tracking and maritime analytics' },
    { name: 'Mining', icon: Wrench, description: 'Equipment performance and safety analytics' }
  ]

  const technologies = [
    {
      icon: Database,
      title: 'Apache Spark',
      description: 'Distributed processing engine for big data analytics'
    },
    {
      icon: Database,
      title: 'Hadoop',
      description: 'Distributed storage and processing framework'
    },
    {
      icon: Activity,
      title: 'Kafka',
      description: 'Real-time data streaming platform'
    },
    {
      icon: BarChart3,
      title: 'Tableau',
      description: 'Data visualization and business intelligence'
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'AWS, Azure, and Google Cloud analytics services'
    },
    {
      icon: Brain,
      title: 'ML Libraries',
      description: 'TensorFlow, PyTorch, and scikit-learn integration'
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
              <BarChart3 className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Data Intelligence Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Big Data Analytics <span className="text-teal-green dark:text-electric-blue hero-text-accent">Platform</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Comprehensive data analytics solutions that process large volumes of industrial data to extract actionable insights, enable predictive analytics, and drive data-driven decision making.
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

      {/* What is Big Data Analytics Platform Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is a Big Data Analytics Platform?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  A Big Data Analytics Platform is a comprehensive solution that enables organizations to collect, store, process, and analyze massive volumes of structured and unstructured data from multiple sources. It provides the infrastructure and tools needed to transform raw data into actionable business insights.
                </p>
                <p>
                  Our platform integrates advanced data processing technologies, machine learning capabilities, and intuitive visualization tools to help organizations make data-driven decisions. It handles everything from real-time data streaming to complex predictive analytics, enabling businesses to uncover patterns, trends, and opportunities hidden in their data.
                </p>
                <p>
                  With scalable architecture and cloud-native design, our platform grows with your data needs while maintaining high performance, security, and reliability across all industrial applications and use cases.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Data Processing</h3>
                    <p className="text-sm text-steel-gray">Advanced ETL capabilities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Real-time Analytics</h3>
                    <p className="text-sm text-steel-gray">Stream processing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Machine Learning</h3>
                    <p className="text-sm text-steel-gray">Predictive analytics</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Visualization</h3>
                    <p className="text-sm text-steel-gray">Interactive dashboards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive big data analytics capabilities for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
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
              Analytics Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your data into competitive advantage with advanced analytics capabilities
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
              Advanced data processing and analytics technologies powering our platform
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
              Leading big data technologies and analytics tools powering our platform
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
              Big data analytics solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Unlock Your Data?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Big Data Analytics Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our data experts help you build a comprehensive analytics platform that transforms your data into actionable business insights
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

export default BigDataAnalyticsPlatform
