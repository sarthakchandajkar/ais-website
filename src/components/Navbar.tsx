'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT', path: '/about' },
    { name: 'OUR FOUNDER', path: '/our-founder' },
    { name: 'CONTACT US', path: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-transparent backdrop-blur-xl shadow-lg border-b border-border/50' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src={isScrolled ? "/Canva Image (1).png" : "/ais-logo-dark.png"} 
              alt="Asset Innovative Solutions Logo" 
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative font-sans font-medium text-sm transition-all duration-300 hover:text-electric-blue dark:hover:text-teal-green uppercase tracking-wide ${
                  pathname === item.path
                    ? 'text-electric-blue dark:text-teal-green'
                    : isScrolled 
                      ? 'text-foreground' 
                      : 'text-white'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric-blue dark:bg-teal-green rounded-full" />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-transparent backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg font-sans font-medium text-sm transition-all duration-300 uppercase tracking-wide ${
                    pathname === item.path
                      ? 'text-electric-blue dark:text-teal-green bg-accent'
                      : 'text-foreground hover:text-electric-blue dark:hover:text-teal-green hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar