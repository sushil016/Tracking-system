'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Lock,  Users, Zap, Clock, Bell, Shield, Layers, BarChart, FileText } from "lucide-react"
import Link from "next/link"
import { Footer } from "./footer"
import Navbar from "./Navbar"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Delivering the Future of Supply Chain with Precision, Security, and Transparency
                </h1>
                <p className="mx-auto max-w-[700px] text-lg sm:text-xl">
                  Experience seamless delivery, real-time tracking, and secure payments—all in one decentralized platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-gray-800">
                  <Link href="#get-started">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="#request-demo">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="cont  ainer px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose Our Secure Delivery and Tracking System?
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <Link href={"/realtimetracking"}><CardTitle>Real-Time Tracking</CardTitle></Link>
                </CardHeader>
                <CardContent>
                  Monitor every step of your product's journey with real-time updates. From production to doorstep delivery, track its location and status at any time.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Right Time, Right Place</CardTitle>
                </CardHeader>
                <CardContent>
                  Ensure accurate, on-time deliveries with geolocation tracking. Our system verifies the recipient's identity and delivery location to guarantee the right product reaches the right person.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Secure Payments via Blockchain</CardTitle>
                </CardHeader>
                <CardContent>
                  Enjoy peace of mind with secure, automated payments. Smart contracts ensure funds are only transferred once delivery is confirmed, ensuring trust for both buyers and sellers.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Layers className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Decentralized and Transparent</CardTitle>
                </CardHeader>
                <CardContent>
                  All data is securely stored on a decentralized blockchain, ensuring transparency, tamper-proof records, and trust among all participants.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Identity Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  Advanced identity verification ensures that products are only handed over to the authorized recipient, reducing risks of fraud or misdelivery.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="additional-features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              More Than Just Delivery: A Comprehensive Supply Chain Solution
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              <Card>
                <CardHeader>
                  <BarChart className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Inventory Management Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  Our platform integrates seamlessly with your existing inventory management system, providing real-time updates on stock levels and automated restocking based on demand.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Smart Contracts for Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  Reduce manual processes with smart contracts that automate inventory replenishment, payment triggers, and supplier agreements.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Bell className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Instant Alerts & Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  Receive instant notifications at every stage of the process—from shipment dispatch to delivery, ensuring you stay updated.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  Protect sensitive data with end-to-end encryption, securing transactions and communications throughout the entire supply chain.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Auditable Records</CardTitle>
                </CardHeader>
                <CardContent>
                  All actions and transactions are recorded on the blockchain, providing an immutable audit trail for regulatory compliance and dispute resolution.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Layers className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Cross-Platform Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  Access our platform from any device, including desktops, smartphones, and tablets, for seamless operations on the go.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Revolutionizing Your Supply Chain Efficiency
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Reduce Costs & Errors</CardTitle>
                </CardHeader>
                <CardContent>
                  Automation reduces manual intervention, lowering administrative costs and minimizing errors in payments, inventory, and tracking.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Enhance Trust & Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  A decentralized, transparent platform fosters better collaboration between suppliers, manufacturers, logistics providers, and customers.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Scalability for Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  Designed to scale with your business, the platform can handle increasing transaction volumes, multiple stakeholders, and global operations.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Faster Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent>
                  Transparent records on the blockchain provide verifiable proof for easy and fast resolution of disputes.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience the Future of Supply Chain?
              </h2>
              <p className="mx-auto max-w-[700px] text-lg sm:text-xl text-muted-foreground">
                Join the revolution in supply chain management. Get started today or request a personalized demo.
              </p>
              <div className="space-x-4">
                <Button size="lg">Get Started Today</Button>
                <Button size="lg" variant="outline">Request a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}