'use client'

import React from 'react'
import { 
  Cpu, 
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
  Layers as DataLayers,
  Box,
  Grid3X3,
  Maximize,
  Minimize,
  RotateCcw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const DigitalTwinTechnology = () => {
  const twinFeatures = [
    {
      step: '1',
      title: 'Real-time Data Integration',
      description: 'Seamless integration of live sensor data and IoT devices to create accurate virtual representations of physical assets.',
      icon: Activity,
      details: [
        'IoT sensor integration',
        'Real-time data streaming',
        'Data synchronization',
        'Live monitoring'
      ]
    },
    {
      step: '2',
      title: '3D Visualization & Modeling',
      description: 'Advanced 3D modeling and visualization capabilities that create detailed virtual representations of physical systems.',
      icon: Box,
      details: [
        '3D asset modeling',
        'Interactive visualization',
        'Virtual reality support',
        'Augmented reality integration'
      ]
    },
    {
      step: '3',
      title: 'Predictive Simulation',
      description: 'Sophisticated simulation engines that predict future behavior and performance based on current conditions and historical data.',
      icon: Brain,
      details: [
        'Behavioral prediction',
        'Scenario simulation',
        'Performance forecasting',
        'Risk assessment'
      ]
    },
    {
      step: '4',
      title: 'Digital Thread Management',
      description: 'Comprehensive digital thread that tracks and manages the complete lifecycle of assets from design to disposal.',
      icon: Workflow,
      details: [
        'Lifecycle tracking',
        'Version control',
        'Change management',
        'Audit trails'
      ]
    },
    {
      step: '5',
      title: 'Remote Monitoring & Control',
      description: 'Advanced remote monitoring and control capabilities that enable operators to manage assets from anywhere in the world.',
      icon: Monitor,
      details: [
        'Remote asset monitoring',
        'Virtual control interfaces',
        'Real-time alerts',
        'Mobile access'
      ]
    },
    {
      step: '6',
      title: 'AI-Powered Analytics',
      description: 'Machine learning and AI algorithms that analyze digital twin data to provide insights and recommendations.',
      icon: Brain,
      details: [
        'Pattern recognition',
        'Anomaly detection',
        'Predictive maintenance',
        'Optimization recommendations'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'Digital twins optimize operations by providing real-time insights and predictive capabilities.',
      metric: '30-50%'
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Predictive simulation helps identify and mitigate risks before they impact operations.',
      metric: '60-80%'
    },
    {
      icon: Clock,
      title: 'Faster Decision Making',
      description: 'Real-time data and simulation enable rapid, informed decision making.',
      metric: '5x'
    },
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'Comprehensive data analysis provides actionable insights for continuous improvement.',
      metric: '100%'
    }
  ]

  const capabilities = [
    {
      icon: Box,
      title: '3D Modeling & Visualization',
      description: 'Advanced 3D modeling and visualization tools that create detailed virtual representations of physical assets.',
      features: [
        'High-fidelity 3D models',
        'Interactive visualization',
        'VR/AR integration',
        'Real-time rendering'
      ]
    },
    {
      icon: Activity,
      title: 'Real-time Synchronization',
      description: 'Continuous synchronization between physical assets and their digital twins using IoT and sensor data.',
      features: [
        'Live data streaming',
        'Bidirectional communication',
        'State synchronization',
        'Event processing'
      ]
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered analytics that predict future behavior and performance of physical assets.',
      features: [
        'Machine learning models',
        'Predictive simulation',
        'Anomaly detection',
        'Optimization algorithms'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line optimization and quality control' },
    { name: 'Oil & Gas', icon: Zap, description: 'Asset monitoring and predictive maintenance' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid optimization and energy management' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft performance and maintenance optimization' },
    { name: 'Marine', icon: Package, description: 'Vessel monitoring and navigation systems' },
    { name: 'Mining', icon: Wrench, description: 'Equipment optimization and safety monitoring' }
  ]

  const technologies = [
    {
      icon: Box,
      title: '3D Modeling',
      description: 'Advanced 3D modeling and CAD integration'
    },
    {
      icon: Activity,
      title: 'IoT Integration',
      description: 'Internet of Things sensor integration'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Machine learning and artificial intelligence'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud-based digital twin platforms'
    },
    {
      icon: Database,
      title: 'Big Data',
      description: 'Big data processing and analytics'
    },
    {
      icon: Monitor,
      title: 'Visualization',
      description: 'Advanced visualization and VR/AR tools'
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
              <Box className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Virtual Reality Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Digital Twin <span className="text-teal-green dark:text-electric-blue hero-text-accent">Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Advanced digital twin solutions that create virtual representations of physical assets, enabling real-time monitoring, predictive simulation, and intelligent optimization across industrial environments.
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

      {/* What is Digital Twin Technology Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Digital Twin Technology?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Digital Twin Technology creates virtual replicas of physical assets, systems, or processes that mirror their real-world counterparts in real-time. These digital representations are continuously updated with live data from sensors, IoT devices, and other sources to provide accurate, dynamic models of physical assets.
                </p>
                <p>
                  Our digital twin solutions combine advanced 3D modeling, real-time data integration, and AI-powered analytics to create comprehensive virtual environments. These twins enable predictive simulation, remote monitoring, and intelligent optimization, allowing organizations to make data-driven decisions and optimize performance without physical intervention.
                </p>
                <p>
                  From manufacturing equipment and power plants to entire cities and transportation systems, digital twins provide unprecedented visibility into asset performance, enabling proactive maintenance, risk mitigation, and continuous improvement across all industrial applications.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Box className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">3D Modeling</h3>
                    <p className="text-sm text-steel-gray">Virtual representations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Real-time Sync</h3>
                    <p className="text-sm text-steel-gray">Live data integration</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">AI Analytics</h3>
                    <p className="text-sm text-steel-gray">Predictive insights</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Remote Control</h3>
                    <p className="text-sm text-steel-gray">Virtual management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twin Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Digital Twin Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital twin capabilities for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {twinFeatures.map((feature, index) => (
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
              Digital Twin Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your operations with virtual asset management and predictive capabilities
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
              Advanced digital twin technologies and methodologies powering our solutions
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
              Cutting-edge technologies powering our digital twin solutions
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
              Digital twin solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Go Virtual?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Digital Twin Technology Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our digital twin experts help you create virtual representations that transform how you monitor, manage, and optimize your physical assets
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

export default DigitalTwinTechnology
