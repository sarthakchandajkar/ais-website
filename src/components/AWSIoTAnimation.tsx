'use client'

import React, { useEffect, useState } from 'react'
import { 
  Wifi, 
  Cloud, 
  Database, 
  Monitor, 
  Smartphone, 
  Cpu, 
  Radio, 
  Shield,
  Activity,
  Bell,
  TrendingUp,
  Zap
} from 'lucide-react'

const AWSIoTAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full max-w-6xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl shadow-2xl overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-slate-300 dark:border-slate-600"></div>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8 relative z-10">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
          AWS IoT Real-Time Monitoring System
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          Live data flow and monitoring visualization
        </p>
      </div>

      {/* Main Animation Container */}
      <div className="relative h-96 w-full">
        
        {/* IoT Devices Layer */}
        <div className="absolute top-4 left-4 space-y-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center animate-pulse">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">IoT Sensor</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Temperature</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center animate-pulse">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">IoT Device</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Vibration</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center animate-pulse">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">IoT Gateway</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Edge Device</div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Lines */}
        <div className="absolute top-1/2 left-1/4 w-1/2 h-1">
          <div className={`h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-2000 ${isVisible ? 'w-full' : 'w-0'}`}></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        </div>

        {/* AWS IoT Core */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white dark:border-slate-800">
            <Cloud className="w-12 h-12 text-white animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          </div>
          <div className="text-center mt-2">
            <div className="text-sm font-bold text-slate-800 dark:text-white">AWS IoT Core</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Processing</div>
          </div>
        </div>

        {/* Data Processing Layer */}
        <div className="absolute top-4 right-4 space-y-4">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">Time Series DB</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">InfluxDB</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">Analytics</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Real-time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring Dashboard */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Monitor className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">Monitoring Dashboard</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Real-time View</div>
              </div>
            </div>
            
            {/* Mini Dashboard */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded text-center">
                <div className="text-xs font-bold text-green-800 dark:text-green-300">Online</div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">24</div>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded text-center">
                <div className="text-xs font-bold text-yellow-800 dark:text-yellow-300">Warning</div>
                <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">2</div>
              </div>
              <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded text-center">
                <div className="text-xs font-bold text-red-800 dark:text-red-300">Alert</div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">1</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App */}
        <div className={`absolute bottom-4 right-4 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-white">Mobile App</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Notifications</div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Bell className="w-4 h-4 text-orange-500 animate-pulse" />
              <span className="text-xs text-slate-600 dark:text-slate-400">3 new alerts</span>
            </div>
          </div>
        </div>

        {/* Security Layer */}
        <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-slate-800 dark:text-white">Secure Connection</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Animated Data Packets */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Data packet 1 */}
          <div className={`absolute top-8 left-16 w-3 h-3 bg-blue-500 rounded-full transition-all duration-3000 delay-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
               style={{ 
                 animation: isVisible ? 'dataFlow1 4s infinite' : 'none'
               }}>
          </div>
          
          {/* Data packet 2 */}
          <div className={`absolute top-16 left-16 w-3 h-3 bg-green-500 rounded-full transition-all duration-3000 delay-2500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
               style={{ 
                 animation: isVisible ? 'dataFlow2 4s infinite' : 'none'
               }}>
          </div>
          
          {/* Data packet 3 */}
          <div className={`absolute top-24 left-16 w-3 h-3 bg-purple-500 rounded-full transition-all duration-3000 delay-3000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
               style={{ 
                 animation: isVisible ? 'dataFlow3 4s infinite' : 'none'
               }}>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes dataFlow1 {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          25% { transform: translateX(200px) translateY(50px); opacity: 0.8; }
          50% { transform: translateX(400px) translateY(100px); opacity: 0.6; }
          75% { transform: translateX(600px) translateY(50px); opacity: 0.4; }
          100% { transform: translateX(800px) translateY(0); opacity: 0; }
        }
        
        @keyframes dataFlow2 {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          25% { transform: translateX(200px) translateY(30px); opacity: 0.8; }
          50% { transform: translateX(400px) translateY(60px); opacity: 0.6; }
          75% { transform: translateX(600px) translateY(30px); opacity: 0.4; }
          100% { transform: translateX(800px) translateY(0); opacity: 0; }
        }
        
        @keyframes dataFlow3 {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          25% { transform: translateX(200px) translateY(70px); opacity: 0.8; }
          50% { transform: translateX(400px) translateY(140px); opacity: 0.6; }
          75% { transform: translateX(600px) translateY(70px); opacity: 0.4; }
          100% { transform: translateX(800px) translateY(0); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default AWSIoTAnimation
