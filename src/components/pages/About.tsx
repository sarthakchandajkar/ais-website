'use client'

import React from 'react'
import { Users, Award, Globe, Sparkles, Target, Shield, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: Award },
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '3', label: 'Countries Served', icon: Globe },
    { number: '100+', label: 'Professionals Trained', icon: Users }
  ]

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with our clients to understand their unique challenges and goals.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex industrial challenges.'
    }
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">About Our Company</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-6 text-white hero-text">
            <span className="text-teal-green dark:text-electric-blue hero-text-accent">About Us</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed hero-text">
            Leading the future of industrial reliability and technology innovation across the Middle East and India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-deep-navy hover:bg-light-gray">
              Our Story
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
              Our Values
            </Button>
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

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
                <p>
                  At Asset Innovative Solutions, we are pioneers in transforming industrial operations through advanced reliability engineering, cutting-edge AI/ML technologies, and comprehensive IoT solutions.
                </p>
                <p>
                  Our expertise spans across critical domains including Root Cause Analysis (RCA), Reliability Centered Maintenance (RCM), and custom software development, making us the trusted partner for organizations seeking operational excellence.
                </p>
                <p>
                  With a strong presence across the Middle East and India, we deliver world-class consulting services and professional training programs that drive sustainable growth and innovation.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-electric-blue hover:bg-blue-700 text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-card border border-border overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-deep-navy" />
                    </div>
                    <CardTitle className="text-2xl font-sans font-bold text-foreground">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed mb-6">
                    To empower industries with innovative reliability solutions and cutting-edge technologies that drive operational excellence, reduce costs, and ensure sustainable growth.
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-deep-navy" />
                    </div>
                    <CardTitle className="text-2xl font-sans font-bold text-foreground">Our Vision</CardTitle>
                  </div>
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    To be the leading provider of reliability engineering and technology solutions across the Middle East and India, setting new standards for industrial innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">
                        {value.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {value.description}
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
              <span className="text-sm font-medium text-white">Ready to Partner?</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Let's Build the Future Together
          </h2>
          
          <p className="text-xl text-white/90 mb-8 hero-text">
            Discover how our expertise can transform your operations and drive sustainable growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-deep-navy hover:bg-light-gray">
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
