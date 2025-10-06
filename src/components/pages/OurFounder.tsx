'use client'

import React from 'react'
import Image from 'next/image'
import { Award, Users, Globe, Linkedin, Mail, Sparkles, ArrowRight, Target, Building, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const OurFounder = () => {
  const stats = [
    { number: '30+', label: 'Years Experience', icon: Award },
    { number: '4', label: 'Major Companies', icon: Building },
    { number: '1000+', label: 'Professionals Trained', icon: Users },
    { number: '$100M+', label: 'Cost Savings Delivered', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex items-center overflow-hidden hero-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/20 to-transparent dark:from-charcoal/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 dark:bg-teal-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-green/10 dark:bg-electric-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-teal-green" />
                  <span className="text-sm font-medium text-white">Meet the Founder</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-sans font-bold leading-tight mb-6 text-white hero-text">
                Meet the <span className="text-teal-green dark:text-electric-blue hero-text-accent">Founder</span>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed hero-text">
                Three decades of expertise in Reliability and Asset Management, driving innovation across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-electric-blue text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide" onClick={() => window.open('https://www.linkedin.com/in/abhay-chandajkar-238248b/', '_blank')}>
                  <Linkedin className="w-4 h-4 mr-2" />
                  CONNECT ON LINKEDIN
                </Button>
                <Button size="lg" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
                  <Mail className="w-4 h-4 mr-2" />
                  CONTACT THE FOUNDER
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-96 h-96 mx-auto">
                <Image 
                  src="/abhay-photo.png" 
                  alt="Abhay Chandajkar - Founder & CEO" 
                  width={384}
                  height={384}
                  className="w-full h-full object-contain"
                />
              </div>
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

      {/* Letter from the Founder Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-8 text-center">Letter from the Founder</h2>
            <div className="space-y-6 text-lg text-steel-gray dark:text-muted-foreground leading-relaxed">
              <p className="text-xl font-semibold text-foreground mb-8">
                <strong>Dear Industry Leaders, Partners, and Colleagues,</strong>
              </p>
              
              <p>
                I write this letter at a pivotal moment in industrial history. After three decades of working across the oil, gas, and petrochemical industries—from the refineries of Reliance Industries to the complex operations of BAPCO Bahrain, ORPIC Oman, and OQ—I have witnessed firsthand the transformative power of reliability engineering and predictive maintenance. Today, as we stand at the intersection of traditional industrial practices and the Fourth Industrial Revolution, I believe we have an unprecedented opportunity to redefine how industries approach asset management and operational excellence.
              </p>

              <p>
                The challenges facing our industries are more complex than ever before. Climate change demands sustainable operations. Economic pressures require unprecedented efficiency. Digital transformation promises new capabilities but also introduces new vulnerabilities. And perhaps most critically, the global skills gap in reliability engineering threatens to undermine our ability to maintain the infrastructure that powers modern civilization.
              </p>

              <p>
                Yet, in these challenges lie extraordinary opportunities. The same technologies that have revolutionized other sectors—artificial intelligence, machine learning, the Internet of Things, and advanced analytics—are now mature enough to transform industrial operations. When properly implemented, these technologies don&apos;t just improve efficiency; they fundamentally change how we think about reliability, maintenance, and asset management.
              </p>

              <div className="bg-gradient-to-r from-electric-blue/10 to-teal-green/10 p-8 rounded-xl border-l-4 border-electric-blue my-8">
                <blockquote className="text-xl italic text-foreground font-medium">
                  &ldquo;The future belongs to organizations that can predict, prevent, and optimize—not just react, repair, and replace.&rdquo;
                </blockquote>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Reliability Revolution</h3>
              
              <p>
                When I founded Asset Innovative Solutions, I did so with a clear vision: to democratize access to world-class reliability engineering and predictive maintenance capabilities. For too long, these critical skills have been concentrated in a few large organizations with the resources to invest in cutting-edge technologies and training programs. Meanwhile, smaller and medium-sized enterprises—which form the backbone of industrial economies—have been left behind.
              </p>

              <p>
                This is not just an economic issue; it&apos;s a safety issue, an environmental issue, and ultimately, a competitive issue. In today&apos;s interconnected global economy, a failure in one part of the supply chain can cascade across entire industries. The reliability of our industrial infrastructure is not just about individual company performance—it&apos;s about the resilience of our entire economic system.
              </p>

              <p>
                The solution lies in what I call the &ldquo;Reliability Revolution&rdquo;—a fundamental shift from reactive maintenance to predictive, data-driven asset management. This revolution is built on three pillars: advanced analytics, professional development, and sustainable practices.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Power of Predictive Analytics</h3>
              
              <p>
                During my tenure at major petrochemical companies, I&apos;ve seen the evolution of maintenance strategies from &ldquo;run-to-failure&rdquo; to &ldquo;preventive maintenance&rdquo; to today&apos;s &ldquo;predictive maintenance.&rdquo; Each transition has delivered significant value, but none more so than the current shift toward AI-powered predictive analytics.
              </p>

              <p>
                Modern predictive maintenance systems can analyze vast amounts of data from sensors, maintenance records, and operational parameters to identify patterns that human analysts might miss. They can predict equipment failures weeks or even months in advance, allowing for planned maintenance that minimizes downtime and maximizes safety.
              </p>

              <p>
                But the true power of these systems lies not just in their predictive capabilities, but in their ability to continuously learn and improve. As they process more data and encounter more scenarios, they become increasingly accurate and valuable. This creates a virtuous cycle where better predictions lead to better outcomes, which generate more data, which improves predictions even further.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Bridging the Skills Gap</h3>
              
              <p>
                However, technology alone is not enough. The success of any reliability program depends ultimately on the people who design, implement, and maintain it. This is why professional development and training are central to our mission at Asset Innovative Solutions.
              </p>

              <p>
                Over the past decade, I&apos;ve trained over 1,000 professionals across the GCC, Oman, and India in reliability engineering, predictive maintenance, and Industry 4.0 technologies. These professionals have gone on to implement programs that have saved their organizations millions of dollars while improving safety and environmental performance.
              </p>

              <p>
                But training must be more than just knowledge transfer. It must be practical, hands-on, and directly applicable to real-world challenges. This is why our training programs combine theoretical knowledge with practical exercises, case studies, and hands-on experience with the latest tools and technologies.
              </p>

              <p>
                Moreover, training must be ongoing. The pace of technological change in our field is accelerating, and professionals need continuous learning opportunities to stay current. This is why we&apos;ve developed comprehensive certification programs and ongoing professional development opportunities that help our clients build internal capabilities that can evolve with changing technologies and requirements.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">Sustainability as a Competitive Advantage</h3>
              
              <p>
                Perhaps the most significant shift I&apos;ve observed in my career is the growing recognition that sustainability and profitability are not opposing forces, but complementary objectives. Companies that excel in environmental performance often also excel in operational efficiency, safety, and long-term profitability.
              </p>

              <p>
                Predictive maintenance plays a crucial role in this convergence. By preventing equipment failures, we reduce waste, minimize environmental impacts, and extend asset life. By optimizing maintenance schedules, we reduce energy consumption and resource usage. And by improving reliability, we enable more efficient and sustainable operations.
              </p>

              <p>
                This is particularly important in the oil, gas, and petrochemical industries, where environmental performance is under increasing scrutiny. Companies that can demonstrate superior environmental performance through data-driven reliability programs will have significant competitive advantages in the years ahead.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">The Future of Industrial Operations</h3>
              
              <p>
                Looking ahead, I believe we are on the cusp of a new era in industrial operations—one characterized by unprecedented levels of automation, intelligence, and efficiency. The convergence of artificial intelligence, the Internet of Things, advanced analytics, and digital twin technologies will enable levels of operational excellence that were unimaginable just a few years ago.
              </p>

              <p>
                But this future will not be realized automatically. It requires vision, investment, and most importantly, skilled professionals who can bridge the gap between traditional industrial practices and cutting-edge technologies. It requires organizations that are willing to embrace change and invest in their people. And it requires partnerships between technology providers, training organizations, and industrial companies.
              </p>

              <p>
                This is the vision that drives Asset Innovative Solutions. We are not just a service provider; we are a partner in transformation. We work with our clients to develop comprehensive strategies that combine the latest technologies with proven methodologies, delivered by highly trained professionals who understand both the technical and business aspects of reliability engineering.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-6">A Call to Action</h3>
              
              <p>
                The challenges facing our industries are significant, but they are not insurmountable. With the right combination of technology, training, and vision, we can build industrial operations that are not just more efficient and profitable, but also more sustainable, safe, and resilient.
              </p>

              <p>
                The time for action is now. The technologies are mature. The methodologies are proven. The need is urgent. What we need is the vision and commitment to implement them at scale.
              </p>

              <p>
                I invite you to join us in this journey. Whether you are a senior executive looking to transform your organization&apos;s approach to reliability, a maintenance professional seeking to develop new skills, or a technology provider looking to make a meaningful impact in industrial operations, there is a role for you in the Reliability Revolution.
              </p>

              <p>
                Together, we can build industrial operations that are not just more efficient and profitable, but also more sustainable, safe, and resilient. We can create a future where equipment failures are rare, maintenance is optimized, and industrial operations contribute to rather than detract from environmental sustainability.
              </p>

              <p>
                The future of industrial operations is bright, but it will not happen by itself. It requires vision, investment, and action. I believe that with the right partners and the right approach, we can achieve extraordinary results.
              </p>

              <div className="bg-gradient-to-r from-electric-blue/10 to-teal-green/10 p-8 rounded-xl border-l-4 border-teal-green my-8">
                <p className="text-lg text-foreground font-medium">
                  I look forward to working with you to make this vision a reality. The future of industrial operations starts today, and it starts with us.
                </p>
              </div>

              <p className="text-xl font-semibold text-foreground mt-12">
                <strong>Sincerely,</strong>
              </p>
              
              {/* Signature */}
              <div className="mt-6 mb-4">
                <Image 
                  src="/abhay-signature.png" 
                  alt="Abhay Chandajkar Signature" 
                  width={200}
                  height={96}
                  className="h-24 w-auto -ml-32"
                />
              </div>
              
              <p className="text-xl font-semibold text-foreground">
                <strong>Abhay Chandajkar<br/>
                Founder & CEO<br/>
                Asset Innovative Solutions</strong>
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-teal-green" />
              <span className="text-sm font-medium text-white">Ready to Connect?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 hero-text">
            Partner with us to transform reliability into measurable value for your business
          </h2>

          <p className="text-xl text-white/90 mb-8 hero-text">
            Connect with Abhay and discover how three decades of expertise can transform your operations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-electric-blue text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-electric-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide" onClick={() => window.open('https://www.linkedin.com/in/abhay-chandajkar-238248b/', '_blank')}>
              <Linkedin className="w-4 h-4 mr-2" />
              CONNECT ON LINKEDIN
            </Button>
            <Button size="lg" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
              <Mail className="w-4 h-4 mr-2" />
              CONTACT THE FOUNDER
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurFounder