import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, Target, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description:
        "We maintain the highest standards in every project, ensuring exceptional results that stand the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Forward-Thinking Design",
      description:
        "Innovation drives our approach, incorporating cutting-edge solutions and sustainable practices in all our work.",
    },
    {
      icon: Heart,
      title: "Economic Equity",
      description:
        "Committed to creating opportunities and transforming communities through inclusive development practices.",
    },
    {
      icon: Target,
      title: "Sustainable Solutions",
      description: "Environmental responsibility is at the core of our operations, building for a better tomorrow.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 mb-6">
              About Kinch Enterprises
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Redefining the Built Environment</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Founded on principles of excellence, sustainability, and community transformation, Kinch Enterprises
              brings together decades of expertise in real estate development, construction, and project management.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To deliver exceptional real estate development, construction, and project management services that
                    create lasting value for our clients and communities while maintaining the highest standards of
                    quality, sustainability, and economic equity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be the leading force in transforming communities through innovative development and construction
                    solutions that serve both for-profit and non-profit sectors, with a particular focus on underserved
                    populations and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Kinch Enterprises team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the experienced leaders driving innovation and excellence at Kinch Enterprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Daniel Kinch */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Daniel Kinch"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Daniel Kinch</h3>
                      <p className="text-orange-500 font-medium">Co-Founder & CEO</p>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Serial entrepreneur with extensive experience in both for-profit and non-profit sectors. Daniel&apos;s
                      innovative program creation and focus on underserved populations has driven transformative
                      community development initiatives.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          Obama Administration
                        </Badge>
                        <span className="text-slate-500">Job Training Program</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          Expertise
                        </Badge>
                        <span className="text-slate-500">Brownfield Development</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          Focus
                        </Badge>
                        <span className="text-slate-500">Economic Equity</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Uriel Kinch */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Uriel Kinch"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Uriel Kinch</h3>
                      <p className="text-orange-500 font-medium">Managing Partner & Chief Engineer</p>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Nearly two decades of experience in real estate development, construction, and engineering. Former
                      Chief Engineer at Google&apos;s NYC Campus, with expertise in large-scale commercial properties and
                      sustainable solutions.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          Google NYC
                        </Badge>
                        <span className="text-slate-500">Chief Engineer</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          Expertise
                        </Badge>
                        <span className="text-slate-500">HVAC & Energy Systems</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          Focus
                        </Badge>
                        <span className="text-slate-500">Sustainable Design</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <Building2 className="h-12 w-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-slate-900">Community First</h3>
                <p className="text-slate-600">
                  Every project we undertake is designed to strengthen and transform communities, creating lasting
                  positive impact.
                </p>
              </div>
              <div className="space-y-4">
                <Users className="h-12 w-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-slate-900">Collaborative Approach</h3>
                <p className="text-slate-600">
                  We work closely with clients, partners, and communities to ensure every project meets and exceeds
                  expectations.
                </p>
              </div>
              <div className="space-y-4">
                <Award className="h-12 w-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-slate-900">Excellence Driven</h3>
                <p className="text-slate-600">
                  Our commitment to quality and innovation ensures that every project represents the highest standards
                  of craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover how our experience, values, and commitment to excellence can bring your next project to life.
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
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
