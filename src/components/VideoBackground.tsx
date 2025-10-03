'use client'

import React from 'react'

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
