'use client'

import React from 'react'
import { 
  GraduationCap, 
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
  BookOpen,
  Certificate,
  Video,
  Headphones,
  Laptop,
  PresentationChart,
  UserPlus,
  Star,
  Trophy,
  Calendar,
  Download,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ProfessionalTraining = () => {
  const services = [
    {
      icon: Certificate,
      title: 'CMRP Certification Program',
      description: 'Comprehensive Certified Maintenance & Reliability Professional certification program designed to enhance technical expertise and career advancement.',
      features: [
        'Exam Preparation',
        'Study Materials',
        'Practice Tests',
        'Expert Instructors',
        'Certification Support',
        'Career Guidance'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    {
      icon: BookOpen,
      title: 'SMRP Standards Training',
      description: 'Society for Maintenance & Reliability Professionals standards training covering best practices and industry guidelines.',
      features: [
        'SMRP Body of Knowledge',
        'Industry Standards',
        'Best Practices',
        'Case Studies',
        'Practical Applications',
        'Continuous Learning'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    {
      icon: Target,
      title: 'RCA Methodology Training',
      description: 'Comprehensive Root Cause Analysis training program covering systematic investigation techniques and problem-solving methodologies.',
      features: [
        '5-Why Analysis',
        'Fishbone Diagrams',
        'Fault Tree Analysis',
        'Event Analysis',
        'Corrective Actions',
        'Prevention Strategies'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    {
      icon: Settings,
      title: 'RCM Implementation Program',
      description: 'Reliability Centered Maintenance implementation training covering strategy development and maintenance optimization techniques.',
      features: [
        'RCM Principles',
        'Strategy Development',
        'Implementation Planning',
        'Performance Monitoring',
        'Cost Optimization',
        'Team Training'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    {
      icon: Video,
      title: 'Online Learning Platform',
      description: 'Comprehensive online learning platform with interactive courses, video tutorials, and self-paced learning modules.',
      features: [
        'Interactive Courses',
        'Video Tutorials',
        'Self-Paced Learning',
        'Progress Tracking',
        'Mobile Access',
        '24/7 Availability'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    {
      icon: PresentationChart,
      title: 'Custom Training Solutions',
      description: 'Tailored training programs designed specifically for your organization\'s needs and industry requirements.',
      features: [
        'Needs Assessment',
        'Custom Curriculum',
        'Industry-Specific Content',
        'Flexible Scheduling',
        'On-Site Training',
        'Follow-up Support'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    {
      icon: Headphones,
      title: 'Virtual Training Sessions',
      description: 'Live virtual training sessions with expert instructors providing real-time interaction and hands-on learning experiences.',
      features: [
        'Live Sessions',
        'Expert Instructors',
        'Real-time Interaction',
        'Hands-on Exercises',
        'Q&A Sessions',
        'Recording Access'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    {
      icon: UserPlus,
      title: 'Team Development Programs',
      description: 'Comprehensive team development programs focused on building collaborative skills and technical expertise across your organization.',
      features: [
        'Team Building',
        'Collaborative Learning',
        'Skill Development',
        'Leadership Training',
        'Communication Skills',
        'Project Management'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    {
      icon: Trophy,
      title: 'Certification Support',
      description: 'Complete certification support including exam preparation, study materials, and ongoing guidance throughout the certification process.',
      features: [
        'Exam Preparation',
        'Study Materials',
        'Mock Exams',
        'Personal Mentoring',
        'Progress Tracking',
        'Success Guarantee'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    }
  ]

  const methodologies = [
    {
      icon: BookOpen,
      title: 'Blended Learning',
      description: 'Combination of online and offline learning methods to provide comprehensive and flexible training experiences.'
    },
    {
      icon: Users,
      title: 'Interactive Sessions',
      description: 'Hands-on, interactive training sessions that encourage participation and practical application of knowledge.'
    },
    {
      icon: Video,
      title: 'Digital Learning',
      description: 'Modern digital learning platforms with multimedia content and self-paced learning capabilities.'
    },
    {
      icon: Award,
      title: 'Certification Focus',
      description: 'Industry-recognized certification programs that enhance professional credibility and career advancement.'
    }
  ]

  const certifications = [
    { name: 'CMRP', description: 'Certified Maintenance & Reliability Professional - Industry standard certification' },
    { name: 'SMRP', description: 'Society for Maintenance & Reliability Professionals - Professional membership and standards' },
    { name: 'ISO 55000', description: 'Asset Management - International standard for asset management systems' },
    { name: 'RCA', description: 'Root Cause Analysis - Systematic problem-solving methodology certification' },
    { name: 'RCM', description: 'Reliability Centered Maintenance - Maintenance strategy development certification' },
    { name: 'FMEA', description: 'Failure Mode and Effects Analysis - Risk assessment methodology certification' }
  ]

  const stats = [
    { number: '95%', label: 'Certification Success Rate', icon: Trophy },
    { number: '500+', label: 'Professionals Trained', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Student Satisfaction', icon: Star }
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
                  <span className="text-sm font-medium text-white">Professional Training Excellence</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Professional Training</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                World-class certification programs and training solutions designed to enhance your professional skills and advance your career in maintenance and reliability
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Our Programs
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
                  title="Professional Training Programs Overview"
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
              Our Training Programs
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training solutions designed to enhance professional skills and advance careers in maintenance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="h-1 bg-white/20"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
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
                    <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
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
              Proven training approaches and methodologies that ensure effective learning and skill development
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

      {/* Certifications & Standards Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8">
                Certifications & Standards
              </h2>
              <p className="text-lg text-steel-gray dark:text-muted-foreground leading-relaxed mb-8">
                Our training programs are aligned with industry-recognized certifications and international standards for professional development.
              </p>
              <div className="space-y-4">
                {certifications.map((certification, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg group hover:bg-electric-blue/10 transition-colors duration-200">
                    <div className="w-2 h-2 bg-electric-blue rounded-full group-hover:bg-teal-green transition-colors duration-200 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-200">{certification.name}</h4>
                      <p className="text-steel-gray dark:text-muted-foreground text-sm">{certification.description}</p>
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
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our Training</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Expert Instructors</h4>
                        <p className="text-white/90 text-sm">Industry experts with years of practical experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Success</h4>
                        <p className="text-white/90 text-sm">95% certification success rate and high student satisfaction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Flexible Learning</h4>
                        <p className="text-white/90 text-sm">Online, offline, and blended learning options</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Career Support</h4>
                        <p className="text-white/90 text-sm">Ongoing career guidance and professional development</p>
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
              A systematic approach to delivering exceptional training results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Evaluation of current skills and identification of training needs' },
              { step: '02', title: 'Planning', description: 'Development of customized training curriculum and learning path' },
              { step: '03', title: 'Delivery', description: 'Interactive training delivery with expert instructors and hands-on practice' },
              { step: '04', title: 'Certification', description: 'Assessment, certification, and ongoing support for career advancement' }
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
              <span className="text-sm font-medium text-white">Ready to Advance Your Career?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Start Your Professional Development Journey
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Join thousands of professionals who have advanced their careers with our world-class training programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
              Enroll Now
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

export default ProfessionalTraining
