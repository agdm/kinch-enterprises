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
      title: "Commercial Boiler & HVAC Retrofit",
      location: "Stamford, CT",
      category: "Mechanical (MEP)",
      year: "2024",
      description:
        "This project involved a comprehensive mechanical system overhaul within a mission-critical corporate environment. Our team managed the full decommissioning of legacy boiler units and the subsequent installation of high-efficiency, multi-stage heating and cooling systems designed for maximum load-demand response. Beyond the physical hardware, a significant portion of the scope focused on precision commissioning: utilizing digital manifold gauge sets for real-time pressure diagnostics and integrating advanced control board logic into the existing Building Management System (BMS). By optimizing the signal calibration between the central plant and terminal units, we successfully achieved a stabilized thermal envelope, significantly reducing seasonal energy consumption while ensuring 24/7 climate reliability for the facility’s sensitive infrastructure..",
      images: ["/images/hvac_001/18902.jpg", "/images/hvac_001/18903.jpg", "/images/hvac_001/18904.jpg"],
      features: ["System Pressure Testing", "Digital Control Integration", "BMS Signal Calibration", "Energy Load Optimization"],
      status: "Completed",
    },
    {
      title: "Master Bath Remodel",
      location: "Stamford, CT",
      category: "Residential Renovation",
      year: "2023",
      description:
        "This elegant bathroom transformation showcases the level of craftsmanship and project coordination that defines our construction management services. From the seamless marble-style tile installation to the frameless glass shower and modern gold-accent fixtures, every detail was carefully planned, sourced, and executed to deliver a high-end, spa-like finish.\n\nAt Kinch Enterprises LLC, we manage every phase of the project—from design coordination and material selection to skilled trade scheduling and quality control—ensuring your renovation is completed efficiently, on budget, and built to last.",
      images: ["/images/bathroom_001/img_001.jpeg", "/images/bathroom_001/img_002.jpeg", "/images/bathroom_001/img_003.jpeg"],
      features: ["Custom Glass Enclosure", "Large Format Tile Work", "High-End Gold Fixtures", "Integrated Shower Niche"],
      status: "Completed",
    },
    {
      title: "Contemporary Bath Refresh",
      location: "Montclair, NJ",
      category: "Residential Interior",
      year: "2022",
      description:
        "This stunning bathroom renovation blends elegant marble tile, a custom navy vanity, and warm gold fixtures to create a clean, modern space that feels both luxurious and functional. The frameless glass shower and precision tile work highlight the quality and attention to detail behind every project we manage.\n\nAt Kinch Enterprises LLC, our construction management ensures every phase—from planning to final finishes—is coordinated, efficient, and built to the highest standards.",
      images: ["/images/bathroom_002/img_001.jpeg", "/images/bathroom_002/img_002.jpeg"],
      features: ["Navy Shaker-Style Vanity", "Gold Hardware Accents", "Floating Wood Shelving", "Space-Optimized Layout"],
      status: "Completed",
    },
    {
      title: "Modern Shaker Kitchen Remodel",
      location: "New Haven, CT",
      category: "Residential Remodeling",
      year: "2024",
      description:
        "Modern Design, Masterfully Managed Experience the perfect blend of warmth and utility. We coordinate every trade—from stone fabrication to high-end appliance integration—to create cohesive, light-filled spaces that define the modern home.",
      images: ["/images/kitchen_001/floor_plan.png", "/images/kitchen_001/img_001.jpeg", "/images/kitchen_001/img_002.jpeg", "/images/kitchen_001/img_003.jpg"],
      features: ["Custom Shaker Cabinetry", "Open Shelving Accents", "Quartz Countertop Installation", "Subway Tile Backsplash"],
      status: "In Progress",
    },
    {
      title: "Contemporary Galley Refresh",
      location: "Hartford, CT",
      category: "Kitchen & Bath Renovation",
      year: "2023",
      description:
        "Seamless Coordination, Stunning Results Large-scale kitchen renovations require expert orchestration. We oversee every trade—ensuring your granite countertops, custom cabinetry, and lighting fixtures are integrated with surgical precision for a cohesive, upscale look.",
      images: ["/images/kitchen_002/img_001.jpeg", "/images/kitchen_002/img_002.jpeg", "/images/kitchen_002/img_003.jpeg"],
      features: ["Marble-Pattern Porcelain Floor", "Integrated Appliance Suite", "Under-Cabinet Task Lighting", "Soft-Close Storage Solutions"],
      status: "Completed",
    },
    {
      title: "Urban Living Room Restoration",
      location: "New York, NY",
      category: "Interior Finish Carpentry",
      year: "2024",
      description:
        "Where Quality Construction Meets Comfort A beautiful room starts with expert construction management. We oversee the critical details—recessed lighting, trim carpentry, and open-concept floor plans—ensuring your space is as durable as it is inviting.",
      images: ["/images/living_room_001/img_001.jpeg", "/images/living_room_001/img_002.jpeg"],
      features: ["Restored Oak Hardwoods", "Custom Crown & Base Molding", "Recessed Lighting Retrofit", "Open Concept Transition"],
      status: "In Progress",
    },
    {
      title: "New Build",
      location: "Manchester, CT",
      category: "Ground-Up Residential",
      year: "2024",
      description:
        "Managing a full-scale residential build requires a master hand. We oversee the entire lifecycle of the project—from the initial site excavation and reinforced concrete foundation to the structural framing and final exterior finishes. By managing every trade and phase in-house, we ensure the structural integrity of the 'bones' matches the high-end aesthetic of the final delivery, resulting in a classic New England Colonial that is as durable as it is inviting.",
      images: ["/images/new_build_001/img_001.jpeg", "/images/new_build_001/img_002.jpeg", "/images/new_build_001/img_003.jpeg", "/images/new_build_001/img_004.jpeg", "/images/new_build_001/img_005.jpeg", "/images/new_build_001/img_006.jpeg", "/images/new_build_001/img_007.jpeg", "/images/new_build_001/img_008.jpeg", "/images/new_build_001/img_009.jpeg"],
      features: ["Phase I: Site & Foundation", "Phase II: Structural Envelope", "Phase III: Architectural Detail", "Phase IV: Interior Integration"],
      status: "In Progress",
    },
  ]

  const categories = [
    "All",
    "Mechanical (MEP)",
    "Residential Renovation",
    "Kitchen & Bath Renovation",
    "Residential Remodeling",
    "Residential Interior",
    "Interior Finish Carpentry",
    "Ground-Up Residential",
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
                  <ImageSlideshow
                    images={project.images}
                    imageClassName="group-hover:scale-105 transition-transform duration-300"
                  />
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
                      <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{project.description}</p>
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
