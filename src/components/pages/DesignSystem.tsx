'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle, AlertIcon } from '@/components/ui/alert'
import { CheckCircle, XCircle, AlertTriangle, Info, Zap, Shield, Users, Target } from 'lucide-react'

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-sans font-bold text-foreground mb-4">
            AIS Design System
          </h1>
          <p className="text-xl text-steel-gray dark:text-muted-foreground max-w-3xl mx-auto">
            A comprehensive design system built with modern typography, consistent color palettes, and accessible components.
          </p>
        </div>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8">Typography</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Display Font (Universal Sans → Inter)</CardTitle>
                <CardDescription>Used for headings and important text</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h1 className="text-4xl font-sans font-bold">Heading 1</h1>
                <h2 className="text-3xl font-sans font-bold">Heading 2</h2>
                <h3 className="text-2xl font-sans font-bold">Heading 3</h3>
                <h4 className="text-xl font-sans font-bold">Heading 4</h4>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Body Font (Universal Sans → Inter)</CardTitle>
                <CardDescription>Used for body text and UI elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-sans">Large body text - Lorem ipsum dolor sit amet</p>
                <p className="text-base font-sans">Regular body text - Lorem ipsum dolor sit amet</p>
                <p className="text-sm font-sans">Small body text - Lorem ipsum dolor sit amet</p>
                <p className="text-xs font-sans">Extra small text - Lorem ipsum dolor sit amet</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Electric Blue</p>
              <p className="text-xs text-steel-gray dark:text-muted-foreground">#2563EB</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-green rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Teal Green</p>
              <p className="text-xs text-steel-gray dark:text-muted-foreground">#14B8A6</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-navy rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Deep Navy</p>
              <p className="text-xs text-steel-gray dark:text-muted-foreground">#0A2540</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-charcoal rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Charcoal</p>
              <p className="text-xs text-steel-gray dark:text-muted-foreground">#1E293B</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-steel-gray rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Steel Gray</p>
              <p className="text-xs text-steel-gray dark:text-muted-foreground">#4A5568</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-light-gray rounded-lg mx-auto mb-2"></div>
              <p className="text-sm font-medium">Light Gray</p>
              <p className="text-xs text-steel-gray dark:text-muted-foreground">#F1F5F9</p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8">Buttons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different button styles for various use cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription>Different button sizes for various contexts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8">Alerts</h2>
          <div className="space-y-4">
            <Alert variant="success">
              <AlertIcon variant="success" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your operation completed successfully. All changes have been saved.
              </AlertDescription>
            </Alert>

            <Alert variant="error">
              <AlertIcon variant="error" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please check your input and try again.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertIcon variant="warning" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please review your settings before proceeding with this action.
              </AlertDescription>
            </Alert>

            <Alert variant="info">
              <AlertIcon variant="info" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                Here&apos;s some helpful information about your current status.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Reliability</CardTitle>
                <CardDescription>Comprehensive reliability engineering solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-steel-gray dark:text-muted-foreground">
                  Root Cause Analysis, RCM, and asset optimization strategies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-teal-green rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Predictive Maintenance</CardTitle>
                <CardDescription>AI/ML powered maintenance solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-steel-gray dark:text-muted-foreground">
                  Advanced algorithms and IoT sensors for failure prediction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-amber rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Training</CardTitle>
                <CardDescription>Professional certification programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-steel-gray dark:text-muted-foreground">
                  CMRP, SMRP, RCA, and RCM training with global credentials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Industry 4.0</CardTitle>
                <CardDescription>Digital transformation solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-steel-gray dark:text-muted-foreground">
                  IoT implementations and smart manufacturing technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Code Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8">Code Typography</h2>
          <Card>
            <CardHeader>
              <CardTitle>Geist Mono Font</CardTitle>
              <CardDescription>Used for code, technical content, and monospace text</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code className="font-mono text-sm">
{`// Example TypeScript code
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = async (id: string): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};`}
                </code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default DesignSystem
