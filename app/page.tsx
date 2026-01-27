import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      title: "Real Estate Development",
      description:
        "Comprehensive development solutions from concept to completion, focusing on sustainable and economically equitable projects.",
      icon: Building2,
      href: "/services/real-estate-development",
    },
    {
      title: "General Construction",
      description:
        "Quality construction services for commercial and residential projects with commitment to craftsmanship and timely delivery.",
      icon: Users,
      href: "/services/general-construction",
    },
    {
      title: "Project Management",
      description:
        "Expert project management consulting to ensure efficient execution and successful outcomes for complex projects.",
      icon: Award,
      href: "/services/project-management",
    },
  ]

  const featuredProjects = [
    {
      title: "Commercial HVAC Installation",
      description: "High-efficiency heating and cooling system installation for large-scale commercial facilities",
      image: "/images/hvac/18902.jpg",
      category: "General Construction",
    },
    {
      title: "Corporate Headquarters Renovation",
      description: "Complete renovation of 100,000 sq ft corporate facility with sustainable design",
      image: "/placeholder.svg?height=300&width=400",
      category: "General Construction",
    },
    {
      title: "Community Center Project",
      description: "New 25,000 sq ft community center serving underserved populations",
      image: "/placeholder.svg?height=300&width=400",
      category: "Project Management",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/floorplan.png"
            alt="Architectural floor plan"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/50 to-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                  Redefining the Built Environment
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Building Tomorrow&apos;s
                  <span className="text-orange-400"> Communities</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Kinch Enterprises delivers exceptional real estate development, construction, and project management
                  services across the Northeast and Southeast, committed to quality craftsmanship and sustainable
                  solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  asChild
                >
                  <Link href="/projects">View Our Portfolio</Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>Serving: New York • New Jersey • Connecticut • Georgia • Florida</span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <Image
                src="/images/ke-white-logo.png"
                alt="Kinch Enterprises Logo"
                width={400}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive solutions for real estate development, construction,
              and project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <service.icon className="h-12 w-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our portfolio of successful projects that demonstrate our commitment to excellence and
              innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/projects">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose Kinch Enterprises</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Quality Craftsmanship</h3>
              <p className="text-slate-600">Commitment to excellence in every project detail</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Experienced Leadership</h3>
              <p className="text-slate-600">Decades of combined expertise in development and construction</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Sustainable Solutions</h3>
              <p className="text-slate-600">Forward-thinking design with environmental responsibility</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Economic Equity</h3>
              <p className="text-slate-600">Committed to community transformation and inclusive development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how Kinch Enterprises can bring your vision to life with our comprehensive
            development and construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              asChild
            >
              <Link href="tel:404-840-5723">
                <Phone className="mr-2 h-4 w-4" />
                Call (860) 449-0042
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
