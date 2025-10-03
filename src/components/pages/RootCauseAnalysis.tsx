'use client'

import React from 'react'
import { 
  Target, 
  Search, 
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
  Brain,
  TestTube,
  Package,
  UserCheck,
  Zap,
  Gauge,
  Database,
  Cpu,
  Eye,
  Lightbulb,
  Shield,
  PieChart,
  TrendingDown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const RootCauseAnalysis = () => {
  const rcaSteps = [
    {
      step: '1',
      title: 'Problem Definition & Data Collection',
      description: 'Clearly define the problem and gather comprehensive data about the incident or failure.',
      icon: Search,
      details: [
        'Incident documentation',
        'Data collection and verification',
        'Timeline establishment',
        'Stakeholder interviews'
      ]
    },
    {
      step: '2',
      title: 'Initial Cause Identification',
      description: 'Identify immediate and apparent causes of the problem using systematic analysis.',
      icon: Eye,
      details: [
        'Immediate cause identification',
        'Contributing factor analysis',
        'Evidence documentation',
        'Preliminary hypothesis formation'
      ]
    },
    {
      step: '3',
      title: 'Root Cause Investigation',
      description: 'Apply analytical techniques to drill down to the fundamental root causes.',
      icon: Target,
      details: [
        '5-Why analysis implementation',
        'Fishbone diagram construction',
        'Fault tree analysis',
        'Cause-and-effect mapping'
      ]
    },
    {
      step: '4',
      title: 'Root Cause Validation',
      description: 'Verify and validate the identified root causes through evidence and testing.',
      icon: CheckCircle,
      details: [
        'Evidence correlation',
        'Hypothesis testing',
        'Validation through data',
        'Expert review and confirmation'
      ]
    },
    {
      step: '5',
      title: 'Solution Development',
      description: 'Develop comprehensive solutions to address the root causes and prevent recurrence.',
      icon: Lightbulb,
      details: [
        'Solution brainstorming',
        'Feasibility assessment',
        'Cost-benefit analysis',
        'Implementation planning'
      ]
    },
    {
      step: '6',
      title: 'Implementation & Monitoring',
      description: 'Implement solutions and establish monitoring systems to ensure effectiveness.',
      icon: Activity,
      details: [
        'Solution implementation',
        'Progress monitoring',
        'Effectiveness measurement',
        'Continuous improvement'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Prevent Recurrence',
      description: 'Eliminate the root cause to prevent similar incidents from happening again.',
      metric: '90%'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Identify and address safety-critical issues before they cause harm.',
      metric: '100%'
    },
    {
      icon: Clock,
      title: 'Reduced Downtime',
      description: 'Minimize equipment downtime through effective problem resolution.',
      metric: '75%'
    },
    {
      icon: Database,
      title: 'Knowledge Building',
      description: 'Build organizational knowledge and improve future decision-making.',
      metric: '100%'
    }
  ]

  const methodologies = [
    {
      icon: Target,
      title: '5-Why Analysis',
      description: 'Systematic questioning technique to drill down to the root cause by asking "why" five times.',
      features: [
        'Simple and effective approach',
        'Encourages deep thinking',
        'Identifies multiple causes',
        'Easy to understand and apply'
      ]
    },
    {
      icon: BarChart3,
      title: 'Fishbone Diagram (Ishikawa)',
      description: 'Visual tool that categorizes potential causes into major categories for systematic analysis.',
      features: [
        'Visual cause categorization',
        'Team collaboration tool',
        'Comprehensive cause mapping',
        'Structured analysis approach'
      ]
    },
    {
      icon: Settings,
      title: 'Fault Tree Analysis',
      description: 'Top-down deductive analysis method to identify all possible causes of a specific failure.',
      features: [
        'Logical cause analysis',
        'Probability assessment',
        'Systematic approach',
        'Quantitative analysis capability'
      ]
    }
  ]

  const techniques = [
    {
      icon: PieChart,
      title: 'Pareto Analysis',
      description: 'Prioritize causes based on frequency and impact using the 80/20 principle.',
      features: [
        'Focus on vital few causes',
        'Data-driven prioritization',
        'Resource allocation guidance',
        'Impact assessment'
      ]
    },
    {
      icon: Brain,
      title: 'Brainstorming',
      description: 'Creative group technique to generate comprehensive list of potential causes.',
      features: [
        'Creative thinking stimulation',
        'Team collaboration',
        'Comprehensive cause identification',
        'Diverse perspective inclusion'
      ]
    },
    {
      icon: FileText,
      title: 'Event & Causal Factor Analysis',
      description: 'Chronological analysis of events leading to the incident to identify causal relationships.',
      features: [
        'Timeline-based analysis',
        'Causal relationship mapping',
        'Systematic event tracking',
        'Comprehensive documentation'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production line failures and quality issues' },
    { name: 'Oil & Gas', icon: Zap, description: 'Equipment failures and safety incidents' },
    { name: 'Healthcare', icon: Shield, description: 'Patient safety and medical device failures' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft incidents and safety investigations' },
    { name: 'Power Generation', icon: Gauge, description: 'Plant failures and grid disruptions' },
    { name: 'Marine', icon: Package, description: 'Vessel incidents and maritime safety' }
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
              <Target className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Investigation Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Root Cause <span className="text-teal-green dark:text-electric-blue hero-text-accent">Analysis</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Systematic investigation methodology to identify underlying causes of failures and implement effective corrective actions that prevent recurrence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              START INVESTIGATION
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              DOWNLOAD GUIDE
            </button>
          </div>
        </div>
      </section>

      {/* What is RCA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Root Cause Analysis?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Root Cause Analysis (RCA) is a systematic process for identifying the fundamental reasons why problems occur. It goes beyond treating symptoms to find the underlying causes that, if addressed, will prevent the problem from recurring.
                </p>
                <p>
                  RCA is essential for organizations that want to improve their operations, enhance safety, and reduce costs. By understanding the true causes of problems, organizations can implement effective solutions that provide long-term benefits.
                </p>
                <p>
                  The process involves collecting data, analyzing evidence, and using various analytical techniques to trace problems back to their root causes, ensuring that corrective actions are targeted and effective.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-electric-blue hover:bg-blue-700 text-white">
                  Learn More About Our RCA Process
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Systematic Investigation</h3>
                    <p className="text-sm text-steel-gray">Structured approach to problem analysis</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Root Cause Focus</h3>
                    <p className="text-sm text-steel-gray">Identify fundamental causes, not symptoms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Prevention-Oriented</h3>
                    <p className="text-sm text-steel-gray">Prevent recurrence through effective solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Solution-Driven</h3>
                    <p className="text-sm text-steel-gray">Develop targeted corrective actions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCA Process Steps */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Our RCA Process
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A comprehensive 6-step methodology that ensures thorough investigation and effective problem resolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rcaSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="h-1 bg-gradient-to-r from-electric-blue to-teal-green"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center text-black dark:text-white text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <p className="text-steel-gray dark:text-muted-foreground mb-6 flex-1">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
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
              RCA Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your problem-solving capabilities with proven RCA methodologies
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

      {/* RCA Methodologies Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              RCA Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Proven analytical techniques for comprehensive root cause identification
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

      {/* Additional Techniques Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Additional Analysis Techniques
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Complementary tools and methods for comprehensive problem analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="h-1 bg-gradient-to-r from-teal-green to-electric-blue"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-green to-electric-blue rounded-xl flex items-center justify-center">
                      <technique.icon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-sans font-bold text-foreground mb-2">
                        {technique.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <p className="text-steel-gray dark:text-muted-foreground mb-6 flex-1">
                    {technique.description}
                  </p>
                  <div className="space-y-2">
                    {technique.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className="w-2 h-2 bg-teal-green rounded-full group-hover/item:bg-electric-blue transition-colors duration-200"></div>
                        <span className="text-sm text-foreground group-hover/item:text-teal-green transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              RCA expertise across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Solve Problems Effectively?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Start Your RCA Investigation Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our experts help you identify root causes and implement effective solutions that prevent recurrence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              START INVESTIGATION
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RootCauseAnalysis
