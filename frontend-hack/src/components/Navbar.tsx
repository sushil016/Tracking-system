import { Truck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Truck className="h-6 w-6 " />
          <span className="ml-2 text-lg font-bold">SecureChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#additional-features">
            Additional Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
        </nav>
      </header>
  )
}

export default Navbar
