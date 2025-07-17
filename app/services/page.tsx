import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Hammer, ClipboardList, Palette, Wind, Home, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Real Estate Development",
      description:
        "Comprehensive development solutions from concept to completion, focusing on sustainable and economically equitable projects that transform communities.",
      icon: Building2,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Site Analysis & Acquisition",
        "Feasibility Studies",
        "Zoning & Permitting",
        "Project Financing",
        "Community Engagement",
      ],
      href: "/services/real-estate-development",
    },
    {
      title: "General Construction",
      description:
        "Quality construction services for commercial and residential projects with unwavering commitment to craftsmanship and timely delivery.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Commercial Construction",
        "Residential Building",
        "Infrastructure Development",
        "Quality Control",
        "Safety Management",
      ],
      href: "/services/general-construction",
    },
    {
      title: "Project Management",
      description:
        "Expert project management consulting to ensure efficient execution and successful outcomes for complex construction and development projects.",
      icon: ClipboardList,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Project Planning",
        "Resource Management",
        "Timeline Coordination",
        "Risk Assessment",
        "Quality Assurance",
      ],
      href: "/services/project-management",
    },
    {
      title: "Custom Design",
      description:
        "Innovative design solutions that create bespoke spaces tailored to client needs while incorporating sustainable and forward-thinking principles.",
      icon: Palette,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Architectural Design",
        "Interior Planning",
        "Space Optimization",
        "Sustainable Design",
        "Client Collaboration",
      ],
      href: "/services/custom-design",
    },
    {
      title: "HVAC Design",
      description:
        "Specialized HVAC system design with focus on energy efficiency, optimal performance, and environmental sustainability for all project types.",
      icon: Wind,
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "System Design",
        "Energy Efficiency",
        "Load Calculations",
        "Equipment Selection",
        "Maintenance Planning",
      ],
      href: "/services/hvac-design",
    },
    {
      title: "Remodeling & Renovation",
      description:
        "Transform existing spaces with comprehensive remodeling and renovation services that enhance functionality, aesthetics, and value.",
      icon: Home,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Space Renovation", "Historic Restoration", "Modernization", "Code Compliance", "Value Enhancement"],
      href: "/services/remodeling",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive Solutions for Every Project</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From initial concept to final completion, Kinch Enterprises provides end-to-end services for real estate
              development, construction, and project management across multiple sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardContent
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                          <service.icon className="h-8 w-8 text-orange-500" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{service.title}</h2>
                      </div>

                      <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>

                      <div className="space-y-3">
                        <h3 className="font-semibold text-slate-900">Key Services Include:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-sm text-slate-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                          <Link href={service.href}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time, within budget, and to the
              highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your vision, requirements, and project goals.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed project planning, design development, and resource allocation.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional implementation with regular progress updates and quality control.",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspection, handover, and ongoing support for your project.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our comprehensive services can bring your vision to life.
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
              <Link href="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
