'use client'

import React from 'react'
import { 
  Workflow, 
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
  Pentagon,
  Bot,
  Cog,
  Settings as SettingsIcon,
  Zap as Lightning,
  Repeat,
  RotateCw,
  Move,
  Copy,
  Scissors,
  Clipboard,
  FileCheck,
  FileX,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  Trash2,
  Edit,
  Save,
  Download as DownloadFile,
  Upload as UploadFile
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ProcessAutomationRPA = () => {
  const automationFeatures = [
    {
      step: '1',
      title: 'Workflow Automation',
      description: 'Automated workflow solutions that streamline business processes and eliminate manual tasks through intelligent automation.',
      icon: Workflow,
      details: [
        'Process mapping',
        'Workflow design',
        'Task automation',
        'Process optimization'
      ]
    },
    {
      step: '2',
      title: 'Robotic Process Automation',
      description: 'Software robots that mimic human actions to automate repetitive tasks across multiple applications and systems.',
      icon: Bot,
      details: [
        'Screen scraping',
        'Data extraction',
        'Form filling',
        'Report generation'
      ]
    },
    {
      step: '3',
      title: 'Intelligent Document Processing',
      description: 'AI-powered document processing that automatically extracts, validates, and processes information from various document types.',
      icon: FileText,
      details: [
        'Document classification',
        'Data extraction',
        'Content validation',
        'Automated routing'
      ]
    },
    {
      step: '4',
      title: 'API Integration & Orchestration',
      description: 'Seamless integration and orchestration of multiple systems and applications through API automation.',
      icon: Network,
      details: [
        'API connectivity',
        'System integration',
        'Data synchronization',
        'Process orchestration'
      ]
    },
    {
      step: '5',
      title: 'Business Process Management',
      description: 'Comprehensive BPM solutions that model, execute, monitor, and optimize business processes end-to-end.',
      icon: Cog,
      details: [
        'Process modeling',
        'Execution monitoring',
        'Performance analytics',
        'Continuous improvement'
      ]
    },
    {
      step: '6',
      title: 'Cognitive Automation',
      description: 'Advanced automation that combines RPA with AI and machine learning to handle complex decision-making processes.',
      icon: Brain,
      details: [
        'Decision automation',
        'Pattern recognition',
        'Predictive processing',
        'Intelligent routing'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Efficiency Gains',
      description: 'Automation reduces processing time and eliminates manual errors, significantly improving operational efficiency.',
      metric: '60-80%'
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Robots work around the clock without breaks, ensuring continuous process execution and faster delivery.',
      metric: '24/7'
    },
    {
      icon: Shield,
      title: 'Error Reduction',
      description: 'Automated processes eliminate human errors and ensure consistent, accurate results every time.',
      metric: '95%'
    },
    {
      icon: Database,
      title: 'Cost Savings',
      description: 'Significant cost reduction through reduced manual labor and improved process efficiency.',
      metric: '40-60%'
    }
  ]

  const capabilities = [
    {
      icon: Workflow,
      title: 'Process Design & Modeling',
      description: 'Visual process design tools that map, model, and optimize business processes for automation.',
      features: [
        'Process mapping',
        'Workflow visualization',
        'Bottleneck identification',
        'Optimization recommendations'
      ]
    },
    {
      icon: Bot,
      title: 'RPA Development',
      description: 'Custom RPA solutions that automate specific business processes using software robots.',
      features: [
        'Bot development',
        'Process automation',
        'Exception handling',
        'Maintenance support'
      ]
    },
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that combines RPA with cognitive capabilities for complex decision-making.',
      features: [
        'Machine learning integration',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line automation and quality control' },
    { name: 'Oil & Gas', icon: Zap, description: 'Operational process automation and monitoring' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid management and energy optimization' },
    { name: 'Aviation', icon: Globe, description: 'Flight operations and maintenance automation' },
    { name: 'Marine', icon: Package, description: 'Fleet management and logistics automation' },
    { name: 'Mining', icon: Wrench, description: 'Equipment monitoring and safety automation' }
  ]

  const technologies = [
    {
      icon: Bot,
      title: 'RPA Platforms',
      description: 'Leading RPA platforms like UiPath, Automation Anywhere, and Blue Prism'
    },
    {
      icon: Workflow,
      title: 'BPM Tools',
      description: 'Business Process Management and workflow automation tools'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Artificial intelligence and machine learning for cognitive automation'
    },
    {
      icon: Network,
      title: 'API Integration',
      description: 'RESTful APIs and integration platforms for system connectivity'
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'Cloud-based automation platforms and services'
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Data extraction, transformation, and loading (ETL) tools'
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
              <Workflow className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Automation Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Process Automation <span className="text-teal-green dark:text-electric-blue hero-text-accent">& RPA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Intelligent automation solutions that streamline business processes, eliminate manual tasks, and drive operational efficiency through robotic process automation and workflow optimization.
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

      {/* What is Process Automation & RPA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Process Automation & RPA?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Process Automation & RPA (Robotic Process Automation) encompasses intelligent automation solutions that streamline business processes by eliminating manual tasks and repetitive work. These technologies use software robots and intelligent workflows to perform routine operations with greater speed, accuracy, and consistency than human workers.
                </p>
                <p>
                  Our solutions combine traditional RPA with advanced AI and machine learning capabilities to create intelligent automation that can handle complex decision-making processes. From simple rule-based tasks to sophisticated cognitive automation, we help organizations automate their entire process landscape.
                </p>
                <p>
                  By implementing process automation and RPA, organizations can achieve significant cost savings, improve operational efficiency, reduce errors, and free up human resources to focus on strategic, value-added activities that drive business growth and innovation.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Workflow className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Workflow Automation</h3>
                    <p className="text-sm text-steel-gray">Process optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">RPA Solutions</h3>
                    <p className="text-sm text-steel-gray">Software robots</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">AI Integration</h3>
                    <p className="text-sm text-steel-gray">Intelligent automation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Cog className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">BPM</h3>
                    <p className="text-sm text-steel-gray">Process management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Automation Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive process automation and RPA capabilities for industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
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
              Automation Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your operations with intelligent process automation and RPA solutions
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
              Advanced automation technologies and methodologies powering our solutions
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
              Leading automation platforms and technologies powering our solutions
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
              Process automation and RPA solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Automate?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Process Automation Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our automation experts help you streamline your processes and eliminate manual tasks with intelligent RPA and workflow automation solutions
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

export default ProcessAutomationRPA

