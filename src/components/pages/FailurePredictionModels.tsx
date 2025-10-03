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
  Cloud,
  Calculator,
  TrendingDown,
  AlertCircle,
  BookOpen
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const FailurePredictionModels = () => {
  const modelTypes = [
    {
      step: '1',
      title: 'Weibull Analysis',
      description: 'Statistical method for analyzing failure data and predicting equipment reliability over time.',
      icon: Calculator,
      details: [
        'Failure rate modeling',
        'Reliability function estimation',
        'Confidence interval calculation',
        'Life data analysis'
      ]
    },
    {
      step: '2',
      title: 'Machine Learning Models',
      description: 'Advanced AI algorithms that learn from historical data to predict equipment failures.',
      icon: Brain,
      details: [
        'Random Forest algorithms',
        'Neural network models',
        'Support vector machines',
        'Ensemble learning methods'
      ]
    },
    {
      step: '3',
      title: 'Reliability Modeling',
      description: 'Mathematical models that describe equipment behavior and failure patterns.',
      icon: BarChart3,
      details: [
        'Exponential distribution models',
        'Normal distribution analysis',
        'Log-normal modeling',
        'Gamma distribution fitting'
      ]
    },
    {
      step: '4',
      title: 'Failure Mode Prediction',
      description: 'Identification and prediction of specific failure modes based on operational conditions.',
      icon: AlertTriangle,
      details: [
        'Failure mode identification',
        'Root cause analysis',
        'Failure mechanism modeling',
        'Degradation pattern analysis'
      ]
    },
    {
      step: '5',
      title: 'Risk Assessment',
      description: 'Comprehensive risk evaluation to prioritize maintenance activities and resource allocation.',
      icon: Shield,
      details: [
        'Risk probability calculation',
        'Impact assessment',
        'Risk matrix development',
        'Mitigation strategy planning'
      ]
    },
    {
      step: '6',
      title: 'Model Validation',
      description: 'Rigorous testing and validation of prediction models to ensure accuracy and reliability.',
      icon: TestTube,
      details: [
        'Cross-validation techniques',
        'Performance metrics evaluation',
        'Model accuracy testing',
        'Continuous improvement processes'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improved Accuracy',
      description: 'Advanced algorithms provide highly accurate failure predictions with confidence intervals.',
      metric: '95%+'
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Proactive identification of potential failures reduces safety risks and operational disruptions.',
      metric: '80%'
    },
    {
      icon: Clock,
      title: 'Cost Optimization',
      description: 'Optimized maintenance scheduling reduces unnecessary repairs and extends equipment life.',
      metric: '30-40%'
    },
    {
      icon: Database,
      title: 'Data-Driven Insights',
      description: 'Comprehensive analysis of historical data provides actionable maintenance insights.',
      metric: '100%'
    }
  ]

  const methodologies = [
    {
      icon: Calculator,
      title: 'Statistical Analysis',
      description: 'Advanced statistical methods for analyzing failure patterns and predicting equipment behavior.',
      features: [
        'Weibull distribution analysis',
        'Reliability function estimation',
        'Confidence interval calculation',
        'Life data analysis'
      ]
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI-powered algorithms that learn from data to make accurate failure predictions.',
      features: [
        'Supervised learning models',
        'Unsupervised pattern recognition',
        'Deep learning networks',
        'Ensemble methods'
      ]
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Comprehensive analytics suite that transforms data into actionable maintenance insights.',
      features: [
        'Trend analysis',
        'Correlation studies',
        'Time series forecasting',
        'Anomaly detection'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line reliability and equipment optimization' },
    { name: 'Oil & Gas', icon: Zap, description: 'Critical asset monitoring in harsh environments' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid stability and power plant reliability' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft safety and operational efficiency' },
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
      icon: Calculator,
      title: 'Statistical Software',
      description: 'Advanced statistical analysis tools and reliability engineering software'
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Processing and analyzing large volumes of equipment data'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure for model training and deployment'
    },
    {
      icon: Monitor,
      title: 'Real-time Processing',
      description: 'Live data processing and instant failure prediction alerts'
    },
    {
      icon: Shield,
      title: 'Data Security',
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
              <span className="text-sm font-medium text-white">Advanced Predictive Intelligence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Failure Prediction <span className="text-teal-green dark:text-electric-blue hero-text-accent">Models</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Sophisticated statistical models and machine learning algorithms that analyze equipment behavior patterns to forecast potential failures with high accuracy and confidence.
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

      {/* What are Failure Prediction Models Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What are Failure Prediction Models?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Failure Prediction Models are sophisticated mathematical and statistical algorithms designed to analyze equipment behavior patterns and predict potential failures before they occur. These models combine historical data, real-time monitoring information, and advanced analytics to forecast equipment health and reliability.
                </p>
                <p>
                  Our models utilize a combination of statistical analysis, machine learning algorithms, and reliability engineering principles to provide accurate predictions with confidence intervals. This enables maintenance teams to make data-driven decisions and implement proactive maintenance strategies.
                </p>
                <p>
                  The models continuously learn and adapt from new data, improving their accuracy over time and providing increasingly reliable predictions for optimal maintenance planning and resource allocation.
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
                    <p className="text-sm text-steel-gray">Machine learning algorithms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Statistical Models</h3>
                    <p className="text-sm text-steel-gray">Mathematical precision</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">High Accuracy</h3>
                    <p className="text-sm text-steel-gray">95%+ prediction accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Risk Mitigation</h3>
                    <p className="text-sm text-steel-gray">Proactive failure prevention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Model Types & Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive suite of prediction models and analytical methods for accurate failure forecasting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelTypes.map((model, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="h-1 bg-gradient-to-r from-electric-blue to-teal-green"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center text-black dark:text-white text-xl font-bold">
                      {model.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {model.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <p className="text-steel-gray dark:text-muted-foreground mb-6 flex-1">
                    {model.description}
                  </p>
                  <div className="space-y-2">
                    {model.details.map((detail, detailIndex) => (
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
              Model Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your maintenance operations with accurate failure prediction capabilities
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

      {/* Methodologies Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Core Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Advanced analytical approaches and technologies powering our failure prediction models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="h-1 bg-gradient-to-r from-electric-blue to-teal-green"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center">
                      <methodology.icon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {methodology.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <p className="text-steel-gray dark:text-muted-foreground mb-6 flex-1">
                    {methodology.description}
                  </p>
                  <div className="space-y-2">
                    {methodology.features.map((feature, featureIndex) => (
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
              Cutting-edge technologies that power our failure prediction models
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
              Failure prediction models across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Predict Failures?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Failure Prediction Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our advanced models help you predict equipment failures and optimize maintenance strategies for maximum reliability
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

export default FailurePredictionModels
