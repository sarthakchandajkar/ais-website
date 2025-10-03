'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MapPin, Clock, Send, CheckCircle, Sparkles, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Thank you! Your message has been sent successfully.')
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Failed to send message. Please try again.')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@assetinnovativesolutions.com'],
      gradient: 'from-electric-blue to-teal-green'
    },
    {
      icon: MapPin,
      title: 'Offices',
      details: ['Dubai, UAE', 'Muscat, Oman'],
      gradient: 'from-amber to-warning'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sun: Closed'],
      gradient: 'from-info to-electric-blue'
    }
  ]

  const offices = [
    {
      country: 'United Arab Emirates',
      city: 'Dubai',
      address: 'Business Bay, Dubai, UAE',
      email: 'info@assetinnovativesolutions.com'
    },
    {
      country: 'Sultanate of Oman',
      city: 'Muscat',
      address: 'Al Qurum, Muscat, Oman',
      email: 'info@assetinnovativesolutions.com'
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
              <span className="text-sm font-medium text-white">Get In Touch</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight mb-6 text-white hero-text">
            Get In <span className="text-teal-green dark:text-electric-blue hero-text-accent">Touch</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed hero-text">
            Ready to transform your operations? Let&apos;s discuss your requirements and explore how we can help you achieve operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-deep-navy hover:bg-light-gray">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-sans font-bold text-foreground">Send us a Message</CardTitle>
                <CardDescription className="text-steel-gray dark:text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interest *
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="reliability">Reliability Engineering</option>
                      <option value="predictive-maintenance">Predictive Maintenance</option>
                      <option value="professional-training">Professional Training</option>
                      <option value="industry-4-0">Industry 4.0 Solutions</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-sans font-bold text-foreground mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <info.icon className="w-6 h-6 text-deep-navy" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg font-sans font-bold text-foreground">
                              {info.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-steel-gray dark:text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">Our Offices</h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our locations across UAE and Oman
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">{office.country}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-steel-gray dark:text-muted-foreground space-y-2">
                    <p className="font-semibold text-lg text-foreground">{office.city} Office</p>
                    <p>{office.address}</p>
                    <p className="text-electric-blue">{office.email}</p>
                  </div>
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
              <span className="text-sm font-medium text-white">Ready to Get Started?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Let&apos;s Transform Your Operations
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Contact us today and discover how our expertise can drive your success
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-deep-navy hover:bg-light-gray">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-deep-navy">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
