'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Reliability Engineering', href: '/services#reliability' },
      { name: 'Predictive Maintenance', href: '/services#predictive' },
      { name: 'Professional Training', href: '/services#training' },
      { name: 'Industry 4.0 Solutions', href: '/services#industry4' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Founder', href: '/our-founder' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/whitepapers' },
      { name: 'Downloads', href: '/downloads' },
    ],
    locations: [
      { name: 'UAE', address: 'Dubai, United Arab Emirates' },
      { name: 'Oman', address: 'Muscat, Sultanate of Oman' },
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ]

  return (
    <footer className="bg-card dark:bg-deep-navy text-foreground dark:text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/Canva Image (1).png" 
                alt="Asset Innovative Solutions Logo" 
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering industries across UAE and Oman with cutting-edge technology solutions, 
              expert consulting services, and world-class training programs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-green" />
                <span className="text-muted-foreground">info@assetinnovativesolutions.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-green mt-1" />
                <div className="text-muted-foreground">
                  <div>Dubai, UAE</div>
                  <div>Muscat, Oman</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-sans font-bold mb-6 uppercase tracking-wide">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-teal-green transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-sans font-bold mb-6 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-teal-green transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-sans font-bold mb-6 uppercase tracking-wide">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-teal-green transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-2xl">
            <h3 className="text-xl font-sans font-bold mb-4 uppercase tracking-wide">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest insights on industrial innovation and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-green focus:border-transparent"
              />
              <Button className="bg-teal-green hover:bg-teal-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Asset Innovative Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-teal-green text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-teal-green text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-teal-green text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-teal-green transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-teal-green" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
