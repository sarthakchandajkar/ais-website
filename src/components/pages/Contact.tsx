'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MapPin, Clock, Phone, Send, CheckCircle, Sparkles, ArrowRight, MessageSquare, Globe, Users, ChevronDown } from 'lucide-react'
import { toast } from 'sonner'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'reliability', label: 'Reliability Engineering' },
    { value: 'predictive-maintenance', label: 'Predictive Maintenance' },
    { value: 'professional-training', label: 'Professional Training' },
    { value: 'industry-4-0', label: 'Industry 4.0 Solutions' },
    { value: 'consultation', label: 'General Consultation' },
  ]

  const handleServiceSelect = (value: string, label: string) => {
    setSelectedService(label)
    setValue('service', value)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
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
      subtitle: 'Get in touch with us',
      description: 'Send us your inquiries and we&apos;ll respond within 24 hours',
      details: ['sarthak.chandajkar@assetinnovativeservices.com'],
      gradient: 'from-electric-blue to-teal-green',
      tag: 'Primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      subtitle: 'Call us directly',
      description: 'Speak with our experts for immediate assistance',
      details: ['+968 9136 0424'],
      gradient: 'from-teal-green to-electric-blue',
      tag: 'Quick'
    },
    {
      icon: MapPin,
      title: 'Offices',
      subtitle: 'Visit our locations',
      description: 'Meet us in person at any of our strategic locations',
      details: ['Dubai, UAE', 'Muscat, Oman'],
      gradient: 'from-electric-blue to-teal-green',
      tag: 'Global'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      subtitle: 'When we&apos;re available',
      description: 'Our team is ready to assist you during these hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM', 'Sun: Closed'],
      gradient: 'from-teal-green to-electric-blue',
      tag: 'Schedule'
    }
  ]

  const offices = [
    {
      country: 'United Arab Emirates',
      city: 'Dubai',
      address: 'Business Bay, Dubai, UAE',
      email: 'sarthak.chandajkar@assetinnovativeservices.com'
    },
    {
      country: 'Sultanate of Oman',
      city: 'Sohar',
      address: 'Al Qurum, Muscat, Oman',
      email: 'sarthak.chandajkar@assetinnovativeservices.com'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Modern Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/30">
              <MessageSquare className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">Let&apos;s Connect</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-white">
              Contact Us
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your operations? Let&apos;s discuss your requirements and explore how we can help you achieve operational excellence.
            </p>

            <div className="flex justify-center">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-2xl transition-all duration-300 font-semibold bg-transparent">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Contact Information - Left Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-700 dark:text-slate-400 mb-8">
                  We&apos;re here to help you transform your operations. Reach out to us through any of these channels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 w-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Header with Icon and Tag */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      {info.tag && (
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                          {info.tag}
                        </span>
                      )}
                    </div>

                    {/* Title and Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-sm text-slate-700 dark:text-gray-600">{info.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-800 dark:text-gray-700 text-sm mb-4 leading-relaxed">{info.description}</p>

                    {/* Contact Details */}
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-sm text-slate-800 dark:text-gray-700 break-words leading-relaxed">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Send us a Message</h3>
                  <p className="text-slate-800 dark:text-slate-400">
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-4 py-4 border-2 border-slate-400 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-4 py-4 border-2 border-slate-400 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                        placeholder="your.email@company.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-4 border-2 border-slate-400 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="text-sm text-red-500">{errors.company.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                      Service Interest *
                    </label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-4 pr-10 border-2 border-slate-400 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300 cursor-pointer hover:border-electric-blue/50 dark:hover:border-electric-blue/50 text-left"
                      >
                        {selectedService || 'Select a service'}
                      </button>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <ChevronDown className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {isDropdownOpen && (
                        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleServiceSelect(option.value, option.label)}
                              className={`w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${
                                option.value === '' ? 'text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-white'
                              } ${selectedService === option.label ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' : ''}`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.service && (
                      <p className="text-sm text-red-500">{errors.service.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-4 border-2 border-slate-400 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-600 dark:placeholder-slate-400 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-gradient-to-r dark:from-electric-blue dark:to-teal-green dark:hover:from-electric-blue/90 dark:hover:to-teal-green/90 dark:text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Office Locations */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 rounded-full px-6 py-3 mb-8">
              <Globe className="w-5 h-5 text-electric-blue dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">Our Global Presence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our <span className="text-electric-blue dark:bg-gradient-to-r dark:from-electric-blue dark:to-teal-green dark:bg-clip-text dark:text-transparent">Offices</span>
            </h2>
            <p className="text-xl text-slate-800 dark:text-slate-400 max-w-3xl mx-auto">
              Visit us at any of our strategic locations across UAE and Oman
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 w-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Header with Icon and Tag */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-teal-green rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                    MENA
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{office.country}</h3>

                {/* Subtitle */}
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{office.city} Office</p>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                  Visit our {office.city.toLowerCase()} office for in-person consultations and meetings
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
