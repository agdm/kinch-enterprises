import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/ke-white-logo.png"
              alt="Kinch Enterprises"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-slate-300 text-sm leading-relaxed">
              Redefining the built environment through quality craftsmanship, sustainable solutions, and community
              transformation.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://www.linkedin.com/company/kinch-enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/kinchenterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Real Estate Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  General Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Custom Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  HVAC Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Remodeling & Renovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>61 Hickory Hill Road</p>
                  <p>Simsbury, Connecticut</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:404-840-5723" className="hover:text-white transition-colors">
                  (404) 840-5723
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:urielkinch@gmail.com" className="hover:text-white transition-colors">
                  urielkinch@gmail.com
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-slate-400 mb-2">Service Areas:</p>
              <p className="text-sm text-slate-300">NY • NJ • CT • GA • FL</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Kinch Enterprises. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2">
            Website by <a href="https://www.thepeopleservice.com" className="text-white hover:bg-orange-500 py-1 px-1" target="_blank" rel="noopener noreferrer">The People Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
