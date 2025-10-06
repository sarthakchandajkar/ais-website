'use client'

import React, { useState } from 'react'
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NewsletterSubscriptionProps {
  className?: string
  variant?: 'default' | 'compact' | 'hero'
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ 
  className = '', 
  variant = 'default' 
}) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Please enter your email address')
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setIsSuccess(true)
        setEmail('')
      } else {
        setMessage(data.error || 'Something went wrong')
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const renderCompact = () => (
    <div className={`bg-gradient-to-r from-electric-blue/10 to-teal-green/10 p-6 rounded-xl border border-electric-blue/20 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-teal-green rounded-lg flex items-center justify-center">
          <Mail className="w-5 h-5 text-black" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
          <p className="text-sm text-muted-foreground">Get the latest insights on reliability engineering</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            'Subscribe'
          )}
        </Button>
      </form>
      
      {message && (
        <div className={`mt-3 flex items-center gap-2 text-sm ${
          isSuccess ? 'text-green-600' : 'text-red-600'
        }`}>
          {isSuccess ? (
            <Check className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          {message}
        </div>
      )}
    </div>
  )

  const renderHero = () => (
    <div className={`text-center ${className}`}>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Mail className="w-4 h-4 text-teal-green" />
          <span className="text-sm font-medium text-white">Newsletter</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4">
          Stay <span className="text-teal-green">Updated</span>
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Get the latest insights, industry trends, and expert advice on reliability engineering delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-teal-green focus:border-transparent outline-none"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-teal-green hover:bg-teal-green/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              'Subscribe'
            )}
          </Button>
        </div>
        
        {message && (
          <div className={`mt-4 flex items-center justify-center gap-2 text-sm ${
            isSuccess ? 'text-green-400' : 'text-red-400'
          }`}>
            {isSuccess ? (
              <Check className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  )

  const renderDefault = () => (
    <div className={`bg-card p-8 rounded-2xl shadow-lg border border-border ${className}`}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Subscribe to Our Newsletter</h3>
        <p className="text-muted-foreground">
          Get the latest insights on reliability engineering, predictive maintenance, and industry trends.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-3 mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              'Subscribe'
            )}
          </Button>
        </div>
        
        {message && (
          <div className={`flex items-center justify-center gap-2 text-sm ${
            isSuccess ? 'text-green-600' : 'text-red-600'
          }`}>
            {isSuccess ? (
              <Check className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  )

  switch (variant) {
    case 'compact':
      return renderCompact()
    case 'hero':
      return renderHero()
    default:
      return renderDefault()
  }
}

export default NewsletterSubscription
