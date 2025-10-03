'use client'

import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'

const VideoOptions = () => {
  const [activeTab, setActiveTab] = useState('youtube')

  const videoOptions = {
    youtube: {
      title: "YouTube Embed (Optimized)",
      description: "YouTube with parameters to minimize distractions",
      component: (
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
          <iframe
            src="https://www.youtube.com/embed/H5_kV_xpJaU?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0&loop=1&playlist=H5_kV_xpJaU&start=0&end=300&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0&enablejsapi=1"
            title="Reliability Engineering Services Overview"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    selfHosted: {
      title: "Self-Hosted Video",
      description: "Custom video player with full control",
      component: (
        <VideoPlayer
          src="/videos/reliability-engineering.mp4" // You would need to add this video file
          poster="/images/video-poster.jpg" // Optional poster image
          title="Reliability Engineering Services"
          className="aspect-video rounded-2xl shadow-2xl"
        />
      )
    },
    vimeo: {
      title: "Vimeo Embed",
      description: "Professional video hosting with better privacy",
      component: (
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
          <iframe
            src="https://player.vimeo.com/video/YOUR_VIDEO_ID?badge=0&autopause=0&player_id=0&app_id=58479&background=1&loop=1&byline=0&title=0&portrait=0"
            title="Reliability Engineering Services Overview"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    wistia: {
      title: "Wistia Embed",
      description: "Business-focused video hosting with analytics",
      component: (
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
          <iframe
            src="https://fast.wistia.net/embed/iframe/YOUR_VIDEO_ID?seo=false&videoFoam=true"
            title="Reliability Engineering Services Overview"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(videoOptions).map(([key, option]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === key
                ? 'bg-electric-blue text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Video Display */}
      <div className="mb-6">
        {videoOptions[activeTab as keyof typeof videoOptions].component}
      </div>

      {/* Description */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">
          {videoOptions[activeTab as keyof typeof videoOptions].title}
        </h3>
        <p className="text-gray-600">
          {videoOptions[activeTab as keyof typeof videoOptions].description}
        </p>
      </div>

      {/* Implementation Guide */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Implementation Guide</h4>
        
        {activeTab === 'youtube' && (
          <div className="space-y-3">
            <p><strong>YouTube Parameters Used:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><code>rel=0</code> - Disables related videos from other channels</li>
              <li><code>modestbranding=1</code> - Reduces YouTube branding</li>
              <li><code>showinfo=0</code> - Hides video title and uploader info</li>
              <li><code>loop=1&playlist=VIDEO_ID</code> - Loops the video</li>
              <li><code>start=0&end=300</code> - Sets start and end times (5 minutes)</li>
              <li><code>iv_load_policy=3</code> - Disables annotations</li>
              <li><code>fs=1</code> - Allows fullscreen</li>
              <li><code>cc_load_policy=0</code> - Disables captions by default</li>
            </ul>
          </div>
        )}

        {activeTab === 'selfHosted' && (
          <div className="space-y-3">
            <p><strong>Self-Hosted Video Benefits:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Complete control over video playback</li>
              <li>No external dependencies</li>
              <li>Custom branding and controls</li>
              <li>Better privacy and security</li>
              <li>No ads or related content</li>
              <li>Custom analytics and tracking</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              <strong>Note:</strong> You&apos;ll need to host the video file on your server and ensure it&apos;s optimized for web delivery.
            </p>
          </div>
        )}

        {activeTab === 'vimeo' && (
          <div className="space-y-3">
            <p><strong>Vimeo Benefits:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>No ads or related videos</li>
              <li>Professional appearance</li>
              <li>Better privacy controls</li>
              <li>Customizable player</li>
              <li>Analytics and insights</li>
              <li>Password protection available</li>
            </ul>
          </div>
        )}

        {activeTab === 'wistia' && (
          <div className="space-y-3">
            <p><strong>Wistia Benefits:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Business-focused features</li>
              <li>Advanced analytics</li>
              <li>Lead generation tools</li>
              <li>Customizable player</li>
              <li>No ads or distractions</li>
              <li>Professional support</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoOptions
