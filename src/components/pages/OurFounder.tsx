'use client'

import React from 'react'
import { Award, BookOpen, Users, Globe, Linkedin, Mail, Sparkles, ArrowRight, Target, Shield, Zap, Calendar, Building, GraduationCap, Briefcase, CheckCircle, Star, TrendingUp, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const OurFounder = () => {
  const timelineData = [
    {
      year: '1994–1996',
      title: 'Design Engineer',
      company: 'Greaves Limited, India',
      description: 'Started career in mechanical design and engineering fundamentals',
      icon: GraduationCap
    },
    {
      year: '1996–2007',
      title: 'Key Engineering & Reliability Roles',
      company: 'Reliance Industries, India',
      description: 'Contributed to commissioning of the world\'s largest grassroots refinery at Jamnagar',
      icon: Building
    },
    {
      year: '2007–2015',
      title: 'Specialist & Team Lead',
      company: 'BAPCO, Bahrain',
      description: 'Implemented RCM/FMEA and led multi-million-dollar reliability improvement projects',
      icon: Target
    },
    {
      year: '2015–Present',
      title: 'Lead Engineer (RCM-Reliability) & PdM Team Leader',
      company: 'ORPIC/OQ, Oman',
      description: 'Driving reliability improvement journeys, digital transformation, and machine learning adoption',
      icon: TrendingUp
    }
  ]

  const coreValues = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Ensuring consistent performance and operational excellence'
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description: 'Leveraging data and AI for proactive maintenance strategies'
    },
    {
      icon: BookOpen,
      title: 'Professional Training',
      description: 'Empowering teams with knowledge and best practices'
    },
    {
      icon: Lightbulb,
      title: 'Industry 4.0 Solutions',
      description: 'Implementing cutting-edge digital transformation technologies'
    }
  ]

  const certifications = [
    'CMRP (ISO 17024) - Certified Maintenance & Reliability Professional',
    'Vibration Analysis – Level II (ISO 18436-2)',
    'Machine Lubricant Analyst – MLA II (ISO 18436-4)',
    'Meridium Certifications (RCM, FMEA, RCA, ASM, ASI)',
    'GE System-1 Machinery Diagnostics',
    'Emerson CSI Technology'
  ]

  const stats = [
    { number: '30+', label: 'Years Experience', icon: Award },
    { number: '4', label: 'Major Companies', icon: Building },
    { number: '1000+', label: 'Professionals Trained', icon: Users },
    { number: '$5M+', label: 'Cost Savings Delivered', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/20 to-transparent dark:from-charcoal/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 dark:bg-teal-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-green/10 dark:bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-teal-green" />
                  <span className="text-sm font-medium text-white">Meet the Founder</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                Meet the <span className="text-teal-green dark:text-electric-blue hero-text-accent">Founder</span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed hero-text">
                Three decades of expertise in Reliability and Asset Management, driving innovation across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-deep-navy hover:bg-light-gray">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact the Founder
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Professional photo placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-deep-navy">AC</span>
                    </div>
                    <div className="text-deep-navy text-lg font-semibold">Abhay Chandajkar</div>
                    <div className="text-deep-navy text-sm">Founder & CEO</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-deep-navy" />
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

      {/* Founder's Bio Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8">About Abhay Chandajkar</h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  <strong>Abhay Chandajkar</strong> is the Founder of Asset Innovative Solutions, bringing <strong>30 years of engineering and leadership experience</strong> in Asset Management, Reliability, and Predictive Maintenance.
                </p>
                <p>
                  He has worked with <strong>Reliance Industries, BAPCO Bahrain, ORPIC Oman, and OQ</strong> in leadership positions, gaining extensive experience across the oil, gas, and petrochemical industries.
                </p>
                <p>
                  Internationally certified in Vibration Analysis (ISO 18436-2), Certified Maintenance & Reliability Professional (CMRP), and Meridium tools (RCM, FMEA, RCA, ASM), Abhay is widely recognized as a <strong>trainer, mentor, and thought leader</strong> in Reliability and Maintenance.
                </p>
                <p>
                  His expertise spans across multiple domains including digital transformation, machine learning adoption in maintenance, and implementing Industry 4.0 solutions that drive measurable business value.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-electric-blue hover:bg-blue-700 text-white">
                  View Full Profile
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-electric-blue to-teal-green text-white border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-sans font-bold text-white">Key Highlights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-white">Experience</div>
                      <div className="text-white/90">30+ Years</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Major Companies</div>
                      <div className="text-white/90">Reliance, BAPCO, ORPIC, OQ</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Cost Savings</div>
                      <div className="text-white/90">$5M+ Delivered</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Countries</div>
                      <div className="text-white/90">India, Bahrain, Oman</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Achievements Timeline */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">Journey & Achievements</h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Three decades of excellence in reliability engineering and asset management
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-teal-green hidden lg:block"></div>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start lg:items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-electric-blue rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                  
                  <div className="ml-0 lg:ml-16 flex-1">
                    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                              <div>
                                <h3 className="text-2xl font-sans font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-lg font-semibold text-electric-blue">{item.company}</p>
                              </div>
                              <div className="text-sm font-bold text-steel-gray dark:text-muted-foreground bg-accent px-3 py-1 rounded-full mt-2 lg:mt-0">
                                {item.year}
                              </div>
                            </div>
                            <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Asset Innovative Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">Vision for Asset Innovative Solutions</h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-4xl mx-auto">
              Abhay founded Asset Innovative Solutions to deliver cutting-edge solutions that transform how industries approach reliability and maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
              <p>
                Abhay founded Asset Innovative Solutions to deliver <strong>cutting-edge Reliability Engineering, Predictive Maintenance, Professional Training, and Industry 4.0 solutions</strong> that drive measurable business value.
              </p>
              <p>
                His vision is to <strong>empower industries in GCC, Oman, and India</strong> with reliable, safe, and sustainable operations through innovative technology and expert knowledge sharing.
              </p>
              <p>
                Abhay believes in <strong>knowledge sharing, proactive maintenance strategies, and innovation</strong> as key drivers of industrial growth and operational excellence.
              </p>
              <div className="bg-gradient-to-r from-electric-blue/10 to-teal-green/10 p-6 rounded-xl border-l-4 border-electric-blue">
                <blockquote className="text-lg italic text-foreground">
                  "Partner with us to transform reliability into measurable value for your business."
                </blockquote>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-electric-blue to-teal-green text-white border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-sans font-bold text-white">Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-white/90 leading-relaxed mb-6">
                    To revolutionize industrial operations through innovative reliability solutions, predictive maintenance strategies, and comprehensive professional training programs.
                  </p>
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-xl font-semibold mb-4 text-white">Key Focus Areas</h4>
                    <ul className="space-y-2 text-white/90">
                      <li>• Digital transformation in maintenance</li>
                      <li>• AI/ML adoption in industrial operations</li>
                      <li>• Professional development and training</li>
                      <li>• Sustainable and safe operations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">Core Values</h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our approach to reliability and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Expertise */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">Certifications & Expertise</h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Internationally recognized certifications and specialized expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-200">
                            {cert}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-electric-blue to-teal-green text-white border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-sans font-bold text-white">Key Achievements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-white/30 pl-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Lean Bad Actor Management Program</h4>
                      <p className="text-white/90">Owner at OQ with savings of $5M+</p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Industry Speaker</h4>
                      <p className="text-white/90">PETROTECH, MAINTCON, METS, Bahrain Society of Engineers</p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Professional Leadership</h4>
                      <p className="text-white/90">Member and former Hon. Secretary of Institute of Engineers (India), Bahrain Chapter</p>
                    </div>
                    <div className="border-l-4 border-white/30 pl-4">
                      <h4 className="text-xl font-semibold text-white mb-2">Thought Leadership</h4>
                      <p className="text-white/90">Widely recognized trainer, mentor, and thought leader in Reliability and Maintenance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Ready to Connect?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Partner with us to transform reliability into measurable value for your business
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Connect with Abhay and discover how three decades of expertise can transform your operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-deep-navy hover:bg-light-gray">
              <Linkedin className="w-4 h-4 mr-2" />
              Connect on LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
              <Mail className="w-4 h-4 mr-2" />
              Contact the Founder
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurFounder