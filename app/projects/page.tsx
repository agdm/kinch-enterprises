import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ImageSlideshow } from "@/components/image-slideshow"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Commercial HVAC Installation",
      location: "Stamford, Connecticut",
      category: "General Construction",
      year: "2024",
      description:
        "High-efficiency heating and cooling system installation for large-scale commercial facilities, ensuring optimal climate control and energy efficiency.",
      images: ["/images/hvac/18902.jpg", "/images/hvac/18903.jpg", "/images/hvac/18904.jpg"],
      features: ["Industrial HVAC Units", "Energy Management System", "Custom Ductwork", "24/7 Monitoring"],
      status: "Completed",
    },
    {
      title: "TechCorp Headquarters Renovation",
      location: "Stamford, Connecticut",
      category: "General Construction",
      year: "2023",
      description:
        "Complete renovation of 100,000 sq ft corporate facility with focus on energy efficiency and modern workplace design.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["100,000 sq ft Renovation", "Energy Efficient Systems", "Modern Workspace Design", "HVAC Upgrade"],
      status: "Completed",
    },
    {
      title: "Riverside Community Center",
      location: "Newark, New Jersey",
      category: "Project Management",
      year: "2022",
      description:
        "New 25,000 sq ft community center serving underserved populations with recreational and educational facilities.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["25,000 sq ft Facility", "Multi-Purpose Spaces", "Educational Facilities", "Recreational Areas"],
      status: "Completed",
    },
    {
      title: "Luxury Residential Complex",
      location: "Miami, Florida",
      category: "Real Estate Development",
      year: "2024",
      description:
        "High-end residential development featuring 75 luxury units with waterfront views and premium amenities.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["75 Luxury Units", "Waterfront Location", "Premium Amenities", "Sustainable Features"],
      status: "In Progress",
    },
    {
      title: "Historic Building Restoration",
      location: "New York, New York",
      category: "Remodeling & Renovation",
      year: "2023",
      description:
        "Careful restoration of a 1920s commercial building while preserving historical character and adding modern functionality.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Historic Preservation", "Modern Upgrades", "Code Compliance", "Character Retention"],
      status: "Completed",
    },
    {
      title: "Green Office Complex",
      location: "Hartford, Connecticut",
      category: "Custom Design",
      year: "2024",
      description:
        "Innovative office complex designed with cutting-edge sustainable technologies and energy-efficient systems.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Sustainable Design", "Energy Efficient", "Modern Architecture", "Green Technologies"],
      status: "In Progress",
    },
  ]

  const categories = [
    "All",
    "Real Estate Development",
    "General Construction",
    "Project Management",
    "Custom Design",
    "Remodeling & Renovation",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Projects That Transform Communities</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our portfolio of successful projects across real estate development, construction, and renovation
              that demonstrate our commitment to excellence and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  {"images" in project ? (
                    <ImageSlideshow
                      images={project.images as string[]}
                      imageClassName="group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Image
                      src={(project as any).image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <Badge className="bg-orange-500">{project.category}</Badge>
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-slate-500 space-x-4 mb-3">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-900 text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <div className="pt-4 border-t">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0"
                      >
                        View Project Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Impact by the Numbers</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Projects Completed",
                description: "Successful projects across multiple sectors",
              },
              { number: "2M+", label: "Square Feet Built", description: "Total construction and development area" },
              { number: "5", label: "States Served", description: "NY, NJ, CT, GA, FL coverage area" },
              { number: "20+", label: "Years Experience", description: "Combined leadership expertise" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</h3>
                <p className="text-sm text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with the same excellence and attention to detail shown in
            our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              asChild
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
