'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Brain, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
  TrendingUp,
  Settings,
  BarChart3,
  Wrench,
  AlertTriangle,
  Clock,
  FileText,
  Activity,
  Cpu,
  TestTube,
  Package,
  UserCheck,
  Database,
  LineChart,
  Shield,
  Gauge,
  Monitor,
  Smartphone,
  Cloud
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PredictiveMaintenance = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Analytics',
      description: 'Advanced AI algorithms that learn from historical data to predict equipment failures before they occur, enabling proactive maintenance strategies.',
      features: [
        'Deep Learning Models',
        'Pattern Recognition',
        'Anomaly Detection',
        'Predictive Modeling',
        'Real-time Analysis',
        'Continuous Learning'
      ],
      gradient: 'from-electric-blue to-teal-green',
      accent: 'electric-blue'
    },
    {
      icon: Activity,
      title: 'IoT Sensor Integration',
      description: 'Comprehensive sensor network deployment to monitor equipment health in real-time, providing continuous data streams for predictive analysis.',
      features: [
        'Vibration Sensors',
        'Temperature Monitoring',
        'Pressure Sensors',
        'Acoustic Analysis',
        'Oil Analysis Sensors',
        'Wireless Connectivity'
      ],
      gradient: 'from-teal-green to-electric-blue',
      accent: 'teal-green'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Platform',
      description: 'Centralized platform that processes sensor data, applies machine learning algorithms, and provides actionable insights for maintenance decisions.',
      features: [
        'Data Visualization',
        'Trend Analysis',
        'Alert Systems',
        'Dashboard Interface',
        'Report Generation',
        'Mobile Access'
      ],
      gradient: 'from-amber to-warning',
      accent: 'amber',
      path: '/predictive-analytics-platform'
    },
    {
      icon: TrendingUp,
      title: 'Failure Prediction Models',
      description: 'Sophisticated statistical models that analyze equipment behavior patterns to forecast potential failures with high accuracy.',
      features: [
        'Weibull Analysis',
        'Reliability Modeling',
        'Failure Mode Prediction',
        'Risk Assessment',
        'Confidence Intervals',
        'Model Validation'
      ],
      gradient: 'from-info to-electric-blue',
      accent: 'info',
      path: '/failure-prediction-models'
    },
    {
      icon: Monitor,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring systems that track equipment performance and immediately alert maintenance teams when anomalies are detected.',
      features: [
        'Live Dashboards',
        'Instant Alerts',
        'Status Monitoring',
        'Performance Tracking',
        'Remote Access',
        'Mobile Notifications'
      ],
      gradient: 'from-teal-green to-amber',
      accent: 'teal-green',
      path: '/real-time-monitoring'
    },
    {
      icon: Database,
      title: 'Data Management & Storage',
      description: 'Secure cloud-based data storage and management systems that handle large volumes of sensor data with high reliability and accessibility.',
      features: [
        'Cloud Storage',
        'Data Security',
        'Backup Systems',
        'Data Compression',
        'API Integration',
        'Scalable Architecture'
      ],
      gradient: 'from-amber to-info',
      accent: 'amber',
      path: '/data-management-storage'
    },
    {
      icon: TestTube,
      title: 'Condition-Based Monitoring',
      description: 'Advanced monitoring techniques that assess equipment condition through multiple parameters to determine optimal maintenance timing.',
      features: [
        'Multi-parameter Analysis',
        'Condition Assessment',
        'Health Scoring',
        'Maintenance Scheduling',
        'Performance Optimization',
        'Life Extension'
      ],
      gradient: 'from-info to-teal-green',
      accent: 'info',
      path: '/condition-based-monitoring'
    },
    {
      icon: Package,
      title: 'Predictive Maintenance Planning',
      description: 'Intelligent maintenance scheduling that optimizes resource allocation and minimizes downtime through predictive insights.',
      features: [
        'Smart Scheduling',
        'Resource Optimization',
        'Downtime Minimization',
        'Cost Reduction',
        'Work Order Management',
        'Inventory Planning'
      ],
      gradient: 'from-warning to-electric-blue',
      accent: 'warning',
      path: '/predictive-maintenance-planning'
    },
    {
      icon: UserCheck,
      title: 'Maintenance Team Training',
      description: 'Comprehensive training programs to equip maintenance teams with the skills needed to effectively use predictive maintenance systems.',
      features: [
        'System Training',
        'Data Interpretation',
        'Alert Response',
        'Best Practices',
        'Certification Programs',
        'Ongoing Support'
      ],
      gradient: 'from-electric-blue to-warning',
      accent: 'electric-blue',
      path: '/maintenance-team-training'
    }
  ]

  const methodologies = [
    {
      icon: Cpu,
      title: 'AI-Powered Analysis',
      description: 'Leveraging artificial intelligence and machine learning to process vast amounts of data and identify patterns that human analysis might miss.'
    },
    {
      icon: LineChart,
      title: 'Statistical Modeling',
      description: 'Using advanced statistical techniques to model equipment behavior and predict failure probabilities with mathematical precision.'
    },
    {
      icon: Gauge,
      title: 'Real-time Monitoring',
      description: 'Implementing continuous monitoring systems that provide instant feedback on equipment performance and health status.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Solutions',
      description: 'Utilizing cloud infrastructure for scalable data processing, storage, and analysis with global accessibility and reliability.'
    }
  ]

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced algorithms for pattern recognition and predictive modeling' },
    { name: 'IoT Sensors', description: 'Wireless sensor networks for comprehensive equipment monitoring' },
    { name: 'Cloud Computing', description: 'Scalable cloud infrastructure for data processing and storage' },
    { name: 'Big Data Analytics', description: 'Processing and analyzing large volumes of sensor data' },
    { name: 'Digital Twins', description: 'Virtual replicas of physical assets for simulation and analysis' },
    { name: 'Edge Computing', description: 'Local data processing for real-time decision making'
    }
  ]

  const stats = [
    { number: '50%', label: 'Reduction in Unplanned Downtime', icon: TrendingUp },
    { number: '35%', label: 'Maintenance Cost Savings', icon: Award },
    { number: '80%', label: 'Improvement in Equipment Uptime', icon: Shield },
    { number: '98%', label: 'Prediction Accuracy Rate', icon: Users }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center overflow-hidden hero-gradient min-h-[700px]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/20 to-transparent dark:from-charcoal/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 dark:bg-teal-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-green/10 dark:bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-teal-green" />
                  <span className="text-sm font-medium text-white">Predictive Maintenance Excellence</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                <span className="text-teal-green dark:text-electric-blue hero-text-accent">Predictive Maintenance</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed hero-text max-w-2xl mx-auto lg:mx-0">
                Harness the power of AI and IoT to predict equipment failures before they happen, optimize maintenance schedules, and maximize operational efficiency
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-4 h-4 inline" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
                  Get Consultation
                </button>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                <iframe
                  src="https://www.youtube.com/embed/H5_kV_xpJaU?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0&loop=1&playlist=H5_kV_xpJaU&start=0&end=300&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0&enablejsapi=1"
                  title="Predictive Maintenance Services Overview"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video overlay elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-electric-blue to-teal-green rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-teal-green to-electric-blue rounded-full animate-pulse delay-1000"></div>
            </div>
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

      {/* Core Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Comprehensive predictive maintenance solutions powered by AI, IoT, and advanced analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-deep-navy" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-sans font-bold text-foreground mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col h-full">
                  <div className="space-y-3 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full bg-${service.accent} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-deep-navy" />
                        </div>
                        <span className="text-foreground group-hover/item:text-electric-blue transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    {service.path ? (
                      <Link href={service.path}>
                        <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" className="w-full group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Methodologies
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge approaches and technologies that drive predictive maintenance excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <methodology.icon className="w-8 h-8 text-deep-navy" />
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-foreground mb-3">
                    {methodology.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-steel-gray dark:text-muted-foreground leading-relaxed">
                    {methodology.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Standards Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8">
                Technologies & Standards
              </h2>
              <p className="text-lg text-steel-gray dark:text-muted-foreground leading-relaxed mb-8">
                Our predictive maintenance solutions leverage cutting-edge technologies and adhere to industry standards for optimal performance and reliability.
              </p>
              <div className="space-y-4">
                {technologies.map((technology, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg group hover:bg-electric-blue/10 transition-colors duration-200">
                    <div className="w-2 h-2 bg-electric-blue rounded-full group-hover:bg-teal-green transition-colors duration-200 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-electric-blue transition-colors duration-200">{technology.name}</h4>
                      <p className="text-steel-gray dark:text-muted-foreground text-sm">{technology.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-electric-blue to-teal-green text-white border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-sans font-bold text-white">Why Choose Our Expertise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">AI & ML Expertise</h4>
                        <p className="text-white/90 text-sm">Advanced machine learning algorithms for accurate predictions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">IoT Integration</h4>
                        <p className="text-white/90 text-sm">Comprehensive sensor networks and data collection systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Proven Results</h4>
                        <p className="text-white/90 text-sm">Track record of delivering measurable improvements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">24/7 Support</h4>
                        <p className="text-white/90 text-sm">Round-the-clock monitoring and technical support</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to implementing predictive maintenance solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Comprehensive evaluation of current maintenance practices and equipment condition' },
              { step: '02', title: 'Data Collection', description: 'Installation of sensors and establishment of data collection infrastructure' },
              { step: '03', title: 'Model Development', description: 'Creation of predictive models using machine learning and historical data' },
              { step: '04', title: 'Implementation', description: 'Deployment of monitoring systems and training of maintenance teams' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-teal-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-sans font-bold text-deep-navy">{item.step}</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-steel-gray dark:text-muted-foreground">{item.description}</p>
              </div>
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
              <span className="text-sm font-medium text-white">Ready to Transform Maintenance?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Implement Predictive Maintenance Today
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Let our AI-powered solutions help you predict failures, optimize maintenance, and maximize equipment performance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-light-gray transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PredictiveMaintenance
