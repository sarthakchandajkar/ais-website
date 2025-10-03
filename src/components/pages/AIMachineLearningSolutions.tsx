'use client'

import React from 'react'
import { 
  Bot, 
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
  Signal,
  Brain,
  Microscope,
  Camera,
  MessageSquare,
  Cpu as Processor
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AIMachineLearningSolutions = () => {
  const solutionFeatures = [
    {
      step: '1',
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models that analyze historical data to predict future trends and outcomes.',
      icon: BarChart3,
      details: [
        'Time series forecasting',
        'Demand prediction',
        'Risk assessment',
        'Performance optimization'
      ]
    },
    {
      step: '2',
      title: 'Computer Vision Systems',
      description: 'AI-powered visual recognition systems that enable automated inspection and quality control.',
      icon: Camera,
      details: [
        'Image recognition',
        'Object detection',
        'Quality inspection',
        'Automated monitoring'
      ]
    },
    {
      step: '3',
      title: 'Natural Language Processing',
      description: 'Intelligent text and speech processing capabilities for automated communication and analysis.',
      icon: MessageSquare,
      details: [
        'Text analysis',
        'Sentiment analysis',
        'Chatbot development',
        'Document processing'
      ]
    },
    {
      step: '4',
      title: 'Automated Decision Making',
      description: 'AI systems that make intelligent decisions based on real-time data and predefined criteria.',
      icon: Brain,
      details: [
        'Real-time decision making',
        'Process automation',
        'Intelligent routing',
        'Resource optimization'
      ]
    },
    {
      step: '5',
      title: 'Pattern Recognition',
      description: 'Advanced algorithms that identify complex patterns in data to uncover hidden insights.',
      icon: Microscope,
      details: [
        'Anomaly detection',
        'Pattern identification',
        'Trend analysis',
        'Behavioral insights'
      ]
    },
    {
      step: '6',
      title: 'Intelligent Automation',
      description: 'Comprehensive automation solutions that learn and adapt to optimize industrial processes.',
      icon: Workflow,
      details: [
        'Process automation',
        'Adaptive learning',
        'Self-optimization',
        'Continuous improvement'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'AI-driven automation and optimization significantly improve operational efficiency and productivity.',
      metric: '50-70%'
    },
    {
      icon: Shield,
      title: 'Enhanced Accuracy',
      description: 'Machine learning algorithms provide highly accurate predictions and automated decision making.',
      metric: '95%+'
    },
    {
      icon: Clock,
      title: 'Real-Time Processing',
      description: 'Advanced AI systems process data and make decisions in real-time for optimal performance.',
      metric: '24/7'
    },
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'AI transforms raw data into actionable insights for strategic decision making.',
      metric: '100%'
    }
  ]

  const capabilities = [
    {
      icon: Brain,
      title: 'Machine Learning Algorithms',
      description: 'Comprehensive suite of ML algorithms including supervised, unsupervised, and reinforcement learning.',
      features: [
        'Supervised learning models',
        'Unsupervised learning techniques',
        'Reinforcement learning systems',
        'Deep learning networks'
      ]
    },
    {
      icon: Camera,
      title: 'Computer Vision',
      description: 'Advanced computer vision solutions for automated visual inspection and recognition.',
      features: [
        'Image classification',
        'Object detection',
        'Facial recognition',
        'Quality control systems'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Intelligent text and speech processing for automated communication and analysis.',
      features: [
        'Text mining',
        'Sentiment analysis',
        'Language translation',
        'Voice recognition'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Smart manufacturing and quality control systems' },
    { name: 'Oil & Gas', icon: Zap, description: 'Predictive maintenance and safety monitoring' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid optimization and energy management' },
    { name: 'Aviation', icon: Globe, description: 'Flight optimization and safety systems' },
    { name: 'Marine', icon: Package, description: 'Vessel monitoring and navigation systems' },
    { name: 'Mining', icon: Wrench, description: 'Equipment optimization and safety monitoring' }
  ]

  const technologies = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Neural networks and deep learning frameworks for complex pattern recognition'
    },
    {
      icon: BarChart3,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for predictive analytics and automation'
    },
    {
      icon: Camera,
      title: 'Computer Vision',
      description: 'Image processing and visual recognition technologies'
    },
    {
      icon: MessageSquare,
      title: 'NLP',
      description: 'Natural language processing for text and speech analysis'
    },
    {
      icon: Cloud,
      title: 'Cloud AI',
      description: 'Scalable cloud-based AI and ML platforms'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Secure AI systems and data protection protocols'
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
              <Bot className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Intelligent Automation Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            AI & Machine Learning <span className="text-teal-green dark:text-electric-blue hero-text-accent">Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Advanced artificial intelligence and machine learning implementations that automate processes, optimize operations, and drive intelligent decision making across industrial environments.
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

      {/* What are AI & Machine Learning Solutions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What are AI & Machine Learning Solutions?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  AI & Machine Learning Solutions are advanced technological implementations that leverage artificial intelligence and machine learning algorithms to automate processes, optimize operations, and enable intelligent decision making across industrial environments. These solutions transform raw data into actionable insights and automated actions.
                </p>
                <p>
                  Our solutions encompass predictive analytics, computer vision, natural language processing, and intelligent automation systems that learn from data patterns to continuously improve performance. These technologies enable organizations to make data-driven decisions, reduce operational costs, and enhance productivity.
                </p>
                <p>
                  From predictive maintenance and quality control to process optimization and intelligent automation, our AI and ML solutions provide the intelligence needed to drive operational excellence and competitive advantage in today&apos;s digital industrial landscape.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Machine Learning</h3>
                    <p className="text-sm text-steel-gray">Advanced algorithms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Computer Vision</h3>
                    <p className="text-sm text-steel-gray">Visual recognition</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">NLP</h3>
                    <p className="text-sm text-steel-gray">Language processing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Workflow className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Automation</h3>
                    <p className="text-sm text-steel-gray">Intelligent processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Solution Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI and machine learning capabilities for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionFeatures.map((feature, index) => (
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
              AI & ML Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your operations with intelligent AI and machine learning solutions
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
              Advanced AI and machine learning technologies powering our intelligent solutions
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
              Cutting-edge AI and machine learning technologies powering our intelligent solutions
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
              AI and machine learning solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Embrace AI?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement AI Solutions Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our AI and machine learning experts help you transform your operations with intelligent automation and data-driven insights
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

export default AIMachineLearningSolutions
