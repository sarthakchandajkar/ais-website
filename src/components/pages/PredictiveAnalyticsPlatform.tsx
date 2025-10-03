'use client'

import React from 'react'
import { 
  Brain, 
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
  Cloud
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PredictiveAnalyticsPlatform = () => {
  const platformFeatures = [
    {
      step: '1',
      title: 'Real-Time Data Collection',
      description: 'Continuous monitoring of equipment through IoT sensors and data streams for comprehensive asset visibility.',
      icon: Wifi,
      details: [
        'IoT sensor integration',
        'Real-time data streaming',
        'Multi-source data aggregation',
        'Edge computing capabilities'
      ]
    },
    {
      step: '2',
      title: 'Advanced Analytics Engine',
      description: 'Machine learning algorithms and statistical models that identify patterns and predict equipment failures.',
      icon: Brain,
      details: [
        'Machine learning algorithms',
        'Statistical analysis models',
        'Pattern recognition systems',
        'Anomaly detection capabilities'
      ]
    },
    {
      step: '3',
      title: 'Predictive Modeling',
      description: 'Sophisticated models that forecast equipment health and failure probabilities with high accuracy.',
      icon: LineChart,
      details: [
        'Failure prediction models',
        'Remaining useful life estimation',
        'Risk assessment algorithms',
        'Confidence interval calculations'
      ]
    },
    {
      step: '4',
      title: 'Intelligent Dashboards',
      description: 'Customizable visualization tools that provide actionable insights and real-time equipment status.',
      icon: Monitor,
      details: [
        'Interactive dashboards',
        'Customizable reports',
        'Real-time alerts',
        'Mobile accessibility'
      ]
    },
    {
      step: '5',
      title: 'Automated Alerts',
      description: 'Smart notification system that alerts maintenance teams to potential issues before they become critical.',
      icon: AlertTriangle,
      details: [
        'Proactive alert generation',
        'Multi-channel notifications',
        'Escalation protocols',
        'Priority-based routing'
      ]
    },
    {
      step: '6',
      title: 'Integration & Scalability',
      description: 'Seamless integration with existing systems and scalable architecture for enterprise-wide deployment.',
      icon: Layers,
      details: [
        'API integrations',
        'Cloud scalability',
        'Legacy system compatibility',
        'Enterprise security'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Reduced Downtime',
      description: 'Predict equipment failures before they occur, minimizing unplanned outages and maximizing uptime.',
      metric: '40-60%'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Prevent hazardous equipment failures through early detection and proactive maintenance.',
      metric: '99.5%'
    },
    {
      icon: Clock,
      title: 'Cost Optimization',
      description: 'Optimize maintenance schedules and reduce unnecessary repairs through data-driven insights.',
      metric: '25-35%'
    },
    {
      icon: Database,
      title: 'Data-Driven Decisions',
      description: 'Make informed maintenance decisions based on comprehensive analytics and predictive insights.',
      metric: '100%'
    }
  ]

  const capabilities = [
    {
      icon: Brain,
      title: 'Machine Learning Algorithms',
      description: 'Advanced AI algorithms that learn from historical data to predict equipment behavior and failure patterns.',
      features: [
        'Supervised learning models',
        'Unsupervised anomaly detection',
        'Deep learning neural networks',
        'Ensemble learning methods'
      ]
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Comprehensive analytics suite that transforms raw data into actionable maintenance insights.',
      features: [
        'Statistical trend analysis',
        'Time series forecasting',
        'Correlation analysis',
        'Risk probability modeling'
      ]
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Seamless connectivity with IoT sensors and devices for real-time equipment monitoring.',
      features: [
        'Multi-protocol support',
        'Edge data processing',
        'Cloud connectivity',
        'Device management'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line optimization and equipment reliability' },
    { name: 'Oil & Gas', icon: Zap, description: 'Critical asset monitoring in harsh environments' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid stability and power plant efficiency' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft maintenance and safety optimization' },
    { name: 'Marine', icon: Package, description: 'Vessel reliability and maritime operations' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment monitoring in extreme conditions' }
  ]

  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning and deep learning algorithms for intelligent failure prediction'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure for processing large volumes of sensor data'
    },
    {
      icon: Wifi,
      title: 'IoT Sensors',
      description: 'Advanced sensor technology for comprehensive equipment monitoring'
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Processing and analyzing massive datasets for predictive insights'
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Real-time monitoring and alerts through mobile applications'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security for protecting sensitive operational data'
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
              <Brain className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">AI-Powered Predictive Intelligence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Predictive Analytics <span className="text-teal-green dark:text-electric-blue hero-text-accent">Platform</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Transform your maintenance operations with our advanced AI-powered platform that predicts equipment failures before they occur, optimizing performance and reducing costs.
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

      {/* What is Predictive Analytics Platform Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is a Predictive Analytics Platform?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  A Predictive Analytics Platform is an advanced software solution that leverages artificial intelligence, machine learning, and IoT technologies to predict equipment failures before they occur. By analyzing real-time and historical data, these platforms enable organizations to transition from reactive to proactive maintenance strategies.
                </p>
                <p>
                  Our platform integrates seamlessly with your existing systems, collecting data from multiple sources including sensors, maintenance records, and operational parameters. Advanced machine learning algorithms process this data to identify patterns, detect anomalies, and predict potential failures with high accuracy.
                </p>
                <p>
                  The platform provides actionable insights through intuitive dashboards, automated alerts, and comprehensive reporting, enabling maintenance teams to make data-driven decisions and optimize equipment performance while minimizing costs and downtime.
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
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">AI-Powered</h3>
                    <p className="text-sm text-steel-gray">Advanced machine learning algorithms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">IoT Integration</h3>
                    <p className="text-sm text-steel-gray">Real-time sensor data collection</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <LineChart className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Predictive Models</h3>
                    <p className="text-sm text-steel-gray">Accurate failure prediction</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Smart Dashboards</h3>
                    <p className="text-sm text-steel-gray">Intuitive visualization tools</p>
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
              Comprehensive suite of tools and capabilities designed to revolutionize your predictive maintenance operations
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
              Platform Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your maintenance operations with proven predictive analytics capabilities
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
              Advanced technologies and methodologies powering our predictive analytics platform
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
              Cutting-edge technologies that power our predictive analytics platform
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
              Predictive analytics solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Transform Your Maintenance?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Predictive Analytics Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our AI-powered platform help you achieve optimal equipment performance and operational excellence through predictive maintenance
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

export default PredictiveAnalyticsPlatform
