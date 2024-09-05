'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About SecureChain</h3>
            <p className="text-sm text-muted-foreground">
              SecureChain is revolutionizing supply chain management with blockchain technology, 
              providing unparalleled transparency, security, and efficiency.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="hover:underline">Features</Link>
              </li>
              <li>
                <Link href="#benefits" className="hover:underline">Benefits</Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:underline">Testimonials</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Pricing</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Cookie Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">GDPR Compliance</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-[200px]" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2023 SecureChain Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}