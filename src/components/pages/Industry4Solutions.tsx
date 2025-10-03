'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Factory, 
  Target, 
  Zap, 
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
  Database,
  LineChart,
  Shield,
  Gauge,
  Monitor,
  Smartphone,
  Cloud,
  Network,
  Layers,
  Bot,
  Wifi,
  HardDrive,
  Lock,
  RefreshCw,
  Smartphone as Mobile,
  Server,
  Workflow,
  GitBranch,
  Code,
  Terminal
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Industry4Solutions = () => {
  const services = [
    {
      icon: Network,
      title: 'IoT Implementation & Integration',
      description: 'Comprehensive Internet of Things solutions that connect your industrial equipment and systems for real-time monitoring and control.',
      features: [
        'Sensor Network Deployment',
        'Device Connectivity Solutions',
        'Data Collection Systems',
        'Edge Computing Integration',
        'Protocol Standardization',
        'Security Implementation'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue',
      path: '/iot-implementation-integration'
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning Solutions',
      description: 'Advanced artificial intelligence and machine learning implementations to automate processes and optimize industrial operations.',
      features: [
        'Predictive Analytics',
        'Computer Vision Systems',
        'Natural Language Processing',
        'Automated Decision Making',
        'Pattern Recognition',
        'Intelligent Automation'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green',
      path: '/ai-machine-learning-solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Services',
      description: 'Scalable cloud-based solutions for data storage, processing, and management with enterprise-grade security and reliability.',
      features: [
        'Cloud Migration Services',
        'Hybrid Cloud Solutions',
        'Data Lake Implementation',
        'Serverless Architecture',
        'Auto-scaling Systems',
        'Disaster Recovery'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber',
      path: '/cloud-infrastructure-services'
    },
    {
      icon: BarChart3,
      title: 'Big Data Analytics Platform',
      description: 'Comprehensive data analytics solutions that process large volumes of industrial data to extract actionable insights.',
      features: [
        'Real-time Data Processing',
        'Data Visualization',
        'Statistical Analysis',
        'Trend Identification',
        'Performance Metrics',
        'Custom Dashboards'
      ],
      gradient: 'from-info to-electric-blue',
      accent: 'info',
      path: '/big-data-analytics-platform'
    },
    {
      icon: Layers,
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical assets and processes that enable simulation, optimization, and predictive maintenance.',
      features: [
        '3D Asset Modeling',
        'Real-time Synchronization',
        'Simulation Capabilities',
        'Performance Optimization',
        'Predictive Modeling',
        'Virtual Testing'
      ],
      gradient: 'from-teal-green to-amber',
      accent: 'teal-green',
      path: '/digital-twin-technology'
    },
    {
      icon: Workflow,
      title: 'Process Automation & RPA',
      description: 'Robotic Process Automation and intelligent workflow solutions to streamline operations and reduce manual intervention.',
      features: [
        'Workflow Automation',
        'RPA Implementation',
        'Process Optimization',
        'Task Scheduling',
        'Exception Handling',
        'Performance Monitoring'
      ],
      gradient: 'from-amber to-info',
      accent: 'amber',
      path: '/process-automation-rpa'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity measures to protect industrial systems and data from cyber threats and vulnerabilities.',
      features: [
        'Network Security',
        'Data Encryption',
        'Access Control Systems',
        'Threat Detection',
        'Incident Response',
        'Compliance Management'
      ],
      gradient: 'from-info to-teal-green',
      accent: 'info'
    },
    {
      icon: Mobile,
      title: 'Mobile & Web Applications',
      description: 'Custom mobile and web applications that provide real-time access to industrial data and control systems.',
      features: [
        'Cross-platform Development',
        'Real-time Dashboards',
        'Mobile Responsiveness',
        'Offline Capabilities',
        'Push Notifications',
        'User Management'
      ],
      gradient: 'from-warning to-electric-blue',
      accent: 'warning'
    },
    {
      icon: Server,
      title: 'System Integration & APIs',
      description: 'Seamless integration of disparate systems through APIs and middleware solutions for unified data flow.',
      features: [
        'API Development',
        'System Integration',
        'Data Synchronization',
        'Middleware Solutions',
        'Legacy System Migration',
        'Interoperability'
      ],
      gradient: 'from-electric-blue to-warning',
      accent: 'electric-blue'
    }
  ]

  const methodologies = [
    {
      icon: Code,
      title: 'Agile Development',
      description: 'Iterative development approach that ensures rapid delivery and continuous improvement of digital solutions.'
    },
    {
      icon: GitBranch,
      title: 'DevOps Integration',
      description: 'Seamless integration of development and operations for faster deployment and better system reliability.'
    },
    {
      icon: Terminal,
      title: 'Microservices Architecture',
      description: 'Scalable and maintainable system architecture using microservices for better performance and flexibility.'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Integration',
      description: 'Automated testing and deployment processes that ensure code quality and system stability.'
    }
  ]

  const technologies = [
    { name: 'Industrial IoT', description: 'Connected sensors and devices for real-time monitoring and control' },
    { name: 'Artificial Intelligence', description: 'Machine learning algorithms for intelligent automation and decision making' },
    { name: 'Cloud Computing', description: 'Scalable cloud infrastructure for data processing and storage' },
    { name: 'Big Data Analytics', description: 'Advanced analytics for processing and analyzing large industrial datasets' },
    { name: 'Digital Twins', description: 'Virtual replicas of physical assets for simulation and optimization' },
    { name: 'Blockchain', description: 'Secure and transparent data management and transaction processing' },
    { name: 'Edge Computing', description: 'Local data processing for real-time decision making and reduced latency' },
    { name: '5G Networks', description: 'High-speed, low-latency connectivity for industrial applications' }
  ]

  const stats = [
    { number: '60%', label: 'Operational Efficiency Improvement', icon: TrendingUp },
    { number: '45%', label: 'Cost Reduction Achieved', icon: Award },
    { number: '85%', label: 'Process Automation Rate', icon: Shield },
    { number: '99.9%', label: 'System Uptime Guarantee', icon: Users }
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
                  <span className="text-sm font-medium text-white">Industry 4.0 Excellence</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Industry 4.0 Solutions</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Transform your industrial operations with cutting-edge digital technologies, smart manufacturing solutions, and intelligent automation systems
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-4 h-4 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
                  Get Consultation
                </button>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                <iframe
                  src="https://www.youtube.com/embed/H5_kV_xpJaU?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0&loop=1&playlist=H5_kV_xpJaU&start=0&end=300&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0&enablejsapi=1"
                  title="Industry 4.0 Solutions Overview"
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

      {/* Core Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Core Solutions
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Industry 4.0 solutions that drive digital transformation and operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="space-y-3 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-${service.accent} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-deep-navy" />
                        </div>
                        <span className="text-foreground group-hover/item:text-electric-blue transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    {service.path ? (
                      <Link href={service.path}>
                        <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    )}
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
              Our Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Proven development approaches and best practices for Industry 4.0 implementation
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

      {/* Technologies & Standards Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8">
                Technologies & Standards
              </h2>
              <p className="text-lg text-steel-gray dark:text-muted-foreground leading-relaxed mb-8">
                Our Industry 4.0 solutions leverage cutting-edge technologies and adhere to international standards for optimal performance and interoperability.
              </p>
              <div className="space-y-4">
                {technologies.map((technology, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg group hover:bg-electric-blue/10 transition-colors duration-200">
                    <div className="w-2 h-2 bg-electric-blue rounded-full group-hover:bg-teal-green transition-colors duration-200 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-200">{technology.name}</h4>
                      <p className="text-steel-gray dark:text-muted-foreground text-sm">{technology.description}</p>
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
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Digital Transformation Experts</h4>
                        <p className="text-white/90 text-sm">Proven track record in implementing Industry 4.0 solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Cutting-edge Technology</h4>
                        <p className="text-white/90 text-sm">Latest tools and technologies for optimal performance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Scalable Solutions</h4>
                        <p className="text-white/90 text-sm">Flexible architectures that grow with your business</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">24/7 Support</h4>
                        <p className="text-white/90 text-sm">Round-the-clock technical support and maintenance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to implementing Industry 4.0 solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Comprehensive evaluation of current systems and digital readiness' },
              { step: '02', title: 'Strategy', description: 'Development of customized digital transformation roadmap' },
              { step: '03', title: 'Implementation', description: 'Deployment of Industry 4.0 solutions with agile methodology' },
              { step: '04', title: 'Optimization', description: 'Continuous monitoring, improvement, and scaling of solutions' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-sans font-bold text-deep-navy">{item.step}</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-steel-gray dark:text-muted-foreground">{item.description}</p>
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
              <span className="text-sm font-medium text-white">Ready to Transform?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Start Your Digital Transformation Journey
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our Industry 4.0 experts help you modernize your operations and achieve competitive advantage
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Industry4Solutions
