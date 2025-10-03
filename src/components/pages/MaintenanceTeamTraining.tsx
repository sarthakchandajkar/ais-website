'use client'

import React from 'react'
import { 
  UserCheck, 
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
  GraduationCap,
  BookOpen,
  Video,
  Headphones,
  Star,
  Brain
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MaintenanceTeamTraining = () => {
  const trainingFeatures = [
    {
      step: '1',
      title: 'System Training',
      description: 'Comprehensive training on predictive maintenance systems, tools, and technologies.',
      icon: Monitor,
      details: [
        'Platform navigation',
        'Dashboard interpretation',
        'Alert management',
        'Report generation'
      ]
    },
    {
      step: '2',
      title: 'Data Interpretation',
      description: 'Advanced training on analyzing and interpreting predictive maintenance data and insights.',
      icon: BarChart3,
      details: [
        'Data analysis techniques',
        'Trend identification',
        'Pattern recognition',
        'Statistical interpretation'
      ]
    },
    {
      step: '3',
      title: 'Alert Response',
      description: 'Training on proper response procedures for maintenance alerts and critical notifications.',
      icon: AlertTriangle,
      details: [
        'Alert prioritization',
        'Response protocols',
        'Escalation procedures',
        'Emergency protocols'
      ]
    },
    {
      step: '4',
      title: 'Best Practices',
      description: 'Industry best practices and proven methodologies for effective predictive maintenance.',
      icon: Star,
      details: [
        'Industry standards',
        'Proven methodologies',
        'Quality procedures',
        'Continuous improvement'
      ]
    },
    {
      step: '5',
      title: 'Certification Programs',
      description: 'Professional certification programs with globally recognized credentials and standards.',
      icon: Award,
      details: [
        'CMRP certification',
        'SMRP standards',
        'Industry certifications',
        'Skill validation'
      ]
    },
    {
      step: '6',
      title: 'Ongoing Support',
      description: 'Continuous support and advanced training to keep teams updated with latest technologies.',
      icon: Users,
      details: [
        'Regular updates',
        'Advanced training',
        'Technical support',
        'Knowledge sharing'
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description: 'Well-trained teams operate more efficiently and effectively with predictive maintenance systems.',
      metric: '40%'
    },
    {
      icon: Shield,
      title: 'Reduced Errors',
      description: 'Proper training reduces human errors and improves maintenance quality and reliability.',
      metric: '60%'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Certification programs enhance team skills and career development opportunities.',
      metric: '100%'
    },
    {
      icon: Database,
      title: 'Knowledge Retention',
      description: 'Comprehensive training ensures long-term knowledge retention and skill development.',
      metric: '90%'
    }
  ]

  const capabilities = [
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Comprehensive training curricula designed for different skill levels and roles.',
      features: [
        'Beginner to advanced levels',
        'Role-specific training',
        'Hands-on workshops',
        'Online learning modules'
      ]
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Professional certification programs with industry-recognized credentials.',
      features: [
        'CMRP certification',
        'SMRP standards training',
        'Industry certifications',
        'Skill assessments'
      ]
    },
    {
      icon: Users,
      title: 'Team Development',
      description: 'Customized team development programs that enhance collaboration and effectiveness.',
      features: [
        'Team building exercises',
        'Collaborative training',
        'Knowledge sharing',
        'Mentorship programs'
      ]
    }
  ]

  const industries = [
    { name: 'Manufacturing', icon: Cpu, description: 'Production team training and development' },
    { name: 'Oil & Gas', icon: Zap, description: 'Critical asset maintenance training' },
    { name: 'Power Generation', icon: Gauge, description: 'Power plant maintenance education' },
    { name: 'Aviation', icon: Globe, description: 'Aircraft maintenance training' },
    { name: 'Marine', icon: Package, description: 'Maritime maintenance education' },
    { name: 'Mining', icon: Wrench, description: 'Heavy equipment maintenance training' }
  ]

  const technologies = [
    {
      icon: Video,
      title: 'E-Learning',
      description: 'Online learning platforms and video-based training modules'
    },
    {
      icon: BookOpen,
      title: 'Learning Management',
      description: 'Comprehensive learning management systems for training delivery'
    },
    {
      icon: Headphones,
      title: 'Virtual Training',
      description: 'Virtual reality and augmented reality training experiences'
    },
    {
      icon: Award,
      title: 'Assessment Tools',
      description: 'Advanced assessment and certification management systems'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Collaborative learning and knowledge sharing platforms'
    },
    {
      icon: Cloud,
      title: 'Cloud Learning',
      description: 'Cloud-based training delivery and management systems'
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
              <UserCheck className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Professional Development Excellence</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black leading-tight mb-6 text-white hero-text">
            Maintenance Team <span className="text-teal-green dark:text-electric-blue hero-text-accent">Training</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-4xl mx-auto">
            Comprehensive training programs to equip maintenance teams with the skills needed to effectively use predictive maintenance systems and achieve operational excellence.
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

      {/* What is Maintenance Team Training Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
                What is Maintenance Team Training?
              </h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  Maintenance Team Training is a comprehensive professional development program designed to equip maintenance teams with the knowledge, skills, and expertise needed to effectively implement and utilize predictive maintenance systems. Our training programs combine theoretical knowledge with practical hands-on experience.
                </p>
                <p>
                  The training covers system operation, data interpretation, alert response procedures, and industry best practices. We offer certification programs with globally recognized credentials that validate team members' expertise and enhance their professional development.
                </p>
                <p>
                  Our ongoing support ensures that teams stay updated with the latest technologies and methodologies, enabling them to maximize the value of predictive maintenance investments and achieve optimal operational results.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-teal-green/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Professional Training</h3>
                    <p className="text-sm text-steel-gray">Comprehensive skill development</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Certification</h3>
                    <p className="text-sm text-steel-gray">Industry-recognized credentials</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Team Development</h3>
                    <p className="text-sm text-steel-gray">Collaborative learning</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-foreground mb-2">Best Practices</h3>
                    <p className="text-sm text-steel-gray">Industry standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-black text-foreground mb-6">
              Training Features
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training programs designed to enhance team capabilities and effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingFeatures.map((feature, index) => (
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
              Training Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Transform your maintenance teams with comprehensive training and development programs
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
              Advanced training methodologies and technologies powering our team development programs
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
              Cutting-edge technologies that power our training and development programs
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
              Training and development solutions across diverse industries and critical applications
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
              <span className="text-sm font-medium text-white">Ready to Train Your Team?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-black text-white mb-6 hero-text">
            Implement Team Training Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our comprehensive training programs help your team master predictive maintenance technologies
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

export default MaintenanceTeamTraining
