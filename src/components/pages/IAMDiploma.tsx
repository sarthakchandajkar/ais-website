'use client'

import React from 'react'
import { 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Clock,
  BookOpen,
  Target,
  Shield,
  Building,
  Star,
  Trophy,
  Calendar,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BarChart3,
  FileText,
  Activity,
  Settings,
  Database,
  LineChart,
  Gauge,
  Monitor,
  Smartphone,
  Cloud,
  Video,
  Laptop,
  Star as StarIcon,
  Trophy as TrophyIcon,
  Calendar as CalendarIcon,
  Download as DownloadIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as Location,
  ExternalLink as Link
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const IAMDiploma = () => {
  const modules = [
    {
      title: 'Principles of Asset Management',
      description: 'Foundational concepts and principles that underpin effective asset management practices.',
      icon: Building
    },
    {
      title: 'Asset Management Policy, Strategy & Planning',
      description: 'Developing comprehensive policies and strategic planning frameworks for asset management.',
      icon: Target
    },
    {
      title: 'Managing Asset Life Cycle Decisions and Activities',
      description: 'Strategic decision-making throughout the entire asset lifecycle from acquisition to disposal.',
      icon: Activity
    },
    {
      title: 'Assessing and Managing Asset Management Risks',
      description: 'Risk identification, assessment, and mitigation strategies in asset management contexts.',
      icon: Shield
    },
    {
      title: 'Finance and Business Impact',
      description: 'Financial aspects of asset management including cost-benefit analysis and value realization.',
      icon: BarChart3
    },
    {
      title: 'Practice of Asset Management',
      description: 'Practical implementation of asset management principles in real-world scenarios.',
      icon: Settings
    },
    {
      title: 'Asset Management Information & Knowledge',
      description: 'Information systems and knowledge management for effective asset management.',
      icon: Database
    },
    {
      title: 'Sustainable Asset Care & Performance',
      description: 'Sustainability considerations and performance optimization in asset management.',
      icon: TrendingUp
    },
    {
      title: 'Managing Change in Asset Management Systems and Capabilities',
      description: 'Change management strategies for evolving asset management systems and capabilities.',
      icon: Settings
    },
    {
      title: 'Contractor and Supplier Management',
      description: 'Effective management of external contractors and suppliers in asset management.',
      icon: Users
    },
    {
      title: 'Demand Forecasting and Capital Expenditure Planning',
      description: 'Forecasting techniques and capital planning for asset management investments.',
      icon: LineChart
    },
    {
      title: 'Methods for Realizing Whole Life Value from Assets',
      description: 'Strategies for maximizing value throughout the entire asset lifecycle.',
      icon: Trophy
    }
  ]

  const benefits = [
    {
      icon: Award,
      title: 'Advanced Qualification',
      description: 'Recognized as the highest level of asset management qualification by industry professionals worldwide.'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Internationally recognized certification that enhances career prospects across multiple industries.'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Opens doors to senior management and specialist roles in asset management organizations.'
    },
    {
      icon: Users,
      title: 'Professional Network',
      description: 'Access to a global network of asset management professionals and industry experts.'
    },
    {
      icon: Shield,
      title: 'Enhanced Credibility',
      description: 'Demonstrates advanced knowledge and expertise in asset management principles and practices.'
    },
    {
      icon: Star,
      title: 'Competitive Advantage',
      description: 'Provides a significant competitive edge in the job market and professional development.'
    }
  ]

  const examDetails = [
    {
      title: 'Exam Duration',
      value: '3 hours',
      icon: Clock
    },
    {
      title: 'Question Format',
      value: '70 Multiple Choice',
      icon: FileText
    },
    {
      title: 'Passing Score',
      value: '65% Overall',
      icon: Target
    },
    {
      title: 'Distinction Score',
      value: '75% Overall',
      icon: Trophy
    },
    {
      title: 'Minimum per Module',
      value: '50% Each',
      icon: CheckCircle
    },
    {
      title: 'Study Hours',
      value: '200+ Recommended',
      icon: BookOpen
    }
  ]

  const stats = [
    { number: '12', label: 'Compulsory Modules', icon: BookOpen },
    { number: '200+', label: 'Study Hours', icon: Clock },
    { number: '70', label: 'Exam Questions', icon: FileText },
    { number: '65%', label: 'Passing Score', icon: Target }
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
                  <span className="text-sm font-medium text-white">Advanced Qualification</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">IAM Diploma</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Institute of Asset Management Diploma - The highest level qualification for asset management professionals seeking advanced expertise and career advancement
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building className="w-20 h-20 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">IAM Diploma</h3>
                    <p className="text-lg opacity-90">Advanced Asset Management</p>
                  </div>
                </div>
              </div>
              
              {/* Visual overlay elements */}
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

      {/* Program Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Program Overview
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              The IAM Diploma is an advanced qualification designed for professionals with prior knowledge and experience in asset management, emphasizing both breadth and depth of understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-sans font-bold text-foreground mb-6">
                Who Should Pursue the IAM Diploma?
              </h3>
              <p className="text-lg text-steel-gray dark:text-muted-foreground leading-relaxed mb-6">
                This qualification is tailored for individuals preparing for specialist or management roles in asset management. While there are no formal entry requirements, candidates are expected to have a foundational understanding of asset management concepts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-electric-blue to-teal-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Asset Management Professionals</h4>
                    <p className="text-steel-gray dark:text-muted-foreground text-sm">Seeking advanced qualifications for career progression</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-electric-blue to-teal-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Senior Managers</h4>
                    <p className="text-steel-gray dark:text-muted-foreground text-sm">Looking to enhance their strategic asset management capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-electric-blue to-teal-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Consultants & Advisors</h4>
                    <p className="text-steel-gray dark:text-muted-foreground text-sm">Providing expert asset management guidance to organizations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 shadow-2xl">
              <h4 className="text-2xl font-sans font-bold text-foreground mb-6 text-center">Key Features</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700 rounded-xl">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Advanced Level</div>
                    <div className="text-sm text-steel-gray dark:text-muted-foreground">Highest qualification</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700 rounded-xl">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Global Recognition</div>
                    <div className="text-sm text-steel-gray dark:text-muted-foreground">Internationally recognized</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700 rounded-xl">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Professional Network</div>
                    <div className="text-sm text-steel-gray dark:text-muted-foreground">Access to global community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Details Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Examination Details
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive assessment covering all aspects of advanced asset management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examDetails.map((detail, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <detail.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {detail.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-3xl font-bold text-electric-blue mb-2">{detail.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Compulsory Modules
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              The examination covers 12 compulsory modules across the full spectrum of asset management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-sans font-bold text-foreground mb-2">
                        {module.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Career Benefits
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Unlock new opportunities and advance your career with the IAM Diploma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
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
            Start Your IAM Diploma Journey
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Join thousands of professionals who have advanced their careers with the IAM Diploma
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
              Enroll Now
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IAMDiploma



