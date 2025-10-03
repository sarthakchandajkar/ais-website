'use client'

import React from 'react'
import Image from 'next/image'

interface VideoBackgroundProps {
  headline?: string
  subheading?: string
  showText?: boolean
}

const VideoBackground = ({ 
  headline = "INNOVATION THAT WORKS. RELIABILITY THAT LASTS.",
  subheading = "",
  showText = true 
}: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* HTML5 Video Element */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/AIS-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative">
          <Image
            src="/ais-logo-dark.png"
            alt="AIS Logo"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </div>
      </div>
      
      {/* Bottom Left Text Content */}
      {showText && (
        <div className="absolute bottom-40 sm:bottom-44 md:bottom-48 lg:bottom-52 xl:bottom-56 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16">
          <div className="text-left max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-sans font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 leading-tight uppercase tracking-wide">
              {headline}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl leading-relaxed font-sans font-semibold uppercase tracking-wide">
              {subheading}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoBackground
