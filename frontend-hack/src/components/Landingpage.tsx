'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { BarChart, LineChart, TreeGraph } from './Charts'
import { LockIcon, ShieldCheckIcon, UserIcon, LinkIcon, CreditCardIcon, DatabaseIcon } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">PharmaTrack</a>
          <ul className="flex space-x-4 text-sm">
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Home</a></li>
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Inventory Overview</a></li>
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Supply Chain Dashboard</a></li>
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Blockchain Integration</a></li>
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Payment Solutions</a></li>
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Security & Authentication</a></li>
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Reports</a></li>
            <li><a href="#" className="hover:underline hover:scale-1 duration-300 hover:text-zinc-300">Support</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Blockchain-Powered Drug Inventory & Supply Chain Tracking</h1>
          <p className="text-xl mb-8">Revolutionize your pharmaceutical operations with unparalleled security and transparency</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Get Started with Blockchain</Button>
        </div>
      </header>

      {/* Data Visualization Section */}
      <section className="py-16 bg-zinc-900 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Blockchain-Verified Data Visualization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className='bg-gray-200'>
              <CardHeader>
                <CardTitle>Blockchain-Verified Inventory Tree</CardTitle>
                <CardDescription>Interactive view of your drug inventory with blockchain verification</CardDescription>
              </CardHeader>
              <CardContent>
                <TreeGraph />
              </CardContent>
            </Card>
            <Card className='bg-gray-200'>
              <CardHeader>
                <CardTitle>Immutable Supply Chain Flow</CardTitle>
                <CardDescription>Track your supply chain with blockchain-backed data</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
            <Card className='bg-gray-200'>
              <CardHeader>
                <CardTitle>Blockchain Transaction Metrics</CardTitle>
                <CardDescription>Monitor key trends and blockchain transaction statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blockchain Integration Section */}
      <section className="py-16 bg-zinc-900 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center ">Blockchainnn Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <LinkIcon className="inline-block mr-2" />
                  Decentralized Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our system leverages blockchain technology to create an immutable, decentralized ledger of all inventory and supply chain transactions, ensuring unparalleled transparency and traceability.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <DatabaseIcon className="inline-block mr-2" />
                  Hybrid Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Benefit from a hybrid system that combines the security of blockchain with the efficiency of centralized databases, offering the best of both worlds for your pharmaceutical operations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Solutions Section */}
      <section className="py-16 bg-zinc-900 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Blockchain Payment Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className=''>
              <CardHeader>
                <CardTitle>
                  <CreditCardIcon className="inline-block mr-2" />
                  Crypto Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Seamlessly integrate cryptocurrency payments into your supply chain, enabling faster, more secure transactions across borders.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <LinkIcon className="inline-block mr-2" />
                  Smart Contracts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automate payments and enforce agreements with blockchain-based smart contracts, reducing overhead and increasing efficiency in your payment processes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 bg-zinc-900 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Advanced Blockchain Security & Authentication</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <LockIcon className="inline-block mr-2" />
                  Blockchain Encryption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Benefit from the unparalleled security of blockchain encryption, ensuring your data remains tamper-proof and verifiable.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <UserIcon className="inline-block mr-2" />
                  Decentralized Identity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Implement blockchain-based decentralized identity solutions for enhanced user authentication and privacy.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <ShieldCheckIcon className="inline-block mr-2" />
                  Immutable Audit Trails
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Maintain comprehensive, tamper-proof audit logs on the blockchain, ensuring compliance and facilitating easier audits.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="mr-4">Secure Login</Button>
            <Button variant="outline">Register with Blockchain ID</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-zinc-900 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Blockchain-Enhanced Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Immutable Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Track your inventory and supply chain with blockchain-verified data, ensuring accuracy and preventing fraud.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Leverage blockchain data and advanced algorithms to predict demand and optimize your inventory levels.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Easily demonstrate compliance with immutable blockchain records, simplifying the audit process.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-16 bg-zinc-900 px-4 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Need Blockchain Support?</h2>
          <p className="text-xl mb-8">Our blockchain experts are available 24/7 to assist you with any questions or issues.</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Contact Blockchain Support</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 BlockPharm. All rights reserved. Powered by Blockchain Technology.</p>
        </div>
      </footer>
    </div>
  )
}

// Placeholder components for charts
const TreeGraph = () => (
  <div className="h-64 bg-muted flex items-center justify-center">
    <span className="text-muted-foreground">Interactive Blockchain-Verified Tree Graph</span>
  </div>
)

const LineChart = () => (
  <div className="h-64 bg-muted flex items-center justify-center">
    <span className="text-muted-foreground">Immutable Supply Chain Flow Chart</span>
  </div>
)

const BarChart = () => (
  <div className="h-64 bg-muted flex items-center justify-center">
    <span className="text-muted-foreground">Blockchain Transaction Metrics Chart</span>
  </div>
)