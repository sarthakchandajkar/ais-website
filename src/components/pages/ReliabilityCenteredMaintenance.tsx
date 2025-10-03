'use client'

import React from 'react'
import { 
  Shield, 
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
  Brain,
  TestTube,
  Package,
  UserCheck,
  Zap,
  Gauge,
  Database,
  Cpu
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ReliabilityCenteredMaintenance = () => {
  const rcmSteps = [
    {
      step: '1',
      title: 'System Selection & Function Analysis',
      description: 'Identify critical systems and define their primary and secondary functions in the current operating context.',
      icon: Target,
      details: [
        'System boundary definition',
        'Function identification and prioritization',
        'Performance standards establishment',
        'Operating context analysis'
      ]
    },
    {
      step: '2',
      title: 'Failure Mode Analysis',
      description: 'Systematically identify all possible failure modes that could affect system functions.',
      icon: AlertTriangle,
      details: [
        'Failure mode identification',
        'Failure cause analysis',
        'Failure effect documentation',
        'Failure frequency assessment'
      ]
    },
    {
      step: '3',
      title: 'Failure Effects Analysis',
      description: 'Analyze the consequences of each failure mode on system performance and safety.',
      icon: BarChart3,
      details: [
        'Local effect analysis',
        'System effect evaluation',
        'End effect assessment',
        'Safety impact analysis'
      ]
    },
    {
      step: '4',
      title: 'Failure Consequences Classification',
      description: 'Categorize failures based on their impact on safety, environment, and operations.',
      icon: Shield,
      details: [
        'Safety consequence classification',
        'Environmental impact assessment',
        'Operational consequence evaluation',
        'Economic impact analysis'
      ]
    },
    {
      step: '5',
      title: 'Maintenance Strategy Selection',
      description: 'Select the most appropriate maintenance strategy for each failure mode.',
      icon: Settings,
      details: [
        'Preventive maintenance selection',
        'Predictive maintenance implementation',
        'Condition-based maintenance planning',
        'Run-to-failure decisions'
      ]
    },
    {
      step: '6',
      title: 'Implementation & Monitoring',
      description: 'Implement selected strategies and establish monitoring systems for continuous improvement.',
      icon: Activity,
      details: [
        'Maintenance task implementation',
        'Performance monitoring setup',
        'Data collection systems',
        'Continuous improvement processes'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Optimized Maintenance Costs',
      description: 'Reduce unnecessary maintenance activities while ensuring critical systems remain reliable.',
      metric: '30-50%'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Systematic identification and mitigation of safety-critical failure modes.',
      metric: '99.9%'
    },
    {
      icon: Clock,
      title: 'Improved Availability',
      description: 'Maximize equipment uptime through strategic maintenance planning.',
      metric: '95%+'
    },
    {
      icon: Database,
      title: 'Data-Driven Decisions',
      description: 'Make informed maintenance decisions based on comprehensive failure analysis.',
      metric: '100%'
    }
  ]

  const methodologies = [
    {
      icon: Target,
      title: 'Failure Modes & Effects Analysis (FMEA)',
      description: 'Systematic approach to identify potential failure modes and their effects on system performance.',
      features: [
        'Comprehensive failure mode identification',
        'Effect severity assessment',
        'Cause analysis and prioritization',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: BarChart3,
      title: 'Criticality Analysis',
      description: 'Prioritize maintenance activities based on failure consequences and frequency.',
      features: [
        'Failure consequence evaluation',
        'Frequency analysis',
        'Criticality ranking',
        'Resource allocation optimization'
      ]
    },
    {
      icon: Settings,
      title: 'Maintenance Strategy Optimization',
      description: 'Select the most cost-effective maintenance approach for each failure mode.',
      features: [
        'Strategy selection criteria',
        'Cost-benefit analysis',
        'Risk assessment',
        'Implementation planning'
      ]
    }
  ]

  const industries = [
    { name: 'Oil & Gas', icon: Zap, description: 'Critical equipment reliability in harsh environments' },
    { name: 'Manufacturing', icon: Cpu, description: 'Production line optimization and uptime maximization' },
    { name: 'Power Generation', icon: Gauge, description: 'Grid stability and power plant reliability' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft safety and operational efficiency' },
    { name: 'Marine', icon: Package, description: 'Vessel reliability and maritime safety' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment reliability in extreme conditions' }
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
              <Shield className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Reliability Engineering Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Reliability-Centered <span className="text-teal-green dark:text-electric-blue hero-text-accent">Maintenance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            A systematic approach to maintenance that ensures systems continue to perform their required functions while optimizing costs and maximizing reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              GET STARTED TODAY
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 uppercase tracking-wide text-xs sm:text-sm md:text-base">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </section>

      {/* What is RCM Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Reliability-Centered Maintenance?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Reliability-Centered Maintenance (RCM) is a systematic approach to maintenance that focuses on ensuring that systems continue to perform their required functions in their present operating context. It integrates reactive, preventive, and predictive maintenance practices to optimize reliability and cost-effectiveness.
                </p>
                <p>
                  RCM methodology systematically identifies potential failure modes, assesses their effects, and determines the most effective maintenance strategies to mitigate these failures. This approach ensures that maintenance resources are allocated where they provide the greatest value.
                </p>
                <p>
                  Unlike traditional maintenance approaches that rely on time-based schedules, RCM focuses on the consequences of failure and selects maintenance strategies that are appropriate for the specific failure modes and their effects.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-electric-blue hover:bg-blue-700 text-white">
                  Learn More About Our RCM Process
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Systematic Approach</h3>
                    <p className="text-sm text-steel-gray">Structured methodology for maintenance optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Risk-Based</h3>
                    <p className="text-sm text-steel-gray">Focus on safety and environmental consequences</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Cost-Effective</h3>
                    <p className="text-sm text-steel-gray">Optimize maintenance spending and resources</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Performance-Focused</h3>
                    <p className="text-sm text-steel-gray">Maximize system reliability and availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Process Steps */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Our RCM Process
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A comprehensive 6-step methodology that ensures systematic analysis and optimal maintenance strategy selection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rcmSteps.map((step, index) => (
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
              RCM Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your maintenance operations with proven RCM methodologies
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
              RCM Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Advanced analytical tools and techniques for comprehensive maintenance optimization
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

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              RCM expertise across diverse industries and critical applications
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
            Implement RCM Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our experts help you achieve optimal equipment performance and operational excellence through proven RCM methodologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-blue text-white border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide text-xs sm:text-sm md:text-base">
              GET STARTED TODAY
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

export default ReliabilityCenteredMaintenance
