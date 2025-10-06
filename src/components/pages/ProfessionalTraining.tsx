'use client'

import React from 'react'
import { 
  GraduationCap, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Settings,
  Wrench,
  Activity,
  Shield,
  Gauge,
  BookOpen,
  Video,
  Star,
  Trophy,
  Building,
  Car,
  RotateCcw,
  CircuitBoard,
  Droplets,
  Thermometer,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ProfessionalTraining = () => {
  const services = [
    // IAM Programs
    {
      icon: Building,
      title: 'IAM Diploma',
      subtitle: 'Institute of Asset Management Diploma',
      description: 'Master comprehensive strategic asset management principles and practices. Develop expertise in asset lifecycle optimization, risk management, and performance enhancement to become a certified asset management specialist.',
      level: 'Advanced',
      duration: '150+ hours',
      features: [
        'Strategic Asset Management',
        'Lifecycle Optimization',
        'Risk Management',
        'Performance Measurement',
        'Stakeholder Management',
        'Program Leadership'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    {
      icon: Award,
      title: 'IAM Certification',
      subtitle: 'Institute of Asset Management Certification',
      description: 'Master fundamental asset management principles and practices. Develop essential skills in asset lifecycle management, risk assessment, and performance optimization to become a certified asset management professional.',
      level: 'Foundation',
      duration: '80+ hours',
      features: [
        'Asset Management Fundamentals',
        'Lifecycle Management',
        'Risk Assessment',
        'Performance Measurement',
        'Stakeholder Engagement',
        'Program Participation'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    // RCM2 Programs
    {
      icon: Settings,
      title: 'RCM2 Introductory Course',
      subtitle: 'Reliability Centered Maintenance Fundamentals',
      description: 'Master the fundamentals of Reliability Centered Maintenance (RCM2) methodology. Learn to develop effective maintenance strategies that optimize equipment reliability and reduce costs.',
      level: 'Foundation',
      duration: '32 hours',
      features: [
        'RCM2 Fundamentals',
        'Failure Analysis',
        'Maintenance Task Selection',
        'RCM2 Implementation',
        'Practical Exercises',
        'Industry Applications'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    {
      icon: Users,
      title: 'RCM2 Facilitator Training',
      subtitle: 'Advanced RCM2 Facilitation Skills',
      description: 'Become a certified RCM2 facilitator and lead maintenance strategy development initiatives. Master advanced facilitation skills and become an expert in RCM2 program implementation.',
      level: 'Advanced',
      duration: '52 hours',
      features: [
        'Advanced RCM2 Theory',
        'Facilitation Skills',
        'Study Management',
        'Complex Applications',
        'Practical Facilitation',
        'Program Leadership'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    // Vibration Analysis Programs
    {
      icon: Activity,
      title: 'Vibration Training CAT I',
      subtitle: 'ISO 18436-2 Category I Certification',
      description: 'Master the fundamentals of vibration analysis with our ISO 18436-2 Category I certification program. Learn to collect data, identify basic faults, and start your journey in predictive maintenance.',
      level: 'Foundation',
      duration: '40 hours',
      features: [
        'Vibration Fundamentals',
        'Data Collection',
        'Basic Analysis',
        'Equipment Applications',
        'Safety & Standards',
        'Hands-on Training'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    {
      icon: Activity,
      title: 'Vibration Training CAT II',
      subtitle: 'ISO 18436-2 Category II Certification',
      description: 'Advance your vibration analysis expertise with our ISO 18436-2 Category II certification program. Master complex fault diagnosis, program leadership, and advanced analysis techniques.',
      level: 'Advanced',
      duration: '60 hours',
      features: [
        'Advanced Signal Processing',
        'Complex Fault Diagnosis',
        'Program Management',
        'Advanced Applications',
        'Team Leadership',
        'Expert Training'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    // MLA Programs
    {
      icon: Droplets,
      title: 'MLA Level I Training',
      subtitle: 'ISO 18436-4 Machine Lubricant Analyst Level I',
      description: 'Master the fundamentals of lubricant analysis with our ISO 18436-4 Level I certification program. Learn to perform basic oil analysis, identify contamination, and optimize lubrication programs.',
      level: 'Foundation',
      duration: '44 hours',
      features: [
        'Lubrication Fundamentals',
        'Contamination Control',
        'Basic Oil Analysis',
        'Lubricant Selection',
        'Sampling & Documentation',
        'Laboratory Training'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    {
      icon: Droplets,
      title: 'MLA Level II Training',
      subtitle: 'ISO 18436-4 Machine Lubricant Analyst Level II',
      description: 'Advance your lubricant analysis expertise with our ISO 18436-4 Level II certification program. Master advanced analysis techniques, complex failure diagnosis, and program management.',
      level: 'Advanced',
      duration: '60 hours',
      features: [
        'Advanced Lubricant Chemistry',
        'Advanced Analysis Techniques',
        'Failure Analysis',
        'Program Management',
        'Specialized Applications',
        'Expert Training'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    // MCA Programs
    {
      icon: CircuitBoard,
      title: 'MCA Level I Training',
      subtitle: 'Motor Circuit Analysis & Electrical Signature Analysis Level I',
      description: 'Master the fundamentals of motor circuit analysis and electrical signature analysis. Learn to identify electrical faults, diagnose motor problems, and enhance your predictive maintenance capabilities.',
      level: 'Foundation',
      duration: '48 hours',
      features: [
        'Electrical Fundamentals',
        'Motor Circuit Analysis',
        'Electrical Signature Analysis',
        'Fault Detection',
        'Testing Procedures',
        'Hands-on Training'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    {
      icon: CircuitBoard,
      title: 'MCA Level II Training',
      subtitle: 'Motor Circuit Analysis & Electrical Signature Analysis Level II',
      description: 'Advance your electrical analysis expertise with our Level II certification program. Master complex motor circuit analysis, advanced electrical signature analysis, and program leadership skills.',
      level: 'Advanced',
      duration: '64 hours',
      features: [
        'Advanced Electrical Theory',
        'Advanced Circuit Analysis',
        'Advanced Signature Analysis',
        'Complex Fault Diagnosis',
        'Program Management',
        'Expert Training'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    // CBM Program
    {
      icon: Gauge,
      title: 'CBM Basic Level',
      subtitle: 'Condition Based Maintenance for Plant Assets',
      description: 'Master the fundamentals of condition-based maintenance for plant assets. Learn to implement CBM programs, use condition monitoring techniques, and optimize maintenance strategies for better equipment reliability.',
      level: 'Foundation',
      duration: '44 hours',
      features: [
        'CBM Fundamentals',
        'Condition Monitoring Techniques',
        'Data Collection & Analysis',
        'CBM Implementation',
        'Maintenance Integration',
        'Practical Applications'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    // ARP Programs
    {
      icon: Shield,
      title: 'ARP-A Certification',
      subtitle: 'Asset Reliability Practitioner - Advocate',
      description: 'Become a certified advocate for asset reliability within your organization. Learn to promote reliability culture, communicate effectively about reliability topics, and support reliability improvement initiatives.',
      level: 'Foundation',
      duration: '32 hours',
      features: [
        'Reliability Fundamentals',
        'Reliability Analysis',
        'Communication Skills',
        'Reliability Culture',
        'Advocacy Techniques',
        'Team Building'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    {
      icon: Shield,
      title: 'ARP-E Certification',
      subtitle: 'Asset Reliability Practitioner - Engineer',
      description: 'Advance your reliability engineering expertise with our ARP-E certification program. Master advanced reliability analysis, program design, and team leadership skills for comprehensive asset reliability management.',
      level: 'Advanced',
      duration: '60 hours',
      features: [
        'Advanced Reliability Theory',
        'Reliability Program Design',
        'Advanced Analysis Techniques',
        'Program Management',
        'Specialized Applications',
        'Team Leadership'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    // Specialist Programs
    {
      icon: RotateCcw,
      title: 'Balancing & Alignment',
      subtitle: 'Precision Maintenance Techniques',
      description: 'Master the art of precision balancing and alignment for rotating equipment. Learn to use advanced equipment and techniques to eliminate vibration problems and optimize machinery performance.',
      level: 'Specialist',
      duration: '44 hours',
      features: [
        'Balancing Fundamentals',
        'Alignment Fundamentals',
        'Balancing Equipment',
        'Alignment Equipment',
        'Practical Applications',
        'Quality Control'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    {
      icon: Shield,
      title: 'TÜV Functional Safety',
      subtitle: 'TÜV RHEINLAND Functional Safety Training',
      description: 'Master functional safety principles and earn internationally recognized TÜV RHEINLAND certification. Learn to design, implement, and manage functional safety systems for critical applications.',
      level: 'Expert',
      duration: '56 hours',
      features: [
        'Functional Safety Fundamentals',
        'Safety Standards & Regulations',
        'Safety System Design',
        'Risk Assessment & Analysis',
        'Implementation & Validation',
        'International Certification'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    {
      icon: Wrench,
      title: 'Rotating Equipment Course',
      subtitle: 'Operation & Maintenance Of Main Rotating Equipment',
      description: 'Master the operation and maintenance of critical rotating equipment including pumps, compressors, turbines, and motors. Learn advanced troubleshooting techniques and optimization strategies.',
      level: 'Specialist',
      duration: '72 hours',
      features: [
        'Equipment Fundamentals',
        'Pumps & Compressors',
        'Turbines & Engines',
        'Motors & Generators',
        'Bearings & Seals',
        'Troubleshooting & Diagnostics'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    // Advanced Certifications
    {
      icon: Award,
      title: 'CAMA Certification',
      subtitle: 'Certified Asset Management Assessor',
      description: 'The CAMA certification is the highest level credential for asset management professionals. This advanced program covers strategic asset management, risk assessment, and optimization strategies.',
      level: 'Expert',
      duration: '8 months',
      features: [
        'Asset Management Strategy',
        'Risk Assessment & Mitigation',
        'Performance Metrics & KPIs',
        'Lifecycle Cost Analysis',
        'Asset Optimization Techniques',
        'Regulatory Compliance'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    {
      icon: Trophy,
      title: 'CMRP Certification',
      subtitle: 'Certified Maintenance & Reliability Professional',
      description: 'The CMRP certification is the premier credential for maintenance and reliability professionals. This comprehensive program covers all aspects of maintenance and reliability management.',
      level: 'Professional',
      duration: '6 months',
      features: [
        'Asset Management Fundamentals',
        'Maintenance Planning & Scheduling',
        'Work Management Systems',
        'Reliability Analysis & Improvement',
        'Maintenance Strategy Development',
        'Performance Measurement & KPIs'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    {
      icon: Wrench,
      title: 'CMRT Certification',
      subtitle: 'Certified Maintenance & Reliability Technician',
      description: 'The CMRT certification focuses on hands-on technical skills for maintenance technicians. This program emphasizes practical applications and real-world problem-solving.',
      level: 'Technician',
      duration: '4 months',
      features: [
        'Preventive Maintenance Strategies',
        'Equipment Troubleshooting Techniques',
        'Safety Protocols & Procedures',
        'Lubrication & Fluid Management',
        'Vibration Analysis Basics',
        'Root Cause Analysis'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    // Specialized Programs
    {
      icon: Thermometer,
      title: 'Infrared Thermography',
      subtitle: 'Level I & II Certification',
      description: 'Professional thermography training for electrical and mechanical inspections. Master thermal imaging techniques, heat pattern analysis, and comprehensive inspection methodologies.',
      level: 'Specialist',
      duration: '2 months',
      features: [
        'Thermal Imaging',
        'Heat Patterns',
        'Electrical Inspection',
        'Report Writing',
        'Safety Protocols',
        'Equipment Operation'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    {
      icon: Droplets,
      title: 'Lube Oil Analysis',
      subtitle: 'Tribology & Oil Analysis',
      description: 'Specialized training in lubricant analysis and tribological principles. Learn advanced oil testing techniques, contamination analysis, and wear pattern identification.',
      level: 'Specialist',
      duration: '3 months',
      features: [
        'Oil Testing',
        'Contamination Analysis',
        'Wear Patterns',
        'Lubrication Programs',
        'Laboratory Techniques',
        'Failure Prevention'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    // Professional Programs
    {
      icon: Award,
      title: 'ASQ CRE Certification',
      subtitle: 'Certified Reliability Engineer',
      description: 'Advanced certification in reliability engineering principles and practices for product and system enhancement. Master performance evaluation and prediction to enhance safety, reliability, and maintainability.',
      level: 'Professional',
      duration: '6 months',
      features: [
        'Reliability Analysis',
        'Failure Mode Analysis',
        'Reliability Testing',
        'Program Management',
        'Design for Reliability',
        'Lifecycle Management'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
    },
    {
      icon: Users,
      title: 'Prosci Change Management',
      subtitle: 'Certified Change Management Specialist',
      description: 'World-class certification program that equips you with tools, expertise, and ongoing support to lead successful organizational change using Prosci\'s proven methodology and ADKAR Model.',
      level: 'Professional',
      duration: '3-5 days',
      features: [
        'ADKAR Model Mastery',
        '3-Phase Process',
        'Change Management Planning',
        'Organizational Change',
        'Project Application',
        'Global Network Access'
      ],
      gradient: 'from-sky-500 to-blue-600',
      accent: 'sky-500'
    },
    {
      icon: TrendingUp,
      title: 'Asset Performance Management',
      subtitle: 'APM Certification',
      description: 'Master the art of optimizing asset reliability, availability, and performance while minimizing costs and operational risks. Comprehensive training in APM principles, tools, and implementation strategies.',
      level: 'Professional',
      duration: '40+ hours',
      features: [
        'Predictive Maintenance',
        'Asset Optimization',
        'Risk Management',
        'Performance Metrics',
        'Digital APM Tools',
        'Lifecycle Management'
      ],
      gradient: 'from-indigo-500 to-blue-700',
      accent: 'indigo-500'
    },
    {
      icon: GraduationCap,
      title: 'Diploma in Reliability Engineering',
      subtitle: 'Advanced Diploma Program',
      description: 'Comprehensive program covering reliability engineering principles, failure analysis, testing, and system optimization. Master advanced techniques in statistical analysis, reliability modeling, and risk management.',
      level: 'Advanced',
      duration: '120+ hours',
      features: [
        'Failure Analysis',
        'Statistical Methods',
        'Reliability Testing',
        'System Optimization',
        'Risk Management',
        'Program Management'
      ],
      gradient: 'from-blue-600 to-blue-800',
      accent: 'blue-600'
    },
    {
      icon: Car,
      title: 'Certificate in EV Engineering',
      subtitle: 'EV Engineering & System Integration',
      description: 'Master cutting-edge electric vehicle technologies, battery systems, power electronics, and vehicle integration. Comprehensive training in EV engineering principles and system integration methodologies.',
      level: 'Professional',
      duration: '100+ hours',
      features: [
        'Battery Technology',
        'Power Electronics',
        'Vehicle Integration',
        'Charging Systems',
        'Motor Control',
        'Testing & Validation'
      ],
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'cyan-500'
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
    { name: 'IAM Diploma', description: 'Institute of Asset Management Diploma - Strategic asset management specialist certification' },
    { name: 'IAM Certification', description: 'Institute of Asset Management Certification - Fundamental asset management professional certification' },
    { name: 'RCM2 Introductory', description: 'Reliability Centered Maintenance Fundamentals - RCM2 methodology certification' },
    { name: 'RCM2 Facilitator', description: 'Advanced RCM2 Facilitation Skills - Certified RCM2 facilitator certification' },
    { name: 'Vibration CAT I', description: 'ISO 18436-2 Category I - Vibration analysis fundamentals certification' },
    { name: 'Vibration CAT II', description: 'ISO 18436-2 Category II - Advanced vibration analysis certification' },
    { name: 'MLA Level I', description: 'ISO 18436-4 Level I - Machine Lubricant Analyst fundamentals certification' },
    { name: 'MLA Level II', description: 'ISO 18436-4 Level II - Advanced Machine Lubricant Analyst certification' },
    { name: 'MCA Level I', description: 'Motor Circuit Analysis Level I - Electrical signature analysis certification' },
    { name: 'MCA Level II', description: 'Motor Circuit Analysis Level II - Advanced electrical analysis certification' },
    { name: 'CBM Basic', description: 'Condition Based Maintenance - Plant asset CBM certification' },
    { name: 'ARP-A', description: 'Asset Reliability Practitioner - Advocate certification' },
    { name: 'ARP-E', description: 'Asset Reliability Practitioner - Engineer certification' },
    { name: 'Balancing & Alignment', description: 'Precision Maintenance Techniques - Rotating equipment optimization certification' },
    { name: 'TÜV Functional Safety', description: 'TÜV RHEINLAND Functional Safety - Internationally recognized safety certification' },
    { name: 'Rotating Equipment', description: 'Operation & Maintenance - Critical rotating equipment specialist certification' },
    { name: 'CAMA', description: 'Certified Asset Management Assessor - Highest level asset management credential' },
    { name: 'CMRP', description: 'Certified Maintenance & Reliability Professional - Premier maintenance credential' },
    { name: 'CMRT', description: 'Certified Maintenance & Reliability Technician - Technical skills certification' },
    { name: 'Infrared Thermography', description: 'Level I & II Certification - Professional thermography training' },
    { name: 'Lube Oil Analysis', description: 'Tribology & Oil Analysis - Specialized lubricant analysis certification' },
    { name: 'ASQ CRE', description: 'Certified Reliability Engineer - Advanced reliability engineering certification' },
    { name: 'Prosci Change Management', description: 'Certified Change Management Specialist - Organizational change leadership' },
    { name: 'APM', description: 'Asset Performance Management - Asset optimization and performance certification' },
    { name: 'Reliability Engineering Diploma', description: 'Advanced Diploma Program - Comprehensive reliability engineering certification' },
    { name: 'EV Engineering', description: 'EV Engineering & System Integration - Electric vehicle technology certification' }
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 p-6 rounded-3xl shadow-lg bg-white dark:bg-gray-800 flex flex-col h-full border-0">
                {/* Header with Icon and Level Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  {service.level && (
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.level === 'Advanced' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                        : service.level === 'Foundation'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : service.level === 'Professional'
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                        : service.level === 'Specialist'
                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {service.level}
                    </div>
                  )}
                </div>

                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {service.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Duration */}
                <div className="flex items-center mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {service.duration || 'Contact for details'}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-200">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      +{service.features.length - 4} more topics
                    </div>
                  )}
                </div>

                {/* Learn More Button */}
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 rounded-xl px-4 py-3 text-sm font-semibold"
                  onClick={() => {
                    if (service.title === 'IAM Diploma') {
                      window.location.href = '/iam-diploma'
                    } else {
                      // Handle other program links
                      console.log('Learn more about:', service.title)
                    }
                  }}
                >
                  {service.title === 'IAM Diploma' ? 'View Details' : 'Learn More'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
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

      {/* Methodologies Section */}
      <section className="py-20 bg-background">
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
